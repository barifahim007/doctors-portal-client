import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Home/Login/Login";
import SingUp from "../../pages/Home/SingUp/SingUp";

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
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
]);
export default router;