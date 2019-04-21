const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  type: { type: String, required: true }
}, { timestamps: true })

mongoose.model('News', NewsSchema)
