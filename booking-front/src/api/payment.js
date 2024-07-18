import axios from '../config/axios';

export const createPaymentIntent = (paymentData) =>
    axios.post('/payment/create-payment-intent', paymentData);
