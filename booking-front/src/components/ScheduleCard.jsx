
import { useNavigate } from 'react-router-dom'
import { OriginToDes } from '../icon'
import Button from './Button'
import useAuthContext from '../hooks/useAuthContext'

function ScheduleCard({ items }) {

    const navigate = useNavigate()
    const { onSelectSchedule } = useAuthContext()
    // const { onSelectSchedule } = useSelectScheduleContext()

    const { origin,
        destination,
        price

    } = items

    const departTime = new Date(items.departTime).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
    const arrivalTime = new Date(items.arrivalTime).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(items);
        onSelectSchedule(items)
        navigate('/passenger-info')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <Button
                    btnBg={"bg-base-100 border-primary border-2 hover:bg-primary hover:border-primary text-2xl "} >


                    <div className='text-black flex justify-between items-center w-full p-6'>
                        <div className='flex flex-col gap-4 w-full justify-center items-center text-base font-semibold max-lg: '>
                            <p>{origin}</p>
                            <hr className='border border-black w-8' />
                            <p>{destination}</p>
                        </div>
                        <div className='flex gap-4 w-full justify-center items-center font-extrabold '>
                            <p className=' font-extrabold'>{departTime}</p>
                            <OriginToDes />
                            <p>{arrivalTime}</p>
                        </div>
                        <div className='flex justify-center items-center font-extrabold grow w-full'>
                            <p>฿ {price}</p>
                        </div>
                    </div>

                </Button>


            </form>
        </>
    )
}

export default ScheduleCard