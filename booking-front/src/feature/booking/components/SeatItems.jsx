import { useState } from 'react'
import { PersonIcon, SeatIcon, SelectedIcon } from '../../../icon'
import { useEffect } from 'react'
import useBookingContext from '../../../hooks/useBookingContext'

function SeatItems({ seat }) {

    const { onBookSeat, onCancelSeat, checkIsClick } = useBookingContext()

    const [isSelected, setIsSelect] = useState(false)
    const [selectedSeat, setSelectSeat] = useState({})

    const { seat_code, status, id } = seat

    const onSeatSelect = () => {
        setIsSelect(prv => !prv)
    }
    const onDeselect = () => {
        setIsSelect(prv => !prv)
        checkIsClick()
        onCancelSeat(seat.id)
    }

    const onSetSelectedSeat = () => {
        checkIsClick()
        if (isSelected) {
            onBookSeat({ [seat.id]: { status: !isSelected, seat } })
        }
    }



    useEffect(() => {
        onSetSelectedSeat()
    }, [isSelected])

    // console.log(selectedSeat);


    return (
        <div

            className='flex justify-center items-center'>
            {!status
                ? (
                    <div

                        className='w-50 h-50 text-center'>
                        <span>{seat_code}</span>
                        <PersonIcon className={`w-12 h-12`} />
                    </div>
                )
                :
                (
                    <>
                        {isSelected
                            ?
                            (
                                <div
                                    role='button'
                                    onClick={onDeselect}
                                >
                                    <SelectedIcon />
                                </div>

                            )

                            : <div
                                role='button'
                                onClick={onSeatSelect}
                                className='w-50 h-50 text-center'>
                                <span>{seat_code}</span>
                                <SeatIcon />
                            </div>

                        }
                    </>
                )
            }
        </div>
    )
}

export default SeatItems