
import RegisterForm from "../feature/auth/components/RegisterForm"

function RegisterPage() {



    return (
        <div className="relative flex justify-center items-center h-screen max-sm:overflow-auto">

            <div className='max-w-screen-md mx-auto max-sm:translate-y-0 w-11/12'>
                <RegisterForm></RegisterForm>

            </div>

            <div className="absolute bottom-0 right-0 left-0 -z-10">

                <div className="flex justify-between items-end">
                    <div>

                        <img className="flex-shrink  max-md:hidden" src="src/assets/man1.png"></img>
                    </div>
                    <div>

                        <img className="flex-shrink" src="src/assets/mountain.svg"></img>
                    </div>

                    <div>
                        <img className="flex-shrink  max-md:hidden" src="src/assets/women1.png"></img>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default RegisterPage