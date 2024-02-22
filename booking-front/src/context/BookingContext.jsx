import { useState } from "react"
import { createContext } from "react"
import { findAllAvailableSeat } from "../api/booking"

export const BookingContext = createContext()
function BookingContextProvider({ children }) {

    const [availableSeat, setAvailableSeat] = useState([])
    const [bookedSeat, setBookedSeat] = useState({})
    const [isClick, setIsClick] = useState(false)

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



    const sharedObj = {
        getAllAvailableSeat,
        availableSeat,
        onBookSeat,
        bookedSeat,
        onCancelSeat,
        checkIsClick,
        isClick
    };
    return (
        <BookingContext.Provider value={sharedObj}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingContextProvider