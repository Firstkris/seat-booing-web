import { Link } from "react-router-dom"
import Button from "../components/Button"
import Step from "../components/Step"
import useAuthContext from "../hooks/useAuthContext"

import SummaryCard from "../components/SummaryCard"
import UserInfoCard from "../components/UserInfoCard"

function PassengerInfo() {

    return (
        <div className="flex flex-col justify-center h-screen gap-12 w-10/12 mx-auto mt-8 ">
            <Step stepItems={3} />
            {/* <form className="h-full"> */}
            <div className="p-6">
                <div className=" grid grid-cols-2 gap-8 h-1/2 max-lg:grid-cols-1">

                    {/* <div className=" h-3/4">
                        <Card btn={false} name={"ข้อมูลผู้โดยสาร"}>

                            <hr className="border border-white" />

                            <Input label={'เลขบัตรประชาชน'} value={user.idNumber} readOnly="read-only" disable="disable"></Input>
                            <div className="flex gap-6">
                                <Input label={'ชื่อ'} value={user.firstName} readOnly="read-only"></Input>
                                <Input label={'นามสกุล'} value={user.lastName} readOnly="read-only"></Input>
                            </div>
                            <Input label={'หมายเลขโทรศัพท์'} value={user.mobile} readOnly="read-only"></Input>
                            <Input label={'E-mail'} value={user.email} readOnly="read-only"></Input>

                        </Card>
                    </div> */}

                    {/* <div>
                        <Card btn={false} bg={false} name={`ข้อมูลเส้นทาง`} >
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
                                        <p className="font-semibold">{departureDate} {departTime}</p>
                                    </div>
                                </div>

                            </div>

                        </Card>
                    </div> */}

                    <UserInfoCard />
                    <SummaryCard />

                </div>
            </div>


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
            {/* </form> */}

        </div>
    )
}

export default PassengerInfo