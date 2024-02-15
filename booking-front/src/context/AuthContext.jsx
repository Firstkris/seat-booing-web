import { useState } from 'react'
import { createContext } from 'react'
import * as authApi from '../api/auth.js'

export const AuthContext = createContext()
function AuthContextProvider({ children }) {

    const [user, setUesr] = useState()

    const register = async (user) => {
        console.log(user);
        const res = await authApi.register(user)
        console.log(res);
    }

    const sharedOgj = { register, user }

    return (
        <AuthContext.Provider value={sharedOgj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider