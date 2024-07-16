import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import WarningModal from '../components/WarningModal';
import useBookingContext from '../hooks/useBookingContext';
import Loading from '../components/Loading';
import Button from '../components/Button';
import Step from '../components/Step';
import SeatSelectForm from '../feature/booking/components/SeatSelectForm';
import SummaryCard from '../components/SummaryCard';

function SeatSelectPage() {
    const { isClick, checkIsClick, bookedSeat, onCancelSeat, onEditBooking } =
        useBookingContext();
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(true);
    const [editedSeat, setEditedSeat] = useState({});
    const navigate = useNavigate();

    const booking_detail_id = JSON.parse(
        localStorage.getItem('booking_detail_id')
    );

    // console.log(bookedSeat);

    // for edit
    const hdlOnClose = () => {
        checkIsClick();
        setOpen(false);
        for (const key in bookedSeat) {
            if (Object.hasOwnProperty.call(bookedSeat, key)) {
                console.log(key);
                onCancelSeat(key);
            }
        }
        setIsLoading(true);
        setOpen(true);
        setTimeout(() => {
            setIsLoading(false);
        }, [400]);
    };

    const hdlOnConfirmEdit = async () => {
        try {
            await onEditBooking(booking_detail_id.id, editedSeat.id);
            toast.success('Edit Booking successfully');
            localStorage.removeItem('booking_detail_id');
            navigate('/profile');
        } catch (error) {
            toast.error(error.response?.data.message);
        }
    };

    useEffect(() => {
        if (!booking_detail_id?.isEdit) return;
        for (const key in bookedSeat) {
            if (Object.hasOwnProperty.call(bookedSeat, key)) {
                console.log(bookedSeat[key].seat);
                setEditedSeat(bookedSeat[key].seat);
            }
        }
    }, [Object.keys(bookedSeat).length]);

    if (isLoading) return <Loading />;

    return (
        <>
            <div className='flex flex-col justify-center h-screen gap-12 w-10/12 mx-auto mt-8 '>
                {booking_detail_id?.isEdit ? '' : <Step stepItems={4} />}

                <div className=' h-full'>
                    <div className='flex justify-around gap-2 max-md:flex-col-reverse max-md:gap-6'>
                        {/* SeatSelectForm */}
                        <div className='w-4/12 border-primary border-2 rounded-[40px] max-md:w-full max-lg:w-1/2'>
                            <div className='w-full '>
                                <SeatSelectForm
                                    booking_detail_id={booking_detail_id}
                                />
                            </div>
                        </div>

                        {/* Summay Card && Button */}
                        <div className=' w-1/2 max-md:w-full'>
                            <SummaryCard seatInfo={true} />

                            {/* Button  */}
                            <div className='flex justify-around mx-auto  gap-16 mt-16  '>
                                <div className='flex w-full gap-16 max-md:flex-col max-lg:w-3/4 max-lg:items-center'>
                                    {!booking_detail_id?.isEdit ? (
                                        <>
                                            <div className='w-full'>
                                                <Link to={'/passenger-info'}>
                                                    <Button
                                                        btnBg='btn-primary bg-transparent border-2 hover:bg-primary hover:border-primary'
                                                        name={'ย้อนกลับ'}
                                                    ></Button>
                                                </Link>
                                            </div>

                                            <div className='w-full'>
                                                <Link to={'/payment'}>
                                                    <Button
                                                        name={'ถัดไป'}
                                                    ></Button>
                                                </Link>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='w-full'>
                                                <Link to={'/profile'}>
                                                    <Button
                                                        onClick={() =>
                                                            localStorage.removeItem(
                                                                'booking_detail_id'
                                                            )
                                                        }
                                                        btnBg='btn-primary bg-transparent border-2 hover:bg-primary hover:border-primary'
                                                        name={'ย้อนกลับ'}
                                                    ></Button>
                                                </Link>
                                            </div>

                                            {/* <div className="w-full">
                                                <Link to={'/payment'}>
                                                    <Button name={'ถัดไป'}></Button>
                                                </Link>
                                            </div> */}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {booking_detail_id && isClick && open && (
                <div className=''>
                    <WarningModal>
                        <div className='flex flex-col mb-4'>
                            <p className='text-lg'>
                                หมายเลขที่นั่งใหม่ของคุณคือ
                            </p>
                            <span className='text-4xl font-bold'>
                                {editedSeat.seat_code}
                            </span>
                        </div>

                        <div className='flex w-full mx-auto justify-center gap-6'>
                            <div className='w-full'>
                                <Button
                                    onClick={hdlOnConfirmEdit}
                                    btnBg='btn-primary'
                                    name={'ยืนยันที่นั่งใหม่'}
                                ></Button>
                            </div>
                            <div className='w-full'>
                                <Button
                                    onClick={hdlOnClose}
                                    btnBg=''
                                    name={'ยังไม่แน่ใจ'}
                                ></Button>
                            </div>
                        </div>
                    </WarningModal>
                </div>
            )}
        </>
    );
}

export default SeatSelectPage;
