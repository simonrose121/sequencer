var mongoose = require('mongoose');

var answerSchema = mongoose.Schema({
    questionId: Number,
    action: String,
    typeId: Number,
    score: Number,
    dateTime: Date,
    timeTaken: Number
});

var cardSetSchema = mongoose.Schema({
    answers: [answerSchema],
    cardSet: String
});

var playerSchema = mongoose.Schema({
    playerId: Number,
    cardSets: [cardSetSchema]
})

module.exports = mongoose.model('Player', playerSchema);