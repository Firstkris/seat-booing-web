import { Navigate } from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext"

function RedirectRoute({ children }) {

    const { user } = useAuthContext()


    return user ? <Navigate to="/" /> : children
}

export default RedirectRoute