
import { useState } from 'react'
import useAuthContext from '../hooks/useAuthContext'
import { toast } from 'react-toastify'
import Card from './Card'
import Input from './Input'
import Select from './Select'
import { validateEdit } from '../feature/validation/validate-edit'
import { useNavigate } from 'react-router-dom'
import useBookingContext from '../hooks/useBookingContext'
import Ticket from './Ticket'
import WarningModal from './WarningModal'
import Button from './Button'
import Loading from './Loading'


const genderEnum = [
    { id: 1, gender: "MALE", label: "ชาย" },
    { id: 2, gender: "FEMALE", label: "หญิง" },
    { id: 3, gender: "NOTTELL", label: "ไม่ระบุ" }
]



function PersonalInfo({ setLoading }) {
    const { editUserData } = useAuthContext()
    const { user } = useAuthContext()
    const { bookingData, onDeleteBooking } = useBookingContext()

    const initialValue = {
        firstName: user.firstName,
        lastName: user.lastName,
        idNumber: user.idNumber,
        email: user.email,
        mobile: user.mobile,
        password: user.password,
        gender: user.gender,
        birthDate: new Date(user.birthDate).toISOString().split('T')[0],
        address: user.address,
        isMember: user.isMember

    }




    const [input, setInput] = useState(initialValue)
    const [error, setError] = useState({})
    const [open, setOpen] = useState(false)
    const [warning, setWarning] = useState({})

    const [isEdit, setIsEdit] = useState(false)
    const [isDisable, setIsDisable] = useState('disable')

    const navigate = useNavigate()



    const handleSubmit = async (e) => {

        try {
            e.preventDefault()
            const validateError = validateEdit(input)


            console.log(validateError);
            if (validateError) {
                return setError(validateError)
            }

            input.birthDate = new Date(input.birthDate)
            console.log('submit');
            await editUserData(input)
            toast.success('edit success')
            oncancel()


        } catch (error) {
            toast.error(error.response?.data.message)
        }

    }

    const handleChangeInput = (e) => {
        console.log(e.target.value);
        setError({})
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const onEdit = () => {
        setIsEdit(true)
        setIsDisable(null)


    }

    const oncancel = () => {
        setIsEdit(false)
        setIsDisable('disable')

    }

    const onDeactivate = async () => {

        await editUserData({ isMember: false })
        navigate('/')
    }


    const hdlOnClose = () => {
        setOpen(false)
    }


    const onDeactivateBooking = (items) => {
        console.log("cancelBooking");
        console.log("onDeactivateBooking ", items);
        setWarning(items)
        setOpen(true)

    }

    const onConfirmDeleteBooking = async () => {

        // console.log(warning.booking_id, warning.seat_id);
        setLoading(true)
        await onDeleteBooking(warning.booking_id, warning.seat_id)
        hdlOnClose()
        setTimeout(() => {
            setLoading(false)
            toast.error('ยกเลิกการจองเรียบร้อย')
        }, [500])

    }

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };

    const departureDate = new Date(warning.departureDate).toLocaleString('th-TH', options)
    const departTime = new Date(warning.departTime).toLocaleTimeString([], { hourCycle: 'h24', hour: "2-digit", minute: '2-digit' })


    const onEditBooking = () => {
        console.log("แก้ไขการจอง");
    }



    return (
        <>

            {/* Personal Data */}

            <Card
                onSubmit={handleSubmit}
                name={"ข้อมูลส่วนตัว"}
                btnName={"ยืนยัน"}
                isEdit={isEdit}
            >
                {/* mobile & email */}

                <div className="flex justify-end gap-6 text-lg">
                    <div
                        role="button"
                        className="text-secondary"
                        onClick={onDeactivate}
                    >
                        ยกเลิกสมากชิก
                    </div>
                    <div role="button" className="text-secondary" onClick={onEdit}>
                        {" "}
                        edit
                    </div>
                    <div role="button" className="text-secondary" onClick={oncancel}>
                        {" "}
                        cancel
                    </div>
                </div>

                <div className="flex justify-between gap-4 max-sm:flex-col max-sm:gap-1">
                    <Input
                        onChange={handleChangeInput}
                        value={input.email}
                        name="email"
                        label={"Email"}
                        errorMsg={error.email}
                        disable={isDisable}
                    ></Input>
                    <Input
                        onChange={handleChangeInput}
                        value={input.mobile}
                        name={"mobile"}
                        label={"Phone Number"}
                        errorMsg={error.mobile}
                        disable={isDisable}
                    ></Input>
                </div>
                <Input
                    onChange={handleChangeInput}
                    // value={input.password}
                    name="password"
                    label={"Password"}
                    errorMsg={error.password}
                    // disable={isDisable}
                    disable={"disable"}
                ></Input>

                {/* personal info */}
                {/* custom hr with text */}
                <div className="flex py-4 items-center max-sm:py-2">
                    <div className="flex-grow border-t border-black"></div>
                    <span className="flex-shrink mx-4 ">ข้อมูลส่วนตัว</span>
                    <div className="flex-grow border-t border-black"></div>
                </div>

                {/* id number */}
                <Input
                    onChange={handleChangeInput}
                    value={input.idNumber}
                    name={"idNumber"}
                    label={"เลขประชาชน"}
                    errorMsg={error.idNumber}
                    disable={"disable"}
                ></Input>

                {/* name */}
                <div className="flex justify-between gap-4">
                    <Input
                        onChange={handleChangeInput}
                        value={input.firstName}
                        name={"firstName"}
                        label={"ชื่อ"}
                        disable={isDisable}
                    ></Input>
                    <Input
                        onChange={handleChangeInput}
                        value={input.lastName}
                        name={"lastName"}
                        label={"นามสกุล"}
                        disable={isDisable}
                    ></Input>
                </div>

                {/* gender */}
                <div className="flex justify-between gap-4">
                    <div className="w-1/2">
                        <Select
                            onChange={handleChangeInput}
                            value={input.gender}
                            name={"gender"}
                            label={"เพศ"}
                            items={genderEnum}
                            errorMsg={error.gender}
                            disable={isDisable}
                            vertical={true}
                        ></Select>
                    </div>
                    <div className="w-1/2">
                        <Input
                            onChange={handleChangeInput}
                            value={input.birthDate}
                            type={"date"}
                            name={"birthDate"}
                            label={"วันเดือนปีเกิด"}
                            disable={isDisable}
                        ></Input>
                    </div>
                </div>

                {/* address */}
                <Input
                    onChange={handleChangeInput}
                    value={input.address}
                    name={"address"}
                    label={"ที่อยู่"}
                    disable={isDisable}
                ></Input>

                {user.isMember ? (
                    <p className="text-xl">คุณเป็นสมาชิก</p>
                ) : (
                    <p className="text-xl text-secondary">คุณไม่ใช่สมาชิกแล้ว</p>
                )}
            </Card>

            {/* Booking Data */}
            {bookingData &&
                bookingData.map((el) => (
                    <Ticket
                        key={`${el.booking_id}+${el.seat_id}`}
                        items={el}
                        onOpen={setOpen}
                        onDeactivateBooking={onDeactivateBooking}
                        onEditBooking={onEditBooking}
                    />
                ))}

            {open && (
                <div className=" "  >
                    <WarningModal onClose={hdlOnClose}>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-4xl text-primary font-bold'>โปรดระวัง</p>
                                <p className='text-xl'>คุณกำลังจะยกเลิก </p>
                                <p className='text-xl' >
                                    เที่ยวเดินทาง
                                    <span className='text-primary font-semibold'> {warning.origin} - {warning.destination} </span>
                                    ที่นั่ง <span className='text-primary font-semibold'>  {warning.seat_code}</span>

                                </p>

                                <p className='text-xl '>วันที่เดินทาง
                                    <span className='text-primary font-semibold'> {departureDate} เวลา {departTime}</span>
                                </p>

                                {/* <p className='text-xl pb-4'>กด 'ยกเลิกการจอง' เพื่อยกเลิกการจอง หรือ กด <span className='text-base-200'>กลับไปหน้าข้อมูล</span> </p> */}
                            </div>

                            <div className='flex w-full gap-6 mx-auto mt-6'>
                                <div className='w-full' >
                                    <Button
                                        onClick={onConfirmDeleteBooking}
                                        name={'ยกเลิกการจอง'} btnBg='btn-secondary'
                                    ></Button>
                                </div>
                                <div className='w-full' onClick={hdlOnClose}>
                                    <Button name={'กลับไปหน้าข้อมูล'} btnBg='btn'></Button>
                                </div>
                            </div>
                        </div>
                    </WarningModal>
                </div>
            )
            }
        </>
    );
}

export default PersonalInfo