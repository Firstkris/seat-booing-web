
import { Link } from "react-router-dom"
import RegisterForm from "../feature/auth/components/RegisterForm"

function RegisterPage() {



    return (
        <div className="relative overflow-hidden max-sm:overflow-auto">

            <div className='translate-y-[60px] max-w-screen-md mx-auto max-sm:translate-y-0  '>
                <RegisterForm></RegisterForm>
                <div className=" absolute -bottom-0 max-sm:hidden">
                    {/* <img
                        className="invisible"
                        src="src/assets/mountain.svg">

                    </img> */}

                    {/* <div className="absolute bottom-0 left-0">

                        <div className="w-screen flex justify-between items-center">

                            <img src="src/assets/man1.png"></img>


                            <img src="src/assets/women1.png"></img>

                        </div>
                    </div> */}

                </div>

            </div>

        </div>
    )
}

export default RegisterPage