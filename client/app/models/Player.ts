import { Log } from './log';

export class Player {
    public playerId: number;
    public score: number;
    public questionsAnswered: number;
    public possibleScore: number;
    public answers: Log[];

    constructor(playerId: number, score: number, questionsAnswered: number, possibleScore: number) {
        this.playerId = playerId;
        this.score = score;
        this.questionsAnswered = questionsAnswered;
        this.possibleScore = possibleScore;
        this.answers = [];
    }
}