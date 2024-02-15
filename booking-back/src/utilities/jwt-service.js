const jwt = require('jsonwebtoken')

JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'f1dsa6f451wr231'
JWT_EXPIRE = process.env.JWT_EXPIRE || '30d'

exports.sign = (payload) => jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRE })
exports.verify = (token) => jwt.verify(token, JWT_SECRET_KEY)

