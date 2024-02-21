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

const router = createBrowserRouter([
    {
        path: '/',
        element:

            <HomePage />

        // element: <LoginPage></LoginPage>
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/login',
        element: (
            <RedirectRoute>
                <LoginPage />
            </RedirectRoute>
        )
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
        path: '/seat-select',
        element: (<SeatSelectPage />),

    },
    {
        path: '/profile',
        element: (
            <ProfilePage />
        )
    },
    {
        path: '/passenger-info',
        element: <PassengerInfo />

    }

])

export default function Routes() {
    return <RouterProvider router={router} />
}
