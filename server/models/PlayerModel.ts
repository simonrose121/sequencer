import { Document } from "mongoose";

import { IPlayer } from '../../shared/interfaces/IPlayer';
import { AnswerModel } from "./AnswerModel";

export class PlayerModel {
    playerId: number;
    answers: AnswerModel[];
}