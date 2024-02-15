require('dotenv').config();
const express = require('express')
const cors = require('cors');
const authRoute = require('./routes/auth-routes');
const error = require('./middleware/error');


const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoute)




app.use(error)

const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
    console.log('PORT', PORT)
})