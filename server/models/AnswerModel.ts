import { AnswerRepository } from './../repositories/AnswerRepository';
import { IAnswerModel, AnswerSchema } from './IAnswerModel';

export class AnswerModel {
    private _answerModel: IAnswerModel;

    constructor(answerModel: IAnswerModel) {
        this._answerModel = answerModel;
    }

    static create(req, res) {
        let repo = new AnswerRepository();

        const b = req.body;

        let answer = new AnswerSchema();
        answer.userId = b.userId;
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
        let repo = new AnswerRepository();

        repo.find({}).exec((err, docs) => {
            if (err) {
                throw err;
            }

            res.json(docs);
        });
    }
}

Object.seal(AnswerModel);