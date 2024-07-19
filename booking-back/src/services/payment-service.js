const paymentURL = process.env.PAYMENT_2C2P_URL;
exports.paymentService = {
    pay: (payData) => {
        return new Promise((resolve, reject) => {
            fetch(`${paymentURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ payData }),
            });
        });
    },
};
