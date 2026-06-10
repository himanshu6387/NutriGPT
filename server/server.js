const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/database')
dotenv.config({})
const app = express()

connectDB()

app.use((req, res) => {
    res.status(404).json({ message: 'Path Not Found', success: false })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`)
})