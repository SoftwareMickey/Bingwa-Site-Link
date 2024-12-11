import { useDispatch } from "react-redux"
import { modalActions } from "../../store"

export default function SmsItem({title, price}){

    const dispatch = useDispatch()

    function purchaseHandler(){
        console.log(`Purchase process has kicked off...!`)
        dispatch(modalActions.openModalHandler())

        dispatch(modalActions.addPurchaseHandler({
            'price' : price,
            'phoneNumber': ''
        }))
    }

    return <div className="bg-[#E2E2E9]  p-6 w-[30%] rounded-[8px] mb-6 sm:w-full mr-10">
        <div className="flex justify-between">
            <p className="text-[16px]">{title}</p>
            <p className="font-bold">KES{price}</p>
        </div>
        <div className="mt-6 flex justify-center">
            <button className="px-4 py-1 rounded-[100px] border border-[#74777F] text-[13px] text-[#425E91]" onClick={purchaseHandler}>Purchase</button>
        </div>
    </div>
}