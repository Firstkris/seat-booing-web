const paymentURL = process.env.PAYMENT_2C2P_URL;
export const paymentService = {
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
