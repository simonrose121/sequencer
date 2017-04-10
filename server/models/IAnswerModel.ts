import * as mongoose from "mongoose";

import { IAnswer } from './../../shared/interfaces/IAnswer';

export interface IAnswerModel extends IAnswer, mongoose.Document {
    userId: number;
    questionId: number;
    type: string;
    score: number;
    timeTaken: number;
}

let answer = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    questionId: {
        type: Number,
        required: true
    },
    typeId: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    timeTaken: {
        type: Number,
        required: true
    }
}).pre('save', function(next) {
    if (this._doc) {
        let doc = <IAnswerModel>this._doc;
    }
    next();
    return this;
});

export let AnswerSchema = mongoose.model<IAnswerModel>('answer', answer, 'answers', true);