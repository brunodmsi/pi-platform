const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb://localhost:27017/pi-platform",{
  useUnifiedTopology: true,
  useNewUrlParser: true
})

app.use(cors())
app.use(express.json());

const routes = require('./routes')
app.use('/v1', routes);

module.exports = app
