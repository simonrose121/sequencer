"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogRepository_1 = require("./../repositories/LogRepository");
const ILogModel_1 = require("./ILogModel");
class LogModel {
    constructor(logModel) {
        this._logModel = logModel;
    }
    static create(req, res) {
        let repo = new LogRepository_1.LogRepository();
        const b = req.body;
        let log = new ILogModel_1.LogSchema();
        log.userId = b.userId;
        log.questionId = b.questionId;
        log.type = b.type;
        log.score = b.score;
        log.timeTaken = b.timeTaken;
        console.log(log);
        repo.create(log, function (err, doc) {
            if (err) {
                throw err;
            }
            res.send(doc);
        });
    }
}
exports.LogModel = LogModel;
Object.seal(LogModel);
