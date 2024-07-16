import { useEffect } from 'react';
import useBookingContext from '../../../hooks/useBookingContext';
import SeatItems from './SeatItems';
import { useState } from 'react';

function SeatSelectForm({ booking_detail_id }) {
    // const { user, selectSchedule } = useAuthContext()
    const [maxSeat, setMaxSeat] = useState();
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     if (booking_detail_id.isEdit) {
    //         setMaxSeat(1)
    //     }
    //     else {
    //         setMaxSeat(30)
    //     }
    // }, [])

    const {
        availableSeat,
        getAllAvailableSeat,
        isClick,
        getAlreadyBookedSeat,
        alreadyBookSeat,
    } = useBookingContext();

    // console.log(alreadyBookSeat.length);

    const filterAvailableSeat = availableSeat.map((el) => {
        let checkAvailableSeat;
        if (alreadyBookSeat.length > 0) {
            for (let i = 0; i < alreadyBookSeat.length; i++) {
                if (el.id === alreadyBookSeat?.[i].seat_id) {
                    // console.log(alreadyBookSeat);
                    // console.log(alreadyBookSeat[i].seat_id);
                    el.newStatus = true;
                    checkAvailableSeat = (
                        <SeatItems
                            key={el.id}
                            seat={el}
                            maxSeat={maxSeat}
                            setCount={setCount}
                        />
                    );
                } else {
                    checkAvailableSeat = (
                        <SeatItems
                            key={el.id}
                            seat={el}
                            maxSeat={maxSeat}
                            setCount={setCount}
                        />
                    );
                }
            }
        } else {
            checkAvailableSeat = (
                <SeatItems
                    key={el.id}
                    seat={el}
                />
            );
        }

        return checkAvailableSeat;
    });

    const isSelect = JSON.parse(localStorage.getItem('selectedSchedule'));
    const searchData = {
        departureDate: new Date(isSelect.departureDate),
        scheduleId: isSelect.id,
    };

    useEffect(() => {
        if (Object.keys(isSelect).length > 0) {
            getAllAvailableSeat(searchData);
            getAlreadyBookedSeat(isSelect.id);
        }
    }, [isClick]);

    return (
        <div className='w-full h-full grid grid-rows-10 grid-flow-col justify-around'>
            {/* {availableSeat && availableSeat.map((el) => (
                <SeatItems key={el.id} seat={el} />
            ))} */}

            {filterAvailableSeat}
        </div>
    );
}

export default SeatSelectForm;
