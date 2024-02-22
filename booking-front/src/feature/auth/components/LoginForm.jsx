import { useState } from 'react'
import { toast } from 'react-toastify'

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { validateLogin } from '../../validation/validation-login'
import useAuthContext from '../../../hooks/useAuthContext'


const defaultValue = { email: "", password: "" }

function LoginForm() {
    const [input, setInput] = useState(defaultValue)
    const [error, setError] = useState({})

    const { login } = useAuthContext()
    const handleSubmit = async (e) => {

        try {
            e.preventDefault()
            const validateError = validateLogin(input)
            if (validateError) {
                //setError สำหรับ handle ui แจ้งเตือน user
                console.log(validateError);
                return setError(validateError)
            }
            await login(input)
            toast.success('login success')


        } catch (error) {
            toast.error(error.response?.data.message)
        }


    }

    const handleChangeInput = (e) => {
        setError({})
        setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }))

    }

    return (

        <form className='text-center flex flex-col gap-6 p-4' onSubmit={handleSubmit}>

            <Input label={"Email"} name={"email"} value={input.email} onChange={handleChangeInput} errorMsg={error.email} vertical={true} />
            <Input label={"Password"} name={"password"} value={input.password} onChange={handleChangeInput} errorMsg={error.password} vertical={true} />
            <div className='h-8 mt-4'>
                <Button name={"Login"} onClick={handleSubmit} ></Button>
            </div>

        </form>

    )
}

export default LoginForm