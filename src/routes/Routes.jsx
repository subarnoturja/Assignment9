import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/Properties.json')
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
                loader: () => fetch('/Properties.json')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            }
        ]
    }
]);