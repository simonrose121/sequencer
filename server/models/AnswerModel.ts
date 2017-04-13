import { IAnswerModel } from "./interfaces/IAnswerModel";

export class AnswerModel implements IAnswerModel {
    questionId: number;
    typeId: number;
    dateTime: Date;
    score: number;
    timeTaken: number;
}