const prisma = require('../models/prisma')

exports.createUser = (data) => prisma.user.create({ data })

exports.findUserByUniqueData = (data) => prisma.user.findFirst({
    where: {
        OR: [{ idNumber: data.idNumber }, { email: data.email }, { mobile: data.mobile }]
    }
})