
import SearchCard from '../feature/search/components/SearchCard'
import { OriginToDes } from '../icon'

function ScheduleCard({ }) {
    return (
        <>
            <div className={`flex justify-between items-center border-2 border-primary hover:bg-primary rounded-[40px] gap-4 px-6 py-6 text-2xl`} >

                <div className='flex gap-2 w-full justify-center items-center font-bold'>
                    <p>ต้นทาง</p>
                    <hr className='border border-black w-8' />
                    <p>ปลายทาง</p>
                </div>
                <div className='flex gap-2 w-full justify-end items-center font-extrabold '>
                    <p className=' font-extrabold'>10:00</p>
                    <OriginToDes />
                    <p>12:00</p>
                </div>
                <div className='flex justify-center items-center font-extrabold grow w-full'>
                    <p>฿ price </p>
                </div>

            </div>


        </>
    )
}

export default ScheduleCard