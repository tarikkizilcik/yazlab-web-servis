var express = require('express')
var app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/news', { useNewUrlParser: true })

require('./models/news')
app.use(require('./routes'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
