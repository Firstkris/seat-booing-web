const encryptService = require("../services/encrypt-service");
const { createUser, findUserByUniqueData } = require("../services/user-service");
const { catchError } = require("../utilities/catch-error");
const { createError } = require("../utilities/create-error");
const jwtService = require("../utilities/jwt-service");


exports.register = catchError(

    async (req, res, next) => {

        const existUser = await findUserByUniqueData(req.body)
        console.log(existUser);

        if (existUser) {
            createError('USER_ALREADY_EXIST', 400)

        }

        console.log(req.body);

        req.body.password = await encryptService.hash(req.body.password)
        const newUser = await createUser(req.body)

        const payload = { userId: newUser.id }
        const accessToken = jwtService.sign(payload)


        res.status(201).json({ accessToken, newUser })

    })

exports.login = catchError(
    async (req, res, next) => {
        const existUser = await findUserByUniqueData(req.body)
        console.log(existUser);

        if (!existUser) {
            createError('User not found', 400)
        }

        const isMatch = await encryptService.compare(req.body.password, existUser.password)

        if (!isMatch) {
            createError('Access Denial please check your credentials data', 400)

        }

        const accessToken = jwtService.sign({ userId: existUser.id })

        res.status(200).json({ accessToken, user: existUser })

    }
)


exports.getMe = catchError(

    async (req, res, next) => {

    }
)


