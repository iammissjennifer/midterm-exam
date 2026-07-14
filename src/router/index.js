import { createBrowserRouter } from "react-router";
import loginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import ProtextRoutes from "./ProtextRoutes";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {index: true,
                Component: LoginPage},
                {
                    path: "/Home",
                    Component: HomePage
                }
        ]
    }
])

export default router