const { createUser } = require("../services/user-service");
const { catchError } = require("../utilities/catch-error");

exports.register = catchError(

    async (req, res, next) => {

        console.log(req.body);
        const newUser = await createUser(req.body)

        res.status(200).json({ message: newUser })

    })