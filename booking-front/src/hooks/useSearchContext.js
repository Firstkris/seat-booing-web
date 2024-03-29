import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'


function useSearchContext() {
    return (useContext(SearchContext))
}

export default useSearchContext