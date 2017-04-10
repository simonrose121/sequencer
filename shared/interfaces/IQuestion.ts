import { ICard } from './../interfaces/ICard';

export interface IQuestion {
    questionId: number;
    action: string;
    typeId: number;
    cards: Array<ICard>;
}