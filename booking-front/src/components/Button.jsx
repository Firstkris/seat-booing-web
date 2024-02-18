
function Button({
    name,
    icon,
    onClick,
    width = "w-full",
    btnBg = "btn-secondary text-white",
    children,
}) {
    return (
        <>
            <button
                onClick={onClick}
                // onClick=<Navigate to="/register" />
                className={`btn ${btnBg} rounded-r-full h-fit rounded-l-full ${width}  font-extrabold max-sm:text-base max-sm:w-1/2 max-sm:h-8`}
            >
                {icon && <span>{icon}</span>}
                {name}
                {children}
            </button>
        </>
    );
}

export default Button