import Button from '../components/Button'
import ScheduleCard from '../components/ScheduleCard'
import Step from '../components/Step'
import SearchCard from '../feature/search/components/SearchCard'
import { LeftArrow, RightArrow } from '../icon'

function SchedulePage() {
    return (
        <div className='flex flex-col gap-6 w-10/12 mx-auto mt-4'>
            <SearchCard vertical={false} />
            <hr />
            <Step />
            <div className='flex justify-center items-center text-center'>
                <div className='w-12 cursor-pointer'>
                    <LeftArrow />
                </div>
                <div className=' w-3/12'>
                    <Button width='w-1/2' btnBg='' />
                </div>
                <div className='w-3/12'>
                    <Button width='w-1/2' btnBg='btn-primary' />
                </div>
                <div className='w-3/12'>
                    <Button width='w-1/2' btnBg='' />
                </div>

                <div className=' w-12 cursor-pointer'>
                    {/* <img src='https://www.svgrepo.com/show/310612/caret-right.svg'></img> */}
                    <RightArrow />

                </div>
            </div>



            <hr />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />


        </div>
    )
}

export default SchedulePage