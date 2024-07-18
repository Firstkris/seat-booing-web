require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth-routes');
const error = require('./middleware/error');
const searchRoute = require('./routes/search-routes');
const bookingRoute = require('./routes/booking-routes');
const paymentRoute = require('./routes/payment-routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoute);
app.use('/search', searchRoute);
app.use('/booking', bookingRoute);
app.use('/payment', paymentRoute);

app.use(error);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log('PORT', PORT);
});
