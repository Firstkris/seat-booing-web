import axios from '../config/axios';
import { toast } from 'react-toastify';
const URL = import.meta.env.VITE_API_URL;

export const findAllAvailableSeat = (searchData) => {
    try {
        const result = axios.post(
            `${URL}/booking/allavailableseat`,
            searchData
        );
        return result;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const createBooking = (scheduleId) =>
    axios.post(`${URL}/booking/new-booking`, { scheduleId });

export const createBookingDetail = (bookingId, seatId) =>
    axios.post(`${URL}/booking/new-booking-detail`, { bookingId, seatId });

export const updateSeatStatus = (seatId, status) =>
    axios.patch(`${URL}/booking/update`, { seatId, status });

export const updateAvailableSeatAmount = (scheduleId, num) =>
    axios.patch(`${URL}/booking/update-available-amount`, { scheduleId, num });

export const getMyBookingData = () => axios.get(`${URL}/booking/my-booking`);

export const getBookedSeatByScheduleId = async (scheduleId) =>
    axios.post(`${URL}/booking/all-booked-seat-schedule-id`, { scheduleId });

export const deleteBookingDetail = async (bookingDetailId, scheduleId) =>
    axios.delete(`${URL}/booking/delete-booking`, {
        data: { bookingDetailId, scheduleId },
    });

export const editBooking = async (bookingDetailId, seatId) =>
    axios.patch(`${URL}/booking/edit-booking`, { bookingDetailId, seatId });
