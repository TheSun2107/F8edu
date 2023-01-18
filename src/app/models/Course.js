const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete')

mongoose.plugin(slug)

const Course = new Schema({
  name: String,
  description: String,
  image: String,
  VideoId: String,
  slug: { type: String, slug: "name", unique: true }
}, {
  timestamps: true,
})

Course.plugin(mongoose_delete, { 
  deletedAt : true,
  overrideMethods: true
})

module.exports = mongoose.model('Course', Course)