import ScheduleCard from '../components/ScheduleCard'
import Step from '../components/Step'
import SearchCard from '../feature/search/components/SearchCard'
import useSearchContext from '../hooks/useSearchContext'
import DateChangeButtonGroup from '../feature/search/components/DateChangeButtonGroup'
import { Link } from 'react-router-dom'
import Button from '../components/Button'



function SchedulePage() {


    const { schedule } = useSearchContext()

    return (
        <div className='relative flex flex-col gap-6 w-10/12 mx-auto mt-4'>
            <SearchCard vertical={false} />
            <hr />

            <Step stepItems={2} />

            {/* Button group */}
            <DateChangeButtonGroup />

            <hr />

            <>
                {schedule && schedule.map((el) => (
                    <ScheduleCard key={el.id} items={el} />

                ))}
            </>

            <div className='w-full flex justify-center'>

                <div className="w-4/12">
                    <Link to={'/'}>
                        <Button btnBg="btn-primary bg-transparent border-2 hover:bg-primary hover:border-primary" name={'ย้อนกลับ'}></Button>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default SchedulePage