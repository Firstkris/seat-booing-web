import RegisterForm from '../feature/auth/components/RegisterForm';
import mountain from '../../public/mountain.svg';
import man1 from '../../public/man1.png';
import women1 from '../../public/women1.png';

function RegisterPage() {
    return (
        <div className='relative flex justify-center items-center h-screen max-sm:overflow-auto'>
            <div className='max-w-screen-md mx-auto max-sm:translate-y-0 w-11/12'>
                <RegisterForm></RegisterForm>
            </div>

            <div className='absolute bottom-0 right-0 left-0 -z-10'>
                <div className='flex justify-between items-end'>
                    <div>
                        <img
                            className='flex-shrink  max-md:hidden'
                            src={man1}
                        ></img>
                    </div>
                    <div>
                        <img
                            className='flex-shrink'
                            src={mountain}
                        ></img>
                    </div>

                    <div>
                        <img
                            className='flex-shrink  max-md:hidden'
                            src={women1}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
