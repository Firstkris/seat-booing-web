
import { Link } from "react-router-dom"
import RegisterForm from "../feature/auth/components/RegisterForm"

function RegisterPage() {



    return (
        <div className="relative overflow-hidden max-sm:overflow-auto">

            <div className='translate-y-[60px] max-w-screen-md mx-auto max-sm:translate-y-0  '>
                <RegisterForm></RegisterForm>
                <div className="absolute -bottom-0 max-sm:hidden">
                    <img
                        src="src/assets/mountain.svg">



                    </img>

                    <div className="w-full flex">
                        <div className=" -right-64 h-11/12 absolute bottom-0 z-10 flex justify-between items-center gap-[200px]">
                            <img src="src/assets/women1.png"></img>
                        </div>

                        <div className=" -left-60 absolute bottom-0 z-10 flex justify-between items-center gap-[200px]">
                            <img src="src/assets/man1.png"></img>
                        </div>
                    </div>

                </div>

            </div>





        </div>
    )
}

export default RegisterPage