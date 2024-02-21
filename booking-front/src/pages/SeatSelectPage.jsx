import { Link } from "react-router-dom"
import Button from "../components/Button"
import Card from "../components/Card"
import Input from "../components/Input"
import Step from "../components/Step"
import useAuthContext from "../hooks/useAuthContext"

function SeatSelectPage() {

    const { user } = useAuthContext()
    console.log(user);

    return (
        <div className="flex flex-col justify-center h-screen gap-12 w-10/12 mx-auto mt-8 ">
            <Step stepItems={4} />
            <form className="h-full">



                <div className="flex justify-around w-1/2 mx-auto gap-16 mt-8 max-lg:flex-col max-lg:w-3/4 max-lg:items-center ">
                    <div className="w-1/2">
                        <Button btnBg="btn-primary bg-transparent border-2 hover:bg-primary hover:border-primary" name={'ย้อนกลับ'}></Button>
                    </div>
                    <div className="w-1/2">
                        <Link to={'/seat-select'}>
                            <Button name={'ถัดไป'}></Button>
                        </Link>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default SeatSelectPage