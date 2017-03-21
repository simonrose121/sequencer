import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UtilitiesService } from './utilities.service';
import { Story } from './models/Story';
import { Log } from './models/Log';
import { Card } from './models/Card';

@Injectable()
export class DataService {

    constructor(private utilitiesService: UtilitiesService,
                private http: Http) {}

    private id = 1; // TODO: Change me back

    setId(id : number) {
        this.id = id;
    }

    // storeMark(story : Story, mark : number) {
    //     console.log('---------------');
    //     console.log('user: ' + this.id);
    //     console.log('question: ' + story.action);
    //     console.log('type: ' + story.type);
    //     console.log('score: ' + mark);
    //     console.log('time taken: ' + this.utilitiesService.secondsElapsed(new Date()));
    // }

    createLog(story: Story, mark : number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const log = new Log(this.id, 1, story.type, mark, this.utilitiesService.secondsElapsed(new Date()));

        this.http.post('/log/create', log, options);
    }
}
