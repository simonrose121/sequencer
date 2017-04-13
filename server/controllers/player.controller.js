var players = require('../models/player.schema.js');

module.exports.createPlayer = function(req, res) {
    var body = req.body;

    players.find({playerId: body.playerId}).exec((err, doc) => {
        if (err) {
            throw err;
        }

        if (doc.length === 0) {
            var player = {
                playerId: body.playerId
            };

            players.create(player, (err, doc) => {
                if (err) {
                    throw err;
                }

                res.send(doc);
            })
        } else {
            res.send({
                'error': 'player already exists'
            });
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
            console.log(doc);
            console.log(body);
            // update and save player
            doc.answers.push(body.answer);

            doc.save(function(err, updatedDoc) {
                if (err) {
                    throw err;
                }

                res.send(updatedDoc);
            })
        } else {
            res.send({
                'error': 'player not found'
            })
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