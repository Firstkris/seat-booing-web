import axios from "../config/axios";
const URL = import.meta.env.VITE_API_URL

export const findAllAvailableSeat = (searchData) => {
    try {
        const result = axios.post(`${URL}/booking/allavailableseat`, searchData)
        return result
    } catch (error) {
        console.log(error);
    }
}

export const createBooking = (scheduleId) => axios.post(`${URL}/booking/new-booking`, { scheduleId })

export const createBookingDetail = (bookingId, seatId) => axios.post(`${URL}/booking/new-booking-detail`, { bookingId, seatId })

export const updateSeatStatus = (seatId, status) => axios.patch(`${URL}/booking/update`, { seatId, status })

export const updateAvailableSeatAmount = (scheduleId, num) => axios.patch(`${URL}/booking/update-available-amount`, { scheduleId, num })