const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// const date = new Date('2024-02-21').toLocaleTimeString('en-US', { timeZone: "Asia/Bangkok" })
// const date = new Date().getUTCHours()

// console.log(date);

const scheduleData = [
    {
        origin: 'Bangkok',
        destination: 'ChiangMai',
        departTime: new Date('2024-07-20T10:00:00'),
        arrivalTime: new Date('2024-07-19T21:00:00'),
        departureDate: new Date('2024-07-20'),
        price: 500,
        seatAvailable: 30,
        busId: 1,
    },
    {
        origin: 'Bangkok',
        destination: 'ChiangMai',
        departTime: new Date('2024-07-19T11:00:00'),
        arrivalTime: new Date('2024-07-19T21:00:00'),
        departureDate: new Date('2024-07-19'),
        price: 500,
        seatAvailable: 30,
        busId: 3,
    },
    {
        origin: 'Bangkok',
        destination: 'Lopburi',
        departTime: new Date('2024-07-19T10:00:00'),
        arrivalTime: new Date('2024-07-21T12:00:00'),
        departureDate: new Date('2024-07-19'),
        price: 200,
        seatAvailable: 30,
        busId: 2,
    },
    {
        origin: 'ChiangMai',
        destination: 'Bangkok',
        departTime: new Date('2024-07-19T12:00:00'),
        arrivalTime: new Date('2024-07-21T21:00:00'),
        departureDate: new Date('2024-07-19'),
        price: 500,
        seatAvailable: 30,
        busId: 4,
    },
];

const busData = [
    { status: true, totalSeat: 30 },
    { status: true, totalSeat: 30 },
    { status: true, totalSeat: 30 },
    { status: true, totalSeat: 30 },
    { status: true, totalSeat: 30 },
];

async function run() {
    // await prisma.bus.createMany({ data: busData })
    await prisma.schedule.createMany({ data: scheduleData });
}

run();
