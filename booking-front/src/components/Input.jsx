import React from 'react'
import { useState } from 'react'

function Input({
    type,
    name,
    value,
    onChange,
    label,
    errorMsg,
    vertical = true

}) {
    const errorStyle = errorMsg
        ? `border-2 border-red-500`
        : ''

    return (

        <label className="form-control w-full ">
            {vertical
                && <div className="label">
                    <span className="label-text text-base max-sm:text-sm">{label}</span>
                </div>
            }

            <input
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                className={`input input-bordered w-full rounded-full max-sm:h-8  ${errorStyle}`}
            />
            <span className='text-red-500'>{errorMsg}</span>

        </label>


    )
}

export default Input