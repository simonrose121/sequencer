import { IStory } from './../../shared/interfaces/IStory';
import { Card } from './card';

export class Story implements IStory {
    public action: string;
    public type: string;
    public cards: Array<Card>;

    constructor(action: string, type: string, cards: Array<Card>) {
        this.action = action;
        this.type = type;
        this.cards = cards;
    }
}
