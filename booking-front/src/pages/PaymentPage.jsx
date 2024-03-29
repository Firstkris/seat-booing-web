
import Step from "../components/Step"
import SummaryCard from "../components/SummaryCard"

import PaymentCard from "../components/PaymentCard"

function PaymentPage() {
    return (
        <>
            <div className="flex flex-col justify-center  h-screen gap-12 w-10/12 mx-auto mt-8 ">

                <Step stepItems={5} />

                <div className="h-3/4 ">
                    <div className="flex justify-around gap-2 max-md:flex-col-reverse max-md:gap-6">

                        {/* Summary Card */}
                        <div className="w-4/12 rounded-[40px] max-md:w-full max-lg:w-1/2">
                            <div className="w-full ">
                                <SummaryCard seatInfo={true} />
                            </div>
                        </div>

                        {/* Payment Card && Button */}
                        <div className=" w-1/2 max-md:w-full">

                            <PaymentCard />
                            {/* Button  */}

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentPage