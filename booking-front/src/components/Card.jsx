
import Button from "../components/Button"

function Card({ children, name, onSubmit }) {
    return (

        <form onSubmit={onSubmit}>
            <div className="card card-compact w-full h-screen bg-primary shadow-xl mx-auto max-sm:w-11/12  ">
                <div className="card-body text-center gap-4 max-sm:gap-1">

                    <h2 className="text-4xl font-bold max-sm:text-xl ">{name}</h2>
                    {children}

                    <div className="mt-8 max-sm:mt-2">
                        <Button name="ลงทะเบียน"></Button>
                    </div>

                </div>
            </div>
        </form>

    )
}

export default Card