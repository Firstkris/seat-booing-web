function WarningModal({ onClose, title, children }) {
    return (
        <>
            <div className='fixed bg-gray-800 inset-0 opacity-60 '></div>
            <div className='fixed inset-0 '>
                <div
                    className='flex items-center justify-center min-h-full py-8'
                    onClick={onClose}
                >
                    <div
                        className='w-6/12'
                        // style={{ width: `${width}rem` }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='max-h-[calc(100svh-8rem)] '>
                            <div className='flex flex-col mx-auto bg-secondary text-center rounded-[40px] p-6 py-8'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WarningModal;
