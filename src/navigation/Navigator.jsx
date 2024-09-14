import { NavLink } from "react-router-dom";

export default function Navigation(){
    return <div className="h-[10vh] bg-[#EDEDF4] flex justify-between px-20 items-center sm:px-4">
        <p className="font-poppins text-black font-[400] text-[28px]">Bingwa App</p>

        <div className="flex sm:hidden">
            <NavLink to='' className='mx-4 font-poppins text-black font-[400] text-[22px]'>Bundles</NavLink>
            <NavLink to='' className='mx-4 font-poppins text-black font-[400] text-[22px]'>Airtime</NavLink>
            <NavLink to='' className='mx-4 font-poppins text-black font-[400] text-[22px]'>Home</NavLink>
        </div>
    </div>
}