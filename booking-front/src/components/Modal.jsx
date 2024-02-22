function Modal({ children, label, icon }) {
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn bg-transparent outline-none border-none shadow-md rounded-full px-4 max-sm:w-4/12"
                onClick={() => document.getElementById('my_modal_2').showModal()}
            >
                <span className='flex justify-center items-center gap-2 text-lg'>
                    {icon} {label}
                </span>

            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-primary flex flex-col pt-4 pb-8 h-fit justify-center rounded-[40px] ">
                    <h3 className="font-bold text-4xl text-left">{label}</h3>
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