export class User {
    public userId: number;
    public score: number;
    public questionsAnswered: number;
    public possibleScore: number;

    constructor(userId: number, score: number, questionsAnswered: number, possibleScore: number) {
        this.userId = userId;
        this.score = score;
        this.questionsAnswered = questionsAnswered;
        this.possibleScore = possibleScore;
    }
}