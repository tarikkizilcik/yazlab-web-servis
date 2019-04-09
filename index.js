var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/tarik', function(req, res) {
    res.send('Tarik')
})
 
app.listen(3000)