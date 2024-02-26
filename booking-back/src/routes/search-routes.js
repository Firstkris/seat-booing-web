const express = require('express')
const { getDistinctRoute, getSchedule, getAllSeatOnSchedule, getAllBookingSeatByScheduleId } = require('../controllers/search-controller')

const searchRoute = express.Router()

searchRoute.get('/origin', getDistinctRoute)
searchRoute.get('/destination/:start', getDistinctRoute)
searchRoute.post('/', getSchedule)
// searchRoute.post('/all-booked-seat-schedule-id', getAllBookingSeatByScheduleId)

module.exports = searchRoute
