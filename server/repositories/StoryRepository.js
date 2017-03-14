"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IStoryModel_1 = require("./../models/IStoryModel");
const RepositoryBase_1 = require("./RepositoryBase");
class StoryRepository extends RepositoryBase_1.RepositoryBase {
    constructor() {
        super(IStoryModel_1.StorySchema);
    }
}
exports.StoryRepository = StoryRepository;
