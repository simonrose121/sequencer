"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StoryRepository_1 = require("./../repositories/StoryRepository");
class StoryModel {
    constructor(storyModel) {
        this._storyModel = storyModel;
    }
    static getAll() {
        let p = new Promise((resolve, reject) => {
            let repo = new StoryRepository_1.StoryRepository();
            repo.find({}).exec((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        resolve(res[0]);
                    }
                    else {
                        resolve(null);
                    }
                }
            });
        });
        return p;
    }
}
exports.StoryModel = StoryModel;
Object.seal(StoryModel);
