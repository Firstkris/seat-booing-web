import { useContext } from "react"
import { BookingContext } from "../context/BookingContext"


function useBookingContext() {
    return (useContext(BookingContext))
}

export default useBookingContext