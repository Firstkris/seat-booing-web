import { useContext } from 'react'
import { SelectScheduleContext } from '../context/SelectScheduleContext'


function useSelectScheduleContext() {
    return (useContext(SelectScheduleContext))
}

export default useSelectScheduleContext