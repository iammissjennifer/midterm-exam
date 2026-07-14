import { Navigate, Outlet } from "react-router";

function ProtextRoutes() {
    const token = useUserStore(state=>state.token)
    if (!token) {
        return <Navigate to='/' replace />
    }else {
        return <Outlet />
    }
}

export default ProtextRoutes