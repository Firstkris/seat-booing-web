import { Link } from "react-router-dom"
import Button from "../components/Button"
import Step from "../components/Step"

import SummaryCard from "../components/SummaryCard"
import UserInfoCard from "../components/UserInfoCard"

function PassengerInfo() {

    localStorage.removeItem('booking_detail_id')

    return (
        <div className="flex flex-col justify-center h-screen gap-12 w-10/12 mx-auto mt-8 ">
            <Step stepItems={3} />
            {/* <form className="h-full"> */}
            <div className="h-3/4 p-6">
                <div className=" grid grid-cols-2 gap-8 h-1/2 max-lg:grid-cols-1">

                    <UserInfoCard />
                    <div>

                        <SummaryCard />

                        <div className="flex justify-around w-1/2 mx-auto gap-16 mt-8 max-lg:flex-col max-lg:w-3/4 max-lg:items-center ">
                            <div className="w-1/2">
                                <Link to={'/schedule'}>
                                    <Button btnBg="btn-primary bg-transparent border-2 hover:bg-primary hover:border-primary" name={'ย้อนกลับ'}></Button>
                                </Link>
                            </div>
                            <div className="w-1/2">
                                <Link to={'/seat-select'}>
                                    <Button name={'ถัดไป'}></Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default PassengerInfo