const prisma = require('../models/prisma')

exports.createUser = (data) => prisma.user.create({ data })

exports.findUserByUniqueData = (data) => prisma.user.findFirst({
    where: {
        OR: [{ idNumber: data.idNumber }, { email: data.email }, { mobile: data.mobile }]
    }
})

exports.findUserById = id => prisma.user.findUnique({ where: { id } })

exports.updateUserData = (data, id) => prisma.user.update({ data, where: { id } })