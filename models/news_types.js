const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsTypesSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now }
})

mongoose.model('news_types', NewsTypesSchema)
