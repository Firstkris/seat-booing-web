const { date } = require('joi')
const prisma = require('../models/prisma')


exports.findBookingSeatInSchedule = (scheduleId) => prisma.$queryRaw`
 SELECT DISTINCT
    booking_id,
    seat_id,
    seat_code,
    shedule_id,
    departureDate,
    origin,
    destination,
    departTime,
    user_id
FROM
    booking_detail
        LEFT JOIN
    booking ON booking_detail.booking_id = booking.id
        JOIN
    schedule ON schedule.id = booking.shedule_id
        JOIN
    users ON users.id = booking.user_id
        JOIN
    seat ON booking_detail.seat_id = seat.id
WHERE
    schedule.id = ${scheduleId}
`

exports.updateSeatStatusBySeatId = (seatId, status) => prisma.$queryRaw`
UPDATE seat
JOIN 
	bus ON bus.id  = seat.busId
    JOIN 
    schedule ON schedule.bus_id = bus.id
SET seat.status = ${status}
WHERE seat.id = ${seatId}
`

exports.createNewBookingDetailData = (data) => prisma.bookingDetail.create({ data })

exports.createBookingData = (data) => prisma.booking.create({ data })

exports.updateSeatAvailableAmount = (scheduleId, num) => prisma.schedule.update({
    where: { id: scheduleId },
    data: { seatAvailable: { decrement: +num } }
})


exports.getMyBookingData = (id) => prisma.$queryRaw`
SELECT DISTINCT
DISTINCT booking_id, seat_id, seat_code,shedule_id,departureDate, origin, destination,departTime,user_id
FROM
    booking_detail
        LEFT JOIN
    booking ON booking_detail.booking_id = booking.id
        JOIN
    schedule ON schedule.id = booking.shedule_id
        JOIN
    users ON users.id = booking.user_id
    JOIN 
    seat ON booking_detail.seat_id = seat.id
WHERE user_id = ${id} 
`

exports.deleteBookingDetail = (id) => prisma.bookingDetail.delete({
    where: { id }
})

exports.getBookingDetailId = (bookingId, seatId) => prisma.bookingDetail.findFirst({
    where: { AND: [{ bookingId }, { seatId }] }
})