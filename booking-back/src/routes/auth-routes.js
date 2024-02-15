const express = require('express')
const { register, login } = require('../controllers/auth_controller')
const { validateRegister, validLogin } = require('../middleware/validator/validate-auth')

const authRoute = express.Router()

authRoute.post('/register', validateRegister, register)
authRoute.post('/login', validLogin, login)

module.exports = authRoute