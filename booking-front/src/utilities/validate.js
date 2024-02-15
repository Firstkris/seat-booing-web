
export const validate = (schema) => (input) => {

    const { error } = schema.validate(input, { abortEarly: false })

    if (error) {
        console.dir(error)

    }
    // return ()
}
