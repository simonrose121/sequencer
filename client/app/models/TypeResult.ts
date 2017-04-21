export class TypeResult {
    public typeId: number;
    public score: number;
    public questionsAnswered: number;
    public possibleScore: number;
    public timeTaken: number;

    constructor(typeId: number) {
        this.typeId = typeId;
        this.score = 0;
        this.questionsAnswered = 0;
        this.possibleScore = 0;
        this.timeTaken = 0;
    }
}
