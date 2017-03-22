import { ILogModel, LogSchema } from './../models/ILogModel';
import { RepositoryBase } from './RepositoryBase';

export class LogRepository extends RepositoryBase<ILogModel> {
    constructor() {
        super(LogSchema);
    }
}