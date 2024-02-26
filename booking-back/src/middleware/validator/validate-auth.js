const Joi = require('joi')
const validate = require('./validator')

const genderEnum = ["MALE", "FEMALE", "NOTTELL"]

const registerSchema = Joi.object({
    firstName: Joi.string().required().trim().message({
        'string.empty': "First name is required"
    }),
    lastName: Joi.string().required().trim().message({
        'string.empty': "Last name is required"
    }),
    idNumber: Joi.string().pattern(/^[0-9]{13}$/).message({
        'string.empty': "ID number is required",
        'string.pattern.base': "ID number must be 13 numbers"
    }),
    gender: Joi.string().valid(...genderEnum),
    birthDate: Joi.date().optional(),
    email: Joi.string().email({ tlds: false }).required().trim().message({
        'string.empty': "email is required"
    }),
    mobile: Joi.string().pattern(/^[0-9]{10}$/).message({
        'string.empty': "mobile number is required",
        'string.pattern.base': "mobile must be at least 10 "
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,}$/)
        .required()
        .messages({
            'string.empty': "is required",
            'string.pattern.base': "must be at least 6 and contain a-z, 0-9"
        }),
    address: Joi.string().optional().allow(null, ''),
    isMember: Joi.boolean().optional()

})

const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required().trim().message({
        'string.empty': "email is required"
    }),
    password: Joi.string().required().messages({ 'string.empty': "is required", }),
})

exports.validateRegister = validate(registerSchema)
exports.validLogin = validate(loginSchema)