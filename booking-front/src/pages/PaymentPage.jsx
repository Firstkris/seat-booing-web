import { Link } from "react-router-dom"
import Step from "../components/Step"
import SummaryCard from "../components/SummaryCard"
import Button from "../components/Button"

function PaymentPage() {
    return (
        <>
            <div className="flex flex-col justify-center h-screen gap-12 w-10/12 mx-auto mt-8 ">

                <Step stepItems={5} />

                <div className=" h-full">
                    <div className="flex justify-around gap-2 max-md:flex-col-reverse max-md:gap-6">

                        {/* Summary Card */}
                        <div className="w-4/12 rounded-[40px] max-md:w-full max-lg:w-1/2">
                            <div className="w-full ">
                                <SummaryCard seatInfo={true} />
                            </div>
                        </div>

                        {/* Payment Card && Button */}
                        <div className=" w-1/2 max-md:w-full">

                            <SummaryCard />
                            {/* Button  */}
                            <div className="flex justify-around w-1/2 mx-auto gap-16 mt-16 max-lg:flex-col max-lg:w-3/4 max-lg:items-center ">
                                <div className="w-1/2">
                                    <Link to={'/passenger-info'}>
                                        <Button btnBg="btn-primary bg-transparent border-2 hover:bg-primary hover:border-primary" name={'ย้อนกลับ'}></Button>
                                    </Link>

                                </div>
                                <div className="w-1/2">
                                    <Link to={'/payment'}>
                                        <Button name={'ถัดไป'}></Button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentPage