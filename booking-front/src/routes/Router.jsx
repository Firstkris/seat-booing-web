import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import LoginPage from "../pages/LoginPage";
import RegisterPage from '../pages/RegisterPage';
import ProtectedRoute from './ProtectedRoute';
import SeatSelectPage from '../pages/SeatSelectPage';
import PaymentPage from '../pages/PaymentPage';
import SchedulePage from '../pages/SchedulePage';
import RedirectRoute from './RedirectRoute';
import ProfilePage from '../pages/ProfilePage';
import PassengerInfo from '../pages/PassengerInfo';
import NavigatePage from '../pages/NavigatePage';
import BookingContextProvider from '../context/BookingContext';
import SummaryTicket from '../pages/SummaryTicket';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/register',
        element: (
            <RedirectRoute>
                <RegisterPage />
            </RedirectRoute>
        ),
    },
    {
        path: '/schedule',
        element: <SchedulePage />,
    },
    {
        path: '/passenger-info',
        element: (
            <BookingContextProvider>
                <ProtectedRoute>
                    <PassengerInfo />
                </ProtectedRoute>
            </BookingContextProvider>
        ),
    },

    {
        path: '/seat-select',
        element: (
            <BookingContextProvider>
                <ProtectedRoute>
                    <SeatSelectPage />
                </ProtectedRoute>
            </BookingContextProvider>
        ),
    },

    {
        path: '/payment',
        element: (
            <BookingContextProvider>
                <ProtectedRoute>
                    <PaymentPage />
                </ProtectedRoute>
            </BookingContextProvider>
        ),
    },

    {
        path: '/profile',
        element: (
            <BookingContextProvider>
                <ProfilePage />
            </BookingContextProvider>
        ),
    },
    {
        path: '/ticket',
        element: (
            <BookingContextProvider>
                <ProtectedRoute>
                    <SummaryTicket />
                </ProtectedRoute>
            </BookingContextProvider>
        ),
    },
    {
        path: '*',
        element: <NavigatePage />,
    },
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
