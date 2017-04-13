import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as ejs from "ejs";

declare var __dirname;
declare var require;
declare var static;

// models
var playerController = require('./server/controllers/player.controller');

export class Server {
    public app;

    private port = 3000;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.connect();

        this.config();

        this.routes();

        this.api();

        this.app.listen(this.port);
    }

    public connect() {
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

    public config() {
        this.app.set('view engine', 'ejs');
        this.app.engine('html', ejs.renderFile);

        this.app.use(bodyParser.json());

        this.app.set('views', __dirname + '/client/');

        this.app.use(express.static(__dirname + '/client/'));
    }

    public routes() {
        this.app.get('/', function(req, res) {
            res.render(__dirname + '/client/index.html');
        });
        // NOTE: These have to match angular routes
        this.app.get('/quiz', function(req, res) {
            res.render(__dirname + '/client/index.html');
        })
        this.app.get('/scores', function(req, res) {
            res.render(__dirname + '/client/index.html');
        })
    }

    public api() {
        this.app.post('/player/create', playerController.createPlayer)
        this.app.post('/player/addAnswer', playerController.addAnswer);
        this.app.get('/player/getAll', playerController.getAll);
    }
}



