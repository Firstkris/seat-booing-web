const { paymentService } = require('../services/payment-service');

export const paymentController = {};

paymentController.createPaymentIntent = async (req, res) => {
    const { amount } = req.body;
    const paymentIntent = await paymentService.pay({ amount });

    res.status(200).json({ paymentIntent });
};
