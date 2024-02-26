const express = require('express')
const { register, login, getMe, updateUser } = require('../controllers/auth_controller')
const { validateRegister, validLogin } = require('../middleware/validator/validate-auth')
const { authenticate } = require('../middleware/authenticate')

const authRoute = express.Router()

authRoute.post('/register', validateRegister, register)
authRoute.post('/login', validLogin, login)
authRoute.get('/me', authenticate, getMe)
authRoute.patch('/update', authenticate, updateUser)

module.exports = authRoute