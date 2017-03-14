import { IStoryModel, StorySchema } from './../models/IStoryModel';
import { RepositoryBase } from './RepositoryBase';

export class StoryRepository extends RepositoryBase<IStoryModel> {
    constructor() {
        super(StorySchema);
    }
}