const prisma = require("../models/prisma");

// const origin = "origin"
exports.findDistinctRoute = (path, start) => prisma.schedule.findMany({
    where: { origin: start },
    distinct: [path]
})

exports.findSchedule = (origin, destination, departureDate) => prisma.schedule.findMany({
    where: {
        AND: [{ origin }, { destination }, { departureDate }]
    },
})


exports.findAllAvailableSeatInSchedule = (date, scheduleId) => prisma.$queryRaw`
SELECT 
    *
FROM
    schedule
        JOIN
    bus ON bus_id = bus.id
        JOIN
    seat ON bus.id = seat.busId
WHERE departureDate = ${date} AND schedule.id = ${scheduleId}
`

