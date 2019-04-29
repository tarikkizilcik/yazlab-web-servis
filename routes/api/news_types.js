const mongoose = require('mongoose')
const router = require('express').Router()
const NewsTypes = mongoose.model('news_types')

router.get('/', function (req, res) {
  NewsTypes.find()
    .then(value => res.send(value))
    .catch(reason => res.status(500).send(reason))
})

router.post('/', function (req, res) {
  const newsTypes = req.body.type
  const newsTypesModel = new NewsTypes(newsTypes)

  newsTypesModel.save()
    .then(() => res.send(newsTypes))
    .catch(reason => res.status(500).send(reason))
})

module.exports = router
