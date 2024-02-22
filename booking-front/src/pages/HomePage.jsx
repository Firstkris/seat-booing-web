import { Link } from "react-router-dom"
import Button from "../components/Button"
import Modal from "../components/Modal"
import LoginForm from "../feature/auth/components/LoginForm"
import SearchCard from "../feature/search/components/SearchCard"
import { Line3, PersonIcon } from "../icon"
import useAuthContext from "../hooks/useAuthContext"



function HomePage() {
    const { user, logOut } = useAuthContext()
    return (
        <div className="h-screen overflow-hidden px-8 max-sm:overflow-scroll max-sm:p-8">
            <div className='flex justify-between items-center gap-4 max-sm:flex-col-reverse sm:h-svh' >

                {/* sign up hero */}
                <div className='px-8 w-1/2 max-sm:w-full max-sm:m-4 '>

                    <div className='flex flex-col gap-16 max-sm:gap-6' >
                        <div className="text-7xl max-sm:text-6xl">
                            <p className='font-extrabold'>Find joy</p>
                            <p className='font-thin my-2'>in your journey</p>
                        </div>


                        <div>
                            <p className='text-xl font-thin'>It is time to travel with comfort and joy.</p>
                            <p className='text-xl font-thin'>Come and be part of our journey</p>
                        </div>
                        {!user &&
                            <>
                                <Link to={'/register'}>
                                    <Button name={"JOIN NOW"} width="w-1/2" ></Button>
                                </Link>
                            </>
                        }

                    </div>
                </div>

                {/* search booking */}
                <div className="w-5/12 max-sm:w-full">
                    {!user ?

                        <div className="text-right mb-6 ">
                            <Modal
                                label={"Login"}
                                icon={<PersonIcon />}
                            >
                                <LoginForm />

                            </Modal>
                        </div>
                        : (<div className="flex flex-col justify-end items-end mb-6 ">
                            <p className="text-xl font-thin">Welcome {user.firstName}</p>
                            <div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className=" m-1">
                                        <span><Line3 /></span>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li> <Link to={'/profile'}>Profile</Link> </li>
                                        <li><a onClick={logOut}>LogOut</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )
                    }

                    <SearchCard vertical={true} />
                </div>
            </div>
            <div className='top-0 -translate-x-[calc(100vw-25%)] border border-primary rounded-[40px] h-[2024px] w-full rotate-[8deg] -z-10 fixed '></div>
        </div>
    )
}

export default HomePage