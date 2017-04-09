import * as mongoose from "mongoose";

import { ILog } from './../../shared/interfaces/ILog';

export interface ILogModel extends ILog, mongoose.Document {
    userId: number;
    questionId: number;
    type: string;
    score: number;
    timeTaken: number;
}

let log = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    questionId: {
        type: Number,
        required: true
    },
    type: {
        type: String,
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
        let doc = <ILogModel>this._doc;
    }
    next();
    return this;
});

export let LogSchema = mongoose.model<ILogModel>('log', log, 'logs', true);