"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StoryRepository_1 = require("./../repositories/StoryRepository");
class StoryModel {
    constructor(storyModel) {
        this._storyModel = storyModel;
    }
    static getAll(req, res) {
        let repo = new StoryRepository_1.StoryRepository();
        repo.find({}).exec((err, result) => {
            if (err) {
                throw err;
            }
            return res.json(result);
        });
    }
}
exports.StoryModel = StoryModel;
Object.seal(StoryModel);
