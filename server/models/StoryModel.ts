import { StoryRepository } from './../repositories/StoryRepository';
import { IStoryModel } from './IStoryModel';
export class StoryModel {
    private _storyModel: IStoryModel;

    constructor(storyModel: IStoryModel) {
        this._storyModel = storyModel;
    }

    static getAll() {
        let p = new Promise((resolve, reject) => {
            let repo = new StoryRepository();

            repo.find({}).exec((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    if (res.length) {
                        resolve(res[0]);
                    } else {
                        resolve(null);
                    }
                }
            });
        });

        return p;
    }
}

Object.seal(StoryModel);