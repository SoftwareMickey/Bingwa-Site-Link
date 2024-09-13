import REACTDOM  from 'react-dom'
import SelfPurchase from './SelfPurchase'
import { useSelector } from 'react-redux'

export default function PurchaseModal(){

    const isModalOpen = useSelector(state => state.modal.isModalOpen)

    function Backdrop(){
        return <div className='h-[100vh] sm:h-full fixed left-0 top-0 bg-black opacity-80 w-full'/>
    }

    function Overlay(){
        return <div className='fixed bg-slate-200 z-20 mt-28 w-[30%] left-[35%] p-6 rounded sm:w-[96%] sm:ml-2 sm:left-0'>
            <SelfPurchase/>
        </div>
    }

    return <>
        {isModalOpen && REACTDOM.createPortal(<Backdrop/>, document.getElementById("backdrop"))}
        {isModalOpen && REACTDOM.createPortal(<Overlay/>, document.getElementById("overlay"))}
    </>
}