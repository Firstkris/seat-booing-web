import Card from './Card'


function Ticket({ items, onDeactivateBooking, onEditBooking }) {

    // const [open, setOpen] = useState(false)

    const {
        origin,
        destination,
        seat_code,
    } = items;



    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };

    const departureDate = new Date(items.departureDate).toLocaleString('th-TH', options)
    const departTime = new Date(items.departTime).toLocaleTimeString([], { hourCycle: 'h24', hour: "2-digit", minute: '2-digit' })

    const hdlOnDeactivateBooking = () => {
        onDeactivateBooking(items)
    }

    const hdlOnEditBooking = () => {
        onEditBooking(items)
    }




    return (
        <>
            <div className='mt-8'>
                <Card btn={false} bg={false} name={`ข้อมูลการจอง`} >
                    <div className='flex justify-end gap-6 text-lg'>
                        <div role='button' className='text-secondary' onClick={hdlOnDeactivateBooking}>ยกเลิกการจอง</div>
                        <div role='button' className='text-secondary' onClick={hdlOnEditBooking}> edit </div>
                        {/* <div role='button' className='text-secondary' onClick={oncancel}> cancel</div> */}
                    </div>


                    <hr className='border border-primary' />
                    <div className="flex flex-col gap-4 text-base">

                        <div className="grid grid-cols-3 ">
                            <div className="text-left">

                                <p>เดินทางจาก : </p>

                            </div>
                            <div className="text-left col-span-2">
                                <p className="font-semibold">{origin}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 ">
                            <div className="text-left">

                                <p>ปลายทาง : </p>

                            </div>
                            <div className="text-left col-span-2">
                                <p className="font-semibold">{destination}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 ">
                            <div className="text-left">

                                <p>วันเวลาเดินทาง : </p>
                            </div>
                            <div className="text-left col-span-2">
                                <p className="font-semibold">{departureDate} เวลา {departTime}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 ">
                            <div className="text-left">

                                <p>ที่นั่ง : </p>
                            </div>
                            <div className="text-left col-span-2">
                                <p className="font-semibold text-secondary">{seat_code}</p>
                            </div>
                        </div>

                    </div>

                </Card>
            </div>
        </>
    )
}

export default Ticket