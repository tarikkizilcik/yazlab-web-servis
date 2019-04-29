const express = require('express')
const router = express.Router()

router.use('/news', require('./news'))
router.use('/news-types', require('./news_types'))

module.exports = router
