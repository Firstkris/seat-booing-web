import Card from './Card'
import useAuthContext from '../hooks/useAuthContext'
import useBookingContext from '../hooks/useBookingContext'
import { OriginToDes } from '../icon'
import { Link } from 'react-router-dom'
import Button from './Button'


function PaymentCard() {
    const { selectSchedule } = useAuthContext()
    const { bookedSeat, onConfirmBooking } = useBookingContext()
    const { origin, destination } = selectSchedule
    console.log(selectSchedule);
    const count = Object.keys(bookedSeat).length || 0


    const selectSeatCode = []
    for (const key in bookedSeat) {
        if (Object.hasOwnProperty.call(bookedSeat, key)) {
            const element = bookedSeat[key].seat.seat_code;
            selectSeatCode.push(element)
        }
    }

    console.log(bookedSeat);
    const bookingData = {
        selectSchedule: selectSchedule,
        bookedSeat: bookedSeat

    }

    const onSubmitBooking = (e) => {
        e.preventDefault()
        onConfirmBooking(bookingData)
    }


    return (
        <>
            <div className='flex flex-col gap-6'>
                <Card btn={false} name={`สรุปราคาที่ต้องชำระ`} >
                    <hr className='border border-white' />
                    <div className="flex flex-col gap-4 text-base">

                        <div className="flex gap-4 py-4">
                            <span className="font-semibold">{origin}</span>
                            <OriginToDes />
                            <span className="font-semibold">{destination}</span>
                        </div>

                        <div className='grid grid-cols-3'>
                            <div>
                                <p className='text-lg font-semibold'>ค่าโดยสาร</p>
                                <p className='text-lg font-light'>ราคา</p>
                            </div>

                            <div>
                                <p className='text-lg font-semibold'>ที่นั่ง</p>
                                <p className='text-lg font-semibold'>{count}</p>

                            </div>

                            <div>
                                <p className='text-lg font-semibold'>ค่าโดยสาร</p>
                                <p className='text-lg font-semibold'>{selectSchedule.price * count}</p>
                            </div>


                        </div>

                        <hr className='border border-white' />

                        <div className='flex text-right text-3xl px-4'>
                            <p className='font-semibold'>รวมชำระ</p>
                            <p className='font-semibold'>{selectSchedule.price * count}</p>
                        </div>



                    </div>

                </Card>

                <form onSubmit={onSubmitBooking}>
                    <div className="flex justify-around w-3/4 mx-auto gap-16 mt-16 max-lg:flex-col max-lg:w-3/4 max-lg:items-center ">
                        <div className="w-full">
                            <Link to={'/seat-select'}>
                                <Button btnBg="btn-primary bg-transparent border-2 hover:bg-primary hover:border-primary" name={'ย้อนกลับ'}></Button>
                            </Link>

                        </div>
                        <div className="w-full">

                            <Button name={'ชำระเงิน'} btnBg="btn-success"></Button>

                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default PaymentCard