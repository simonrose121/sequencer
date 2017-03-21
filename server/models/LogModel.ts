import { LogRepository } from './../repositories/LogRepository';
import { ILogModel } from './ILogModel';
export class LogModel {
    private _logModel: ILogModel;

    constructor(logModel: ILogModel) {
        this._logModel = logModel;
    }
}

Object.seal(LogModel);