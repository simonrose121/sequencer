import * as mongoose from "mongoose";

import { ICard } from './../../shared/interfaces/ICard';
import { IStory } from './../../shared/interfaces/IStory';

export interface ICardModel extends ICard, mongoose.Document {
    position: number;
    imageUrl: string;
}

export interface IStoryModel extends IStory, mongoose.Document {
    action: string;
    type: string;
    cards: Array<ICardModel>;
}

let card = new mongoose.Schema({
    position: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

let story = new mongoose.Schema({
    action: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    cards: {
        type: [card],
    }
}).pre('save', function(next) {
    if (this._doc) {
        let doc = <IStoryModel>this._doc;
    }
    next();
    return this;
});

export let StorySchema = mongoose.model<IStoryModel>('story', story, 'stories', true);