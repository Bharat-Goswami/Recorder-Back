const cors = require('cors')
const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5001

const app = express()

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/audio', require('./routes/audio_routes'))


app.listen(port, () => console.log(`Server is Running at ${port}`))
