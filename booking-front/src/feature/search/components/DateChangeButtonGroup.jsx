import React from 'react'
import { LeftArrow, PersonIcon, RightArrow } from '../../../icon'
import Button from '../../../components/Button'
import { useState } from 'react'
import useSearchContext from '../../../hooks/useSearchContext'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { getSchedule } from '../../../api/search'
import Modal from '../../../components/Modal'


const defaultValue = {
    origin: "",
    destination: "",
    departureDate: new Date()
}
function DateChangeButtonGroup() {

    const [input, setInput] = useState(defaultValue)
    const [origin, setOrigin] = useState([])
    const [destination, setDestination] = useState([])

    const [date, setDate] = useState(0)
    const [month, setmonth] = useState()
    const [year, setYear] = useState()
    const [dateTime, setDateTime] = useState({})

    const [click, setClick] = useState(false)

    const { schedule, onSetSchedule } = useSearchContext()

    //schedule = [{},{},...]
    const data = schedule[0]

    console.log(schedule?.[0]);

    const options = {
        month: "short",
        // day: "numeric",
    };

    let fullDateTime, scheduleMonth, scheduleDate, scheduleYear, monthName;

    const getDate = () => {
        fullDateTime = new Date(schedule?.[0]?.departureDate)
        scheduleDate = +fullDateTime.getDate()
        scheduleMonth = +fullDateTime.getMonth() + 1
        scheduleYear = fullDateTime.getFullYear()
        monthName = fullDateTime.toLocaleDateString([], options)

        setDateTime(prv => ({ ...prv, scheduleDate, scheduleMonth, monthName, scheduleYear }))
        // setDate(scheduleDate)
        // setmonth(scheduleMonth)
        // setYear(scheduleYear)
    }

    const handleChangeDate = async (num) => {
        console.log('handleChangeDate', handleChangeDate)

        setDateTime(prv => ({ ...prv, ["scheduleDate"]: dateTime.scheduleDate + num }))

        setClick(prv => !prv)

    }

    const reloadScheduleByDateChange = async () => {
        try {
            // console.log('search');

            console.log(`${dateTime.scheduleYear}-0${dateTime.scheduleMonth}-${dateTime.scheduleDate}`);
            const searchData = {
                origin: data.origin,
                destination: data.destination,
                departureDate: new Date(`${dateTime.scheduleYear}-0${dateTime.scheduleMonth}-${dateTime.scheduleDate}T00:00:00Z`)
            }
            // 20 2024 07:00:00 GMT+0700 
            console.log(searchData);
            const res = await getSchedule(searchData)
            console.log(res.data.schedule);
            onSetSchedule(res.data.schedule)
            setClick(prv => !prv)
        } catch (error) {
            toast.error(error.response?.data.message)
        }
    }

    useEffect(() => {
        getDate()

    }, [schedule])

    useEffect(() => {
        if (click) reloadScheduleByDateChange()
    }, [click])

    return (
        <>
            {schedule.length !== 0
                ? (

                    <div className='flex justify-center items-center text-center  '>
                        <div
                            onClick={() => handleChangeDate(-1)}
                            className='w-12 cursor-pointer '>
                            <LeftArrow className="hover:fill-primary" />
                        </div>
                        <div className=' w-3/12'>
                            <Button width='w-1/2' btnBg='bg-base-100 border-2 border-primary text-black hover:btn-primary' >
                                {dateTime.scheduleDate - 1} {dateTime.monthName}
                            </Button>
                        </div>
                        <div className='w-3/12  '>
                            <Button width='w-1/2' btnBg='btn-primary text-black'>
                                {dateTime.scheduleDate} {dateTime.monthName}
                            </Button>
                        </div>
                        <div className='w-3/12 text-black'>
                            <Button width='w-1/2' btnBg='bg-base-100 border-2 border-primary text-black hover:btn-primary'>
                                {dateTime.scheduleDate + 1} {dateTime.monthName}
                            </Button>
                        </div>

                        <div
                            onClick={() => handleChangeDate(+1)}
                            className=' w-12 cursor-pointer '>

                            <RightArrow className="hover:fill-primary" />

                        </div>
                    </div>

                ) :

                (<>
                    <div className='absolute inset-0 translate-y-1/2 h-screen'>
                        <div className='flex justify-center items-center text-red-500'>
                            <h1>ไม่พบเที่ยวเดินทางในวันที่ระบุ</h1>
                        </div>
                    </div>





                </>)
            }
        </>
    )
}

export default DateChangeButtonGroup