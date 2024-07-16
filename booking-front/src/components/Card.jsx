import Button from '../components/Button';

function Card({
    children,
    name,
    onSubmit,
    btn = true,
    bg = true,
    btnName,
    isEdit = true,
}) {
    const bgStyle = bg ? `bg-primary` : `border-2 border-primary`;

    return (
        <form onSubmit={onSubmit}>
            <div
                className={`card card-compact rounded-[40px] w-full h-full p-4 ${bgStyle}  shadow-xl mx-auto max-sm:w-11/12`}
            >
                <div className='card-body text-center max-sm:gap-1'>
                    <h2 className='text-4xl font-bold max-sm:text-xl '>
                        {name}
                    </h2>
                    {children}

                    {isEdit ? (
                        <>
                            {btn && (
                                <div className='mt-8 max-sm:mt-2'>
                                    <Button name={btnName}></Button>
                                </div>
                            )}{' '}
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </form>
    );
}

export default Card;
