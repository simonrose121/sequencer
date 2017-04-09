import { LogRepository } from './../repositories/LogRepository';
import { ILogModel, LogSchema } from './ILogModel';

export class LogModel {
    private _logModel: ILogModel;

    constructor(logModel: ILogModel) {
        this._logModel = logModel;
    }

    static create(req, res) {
        let repo = new LogRepository();

        const b = req.body;

        let log = new LogSchema();
        log.userId = b.userId;
        log.questionId = b.questionId;
        log.type = b.type;
        log.score = b.score;
        log.dateTime = b.dateTime;
        log.timeTaken = b.timeTaken;

        repo.create(log, function(err, doc) {
            if (err) {
                throw err;
            }

            res.send(doc);
        });
    }

    static getAll(req, res) {
        let repo = new LogRepository();

        repo.find({}, function(err, docs) {
            if (err) {
                console.log(err);
                
                throw err;
            }

            console.log(docs);
            

            res.send(docs);
        });
    }
}

Object.seal(LogModel);