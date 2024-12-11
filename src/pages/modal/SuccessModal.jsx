import { useEffect } from 'react'
import success from './assets/success.gif'

export default function SuccessModal({setSuccess}){

    useEffect(() => {
        setTimeout(() => {
            setSuccess(false)
        }, 2000)
    })
    return <form className={`h-[15vh] bg-white flex justify-center rounded-xl`}>
        <img src={success} alt="git"/>
    </form>
}