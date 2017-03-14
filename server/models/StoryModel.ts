import { StoryRepository } from './../repositories/StoryRepository';
import { IStoryModel } from './IStoryModel';
export class StoryModel {
    private _storyModel: IStoryModel;

    constructor(storyModel: IStoryModel) {
        this._storyModel = storyModel;
    }

    static getAll(req, res) {
        let repo = new StoryRepository();

        repo.find({}).exec((err, result) => {
            if (err) {
                throw err;
            }

            return res.json(result);
        });
    }
}

Object.seal(StoryModel);