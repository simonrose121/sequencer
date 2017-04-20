import { Answer } from './answer';

export class Player {
    public playerId: number;
    public score: number;
    public questionsAnswered: number;
    public possibleScore: number;
    public timeTaken: number;
    public answers: Answer[];
    public typeScore: any[];

    constructor(playerId: number) {
        this.playerId = playerId;
        this.score = 0;
        this.questionsAnswered = 0;
        this.possibleScore = 0;
        this.timeTaken = 0;
        this.answers = [];
        this.typeScore = [];
    }
}