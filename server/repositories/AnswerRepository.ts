import { IAnswerModel, AnswerSchema } from './../models/IAnswerModel';
import { RepositoryBase } from './RepositoryBase';

export class AnswerRepository extends RepositoryBase<IAnswerModel> {
    constructor() {
        super(AnswerSchema);
    }
}