import React from 'react'
import useAuthContext from '../hooks/useAuthContext'
import Card from '../components/Card'

function ProfilePage() {

    const { user } = useAuthContext()

    return (
        <div className='h-screen'>
            <Card btn={false}>
                <p>{user.firstName}</p>
            </Card>
        </div>
    )
}

export default ProfilePage