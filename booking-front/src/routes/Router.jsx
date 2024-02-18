import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import SeatSelectPage from "../pages/SeatSelectPage";
import PaymentPage from "../pages/PaymentPage";
import SchedulePage from "../pages/SchedulePage";

const router = createBrowserRouter([
    {
        path: '/',
        element:

            <HomePage />

        // element: <LoginPage></LoginPage>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/seat-select',
        element: (
            <ProtectedRoute>
                <SeatSelectPage />
            </ProtectedRoute>


        ),

    },
    {
        path: '/schedule',
        element: (
            // <ProtectedRoute>
            <SchedulePage />
            // </ProtectedRoute>
        )
    }
])

export default function Routes() {
    return <RouterProvider router={router} />
}
