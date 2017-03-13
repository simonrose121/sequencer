"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
class Server {
    constructor() {
        this.port = 3000;
        this.app = express();
        this.config();
        this.routes();
        this.api();
        this.app.listen(this.port);
    }
    static bootstrap() {
        return new Server();
    }
    config() {
        this.app.set('view engine', 'ejs');
        this.app.engine('html', ejs.renderFile);
        this.app.use(bodyParser.json());
        this.app.set('views', __dirname + '/client/');
    }
    routes() {
        this.app.get('/', function (req, res) {
            res.render(__dirname + '/client/index.html');
        });
    }
    api() {
    }
}
exports.Server = Server;
