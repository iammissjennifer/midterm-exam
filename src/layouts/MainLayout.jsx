import { Outlet } from "react-router";
import Navbar from "../components/NavBar.jsx"

function MainLayout() {
    return(
        <div className="bg-amber-100">
            <Navbar />
            <Outlet />
        </div>
    )
}
export default MainLayout