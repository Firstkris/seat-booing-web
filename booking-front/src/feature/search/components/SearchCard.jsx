import { useEffect } from 'react'
import { useState } from 'react'

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import Select from '../../../components/Select'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { getRoute, getSchedule } from '../../../api/search'
import useSearchContext from '../../../hooks/useSearchContext'

import { validateSearch } from '../../validation/validation-search'
import { SearchIcon } from '../../../icon'


const defaultValue = {
    origin: "",
    destination: "",
    departureDate: new Date().toISOString().split('T')[0]
}


function SearchCard({ vertical }) {

    const [input, setInput] = useState(defaultValue)
    const [origin, setOrigin] = useState([])
    const [destination, setDestination] = useState([])
    const [error, setError] = useState({})
    const navigate = useNavigate()

    const { onSetSchedule } = useSearchContext()

    const cardStyle = vertical
        ? `grid grid-rows-5 h-8/12 p-6 w-full bg-primary rounded-[40px] gap-6 max-sm:gap-2`
        : `flex justify-around items-center bg-primary rounded-[40px] gap-16 px-6 py-3 max-sm:flex-col max-sm:gap-6`


    const handleChangeInput = (e) => {
        console.log(e.target.value);
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))

    }

    const getAllRoute = async () => {
        const originRoute = await getRoute('origin', '')
        console.log(originRoute.data.route);
        setOrigin(originRoute.data.route)

    }

    const getDestinationRoute = async () => {
        if (input.origin) {
            const destinationRoute = await getRoute('destination', input.origin)
            setDestination(destinationRoute.data.route)
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log('search');
            const validateError = validateSearch(input)

            if (validateError) {
                console.log(validateError);
                return setError(validateError)
            }

            const searchData = {
                origin: input.origin,
                destination: input.destination,
                departureDate: new Date(input.departureDate)
            }
            console.log(searchData);

            const res = await getSchedule(searchData)
            console.log(res.data.schedule);
            onSetSchedule(res.data.schedule)
            localStorage.setItem('searchData', searchData)

            navigate('/schedule')


        } catch (error) {
            toast.error(error.response?.data.message)
        }
    }

    useEffect(() => {
        getAllRoute()
        getDestinationRoute()
    }, [input.origin])


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={`${cardStyle} `}>
                    {vertical ? (
                        <p className="text-5xl justify-self-center font-semibold self-center max-sm:text-2xl ">
                            จองตั๋วโดยสาร
                        </p>
                    ) : (
                        <></>
                    )}

                    <Select
                        items={origin}
                        name={"origin"}
                        label={"ต้นทาง"}
                        value={input.origin}
                        onChange={handleChangeInput}
                        vertical={vertical}
                        icon="&#xf3c5;"
                    ></Select>
                    {input.origin ? (
                        <Select
                            vertical={vertical}
                            label={"ปลายทาง"}
                            name={"destination"}
                            onChange={handleChangeInput}
                            items={destination}
                            value={input.destination}
                            icon="&#xf024;"
                        ></Select>
                    ) : (
                        <Select label={"ปลายทาง"} vertical={vertical} disabled></Select>
                    )}

                    {/* <DateInput></DateInput> */}
                    <div className="w-full">
                        <Input
                            type={"date"}
                            label={"วันเดินทาง"}
                            name={"departureDate"}
                            vertical={vertical}
                            onChange={handleChangeInput}
                            value={input.departureDate}
                        ></Input>
                    </div>

                    {/* Button */}

                    <div className="w-full text-center">
                        {error.origin || error.destination
                            ? (
                                <small className='text-error'>{error.destination} ต้นทาง และ ปลายทาง</small>
                            )
                            : ""


                        }

                        {vertical ? (
                            <div className="mt-2 ">
                                <Button name={"search"} icon={<SearchIcon />} />
                            </div>
                        ) : (
                            <Button icon={<SearchIcon />} />
                        )}


                    </div>
                </div>
            </form>
        </>
    );
}

export default SearchCard