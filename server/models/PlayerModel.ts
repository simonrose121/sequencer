import { PlayerRepository } from './../repositories/PlayerRepository';
import { IPlayerModel, PlayerSchema, AnswerSchema } from './IPlayerModel';

export class PlayerModel {
    private _playerModel: IPlayerModel;

    constructor(playerModel: IPlayerModel) {
        this._playerModel = playerModel;
    }

    static playerExists(req, res) {

    }

    static createPlayer(req, res) {

    }

    static addAnswer(req, res) {
        let repo = new PlayerRepository();

        const b = req.body;

        let answer = new AnswerSchema();
        answer.questionId = b.questionId;
        answer.typeId = b.typeId;
        answer.score = b.score;
        answer.dateTime = b.dateTime;
        answer.timeTaken = b.timeTaken;

        repo.create(answer, (err, doc) => {
            if (err) {
                throw err;
            }

            res.send(doc);
        });
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

Object.seal(PlayerModel);