const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient

// const date = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Bangkok" })
// const date = new Date().getUTCHours()

// console.log(date);

const scheduleData = [
    { origin: "Bangkok", destination: "ChiangMai", departTime: new Date("2024-02-21T10:00:00Z"), arrivalTime: new Date("2024-02-21T19:00:00Z"), departureDate: new Date("2024-02-21"), price: 500, seatAvailable: 30, busId: 1 },
    { origin: "Bangkok", destination: "Lopburi", departTime: new Date("2024-02-21T10:00:00Z"), arrivalTime: new Date("2024-02-21T12:00:00Z"), departureDate: new Date("2024-02-21"), price: 200, seatAvailable: 30, busId: 2 },
    { origin: "Bangkok", destination: "ChiangMai", departTime: new Date("2024-02-22T11:00:00Z"), arrivalTime: new Date("2024-02-22T20:00:00Z"), departureDate: new Date("2024-02-22"), price: 500, seatAvailable: 30, busId: 3 },
    { origin: "ChiangMai", destination: "Bangkok", departTime: new Date("2024-02-22T12:00:00Z"), arrivalTime: new Date("2024-02-22T21:00:00Z"), departureDate: new Date("2024-02-22"), price: 500, seatAvailable: 30, busId: 4 },
]

const busData = [
    { status: true, totalSeat: 30 },
    { status: true, totalSeat: 30 },
    { status: true, totalSeat: 30 },
    { status: true, totalSeat: 30 },
    { status: true, totalSeat: 30 }
]

async function run() {
    await prisma.bus.createMany({ data: busData })
    await prisma.schedule.createMany({ data: scheduleData })

}

run()