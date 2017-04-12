import { IPlayerModel, PlayerSchema } from './../models/IPlayerModel';
import { RepositoryBase } from './RepositoryBase';

export class PlayerRepository extends RepositoryBase<IPlayerModel> {
    constructor() {
        super(PlayerSchema);
    }
}