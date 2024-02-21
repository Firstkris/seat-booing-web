
function Select({ name, onChange, label, items, value, disabled = false, vertical, errorMsg, isRequired = 'required', icon }) {

    return (
        <>
            <label className="form-control w-full  ">
                {vertical
                    ? (<div className="label">
                        <span className="label-text text-base max-sm:text-sm">{label}</span>

                    </div>)
                    : (<></>)}

                {disabled
                    ? (<>
                        <select
                            disabled
                            className="select outline-none border-none rounded-full max-sm:min-h-8 max-sm:h-8"
                        ></select>
                    </>)
                    : (<>
                        <select
                            onChange={onChange}
                            value={value}
                            name={name}
                            className="select outline-none border-none rounded-full max-sm:min-h-8 max-sm:h-8"
                        // required={isRequired}
                        >

                            <option disabled value="" > {icon} &nbsp; {label} </option>

                            {items && items.map((el) => (
                                <option key={el.id} value={el[name]}>{icon} &nbsp; {el[name]}</option>
                            ))}
                        </select>
                    </>)}



            </label >
        </>
    )
}

export default Select