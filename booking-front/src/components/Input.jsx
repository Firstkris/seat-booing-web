import React from 'react'
import { useState } from 'react'

function Input({
    type,
    name,
    value,
    onChange,
    label

}) {

    return (

        <label className="form-control w-full ">
            <div className="label">
                <span className="label-text text-base max-sm:text-sm">{label}</span>
            </div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                className="input input-bordered w-full rounded-full max-sm:h-8 "
            />

        </label>


    )
}

export default Input