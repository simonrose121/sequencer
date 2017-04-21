var players = require('../models/player.schema.js');

module.exports.createPlayer = function(req, res) {
    var body = req.body;

    players.find({playerId: body.player.playerId}).exec((err, doc) => {
        if (err) {
            throw err;
        }

        if (doc.length === 0) {

            var player = {
                playerId: body.player.playerId,
                cardSets: [
                    {
                        cardSet: "A",
                        answers: []
                    },
                    {
                        cardSet: "B",
                        answers: []
                    }
                ]
            };

            players.create(player, (err, doc) => {
                if (err) {
                    throw err;
                }

                res.send(doc);
            })
        } else {
            var found = false;

            var index = 0;
            if (body.cardSet === "B") {
                index = 1;
            }

            if(doc[0].cardSets[index].answers.length > 0) {
                found = true;
            };

            if (found) {
                doc = {
                    'error': 'Player already exists'
                };
            }

            res.send(doc);
        }   
    });
}

module.exports.addAnswer = function(req, res) {
    var body = req.body;

    players.findOne({playerId: body.playerId}).exec((err, doc) => {
        if (err) {
            throw err;
        }

        if (doc) {
            // update and save player
            var index = 0;
            if (body.answer.cardSet === "B") {
                index = 1;
            }

            doc.cardSets[index].answers.push(body.answer);

            doc.save(function(err, updatedDoc) {
                if (err) {
                    throw err;
                }

                res.send(updatedDoc);
            })
        } else {
            res.send({
                'error': 'Player not found'
            });
        }
    });
}

module.exports.getAll = function(req, res) {
    players.find({}).exec((err, docs) => {
        if (err) {
            throw err;
        }

        res.json(docs);
    });
}