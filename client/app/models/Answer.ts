import { IAnswer } from './../../../shared/interfaces/IAnswer';

export class Answer implements IAnswer {
    userId: number;
    questionId: number;
    typeId: number;
    score: number;
    dateTime: Date;
    timeTaken: number;

    constructor(userId: number, questionId: number, typeId: number, score: number, dateTime: Date, timeTaken: number) {
        this.userId = userId;
        this.questionId = questionId;
        this.typeId = typeId;
        this.score = score;
        this.dateTime = dateTime;
        this.timeTaken = timeTaken;
    }
}