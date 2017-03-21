import { LogRepository } from './../repositories/LogRepository';
import { ILogModel } from './ILogModel';
export class LogModel {
    private _logModel: ILogModel;

    constructor(logModel: ILogModel) {
        this._logModel = logModel;
    }

    static create(req, res) {
        let repo = new LogRepository();

        const b = req.body;

        let log : ILogModel;

        log.userId = b.userId;
        log.questionId = b.questionId;
        log.type = b.type;
        log.score = b.score;
        log.timeTaken = b.timeTaken;

        console.log(log);

        repo.create(log, function(err, doc) {
            if (err) {
                throw err;
            }
        });
    }
}

Object.seal(LogModel);