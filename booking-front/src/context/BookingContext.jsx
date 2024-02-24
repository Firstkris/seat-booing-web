import { useState } from "react"
import { createContext } from "react"
import { createBooking, createBookingDetail, findAllAvailableSeat, updateAvailableSeatAmount, updateSeatStatus } from "../api/booking"
import useAuthContext from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom"

export const BookingContext = createContext()
function BookingContextProvider({ children }) {

    const [availableSeat, setAvailableSeat] = useState([])
    const [bookedSeat, setBookedSeat] = useState({})
    const [isClick, setIsClick] = useState(false)
    const navigate = useNavigate()

    const checkIsClick = () => {
        setIsClick(prv => !prv)
    }

    const onBookSeat = (items) => {
        setBookedSeat(prv => ({ ...prv, ...items }))
    }

    const onCancelSeat = (id) => {
        // setBookedSeat(prv => ({ ...prv, [id]: '' }))
        delete bookedSeat[id]
    }

    console.log(bookedSeat);

    const getAllAvailableSeat = async (searchData) => {
        const res = await findAllAvailableSeat(searchData)
        setAvailableSeat(res.data.allSeat)
    }

    const onConfirmBooking = async (bookingData) => {
        try {

            const { selectSchedule, bookedSeat } = bookingData
            const res = await createBooking(selectSchedule.id)
            const bookingId = res.data.newBooking.id

            for (const key in bookedSeat) {
                if (Object.hasOwnProperty.call(bookedSeat, key)) {
                    const seatId = key;
                    const status = bookedSeat[key].status
                    const bookingDetail = await createBookingDetail(bookingId, +seatId)
                    console.log(bookingDetail);
                    await updateSeatStatus(seatId, status)
                }
            }

            const seatNum = Object.keys(bookedSeat).length
            await updateAvailableSeatAmount(selectSchedule.id, seatNum)
            navigate('/ticket')

        } catch (error) {
            console.log(error);
        }


    }


    const sharedObj = {
        getAllAvailableSeat,
        availableSeat,
        onBookSeat,
        bookedSeat,
        onCancelSeat,
        checkIsClick,
        isClick,
        onConfirmBooking
    };
    return (
        <BookingContext.Provider value={sharedObj}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingContextProvider