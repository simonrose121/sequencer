import { ICard } from './../interfaces/ICard';

export interface IStory {

    action: string;
    type: string;
    cards: Array<ICard>;
}