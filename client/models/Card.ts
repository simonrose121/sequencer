import { ICard } from './../../shared/interfaces/ICard';

export class Card implements ICard {
    public position: number;
    public imageUrl: string;

    constructor(position: number, imageUrl: string) {
        this.position = position;
        this.imageUrl = imageUrl;
    }
}
