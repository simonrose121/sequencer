import { IQuestion } from './../../../shared/interfaces/IQuestion';
import { Card } from './card';

export class Question implements IQuestion {
    public questionId: number;
    public action: string;
    public typeId: number;
    public cards: Array<Card>;

    constructor(questionId: number, action: string, typeId: number, cards: Array<Card>) {
        this.questionId = questionId;
        this.action = action;
        this.typeId = typeId;
        this.cards = cards;
    }
}
