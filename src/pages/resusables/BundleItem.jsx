import { useDispatch } from "react-redux"
import { modalActions } from "../../store";

export default function BundleItem({title, price}){

    const dispatch = useDispatch();

    function purchaseHandler(){
        console.log(`Purchase process has kicked off...!`)
        dispatch(modalActions.openModalHandler())

        dispatch(modalActions.addPurchaseHandler({
            'price' : price,
            'phoneNumber': ''
        }))
    }

    return <div className="bg-[#E2E2E9]  p-6 w-[30%] rounded-[8px] mb-8 sm:w-full mr-10">
        <div className="flex justify-between">
            <p className="text-[16px] text-black font-[400]">{title}</p>
            <p className="text-[16px] font-[500]">KES {price}</p>
        </div>
        <div className="mt-6 flex justify-center">
            <button className="px-4 py-1 rounded-[100px] border border-[#74777F] font-[500] text-[14px] text-[#425E91]" onClick={purchaseHandler}>Purchase</button>
        </div>
    </div>
}