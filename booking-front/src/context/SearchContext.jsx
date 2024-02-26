import React from 'react'
import { useState } from 'react'

export const SearchContext = React.createContext()

const defaultValue = {
    origin: "",
    destination: "",
    departureDate: new Date()
}
function SearchContextProvider({ children }) {

    const [schedule, setSchedule] = useState([])


    const onSetSchedule = (newSchedule) => {
        setSchedule(newSchedule)
    }

    const sharedObj = { schedule, onSetSchedule }
    return (
        <SearchContext.Provider value={sharedObj}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider