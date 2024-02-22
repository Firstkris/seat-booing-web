
import Card from './Card'
import useAuthContext from '../hooks/useAuthContext'
import Input from './Input'

function UserInfoCard() {

    const { user } = useAuthContext()
    return (
        <>
            <div className=" h-3/4">
                <Card btn={false} name={"ข้อมูลผู้โดยสาร"}>

                    <hr className="border border-white" />

                    <Input label={'เลขบัตรประชาชน'} value={user.idNumber} readOnly="read-only" disable="disable"></Input>
                    <div className="flex gap-6">
                        <Input label={'ชื่อ'} value={user.firstName} readOnly="read-only"></Input>
                        <Input label={'นามสกุล'} value={user.lastName} readOnly="read-only"></Input>
                    </div>
                    <Input label={'หมายเลขโทรศัพท์'} value={user.mobile} readOnly="read-only"></Input>
                    <Input label={'E-mail'} value={user.email} readOnly="read-only"></Input>

                </Card>
            </div>

        </>
    )
}

export default UserInfoCard