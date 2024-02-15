import { Link } from "react-router-dom"
import Select from "../components/Select"
import DateInput from "../components/DateInput"
import Button from "../components/Button"
import Input from "../components/Input"



function HomePage() {
    return (
        <>
            <div className="h-[60px] text-right">
                <Link to={'/login'} className=" text-3xl">Login</Link>
            </div>

            {/* sign up hero */}
            <div className='flex justify-around h-screen overflow-hidden' >
                <div className='px-8 translate-y-1/4 w-1/2 '>
                    <div className='flex flex-col h-svh gap-16' >
                        <div>
                            <p className='text-7xl font-extrabold'>Find joy</p>
                            <p className='text-7xl font-thin my-2'>in your journey</p>
                        </div>

                        <div>
                            <p className='text-xl font-thin'>It is time to travel with comfort and joy.</p>
                            <p className='text-xl font-thin'>Come and be part of our journey</p>
                        </div>
                        <Link to={'/register'}>
                            <Button name={"JOIN NOW"}></Button>
                        </Link>
                    </div>
                </div>

                {/* card booking */}
                <div className="translate-y-1/4 w-5/12">

                    <div className='grid grid-rows-6 p-6 h-1/2 w-full bg-primary rounded-[40px] gap-6 ' >
                        <p className='text-5xl justify-self-center font-semibold'>จองตั๋วโดยสาร</p>
                        <Select label={'ต้นทาง'}></Select>
                        <Select label={'ปลายทาง'}></Select>

                        {/* <DateInput></DateInput> */}

                        <Input type={"date"} label={"วันเดินทาง"}></Input>


                        <Button name={"search"}></Button>


                    </div>
                </div>
            </div>
            <div className='top-0 -translate-x-[calc(100vw-25%)] border border-primary rounded-[40px] h-[2024px] w-full rotate-[8deg] -z-10 fixed '></div>
        </>
    )
}

export default HomePage