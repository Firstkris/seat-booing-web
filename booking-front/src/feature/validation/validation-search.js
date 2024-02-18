import Joi from "joi";
import { validate } from '../../utilities/validate'

const searchSchema = Joi.object({
    origin: Joi.string().required().messages({
        "string.empty": "กรุณาเลือก",
        'any.required': "กรุณาเลือก",
    }),

    destination: Joi.string().required().messages({
        "string.empty": "กรุณาเลือก",
        'any.required': "กรุณาเลือก",
    }),

    departureDate: Joi.required()

})

export const validateSearch = (input) => validate(searchSchema)(input)