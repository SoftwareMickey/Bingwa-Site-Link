import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store";
import { useNavigate } from "react-router";

export default function SelfPurchase(){

    // * Retrieve the amount for purchase that is being stored on redux state
    const amount = useSelector(state => state.modal.amount)

    const dispatch = useDispatch();
    const navigator = useNavigate();


    // Todo --> ---------------------------- USESTATE HANDLERS ------------------------------------- <--   //


    const [userChoice, setUserChoice] = useState('self');
    const [dynamicHeight, setDynamicHeight] = useState(25);

    const [myNumber, setMyNumber] = useState('')
    const [numberIsValid, setNumberIsValid] = useState(false)

    const [otherNumber, setOtherNumber] = useState('')
    const [otherNumberIsValid, setOtherNumberIsValid] = useState(false);

    const [formIsValid, setFormIsValid] = useState(false)

    // * Handle number validity
    const [isError, setIsError] = useState(false)
    const [otherNumberError, setOtherNumberError] = useState(false)


    // * ------------------------------------ FUNCTION HANDLERS ---------------------------------------    * //

    function userChoiceHandler(e){
        setUserChoice(e.target.value)
        
        if(e.target.value === 'other'){
            setDynamicHeight(60)
        }else{
            setDynamicHeight(25)
        }
    }

    function closeModalHandler(){
        dispatch(modalActions.closeModalHandler())
        navigator('/')
    }
    
    function myNumberHandler(e){
        console.log(e.target.value)
        if(e.target.value.trim().length > 9){

            // Todo : Regular expression to test whether the number starts with 07 or +254
            const isValid = /^(07\d{0,8}|(\+254\d{0,9}))$/.test(e.target.value);

            if(isValid){
                setNumberIsValid(true)
                console.log('The number provided is safaricom number')
                setIsError(false)
            }else{
                console.log('The number provided do not start with 07 or +254')
                setIsError(true)
            }
        }else if(e.target.value === ''){
            setIsError(false)
            console.log('Value is empty')
        }
        
        setMyNumber(e.target.value)
    }

    function otherNumberHandler(e){
        if(e.target.value.trim().length > 9){
        
            // Todo : Regular expression to test whether the number starts with 07 or +254
            const isValid = /^(07\d{0,8}|(\+254\d{0,9}))$/.test(e.target.value);

            if(isValid){
                setOtherNumberIsValid(true)
                console.log('The number provided is safaricom number')
                setOtherNumberError(false)
            }else{
                console.log('The number provided do not start with 07 or +254')
                setOtherNumberError(true)
            }
            console.log('Valid' + otherNumberIsValid)
        }else if(e.target.value === ''){
            setOtherNumberError(false)
            console.log('Value is empty')
        }
        
        setOtherNumber(e.target.value)
    }


    // Todo -> ------------------------------------ FORM VALIDITITY CHECK ---------------------------- <-      //

    useEffect(() => {
        if(numberIsValid && (userChoice === 'self')){
            console.log(numberIsValid)
            setFormIsValid(true)
        }else if(numberIsValid && otherNumberIsValid && (userChoice === 'other')){
            console.log(`Form is valid: ${formIsValid}`)
            setFormIsValid(true)
        }
    }, [numberIsValid, userChoice, otherNumberIsValid, formIsValid])


    // Todo: -> --------------------------- SUBMISSION TO BACKEND ----------------------------- // 

    function purchaseSubmissionToDatabase(e){
        e.preventDefault();

        if(formIsValid && (userChoice === 'self')){
            const data = {
                'myNumber' : myNumber,
                'amount' : amount
            }
            console.log(`Number to be sent to database: ${data.myNumber}`)
            console.log(`Amount to be sent to database: ${data.amount}`)

            // Todo -> Clear input field
            setMyNumber('')

        }else if(formIsValid && (userChoice === 'other')){
            const data = {
                'amount': amount,
                'myNumber' : myNumber,
                'otherNumber': otherNumber
            }

            console.log(`My Number to be sent to the database: ${data.myNumber}`)
            console.log(`Other Number to be sent to the database: ${data.otherNumber}`)
            console.log(`Amount to be sent to the database: ${data.amount}`)

            // Todo -> Clear all the field
            setMyNumber('')
            setOtherNumber('')
        }
        else{
            console.log('Form is not valid and purchase cannot be made...!')
        }
    }


    // * -------------------------------------------  REACT FORM --------------------------------------------- * //

    return <form className={`h-[${dynamicHeight}vh]`} onSubmit={purchaseSubmissionToDatabase}>
        <div className="flex justify-end">
            <IoClose className="hover:cursor-pointer" onClick={closeModalHandler}/>
        </div>
        <div className="mt-14 flex justify-between">

            <div className="flex">
                <input
                    checked = {userChoice === 'self'}
                    type='radio'
                    className="bg-black"
                    value='self'
                    onChange={userChoiceHandler}
                />
                <p className="text-[13px] ml-4 font-semibold">Buy for my number</p>
            </div>

            <div className="flex">
                <input
                    checked = {userChoice === 'other'}
                    type='radio'
                    className="bg-black"
                    value='other'
                    onChange={userChoiceHandler}
                />
                <p className="text-[13px] ml-4 font-semibold">Buy for other number</p>
            </div>

        </div>


        { userChoice === 'other' && <div className="mt-8">
            <p className="font-semibold text-[13px]">Number to receive offer</p>
           <p className="text-[12px] text-slate-500 mt-3">Make sure this is your M-Pesa number</p>
        </div>}

        {userChoice === 'other' && <div className="w-full">
            <input
                value={otherNumber}
                onChange={otherNumberHandler}
                type="text"
                className="bg-white px-4 py-[8px] rounded w-full mt-4 text-slate-600 text-[13px]"
                placeholder={`${userChoice === 'self'? 'M-Pesa Number' : 'Phone Number'}`}
            />
            {userChoice === 'other' && otherNumberError && <p className="font-semibold text-[12px] text-red-600 mt-4">Provide a valid safaricom number</p>}
            {/* {userChoice === 'other' && !otherNumberError && otherNumber.length > 9 && <p className="font-semibold text-[12px] text-green-500 mt-4">Verified</p>} */}
        </div>}

       {<>
            <div className="mt-8">
                {userChoice === 'other' && <p className="font-semibold text-[13px]">Number to make payment</p>}
                {userChoice === 'self' && <p className="font-semibold text-[13px]">Number to receive offer</p>}
                <p className="text-[12px] text-slate-500 mt-3">Make sure this is your M-Pesa number</p>
            </div>

            <div className="w-full">
                <input
                    value={myNumber}
                    onChange={myNumberHandler}
                    type="text"
                    className="bg-white px-4 py-[8px] rounded w-full mt-4 text-slate-600 text-[13px]"
                    placeholder="M-Pesa Number"
                />
            </div>

            {userChoice === 'self' && isError && <p className="font-semibold text-[12px] text-red-600 mt-4">Provide a valid safaricom number</p>}
            {userChoice === 'other' && isError && <p className="font-semibold text-[12px] text-red-600 mt-4">Provide a valid safaricom number</p>}
        </>}
        

        <div className="flex justify-end mt-8">
            <button className="bg-blue-950 text-white text-[13px] px-4 py-2 rounded-full font-semibold">Confirm Purchase</button>
        </div>
    </form>
}