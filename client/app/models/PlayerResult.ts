import { TypeResult } from './TypeResult';
import { Answer } from './Answer';

export class PlayerResult {
    public score: number;
    public questionsAnswered: number;
    public possibleScore: number;
    public timeTaken: number;
    public answers: Answer[];
    public typeResults: TypeResult[];

    constructor() {
        this.score = 0;
        this.questionsAnswered = 0;
        this.possibleScore = 0;
        this.timeTaken = 0;
        this.answers = [];
        this.typeResults = [
            new TypeResult(1),
            new TypeResult(2),
            new TypeResult(3),
            new TypeResult(4),
            new TypeResult(5)
        ];
    }
}
