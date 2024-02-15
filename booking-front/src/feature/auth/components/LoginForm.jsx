
import Button from '../../../components/Button'
import Input from '../../../components/Input'

function LoginForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (

        <form className='text-center'>
            <Input label={"Email"} />
            <Input label={"Password"} />
            <div className='h-8 mt-4'>
                <Button name={"Login"} onClick={handleSubmit}></Button>
            </div>

        </form>

    )
}

export default LoginForm