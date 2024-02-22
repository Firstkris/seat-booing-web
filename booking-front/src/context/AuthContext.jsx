import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify'

import * as authApi from '../api/auth.js'
import { clearToken, getToken, setToken } from '../utilities/local-storage.js'

export const AuthContext = createContext()
function AuthContextProvider({ children }) {

    const [user, setUser] = useState()
    const [isLoading, setLoading] = useState(true)
    const [selectSchedule, setSelectSchedule] = useState({})

    const register = async (user) => {
        console.log(user);
        const res = await authApi.register(user)
        setUser(res.data.newUser)
        setToken(res.data.accessToken)
    }

    const login = async (loginData) => {
        const res = await authApi.login(loginData)

        setTimeout(() => { }, 1000)
        setUser(res.data.user)
        setToken(res.data.accessToken)
    }

    const logOut = () => {
        setUser(null)
        clearToken()
        localStorage.clear()
    }

    const getUserByToken = async () => {
        try {
            setTimeout(() => { setLoading(false) }, 500)
            const res = await authApi.fetchUser()
            setUser(res.data.user)


        } catch (error) {
            toast.error(error.response?.data.message)
        } finally {
            setLoading(false)
        }

    }

    const onSelectSchedule = (item) => {
        localStorage.setItem('selectedSchedule', JSON.stringify(item))
        setSelectSchedule(item)
    }

    const getItemFromLocalStorage = () => {
        const selectedItem = localStorage.getItem('selectedSchedule')
        onSelectSchedule(JSON.parse(selectedItem))
    }

    useEffect(() => {

        getItemFromLocalStorage()
    }, [])


    useEffect(() => {
        const token = getToken()
        getItemFromLocalStorage()
        if (token) getUserByToken()
        setTimeout(() => { setLoading(false) }, 500)
    }, [])



    const sharedOgj = {
        register,
        login,
        user,
        logOut,
        isLoading,
        onSelectSchedule,
        selectSchedule
    };


    return (
        <AuthContext.Provider value={sharedOgj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider