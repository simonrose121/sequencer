export class Player {
    public playerId: number;
    public score: number;
    public questionsAnswered: number;
    public possibleScore: number;

    constructor(playerId: number, score: number, questionsAnswered: number, possibleScore: number) {
        this.playerId = playerId;
        this.score = score;
        this.questionsAnswered = questionsAnswered;
        this.possibleScore = possibleScore;
    }
}