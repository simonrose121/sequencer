import { Card } from './card';

export class Story {
    public action: string;
    public type: string;
    public cards: Array<Card>;

    constructor(action: string, type: string, cards: Array<Card>) {
        this.action = action;
        this.type = type;
        this.cards = cards;
    }
}