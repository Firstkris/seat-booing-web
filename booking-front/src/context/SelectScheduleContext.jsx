import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const SelectScheduleContext = createContext()
function SelectScheduleContextProvider({ children }) {

    const [selectSchedule, setSelectSchedule] = useState({})

    const onSelectSchedule = (item) => {
        setSelectSchedule(item)
    }


    const sharedObj = { selectSchedule, onSelectSchedule }
    return (
        <SelectScheduleContext.Provider value={sharedObj}>
            {children}
        </SelectScheduleContext.Provider>
    )
}

export default SelectScheduleContextProvider