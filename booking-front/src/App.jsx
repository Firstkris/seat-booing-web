import Routes from './routes/Router'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import useAuthContext from './hooks/useAuthContext';
import Loading from './components/Loading';

function App() {

  const { isLoading } = useAuthContext()

  if (isLoading) return <Loading />

  return (
    <div className='h-svh max-w-[1440px] mx-auto'>
      {/* <LoginPage /> */}
      <Routes />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      // transition:Bounce
      />
    </div>
  )

}

export default App
