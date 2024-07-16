const { catchError } = require("../utilities/catch-error");
const { createError } = require("../utilities/create-error");
const userService = require("../services/user-service");
const jwtService = require("../services/jwt-service");


exports.authenticate = catchError(

    async (req, res, next) => {

        // console.log(req);
        const authorization = req.headers.authorization;

        if (!authorization || !authorization.startsWith('Bearer ')) {
            createError('Invalid authorization header', 401)
        }

        const token = authorization.split(' ')[1];
        const decodedPayload = jwtService.verify(token)


        const user = await userService.findUserById(decodedPayload.userId)

        if (!user) {
            createError('User not found', 401)
        }

        delete user.password;

        // console.log(user);
        req.user = user
        next()

    })