import { PlayerRepository } from './../repositories/PlayerRepository';
import { PlayerModel } from "../models/PlayerModel";

export class PlayerController {

    static createPlayer(req, res) {
        let repo = new PlayerRepository();

        const body = req.body;

        console.log(body);
        
        repo.find({playerId: body.playerId}).exec((err, doc) => {
            if (err) {
                throw err;
            }

            if (doc.length === 0) {
                let player = new PlayerModel();
                player.playerId = body.playerId;

                repo.create(player, (err, doc) => {
                    if (err) {
                        throw err;
                    }

                    res.send(doc);
                })
            }
               
            res.send(false);
        })
    }

    static addAnswer(req, res) {
        let repo = new PlayerRepository();

        const b = req.body;

        // find player and add answer
    }

    static getAll(req, res) {
        let repo = new PlayerRepository();

        repo.find({}).exec((err, docs) => {
            if (err) {
                throw err;
            }

            res.json(docs);
        });
    }
}

Object.seal(PlayerController);