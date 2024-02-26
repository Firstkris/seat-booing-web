import { useEffect } from 'react'
import useBookingContext from '../../../hooks/useBookingContext'
import SeatItems from './SeatItems'

function SeatSelectForm() {

    // const { user, selectSchedule } = useAuthContext()
    const {
        availableSeat,
        getAllAvailableSeat,
        isClick,
        getAlreadyBookedSeat,
        alreadyBookSeat,
    } = useBookingContext();


    const filterAvailableSeat = availableSeat.map(el => {
        let checkAvailableSeat;
        if (alreadyBookSeat.length > 0) {
            for (let i = 0; i < alreadyBookSeat.length; i++) {

                if (el.id === alreadyBookSeat?.[i].seat_id) {
                    console.log(alreadyBookSeat);
                    console.log(alreadyBookSeat[i].seat_id);
                    el.newStatus = true
                    checkAvailableSeat = <SeatItems key={el.id} seat={el} />

                }
                else {
                    checkAvailableSeat = <SeatItems key={el.id} seat={el} />
                }
            }
        } else {
            checkAvailableSeat = <SeatItems key={el.id} seat={el} />
        }

        return checkAvailableSeat
    })


    // const filterAvailableSeat = availableSeat.map(el => {

    //     const test = alreadyBookSeat.filter((bookedSeat) => {
    //         if (bookedSeat.seat_id !== 28) {
    //             return (
    //                 <SeatItems key={el.id} seat={el} />
    //             )
    //         } else {
    //             return (
    //                 <SeatItems key={el.id} seat={el} />
    //             )
    //         }

    //     })
    //     console.log(test);


    // }
    // )

    // const isAlreadyBooked = alreadyBookSeat.filter((bookedSeat) => {
    //     if (bookedSeat.seat_id !== 28) return true
    //     return false
    // })


    // console.log(isAlreadyBooked);

    const isSelect = JSON.parse(localStorage.getItem('selectedSchedule'))
    const searchData = {
        departureDate: new Date(isSelect.departureDate),
        scheduleId: isSelect.id
    }

    // setInterval(() => {
    //     getAllAvailableSeat(searchData)
    // }, 1e3 * 60)

    useEffect(() => {
        if (Object.keys(isSelect).length > 0) {
            getAllAvailableSeat(searchData)
            getAlreadyBookedSeat(isSelect.id)
        }

    }, [isClick])

    return (
        <div className='w-full h-full grid grid-rows-10 grid-flow-col justify-around'>
            {/* {availableSeat && availableSeat.map((el) => (
                <SeatItems key={el.id} seat={el} />
            ))} */}

            {filterAvailableSeat}

        </div>
    )
}

export default SeatSelectForm