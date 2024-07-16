import useAuthContext from '../hooks/useAuthContext'
import PersonalInfo from '../components/PersonalInfo'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { useState } from 'react'
import { useEffect } from 'react'


function ProfilePage() {

    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => { setLoading(false) }, [400])
    }, [])

    if (isLoading) return <Loading />

    return (
        <div>

            <div className='h-screen w-8/12 mx-auto my-6'>
                <Link to={"/"} className='col-span-1'> &#60; Back</Link>
                {/* <UserInfoCard /> */}
                <PersonalInfo setLoading={setLoading} />

                {/* <div className='w-full flex justify-center mt-8'>

                </div> */}

            </div>
        </div>
    )
}

export default ProfilePage