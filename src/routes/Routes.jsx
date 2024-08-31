import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Properties.json')
            },
        ]
    }
]);