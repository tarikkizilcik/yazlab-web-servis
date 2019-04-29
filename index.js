var express = require('express')
var app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json({ limit: '50mb' }))

mongoose.connect('mongodb://localhost:27017/news', { useNewUrlParser: true })

require('./models/news')
require('./models/news_types')
app.use(require('./routes'))

app.listen(3000)
