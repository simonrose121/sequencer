import { Answer } from './answer';

export class Player {
    public playerId: number;
    public score: number;
    public questionsAnswered: number;
    public possibleScore: number;
    public timeTaken: number;
    public answers: Answer[];

    // constructor(playerId: number,
    //             score: number,
    //             questionsAnswered: number,
    //             timeTaken: number,
    //             possibleScore: number) {
    //     this.playerId = playerId;
    //     this.score = score;
    //     this.questionsAnswered = questionsAnswered;
    //     this.possibleScore = possibleScore;
    //     this.timeTaken = timeTaken;
    //     this.answers = [];
    // }
}