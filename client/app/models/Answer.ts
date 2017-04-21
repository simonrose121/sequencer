import { IAnswer } from './../../../shared/interfaces/IAnswer';

export class Answer implements IAnswer {
    userId: number;
    questionId: number;
    typeId: number;
    score: number;
    dateTime: Date;
    timeTaken: number;
    cardSet: string;

    constructor(userId: number,
                questionId: number,
                typeId: number,
                score: number,
                dateTime: Date,
                timeTaken: number,
                cardSet: string) {
        this.userId = userId;
        this.questionId = questionId;
        this.typeId = typeId;
        this.score = score;
        this.dateTime = dateTime;
        this.timeTaken = timeTaken;
        this.cardSet = cardSet;
    }
}