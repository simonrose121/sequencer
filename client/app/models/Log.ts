import { ILog } from './../../../shared/interfaces/ILog';

export class Log implements ILog {
    userId: number;
    questionId: number;
    type: string;
    score: number;
    dateTime: Date;
    timeTaken: number;

    constructor(userId: number, questionId: number, type: string, score: number, dateTime: Date, timeTaken: number) {
        this.userId = userId;
        this.questionId = questionId;
        this.type = type;
        this.score = score;
        this.dateTime = dateTime;
        this.timeTaken = timeTaken;
    }
}