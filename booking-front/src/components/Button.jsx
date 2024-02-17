
function Button({ name, icon, onClick, width = 'w-full', btnBg = 'btn-secondary' }) {
    return (
        <>
            <button
                onClick={onClick}
                // onClick=<Navigate to="/register" />
                className={`btn ${btnBg} rounded-r-full rounded-l-full ${width} text-xl font-extrabold text-white max-sm:text-base max-sm:w-1/2 max-sm:h-8`}>

                {icon && <span>{icon}</span>}
                {name}
            </button>

        </>
    )
}

export default Button