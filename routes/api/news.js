const mongoose = require('mongoose')
const router = require('express').Router()
const News = mongoose.model('News')

router.post('/add', function (req, res) {
  const news = req.body.news
  const newsModel = new News(news)
  console.log(news)

  newsModel.save().then(() => {
    res.send(news)
  })
})

router.post('/check', function (req, res) {
  const time = req.body.time

  News.find({ createdAt: { $gt: time } }, function (error, result) {
    if (!error && result.length) {
      res.send({ 'news': result })
    }
  })
})

router.get('/:id', function (req, res) {
  const id = req.params.id

  News.findById(id)
    .then(value => res.send(value))
    .catch(reason => res.status(404).send(reason))
})

function updatePutVal (req, res, property) {
  const id = req.body.news._id

  const docQuery = { $inc: { __v: 1 }, updatedAt: Date.now() }
  docQuery.$inc[property] = 1

  News.update({ _id: id }, docQuery)
    .then(() =>
      News.findById(id)
        .then(value => res.send({ news: value }))
        .catch(reason => res.status(500).send(reason))
    )
    .catch(reason => res.status(500).send(reason))
}

router.put('/:id/like', function (req, res) {
  updatePutVal(req, res, 'likes')
})

router.put('/:id/dislike', function (req, res) {
  updatePutVal(req, res, 'dislikes')
})

router.put('/:id/view', function (req, res) {
  updatePutVal(req, res, 'views')
})

router.get('/', (req, res) => {
  News.find()
    .then(value => res.send(value))
    .catch(reason => res.status(500).send(reason))
})

router.delete('/', (req, res) => {
  News.deleteMany({})
    .then(value => res.send(value))
    .catch(reason => res.status(500).send(reason))
})

module.exports = router
