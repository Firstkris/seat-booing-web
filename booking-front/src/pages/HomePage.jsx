import { Link } from "react-router-dom"
import Select from "../components/Select"
import DateInput from "../components/DateInput"
import Button from "../components/Button"
import Input from "../components/Input"
import Modal from "../components/Modal"
import LoginForm from "../feature/auth/components/LoginForm"



function HomePage() {
    return (
        <div className="h-screen overflow-hidden px-8 max-sm:overflow-auto  ">
            <div className="w-full ">
                <div className="flex justify-end translate-y-32 max-sm:translate-y-8">
                    <Modal
                        label={"Login"}
                        icon={"https://www.svgrepo.com/show/483912/person.svg"}
                    >
                        <LoginForm />


                    </Modal>
                </div>
            </div>

            {/* sign up hero */}
            <div className='flex justify-between max-sm:flex-col-reverse' >

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
                <div className="translate-y-1/4 w-5/12 max-sm:w-full">

                    <div className='grid grid-rows-5 p-6 h-1/2 w-full bg-primary rounded-[40px] gap-6 ' >
                        <p className='text-5xl justify-self-center font-semibold self-center '>จองตั๋วโดยสาร</p>
                        <Select label={'ต้นทาง'}></Select>
                        <Select label={'ปลายทาง'}></Select>

                        {/* <DateInput></DateInput> */}

                        <Input type={"date"} label={"วันเดินทาง"}></Input>


                        <Button name={"search"}></Button>


                    </div>
                </div>
            </div>
            <div className='top-0 -translate-x-[calc(100vw-25%)] border border-primary rounded-[40px] h-[2024px] w-full rotate-[8deg] -z-10 fixed '></div>
        </div>
    )
}

export default HomePage