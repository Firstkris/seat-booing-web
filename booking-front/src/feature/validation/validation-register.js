import Joi from 'joi'
import { validate } from '../../utilities/validate'


export const registerSchema = Joi.object({
    firstName: Joi.string().required().trim().message({
        'string.empty': "First name is required"
    }),
    lastName: Joi.string().required().trim().message({
        'string.empty': "Last name is required"
    }),
    idNumber: Joi.string().pattern(/^[0-9]{13}$/).message({
        'string.empty': "ID number is required",
        'string.pattern.base': "ID number must be 13 number"
    }),
    email: Joi.string().trim().required().email({ tlds: false }).trim().message({
        'any.only': "email is required",
        'string.empty': "email is required",
        'any.required': "email is required",
        'string.trim': "email is required"
    }),
    mobile: Joi.string().required().pattern(/^[0-9]{10}$/).message({
        'string.empty': "mobile number is required",
        'string.pattern.base': "mobile must be at least 10 numbers"
    }),
    password: Joi.string().pattern(/^[a-z][A-Z][0-9]{6,}$/)
        .required()
        .messages({
            'string.empty': "Password is required",
            'string.pattern.base': "Password must be at least 6 and contain a-z,A-Z, 0-9"
        }),

})



export const validateRegister = (input) => validate(registerSchema)(input) 