import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home/Home";
import MainLayout from "../MainLayout/MainLayout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Properties.json')
            },
        ]
    }
]);