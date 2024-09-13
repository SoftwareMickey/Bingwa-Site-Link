import { configureStore, createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: { isModalOpen: false, amount : 0},
    reducers: {
        openModalHandler: (state) => {
            state.isModalOpen = true
        },
        closeModalHandler: (state) => {
            state.isModalOpen = false;
        },
        addPurchaseHandler: (state, action) => {
            const purchaseMade = action.payload.price;
            
            // * Check if there is any offer in the purchases
            const isThereAnyPurchaseInProgress = state.amount > 0;

            if(isThereAnyPurchaseInProgress){
                console.log('There is purchase in progress...please wait for it to end...!')
                return
            }else{
                console.log('There is no purchase in progres...you can purchase offer...!')
                console.log(`Purchase made: ${purchaseMade['price']}`)
                
                state.amount += purchaseMade;
            }
            
        }
    }
})

const store = configureStore({
    reducer : { modal : modalSlice.reducer }
})

export const modalActions = modalSlice.actions;
export default store