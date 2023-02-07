import { Outlet } from "react-router-dom";
import {Navigation} from "./Navigation";
import {Footer} from "./Footer";
import '../assets/Layout.css'

type Props = {}

const Layout = (props: Props) => {
    return (
        <>
        <Navigation/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout