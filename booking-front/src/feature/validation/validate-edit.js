import Joi from 'joi'
import { validate } from '../../utilities/validate'


export const editSchema = Joi.object({
    firstName: Joi.string().required().trim().messages({
        'string.empty': "First name is required"
    }),
    lastName: Joi.string().required().trim().messages({
        'string.empty': "Last name is required"
    }),
    idNumber: Joi.string().pattern(/^[0-9]{13}$/).messages({
        'string.empty': "ID number is required",
        'string.pattern.base': "ID number must be 13 number"
    }),
    email: Joi.string().trim().required().email({ tlds: false }).trim().messages({
        'any.only': "Email is required",
        'string.empty': "Email is required",
        'any.required': "Email is required",
        'string.trim': "Email is required"
    }),
    mobile: Joi.string().required().pattern(/^[0-9]{10}$/).messages({
        'string.empty': "Mobile number is required",
        'string.pattern.base': "Mobile must be at least 10 numbers"
    }),
    password: Joi.string().optional().allow(null)
    // .pattern(/^[a-z][A-Z][0-9]{6,}$/)
    ,
    gender: Joi.string(),
    birthDate: Joi.date().optional(),
    address: Joi.string().optional().allow(null, ''),
    isMember: Joi.boolean().optional()

})



export const validateEdit = (input) => validate(editSchema)(input) 