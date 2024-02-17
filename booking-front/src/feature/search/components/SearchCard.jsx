import React from 'react'
import Select from '../../../components/Select'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { useEffect } from 'react'
import { getRoute, getSchedule } from '../../../api/search'
import { useState } from 'react'
import { SearchIcon } from '../../../icon'
import { Link } from 'react-router-dom'

const defaultValue = {
    origin: "",
    destination: "",
    departureDate: new Date()
}


function SearchCard({ vertical }) {

    const [input, setInput] = useState(defaultValue)
    const [origin, setOrigin] = useState([])
    const [destination, setDestination] = useState([])


    const cardStyle = vertical
        ? `grid grid-rows-5 h-8/12 p-6 w-full bg-primary rounded-[40px] gap-6 max-sm:gap-2`
        : `flex justify-around items-center bg-primary rounded-[40px] gap-4 px-6 py-3`


    const handleChangeInput = (e) => {
        console.log(e.target.value);
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))

    }

    const getAllRoute = async () => {
        const originRoute = await getRoute('origin', '')
        if (input.origin) {
            const destinationRoute = await getRoute('destination', input.origin)
            setDestination(destinationRoute.data.route)
        }
        console.log(originRoute.data.route);
        setOrigin(originRoute.data.route)
        // setInput((prv) => ({...prv, origin: }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('search');
        const searchData = {
            origin: input.origin,
            destination: input.destination,
            departureDate: new Date(input.departureDate)
        }

        const res = await getSchedule(searchData)
        console.log(res.data.schedule);

    }

    useEffect(() => {
        getAllRoute()
        // setOrigin(defaultOrigin)
    }, [input.origin])

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className={`${cardStyle}`} >
                    {vertical ? (<p className='text-5xl justify-self-center font-semibold self-center max-sm:text-2xl '>จองตั๋วโดยสาร</p>) : <></>}

                    <Select
                        items={origin}
                        name={"origin"}
                        label={'ต้นทาง'}
                        value={input.origin}
                        onChange={handleChangeInput}
                        vertical={vertical}
                    ></Select>
                    {
                        input.origin
                            ? (<Select
                                vertical={vertical}
                                label={'ปลายทาง'}
                                name={"destination"}
                                onChange={handleChangeInput}
                                items={destination}
                                value={input.destination}
                            ></Select>)
                            : (<Select label={'ปลายทาง'} vertical={vertical} disabled></Select>)
                    }

                    {/* <DateInput></DateInput> */}
                    <div >
                        <Input type={"date"} label={"วันเดินทาง"} name={"departureDate"} vertical={vertical} onChange={handleChangeInput}></Input>
                    </div>
                    <Link to={'/schedule'}>
                        {vertical
                            ? (<div className='mt-4'>
                                <Button name={"search"} icon={<SearchIcon />} />

                            </div>)
                            : (

                                <Button name={"search"} width='w-3/12' icon={<SearchIcon />} />

                            )
                        }
                    </Link>



                </div>
            </form>
        </>
    )
}

export default SearchCard