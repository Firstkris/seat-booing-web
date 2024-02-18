import { Navigate } from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext"
import useSearchContext from "../hooks/useSearchContext"


function ProtectedRoute({ children }) {

    const { schedule } = useSearchContext()
    return (
        schedule.length === 0 ? <Navigate to={"/"} /> : ""
    )
}

export default ProtectedRoute