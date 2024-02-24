import Card from './Card'
import useAuthContext from '../hooks/useAuthContext'
import useBookingContext from '../hooks/useBookingContext'
import { useEffect } from 'react'
import { useState } from 'react'

function SummaryCard({ seatInfo = false }) {

    const { user, selectSchedule } = useAuthContext()
    const { bookedSeat, isClick } = useBookingContext()
    const { origin, destination } = selectSchedule

    const [seatCount, setSeatCount] = useState(0)

    const onSetCount = () => {
        const count = Object.keys(bookedSeat).length || 0
        setSeatCount(count)
    }

    const selectSeatCode = []
    for (const key in bookedSeat) {
        if (Object.hasOwnProperty.call(bookedSeat, key)) {

            const element = bookedSeat[key].seat.seat_code;
            selectSeatCode.push(element)

        }
    }


    useEffect(() => {
        onSetCount()
    }, [isClick])
    // console.log(bookedSeat);
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };

    // const departureDate = new Date(selectSchedule.departureDate).toLocaleString('en-GB', options)
    const departureDate = new Date(selectSchedule.departureDate).toLocaleString('th-TH', options)
    const departTime = new Date(selectSchedule.departTime).toLocaleTimeString([], { hourCycle: 'h24', hour: "2-digit", minute: '2-digit' })


    return (
        <>
            <div className='flex flex-col gap-6'>
                <Card btn={false} bg={false} name={`ข้อมูลเส้นทาง`} >
                    <hr className='border border-primary' />
                    <div className="flex flex-col gap-4 text-base">

                        <div className="grid grid-cols-3 ">
                            <div className="text-left">

                                <p>เดินทางจาก : </p>

                            </div>
                            <div className="text-left col-span-2">
                                <p className="font-semibold">{origin}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 ">
                            <div className="text-left">

                                <p>ปลายทาง : </p>

                            </div>
                            <div className="text-left col-span-2">
                                <p className="font-semibold">{destination}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 ">
                            <div className="text-left">

                                <p>วันเวลาเดินทาง : </p>
                            </div>
                            <div className="text-left col-span-2">
                                <p className="font-semibold">{departureDate} {departTime}</p>
                            </div>
                        </div>

                    </div>

                </Card>

                {/* seat info */}
                {seatInfo &&
                    <Card btn={false} >
                        <div className='flex flex-col text-left'>
                            <div className='flex'>
                                <p className='text-xl font-semibold'> {user.firstName} </p>
                                <p className='text-xl font-semibold'> {seatCount} ที่นั่ง </p>
                            </div>
                            <div>
                                {selectSeatCode.map((el) => (
                                    <span className='text-xl text-secondary font-semibold pr-2' key={el}> {el}</span>
                                ))}
                            </div>

                        </div>
                    </Card>
                }
            </div>
        </>
    )
}

export default SummaryCard