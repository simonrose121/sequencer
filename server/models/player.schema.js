var mongoose = require('mongoose');

var answerSchema = mongoose.Schema({
    questionId: Number,
    typeId: Number,
    score: Number,
    dateTime: Date,
    timeTaken: Number,
    cardSet: String
});

var playerSchema = mongoose.Schema({
    playerId: Number,
    answers: [answerSchema]
})

module.exports = mongoose.model('Player', playerSchema);