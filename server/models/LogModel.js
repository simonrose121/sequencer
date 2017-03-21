"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogRepository_1 = require("./../repositories/LogRepository");
class LogModel {
    constructor(logModel) {
        this._logModel = logModel;
    }
    static save(req, res) {
        let repo = new LogRepository_1.LogRepository();
        const b = req.body;
        let log;
        log.userId = b.userId;
        log.questionId = b.questionId;
        log.type = b.type;
        log.score = b.score;
        log.timeTaken = b.timeTaken;
        repo.create(log, function (err, doc) {
            if (err) {
                throw err;
            }
        });
    }
}
exports.LogModel = LogModel;
Object.seal(LogModel);
