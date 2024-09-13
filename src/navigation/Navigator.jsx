import { NavLink } from "react-router-dom";

export default function Navigation(){
    return <div className="h-[10vh] bg-slate-200 flex justify-between px-20 items-center sm:px-4">
        <p className="font-poppins">Bingwa App</p>

        <div className="flex sm:hidden">
            <NavLink to='' className='mx-4 font-poppins'>Bundles</NavLink>
            <NavLink to='' className='mx-4 font-poppins'>Airtime</NavLink>
            <NavLink to='' className='mx-4 font-poppins'>Home</NavLink>
        </div>
    </div>
}