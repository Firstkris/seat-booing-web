const express = require('express')
const {
    getAllSeatOnSchedule,
    updateSeatStatus,
    createNewBookingDetail,
    createBooking,
    updateSeatAvailable,
    getMyBooking,
    getAllBookingSeatByScheduleId,
    deleteBooking,
} = require("../controllers/booking_controller");
const { authenticate } = require('../middleware/authenticate')



const bookingRoute = express.Router()

bookingRoute.post('/allavailableseat', getAllSeatOnSchedule)
bookingRoute.patch('/update', authenticate, updateSeatStatus)
bookingRoute.post('/new-booking-detail', authenticate, createNewBookingDetail)
bookingRoute.post('/new-booking', authenticate, createBooking)
bookingRoute.patch('/update-available-amount', authenticate, updateSeatAvailable)
bookingRoute.get('/my-booking', authenticate, getMyBooking)
bookingRoute.post('/all-booked-seat-schedule-id', getAllBookingSeatByScheduleId)
bookingRoute.delete('/delete-booking', authenticate, deleteBooking)

module.exports = bookingRoute