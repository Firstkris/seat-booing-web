import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './context/AuthContext.jsx'
import SearchContextProvider from './context/SearchContext.jsx'
import SelectScheduleContextProvider from './context/SelectScheduleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <SearchContextProvider>
            {/* <SelectScheduleContextProvider> */}
            <App />
            {/* </SelectScheduleContextProvider> */}
        </SearchContextProvider>
    </AuthContextProvider>

)
