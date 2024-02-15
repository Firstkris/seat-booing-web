const prisma = require('../models/prisma')

exports.createUser = (data) => prisma.user.create({ data })