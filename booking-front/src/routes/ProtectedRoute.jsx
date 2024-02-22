import { Navigate } from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext"
import LoginForm from "../feature/auth/components/LoginForm"

function ProtectedRoute({ children }) {

    const { user, selectSchedule } = useAuthContext()

    // const isSelect = JSON.parse(localStorage.getItem('selectedSchedule'))
    // console.log(isSelect);

    return (


        user
            ? (Object.keys(selectSchedule).length !== 0 ? children : <Navigate to={'/'} />)
            : (<>

                <div className="flex items-center h-screen">
                    <div className="w-5/12 max-sm:w-full mx-auto bg-primary p-6 rounded-[40px]">

                        <p className="text-2xl font-semibold text-center">กรุณาเข้าสู่ระบบ</p>
                        <hr className="border border-white my-4" />
                        <LoginForm />
                    </div>
                </div>

            </>)
    )
}

export default ProtectedRoute