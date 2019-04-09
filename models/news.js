const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: Date
})

mongoose.model('News', NewsSchema)
