import React from 'react'
import { SearchIcon } from '../icon'
import { Navigate } from 'react-router-dom'

function Button({ name, icon, onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                // onClick=<Navigate to="/register" />
                className="btn btn-secondary rounded-r-full rounded-l-full w-4/12 h-16 text-xl font-extrabold text-white max-sm:text-base max-sm:w-1/2 max-sm:h-8">

                {icon && <span>{icon}</span>}
                {name}
            </button>

        </>
    )
}

export default Button