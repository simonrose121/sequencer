import { IPlayerModel } from './../models/IPlayerModel';
import { schema } from './../schemas/PlayerSchema';
import { RepositoryBase } from './RepositoryBase';

export class PlayerRepository extends RepositoryBase<IPlayerModel> {
    constructor() {
        super(schema);
    }
}