import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as ejs from "ejs";

declare var __dirname;

// models
import { StoryModel } from './server/models/StoryModel';

export class Server {
    public app;

    private port = 3000;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.config();

        this.routes();

        this.api();

        this.app.listen(this.port);
    }

    public config() {
        this.app.set('view engine', 'ejs');
        this.app.engine('html', ejs.renderFile);

        this.app.use(bodyParser.json());

        this.app.set('views', __dirname + '/client/');

        this.app.use(express.static(__dirname + '/client/'));
    }

    public routes() {
        this.app.get('/', function(req,res) {
            res.render(__dirname + '/client/index.html');
        });
    }

    public api() {
        this.app.get('/api/story/getAll', StoryModel.getAll);
    }
}



