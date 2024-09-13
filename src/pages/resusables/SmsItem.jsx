import { useDispatch } from "react-redux"
import { modalActions } from "../../store"

export default function SmsItem({title, price}){

    const dispatch = useDispatch()

    function purchaseHandler(){
        console.log(`Purchase process has kicked off...!`)
        dispatch(modalActions.openModalHandler())
    }

    return <div className="bg-slate-200  p-6 w-[30%] rounded mb-6 sm:w-full">
        <div className="flex justify-between">
            <p className="text-[13px]">{title}</p>
            <p className="font-bold">KES{price}</p>
        </div>
        <div className="mt-6 flex justify-center">
            <button className="px-4 py-1 rounded-full border border-slate-400 text-[13px]" onClick={purchaseHandler}>Purchase</button>
        </div>
    </div>
}