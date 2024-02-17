import { useState } from 'react'
import { createContext } from 'react'
import * as authApi from '../api/auth.js'
import { setToken } from '../utilities/local-storage.js'

export const AuthContext = createContext()
function AuthContextProvider({ children }) {

    const [user, setUser] = useState()

    const register = async (user) => {
        console.log(user);
        const res = await authApi.register(user)
        setUser(res.data.newUser)
        setToken(res.data.accessToken)
    }

    const login = async (loginData) => {
        const res = await authApi.login(loginData)

        setUser(res.data.user)
        setToken(res.data.accessToken)
    }

    const sharedOgj = { register, login, user }

    return (
        <AuthContext.Provider value={sharedOgj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider