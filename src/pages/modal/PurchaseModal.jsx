import REACTDOM  from 'react-dom'
import SelfPurchase from './SelfPurchase'
import { useSelector } from 'react-redux'
import SuccessModal from './SuccessModal'
import { useState } from 'react'

export default function PurchaseModal(){

    const isModalOpen = useSelector(state => state.modal.isModalOpen)
    const [showSuccess, setShowSuccess] = useState(false);

    function Backdrop(){
        return <div className='h-[100vh] sm:h-full fixed left-0 top-0 bg-black opacity-80 w-full'/>
    }

    function Overlay(){
        return <div className={`${showSuccess? 'h-[25vh] w-[25%] bg-white rounded-xl animate-slideInTop' : 'min-h-[60vh] animate-slideInTop'} transition-all duration-400 fixed bg-[#EDEDF4] z-20 mt-14 rounded w-[30%] left-[35%] py-6 px-4 ounded sm:w-[96%] sm:ml-2 sm:left-0`}>
            {showSuccess && <SuccessModal setSuccess={setShowSuccess}/>}
            {!showSuccess && <SelfPurchase setSuccess={setShowSuccess}/>}
        </div>
    }

    return <>
        {isModalOpen && REACTDOM.createPortal(<Backdrop/>, document.getElementById("backdrop"))}
        {isModalOpen && REACTDOM.createPortal(<Overlay/>, document.getElementById("overlay"))}
    </>
}