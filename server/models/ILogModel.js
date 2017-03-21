"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let log = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    questionId: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    timeTaken: {
        type: Number,
        required: true
    }
}).pre('save', function (next) {
    if (this._doc) {
        let doc = this._doc;
    }
    next();
    return this;
});
exports.LogSchema = mongoose.model('log', log, 'logs', true);
