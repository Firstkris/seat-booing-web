const express = require('express');

const { paymentController } = require('../controllers/payment-controller');

const paymentRoute = express.Router();

searchRoute.post('/create-payment-intent', paymentController);
// searchRoute.post('/all-booked-seat-schedule-id', getAllBookingSeatByScheduleId)

module.exports = paymentRoute;
