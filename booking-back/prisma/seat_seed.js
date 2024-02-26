const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient


const seatDataA = [
    { status: true, seatCode: 'A1', seatCol: "A", seatRow: "1", status: true, busId: 3 },
    { status: true, seatCode: 'A2', seatCol: "A", seatRow: "2", status: true, busId: 3 },
    { status: true, seatCode: 'A3', seatCol: "A", seatRow: "3", status: true, busId: 3 },
    { status: true, seatCode: 'A4', seatCol: "A", seatRow: "4", status: true, busId: 3 },
    { status: true, seatCode: 'A5', seatCol: "A", seatRow: "5", status: true, busId: 3 },
    { status: true, seatCode: 'A6', seatCol: "A", seatRow: "6", status: true, busId: 3 },
    { status: true, seatCode: 'A7', seatCol: "A", seatRow: "7", status: true, busId: 3 },
    { status: true, seatCode: 'A8', seatCol: "A", seatRow: "8", status: true, busId: 3 },
    { status: true, seatCode: 'A9', seatCol: "A", seatRow: "9", status: true, busId: 3 },
    { status: true, seatCode: 'A10', seatCol: "A", seatRow: "10", status: true, busId: 3 },
]

const seatDataB = [
    { status: true, seatCode: 'B1', seatCol: "B", seatRow: "1", status: true, busId: 3 },
    { status: true, seatCode: 'B2', seatCol: "B", seatRow: "2", status: true, busId: 3 },
    { status: true, seatCode: 'B3', seatCol: "B", seatRow: "3", status: true, busId: 3 },
    { status: true, seatCode: 'B4', seatCol: "B", seatRow: "4", status: true, busId: 3 },
    { status: true, seatCode: 'B5', seatCol: "B", seatRow: "5", status: true, busId: 3 },
    { status: true, seatCode: 'B6', seatCol: "B", seatRow: "6", status: true, busId: 3 },
    { status: true, seatCode: 'B7', seatCol: "B", seatRow: "7", status: true, busId: 3 },
    { status: true, seatCode: 'B8', seatCol: "B", seatRow: "8", status: true, busId: 3 },
    { status: true, seatCode: 'B9', seatCol: "B", seatRow: "9", status: true, busId: 3 },
    { status: true, seatCode: 'B10', seatCol: "B", seatRow: "10", status: true, busId: 3 },
]

const seatDataC = [
    { status: true, seatCode: 'C1', seatCol: "C", seatRow: "1", status: true, busId: 3 },
    { status: true, seatCode: 'C2', seatCol: "C", seatRow: "2", status: true, busId: 3 },
    { status: true, seatCode: 'C3', seatCol: "C", seatRow: "3", status: true, busId: 3 },
    { status: true, seatCode: 'C4', seatCol: "C", seatRow: "4", status: true, busId: 3 },
    { status: true, seatCode: 'C5', seatCol: "C", seatRow: "5", status: true, busId: 3 },
    { status: true, seatCode: 'C6', seatCol: "C", seatRow: "6", status: true, busId: 3 },
    { status: true, seatCode: 'C7', seatCol: "C", seatRow: "7", status: true, busId: 3 },
    { status: true, seatCode: 'C8', seatCol: "C", seatRow: "8", status: true, busId: 3 },
    { status: true, seatCode: 'C9', seatCol: "C", seatRow: "9", status: true, busId: 3 },
    { status: true, seatCode: 'C10', seatCol: "C", seatRow: "10", status: true, busId: 3 },
]




async function run() {
    await prisma.seat.createMany({ data: seatDataA })
    await prisma.seat.createMany({ data: seatDataB })
    await prisma.seat.createMany({ data: seatDataC })

}

run()