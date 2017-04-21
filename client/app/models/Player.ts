import { Answer } from './Answer';
import { PlayerResult } from './PlayerResult';

export class Player {
    public playerId: number;
    public preTestResults: PlayerResult;
    public postTestResults: PlayerResult;

    constructor(playerId: number) {
        this.playerId = playerId;
        this.preTestResults = new PlayerResult();
        this.postTestResults = new PlayerResult();
    }
}