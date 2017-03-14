import * as mongoose from "mongoose";

import { ICard } from './../../shared/intefaces/ICard';
import { IStory } from './../../shared/intefaces/IStory';

// needs to match story class but how? same interface
interface ICardModel extends ICard, mongoose.Document {}
interface IStoryModel extends IStory, mongoose.Document {}

const Card = mongoose.model<ICardModel>('Card', new mongoose.Schema({
    position: Number,
    imageUrl: String
}));

const Story = mongoose.model<IStoryModel>('Story', new mongoose.Schema({
    action: String,
    type: String,
    cards: [Card]
}));