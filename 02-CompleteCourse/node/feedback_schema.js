var mongoose = require('mongoose')

var feedbackSchema = mongoose.Schema({
    username: {type: String, required: true},
    feedback: String
})

var feedbackModel = mongoose.model('feedbacks',feedbackSchema)
module.exports = feedbackModel