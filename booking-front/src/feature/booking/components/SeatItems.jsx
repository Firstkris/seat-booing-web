import { useState } from 'react';
import { PersonIcon, SeatIcon, SelectedIcon } from '../../../icon';
import { useEffect } from 'react';
import useBookingContext from '../../../hooks/useBookingContext';
import WarningModal from '../../../components/WarningModal';
import Button from '../../../components/Button';

function SeatItems({ seat, maxSeat }) {
    const { onBookSeat, onCancelSeat, checkIsClick, isClick } =
        useBookingContext();

    const [isSelected, setIsSelect] = useState(false);
    // const booking_detail_id = JSON.parse(localStorage.getItem('booking_detail_id'))

    // (booking_detail_id.isEdit);
    const { seat_code, newStatus } = seat;
    // (maxSeat);
    // (newStatus);

    const onSeatSelect = () => {
        setIsSelect((prv) => !prv);
    };

    const onDeselect = () => {
        setIsSelect((prv) => !prv);
        checkIsClick();
        onCancelSeat(seat.id);
    };

    const onSetSelectedSeat = () => {
        checkIsClick();
        if (isSelected) {
            onBookSeat({ [seat.id]: { status: !isSelected, seat } });
        }
    };

    // const onEditSeat = () => {
    //     setIsSelect(prv => !prv)
    // }

    useEffect(() => {
        onSetSelectedSeat();
        // if (!isSelected && Object.keys(bookedSeat).length === 0) setIsSelect(false)
    }, [isSelected]);

    return (
        <>
            <div className='flex justify-center items-center'>
                {newStatus ? (
                    <div className='w-50 h-50 text-center'>
                        {/* <span>{seat_code}</span> */}
                        <PersonIcon className={`w-12 h-12`} />
                    </div>
                ) : (
                    <>
                        {isSelected ? (
                            <div
                                role='button'
                                onClick={onDeselect}
                            >
                                <SelectedIcon />
                            </div>
                        ) : (
                            <div
                                role='button'
                                onClick={onSeatSelect}
                                className='w-50 h-50 text-center'
                            >
                                <span>{seat_code}</span>
                                <SeatIcon />
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* 
            {booking_detail_id.isEdit && isClick &&
                <div className="-z-50">

                    <WarningModal>
                        <div className="flex flex-col gap-4">
                            <p></p>
                        </div>

                        <div className="flex w-full mx-auto justify-center gap-6">

                            <div className="w-full">
                                <Button btnBg="btn-primary" name={'ยืนยันแก้ไข'}></Button>
                            </div>
                            <div className="w-full">

                                <Button
                                    // onClick={hdlOnClose}
                                    btnBg="" name={'เลือกที่นั่งใหม่'}
                                ></Button>
                            </div>
                        </div>
                    </WarningModal>

                </div>
            } */}
        </>
    );
}

export default SeatItems;
