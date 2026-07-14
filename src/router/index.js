import { createBrowserRouter } from "react-router";
import loginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import ProtextRoutes from "./ProtextRoutes";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";

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
                },
                {
                    path: "/Register",
                    Component: RegisterPage
                }
        ]
    }
])

export default router