import { useState } from 'react';
import { createContext } from 'react';
import {
    createBooking,
    createBookingDetail,
    deleteBookingDetail,
    editBooking,
    findAllAvailableSeat,
    getBookedSeatByScheduleId,
    getMyBookingData,
    updateAvailableSeatAmount,
    updateSeatStatus,
} from '../api/booking';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const BookingContext = createContext();
function BookingContextProvider({ children }) {
    const [availableSeat, setAvailableSeat] = useState([]);
    const [bookedSeat, setBookedSeat] = useState({});
    const [alreadyBookSeat, setAlreadyBookSeat] = useState([]);
    const [isClick, setIsClick] = useState(false);
    const [bookingData, setBookingData] = useState();
    // const [forEditBooking, setForEditBooking] = useState({})
    // const [bookedSeat, setBookedSeat] = useState([])
    const navigate = useNavigate();

    const checkIsClick = () => {
        setIsClick((prv) => !prv);
    };

    const onBookSeat = (items) => {
        setBookedSeat((prv) => ({ ...prv, ...items }));
    };

    const onCancelSeat = (id) => {
        delete bookedSeat[id];
    };

    const getMyBooking = async () => {
        const res = await getMyBookingData();
        setBookingData(res.data.myBooking);
        // (res)
    };

    const onConfirmBooking = async (bookingData) => {
        try {
            const { selectSchedule, bookedSeat } = bookingData;
            const res = await createBooking(selectSchedule.id);
            const bookingId = res.data.newBooking.id;

            for (const key in bookedSeat) {
                if (Object.hasOwnProperty.call(bookedSeat, key)) {
                    const seatId = key;
                    // const status = bookedSeat[key].status
                    const bookingDetail = await createBookingDetail(
                        bookingId,
                        +seatId
                    );
                    // bookingDetail;
                    // await updateSeatStatus(seatId, status)
                }
            }

            const seatNum = Object.keys(bookedSeat).length;
            await updateAvailableSeatAmount(selectSchedule.id, -seatNum);
            navigate('/ticket');
        } catch (error) {
            // error;
        }
    };

    const getAllAvailableSeat = async (searchData) => {
        const res = await findAllAvailableSeat(searchData);
        setAvailableSeat(res.data.allSeat);
    };

    const getAlreadyBookedSeat = async (scheduleId) => {
        const res = await getBookedSeatByScheduleId(scheduleId);
        // res.data.alreadyBookedSeat, 'getAlreadyBookedSeat';
        setAlreadyBookSeat(res.data.alreadyBookedSeat);
    };

    const onDeleteBooking = async (bookingDetailId, scheduleId) => {
        // bookingDetailId;
        const res = await deleteBookingDetail(bookingDetailId, scheduleId);
        getMyBooking();
    };

    const onEditBooking = async (bookingDetailId, seatId) => {
        // bookingDetailId, seatId;
        const res = await editBooking(bookingDetailId, seatId);
        getMyBooking();
    };

    useEffect(() => {
        getMyBooking();
    }, []);

    const sharedObj = {
        getAllAvailableSeat,
        availableSeat,
        onBookSeat,
        bookedSeat,
        onCancelSeat,
        checkIsClick,
        isClick,
        onConfirmBooking,
        bookingData,
        getAlreadyBookedSeat,
        alreadyBookSeat,
        onDeleteBooking,
        onEditBooking,
    };
    return (
        <BookingContext.Provider value={sharedObj}>
            {children}
        </BookingContext.Provider>
    );
}

export default BookingContextProvider;
