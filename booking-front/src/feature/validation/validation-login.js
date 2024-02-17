import Joi from "joi";
import { validate } from '../../utilities/validate'


const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required().trim()
        .message({
            "string.empty": "email is required",
            'any.required': "email is required",
            "string.email": "email is required"
        }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,}$/)
        .required()
        .messages({
            'string.empty': "Password is required",
            'string.pattern.base': "must be at least 6 and contain a-z, 0-9"
        }),
})

export const validateLogin = (input) => validate(loginSchema)(input)
