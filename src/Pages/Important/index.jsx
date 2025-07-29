import { Fragment } from "react"
import Navbar from "../../Components/Navbar"
import SideBar from "../../Components/SideBar"

export const Important  = () => {
    return(
        <Fragment>
            <Navbar/>
            <main className="flex gap-3">
                <SideBar/>
                <div className="flex  flex-col align-center w-screen mt-7"></div>
            </main>

        </Fragment>
    )
}