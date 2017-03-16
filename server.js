"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
// models
const StoryModel_1 = require("./server/models/StoryModel");
class Server {
    constructor() {
        this.port = 3000;
        this.app = express();
        this.connect();
        this.config();
        this.routes();
        this.api();
        this.app.listen(this.port);
    }
    static bootstrap() {
        return new Server();
    }
    connect() {
        let uri = 'mongodb://localhost:27017/sequencer-test';
        mongoose.connect(uri, (err) => {
            if (err) {
                console.log(err.message);
                console.log(err);
            }
            else {
                console.log('Connected to MongoDb');
            }
        });
    }
    config() {
        this.app.set('view engine', 'ejs');
        this.app.engine('html', ejs.renderFile);
        this.app.use(bodyParser.json());
        this.app.set('views', __dirname + '/client/');
        this.app.use(express.static(__dirname + '/client/'));
    }
    routes() {
        this.app.get('/', function (req, res) {
            res.render(__dirname + '/client/index.html');
        });
    }
    api() {
        this.app.get('/stories/', StoryModel_1.StoryModel.getAll);
    }
}
exports.Server = Server;
