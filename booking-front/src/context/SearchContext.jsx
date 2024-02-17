import React from 'react'
import { useState } from 'react'

const SearchContext = React.createContext()

const defaultValue = {
    origin: "",
    destination: "",
    departureDate: new Date()
}
function SearchContextProvider({ children }) {

    const [input, setInput] = useState(defaultValue)
    const [origin, setOrigin] = useState([])
    const [destination, setDestination] = useState([])

    const sharedObj = {}
    return (
        <SearchContext.Provider value={sharedObj}>
            SearchContextProvider
        </SearchContext.Provider>
    )
}

export default SearchContextProvider