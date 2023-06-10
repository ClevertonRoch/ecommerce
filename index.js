const express = require('express')
const app = express()
const dotenv = require('dotenv')
const routers = require('./routes')
dotenv.config()
const mongoose = require('mongoose')

app.use(express.json())

app.use('/', routers)

mongoose.connect(process.env.MONGO_URL || 8080).then(() => {
  console.log('Connection ok')
}).catch((err) => {
  console.log(err)
})

app.listen(8080, () => {
  console.log('server running')
})
