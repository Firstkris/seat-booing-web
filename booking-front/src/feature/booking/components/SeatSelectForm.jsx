import { useEffect } from 'react'
import useAuthContext from '../../../hooks/useAuthContext'
import useBookingContext from '../../../hooks/useBookingContext'
import SeatItems from './SeatItems'

function SeatSelectForm() {

    const { user, selectSchedule } = useAuthContext()
    const { availableSeat, getAllAvailableSeat, isClick } = useBookingContext()


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
        }

    }, [isClick])

    return (
        <div className='w-full h-full grid grid-rows-10 grid-cols-3 justify-around'>
            {availableSeat && availableSeat.map((el) => (
                <SeatItems key={el.id} seat={el} />
            ))}

        </div>
    )
}

export default SeatSelectForm