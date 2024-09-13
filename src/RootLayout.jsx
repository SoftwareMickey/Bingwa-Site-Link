import { Outlet } from "react-router";
import Navigation from "./navigation/Navigator";

export default function RootLayout(){
    return <>
        <Navigation/>
        <Outlet/>
    </>
}