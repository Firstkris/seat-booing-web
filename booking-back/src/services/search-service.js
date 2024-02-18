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