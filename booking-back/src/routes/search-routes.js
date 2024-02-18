const express = require('express')
const { getDistinctRoute, getSchedule } = require('../controllers/search-controller')

const searchRoute = express.Router()

searchRoute.get('/origin', getDistinctRoute)
searchRoute.get('/destination/:start', getDistinctRoute)
searchRoute.post('/', getSchedule)

module.exports = searchRoute