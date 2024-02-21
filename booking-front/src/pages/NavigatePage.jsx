import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

function NavigatePage() {
    const navigate = useNavigate()


    setTimeout(() => {
        navigate('/')
    }, 2000)

    return (
        <>

            <div className='relative flex justify-center items-center h-screen '>
                <div className='flex flex-col justify-center items-center gap-5 z-10'>
                    <p className='text-3xl text-secondary'>PAGE NOT FOUND </p>
                    <p>REDIRECTING TO HOMEPAGE...</p>
                </div>
                <div className='absolute'>

                    <Loading />

                </div>
            </div>

        </>
    )
}

export default NavigatePage