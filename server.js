const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const taskRouter = require('./routes/task')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {res.json({ message: "Home Page test Route" })});
app.use('/api', taskRouter)

mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => app.listen(process.env.PORT, () => {
    console.log("Server listening at port: 3010")
}))
.catch((err) => console.log("Error on server:", err))

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' })
})
