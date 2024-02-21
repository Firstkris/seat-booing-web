import { useState } from 'react'
import Button from '../components/Button'
import ScheduleCard from '../components/ScheduleCard'
import Step from '../components/Step'
import SearchCard from '../feature/search/components/SearchCard'
import { LeftArrow, RightArrow } from '../icon'
import useSearchContext from '../hooks/useSearchContext'
import { useEffect } from 'react'
import DateChangeButtonGroup from '../feature/search/components/DateChangeButtonGroup'
import useAuthContext from '../hooks/useAuthContext'



function SchedulePage() {


    const { schedule } = useSearchContext()


    console.log(schedule);
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


        </div>
    )
}

export default SchedulePage