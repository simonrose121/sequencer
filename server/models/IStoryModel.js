"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let card = new mongoose.Schema({
    position: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});
let story = new mongoose.Schema({
    action: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    cards: {
        type: [card],
    }
}).pre('save', function (next) {
    if (this._doc) {
        let doc = this._doc;
    }
    next();
    return this;
});
exports.StorySchema = mongoose.model('story', story, 'stories', true);
