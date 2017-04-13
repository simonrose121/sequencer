import { Document } from 'mongoose';
import { IAnswer } from "../../../shared/interfaces/IAnswer";

export interface IAnswerModel extends IAnswer, Document {
    questionId: number;
    typeId: number;
    dateTime: Date
    score: number;
    timeTaken: number;
}
