import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import SeatSelectPage from "../pages/SeatSelectPage";
import PaymentPage from "../pages/PaymentPage";
import SchedulePage from "../pages/SchedulePage";
import RedirectRoute from "./RedirectRoute";
import ProfilePage from "../pages/ProfilePage";
import PassengerInfo from "../pages/PassengerInfo";
import { Navigate } from "react-router-dom";
import NavigatePage from "../pages/NavigatePage";
import { Outlet } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/schedule',
        element: (
            // <ProtectedRoute>
            <SchedulePage />
            // </ProtectedRoute>
        )
    },
    {
        path: '/passenger-info',
        element: (
            <ProtectedRoute >
                <PassengerInfo />
            </ProtectedRoute>

        )

    },

    {
        path: '/seat-select',
        element: (
            <ProtectedRoute >
                <SeatSelectPage />
            </ProtectedRoute>
        )
    },

    {
        path: '/profile',
        element: (
            <ProfilePage />
        )
    },
    {
        path: '*',
        element: (
            <NavigatePage />
        )
    }


])

export default function Routes() {
    return <RouterProvider router={router} />
}
