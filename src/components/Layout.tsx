import { Outlet } from "react-router-dom";
import {Navigation} from "./Navigation";
import '../assets/Layout.css'

type Props = {}

const Layout = (props: Props) => {
    return (
        <>
        <Navigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default Layout