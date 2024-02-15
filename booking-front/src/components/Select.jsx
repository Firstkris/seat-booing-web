import { useState } from "react"

function Select({ name, onChange, label, items, value }) {

    return (
        <>
            <label className="form-control w-full  ">
                <div className="label">
                    <span className="label-text text-base max-sm:text-sm">{label}</span>
                </div>
                <select
                    onChange={onChange}
                    value={value}
                    name={name}
                    className="select outline-none border-none rounded-full max-sm:min-h-8 max-sm:h-8">
                    <option disabled value="" >กรุณาเลือก</option>
                    {items && items.map((el) => (
                        <option key={el.id} value={el.gender}>{el.label}</option>
                    ))}

                </select>
            </label>
        </>
    )
}

export default Select