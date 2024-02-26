
import { Link } from 'react-router-dom'
import SummaryCard from '../components/SummaryCard'
import Button from '../components/Button'

function SummaryTicket() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-12 w-10/12 mx-auto mt-8 ">

                <p className='text-4xl'>ขอบคุณที่ใช้บริการ</p>
                <div className="flex w-3/4 gap-2 max-md:flex-col-reverse max-md:gap-6">

                    {/* Summary Card */}
                    <div className="w-full rounded-[40px] max-md:w-full max-lg:w-1/2">
                        <div className="w-full ">
                            <SummaryCard seatInfo={true} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-around w-3/4 mx-auto gap-16 mt-16 max-lg:flex-col max-lg:w-3/4 max-lg:items-center ">
                    <div className="w-1/2">
                        <Link to={'/'}>
                            <Button btnBg="btn-primary bg-transparent border-2 hover:bg-primary hover:border-primary" name={'กลับหน้าหลัก'}></Button>
                        </Link>

                    </div>

                </div>


                {/* Button  */}



            </div>
        </>
    )
}

export default SummaryTicket