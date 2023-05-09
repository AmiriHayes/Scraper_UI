const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postingSchema = new Schema({
  title: { type: String, required: true, maxLength: 20 },
  position: { type: String, required: true,  maxLength: 50 },
  location: { type: String, required: true, maxLength: 20},
  link: { type: String, required: true, maxLength: 50 },
  time : { type : Date, default: Date.now }
})

// Time To Live (seconds)
postingSchema.path('time').index({ expires: 900 });

const Posting = mongoose.model('Posting', postingSchema)
module.exports = Posting