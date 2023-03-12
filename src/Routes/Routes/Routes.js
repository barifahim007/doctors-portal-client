import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import DashBoard from "../../pages/DashBoard/DashBoard/DashBoard";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Home/Login/Login";
import SingUp from "../../pages/Home/SingUp/SingUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes> <DashBoard></DashBoard> </PrivateRoutes>
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
]);
export default router;