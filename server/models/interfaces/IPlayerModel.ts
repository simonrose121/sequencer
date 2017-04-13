import { Document } from "mongoose";

import { IPlayer } from '../../../shared/interfaces/IPlayer';
import { IAnswerModel } from "./IAnswerModel";

export interface IPlayerModel extends IPlayer, Document {
    playerId: number;
    answers: IAnswerModel[];
}
