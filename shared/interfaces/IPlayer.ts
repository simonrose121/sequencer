import { IAnswer } from "./IAnswer";

export interface IPlayer {
    playerId: number;
    score: number;
    questionsAnswered: number;
    possibleScore: number;
    timeTaken: number;
    answers: IAnswer[];
}