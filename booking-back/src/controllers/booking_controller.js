const { schedule } = require("../models/prisma");
const { updateSeatStatusBySeatId, createNewBooking, createBookingData, createNewBookingDetailData, updateSeatAvailableAmount, getMyBookingData, findBookingSeatInSchedule, deleteBookingDetail, getBookingDetailId, editBooking } = require("../services/booking-service");
const { findAllAvailableSeatInSchedule } = require("../services/search-service");
const { catchError } = require("../utilities/catch-error");

exports.getAllSeatOnSchedule = catchError(
    async (req, res, next) => {
        console.log(req.body);

        const { departureDate, scheduleId } = req.body
        const searchDate = new Date(departureDate).toISOString().split('T')[0]

        console.log(searchDate);

        const allSeat = await findAllAvailableSeatInSchedule(searchDate, scheduleId)

        res.status(200).json({ allSeat })

    }
)

exports.updateSeatStatus = catchError(
    async (req, res, next) => {
        const { seatId, status } = req.body

        const updatedSeat = await updateSeatStatusBySeatId(seatId, status)

        res.status(200).json({ message: 'success booking', updatedSeat: seatId })
    }
)

exports.createNewBookingDetail = catchError(
    async (req, res, next) => {
        console.log(req.body);
        const newBookingDetail = await createNewBookingDetailData(req.body)
        res.status(200).json({ newBookingDetail })
    }
)

exports.createBooking = catchError(
    async (req, res, next) => {
        req.body.userId = req.user.id

        const newBooking = await createBookingData(req.body)
        console.log(newBooking);

        res.status(200).json({ newBooking })
    }
)

exports.updateSeatAvailable = catchError(
    async (req, res, next) => {
        const { scheduleId, num } = req.body
        const seatAvailableUpdate = await updateSeatAvailableAmount(scheduleId, num)
        res.status(200).json({ seatAvailableUpdate })
    }
)

exports.getMyBooking = catchError(
    async (req, res, next) => {
        console.log(req.user);
        const myBooking = await getMyBookingData(req.user.id)
        res.status(200).json({ myBooking })
    }
)


exports.getAllBookingSeatByScheduleId = catchError(
    async (req, res, next) => {
        console.log(req.body);

        const { scheduleId } = req.body

        const alreadyBookedSeat = await findBookingSeatInSchedule(scheduleId)

        res.status(200).json({ alreadyBookedSeat })

    }
)

exports.deleteBooking = catchError(
    async (req, res, next) => {
        const { bookingDetailId, scheduleId } = req.body
        const num = 1

        const deletedBooking = await deleteBookingDetail(bookingDetailId)
        const updateSeatAvailable = await updateSeatAvailableAmount(scheduleId, num)

        res.status(200).json({ deletedBooking })
    }
)

exports.editBookingByBookingDetailId = catchError(
    async (req, res, next) => {
        console.log(req.body);
        const { bookingDetailId, seatId } = req.body
        const editedBooking = await editBooking(bookingDetailId, seatId)

        res.status(200).json({ editedBooking })
    }
)
