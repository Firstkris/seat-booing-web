import React from 'react'

function Modal({ children, label, icon, title }) {
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn bg-transparent outline-none border-none shadow-md rounded-full w-1/12 max-sm:w-4/12"
                onClick={() => document.getElementById('my_modal_2').showModal()}
            >
                <span className='flex justify-center items-center gap-2 text-lg w-6 h-6'>
                    <img src={icon}></img>  {label}
                </span>

            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-primary flex flex-col pt-4 pb-16">
                    <h3 className="font-bold text-4xl">{label}</h3>
                    <hr className='my-4 border-white border' />
                    {children}
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default Modal