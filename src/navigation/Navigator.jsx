import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { modalActions } from "../store";

export default function Navigation(){

    const [header, setHeader] = useState('')
    const dispatch = useDispatch();

    const params = useParams();

    async function agentsOffersHandler(){
        const AGENTS_URL =  `https://api.bingwahybrid.com/sitelink/${params.id}`

        const response = await fetch(AGENTS_URL);
        if(response.ok){
            const data = await response.json();
            setHeader(data.data.siteDetails.siteName)
            dispatch(modalActions.addAllDataHandler(data.data.offers))
        }
    }

    useEffect(() => {
        agentsOffersHandler()
    }, [])

    return <div className="h-[10vh] bg-[#EDEDF4] flex justify-between px-20 items-center sm:px-4">
        <p className="font-poppins text-black font-[400] text-[28px]">{header}</p>

        <div className="flex sm:hidden">
            <NavLink to='' className='mx-4 font-poppins text-black font-[400] text-[22px]'>Bundles</NavLink>
            <NavLink to='' className='mx-4 font-poppins text-black font-[400] text-[22px]'>Airtime</NavLink>
        </div>
    </div>
}