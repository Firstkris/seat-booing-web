import { useState } from 'react';
import Card from '../../../components/Card';
import Select from '../../../components/Select';
import useAuthContext from '../../../hooks/useAuthContext';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';
import { validateRegister } from '../../validation/validation-register';
import { toast } from 'react-toastify';

const initialValue = {
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    mobile: '',
    password: '',
    gender: '',
    birthDate: undefined,
    address: '',
};

const genderEnum = [
    { id: 1, gender: 'MALE', label: 'ชาย' },
    { id: 2, gender: 'FEMALE', label: 'หญิง' },
    { id: 3, gender: 'NOTTELL', label: 'ไม่ระบุ' },
];

function RegisterForm() {
    const [input, setInput] = useState(initialValue);
    const [error, setError] = useState({});
    const { register } = useAuthContext();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const validateError = validateRegister(input);
            // (validateError);
            if (validateError) {
                return setError(validateError);
            }

            // ('submit');
            await register(input);
            toast.success('register success');
        } catch (error) {
            toast.error(error.response?.data.message);
        }
    };

    const handleChangeInput = (e) => {
        // e.target.value;
        setError({});
        if (e.target.name === 'mobile' || e.target.name === 'idNumber') {
            if (isNaN(e.target.value)) {
                return;
            }
        }
        setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    };

    return (
        <div className='grid grid-cols-12'>
            <Link
                to={'/'}
                className='col-span-1'
            >
                {' '}
                &#60; Back
            </Link>
            <div className='col-span-10 '>
                <Card
                    onSubmit={handleSubmit}
                    name={'สมัครสมาชิก'}
                    btnName={'ลงทะเบียน'}
                >
                    {/* mobile & email */}
                    <div className='flex justify-between gap-4 max-sm:flex-col max-sm:gap-1'>
                        <Input
                            onChange={handleChangeInput}
                            value={input.email}
                            name='email'
                            label={'Email'}
                            errorMsg={error.email}
                        ></Input>
                        <Input
                            type={'string'}
                            onChange={handleChangeInput}
                            value={input.mobile}
                            name={'mobile'}
                            label={'Phone Number'}
                            errorMsg={error.mobile}
                            maxLength={10}
                            pattern='[0-9]{10}'
                        ></Input>
                    </div>
                    <Input
                        onChange={handleChangeInput}
                        value={input.password}
                        name='password'
                        label={'Password'}
                        errorMsg={error.password}
                        type={'password'}
                    ></Input>

                    {/* personal info */}
                    {/* custom hr with text */}
                    <div className='flex py-4 items-center max-sm:py-2'>
                        <div className='flex-grow border-t border-black'></div>
                        <span className='flex-shrink mx-4 '>ข้อมูลส่วนตัว</span>
                        <div className='flex-grow border-t border-black'></div>
                    </div>

                    {/* id number */}
                    <Input
                        onChange={handleChangeInput}
                        value={input.idNumber}
                        name={'idNumber'}
                        label={'เลขประชาชน'}
                        errorMsg={error.idNumber}
                        maxLength={13}
                    ></Input>

                    {/* name */}
                    <div className='flex justify-between gap-4'>
                        <Input
                            onChange={handleChangeInput}
                            value={input.firstName}
                            name={'firstName'}
                            label={'ชื่อ'}
                        ></Input>
                        <Input
                            onChange={handleChangeInput}
                            value={input.lastName}
                            name={'lastName'}
                            label={'นามสกุล'}
                        ></Input>
                    </div>

                    {/* gender */}
                    <div className='flex justify-between gap-4'>
                        <div className='w-1/2'>
                            <div className='label'>
                                <span className='label-text text-base max-sm:text-sm'>
                                    เพศ
                                </span>
                            </div>
                            <Select
                                onChange={handleChangeInput}
                                value={input.gender}
                                name={'gender'}
                                label={'เพศ'}
                                items={genderEnum}
                                errorMsg={error.gender}
                            ></Select>
                        </div>
                        <div className='w-1/2'>
                            <Input
                                onChange={handleChangeInput}
                                value={input.birthDate}
                                type={'date'}
                                name={'birthDate'}
                                label={'วันเดือนปีเกิด'}
                            ></Input>
                        </div>
                    </div>

                    {/* address */}
                    <Input
                        onChange={handleChangeInput}
                        value={input.address}
                        name={'address'}
                        label={'ที่อยู่'}
                    ></Input>
                </Card>
            </div>

            <Link
                to={'/'}
                className='invisible'
            >
                {' '}
                &#60; Back
            </Link>
        </div>
    );
}

export default RegisterForm;
