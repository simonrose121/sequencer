"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ILogModel_1 = require("./../models/ILogModel");
const RepositoryBase_1 = require("./RepositoryBase");
class LogRepository extends RepositoryBase_1.RepositoryBase {
    constructor() {
        super(ILogModel_1.LogSchema);
    }
}
exports.LogRepository = LogRepository;
