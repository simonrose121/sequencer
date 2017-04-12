import { Document, Schema, model } from "mongoose";

import { IPlayer } from '../../shared/interfaces/IPlayer';
import { IAnswer } from "../../shared/interfaces/IAnswer";

export interface IAnswerModel extends IAnswer, Document {
    questionId: number;
    type: string;
    score: number;
    timeTaken: number;
}

export interface IPlayerModel extends IPlayer, Document {
    playerId: number;
    answers: IAnswerModel[];
}

let answer = Schema({
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
});

let player = Schema({
    playerId: {
        type: Number,
        required: true
    },
    answers: {
        type: [answer]
    }
}).pre('save', function(next) {
    if (this._doc) {
        let doc = <IPlayerModel>this._doc;
    }
    next();
    return this;
});

export let PlayerSchema = model<IPlayerModel>('player', player, 'players', true);
export let AnswerSchema = model<IAnswerModel>('answer', answer);