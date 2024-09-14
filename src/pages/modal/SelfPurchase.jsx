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

    const [formIsValid, setFormIsValid] = useState(false);

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
                setNumberIsValid(false)
            }
        }else if(e.target.value === ''){
            setIsError(false)
            setNumberIsValid(false)
            console.log('Value is empty')
        }else if(e.target.value.trim().length < 10){
            setNumberIsValid(false)
            console.log(`Number is less than 10`)
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
                setOtherNumberIsValid(false)
            }
            console.log('Valid' + otherNumberIsValid)
        }else if(e.target.value === ''){
            setOtherNumberError(false)
            setOtherNumberIsValid(false)
            console.log('Value is empty')
        }else if(e.target.value.trim().length < 10){
            setOtherNumberIsValid(false)
            console.log(`Number is less than 10`)
        }
        
        setOtherNumber(e.target.value)
    }


    // Todo -> ------------------------------------ FORM VALIDITITY CHECK ---------------------------- <-      //

    useEffect(() => {
        if(numberIsValid && (userChoice === 'self')){
            console.log(`Number is valid: ${numberIsValid}`)
            console.log(`User Form is valid: ${formIsValid}`)
            setFormIsValid(true)
        }else if(numberIsValid && otherNumberIsValid && (userChoice === 'other')){
            console.log(`Form is valid: ${formIsValid}`)
            setFormIsValid(true)
        }

        return () => {
            // * Clean up processs
            setFormIsValid(false)
        }
    }, [numberIsValid, userChoice, otherNumberIsValid, formIsValid])


    // Todo: -> --------------------------- SUBMISSION TO BACKEND ----------------------------- // 

    function purchaseSubmissionToDatabase(e){
        e.preventDefault();

        if(formIsValid && (userChoice === 'self')){
            console.log(`Form is valid: ${formIsValid}`)
            const data = {
                'myNumber' : myNumber,
                'amount' : amount
            }
            console.log(`Number to be sent to database: ${data.myNumber}`)
            console.log(`Amount to be sent to database: ${data.amount}`)

            // Todo -> Clear input field
            setMyNumber('')
            setIsError(false)
            setNumberIsValid(false)

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
            setIsError(false)
            setNumberIsValid(false)
            setOtherNumberIsValid(false)
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
                <p className="text-[16px] ml-4 font-[500] text-[#1A1C2D]">Buy for my number</p>
            </div>

            <div className="flex">
                <input
                    checked = {userChoice === 'other'}
                    type='radio'
                    className="bg-black"
                    value='other'
                    onChange={userChoiceHandler}
                />
                <p className="text-[16px] ml-4 font-[500] text-[#1A1C2D]">Buy for other number</p>
            </div>

        </div>


        { userChoice === 'other' && <div className="mt-8">
            <p className="font-[400] text-[16px] text-[#1E1E1E]">Number to receive offer</p>
           <p className="text-[12px] text-[#757575] font-[400] mt-3">Make sure this is your M-Pesa number</p>
        </div>}

        {userChoice === 'other' && <div className="w-full">
            <input
                value={otherNumber}
                onChange={otherNumberHandler}
                type="text"
                className="bg-white px-4 py-[8px] rounded w-full mt-4 text-[#1E1E1E] text-[16px] font-[400] border border-[#D9D9D9]"
                placeholder={`${userChoice === 'self'? 'M-Pesa Number' : 'Phone Number'}`}
            />
            {userChoice === 'other' && otherNumberError && <p className="font-semibold text-[12px] text-red-600 mt-4">Provide a valid safaricom number</p>}
            {userChoice === 'other' && otherNumber.length  < 10 && otherNumber.length > 0 && <p className="text-[12px] mt-2">Number characters are less than 10</p>}
            {userChoice === 'other' && otherNumberIsValid  && <p className="text-[13px] mt-2 text-green-500 ml-1">Verified</p>}
            {/* {userChoice === 'other' && !otherNumberError && otherNumber.length > 9 && <p className="font-semibold text-[12px] text-green-500 mt-4">Verified</p>} */}
        </div>}

       {<>
            <div className="mt-8">
                {userChoice === 'other' && <p className="font-[400] text-[16px] text-[#1E1E1E]">Number to make payment</p>}
                {userChoice === 'self' && <p className="font-semibold text-[13px]">Number to receive offer</p>}
                <p className="text-[12px] text-slate-500 mt-3">Make sure this is your M-Pesa number</p>
            </div>

            <div className="w-full">
                <input
                    value={myNumber}
                    onChange={myNumberHandler}
                    type="text"
                    className="bg-white px-4 py-[8px] rounded w-full mt-4 text-[#1E1E1E] text-[16px] font-[400] border border-[#D9D9D9]"
                    placeholder="M-Pesa Number"
                />
            </div>

            {userChoice === 'self' && myNumber.length < 10 && myNumber.length > 0  && <p className="text-[12px] mt-2">Number characters are less than 10</p>}
            {userChoice === 'self' && numberIsValid  && <p className="text-[13px] mt-2 text-green-500 ml-1">Verified</p>}
            {userChoice === 'other' && myNumber.length < 10 && myNumber.length > 0  && <p className="text-[12px] mt-2">Number characters are less than 10</p>}
            {userChoice === 'other' && numberIsValid  && <p className="text-[13px] mt-2 text-green-500 ml-1">Verified</p>}
            {userChoice === 'self' && isError && <p className="font-semibold text-[12px] text-red-600 mt-4">Provide a valid safaricom number</p>}
            {userChoice === 'other' && isError && <p className="font-semibold text-[12px] text-red-600 mt-4">Provide a valid safaricom number</p>}
        </>}
        

        <div className="flex justify-end mt-8">
            <button className="bg-[#425E91] text-white text-[13px] px-4 py-2 rounded-[100px] h-[40px] w-[161px]">Confirm Purchase</button>
        </div>
    </form>
}