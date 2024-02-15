import Joi from 'joi'
import { validate } from '../../utilities/validate'


export const registerSchema = Joi.object({
    firstName: Joi.string().required().trim().message({
        'string.empty': "First name is required"
    }),
    lastName: Joi.string().required().trim().message({
        'string.empty': "Last name is required"
    }),
    idNumber: Joi.string().pattern(/^[0-9]{13}$/).trim().message({
        'string.empty': "ID number is required",
        'string.pattern.base': "ID number must be 13 number"
    }),
    email: Joi.string().email({ tlds: false }).required().trim().message({
        'string.empty': "email is required"
    }),
    mobile: Joi.string().pattern(/^[0-9]{10}$/).trim().message({
        'string.empty': "mobile number is required",
        'string.pattern.base': "mobile must be at least 10 numbers"
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,}$/)
        .required()
        .messages({
            'string.empty': "is required",
            'string.pattern.base': "must be at least 6 and contain a-z, 0-9"
        }),

})

export const validateRegister = (input) => validate(registerSchema)(input) 