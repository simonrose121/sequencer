import { ILog } from './../../shared/interfaces/ILog';

export class Log implements ILog {
    userId: number;
    questionId: number;
    type: string;
    score: number;
    timeTaken: number;

    constructor(userId: number, questionId: number, type: string, score: number, timeTaken: number) {
        this.userId = userId;
        this.questionId = questionId;
        this.type = type;
        this.score = score;
        this.timeTaken = timeTaken;
    }
}