import { NavLink } from "react-router"

function NavBar() {
    return (
        <nav className="bg-blue-500 w-full p-4 flex justify-between text-white">
            <div className="text-lg font-semibold text-white tracking-wide">Midterm Lab</div>
            <div className="flex gap-4 cursor-pointer">
                <NavLink
                    className={({ isActive }) => isActive ? "font-bold text-white" : "text-white"}
                    to='/'
                >
                    Login
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "font-bold text-white" : "text-white"}
                    to='/Register'
                >
                    Register
                </NavLink>
            </div>
        </nav>
    )
}
export default NavBar
