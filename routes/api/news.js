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

module.exports = router
