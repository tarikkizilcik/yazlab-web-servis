const mongoose = require('mongoose')
const router = require('express').Router()
const News = mongoose.model('News')

router.post('/add', function (req, res) {
  const news = req.body.news
  news.created_at = Date.now()
  const newsModel = new News(news)
  console.log(news)

  newsModel.save().then(() => { res.send(news) })
})

router.get('/:id', function (req, res) {
  const id = req.params.id

  News.findById(id)
    .then(value => res.send(value))
    .catch(reason => res.status(404).send(reason))
})

router.get('/', (req, res) => {
  News.find()
    .then(value => res.send(value))
    .catch(reason => res.status(500).send(reason))
})

module.exports = router
