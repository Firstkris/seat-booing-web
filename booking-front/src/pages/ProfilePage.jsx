import useAuthContext from '../hooks/useAuthContext'
import Card from '../components/Card'
import UserInfoCard from '../components/UserInfoCard'

function ProfilePage() {

    const { user } = useAuthContext()

    return (
        <div className='h-screen'>
            <UserInfoCard />
        </div>
    )
}

export default ProfilePage