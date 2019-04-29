const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  type: { type: String, required: true, lowercase: true },
  image: { type: Array, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  publicationDate: { type: Number, required: true },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now }
})

mongoose.model('News', NewsSchema)
