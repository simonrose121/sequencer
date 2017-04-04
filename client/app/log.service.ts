import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UtilitiesService } from './utilities.service';
import { Story } from './models/Story';
import { Log } from './models/Log';
import { Card } from './models/Card';

@Injectable()
export class LogService {

    constructor(private utilitiesService: UtilitiesService,
                private http: Http) {}

    private id;

    setId(id : number) {
        this.id = id;
    }

    getId() : number {
        return this.id;
    }

    // storeMark(story : Story, mark : number) {
    //     console.log('---------------');
    //     console.log('user: ' + this.id);
    //     console.log('question: ' + story.action);
    //     console.log('type: ' + story.type);
    //     console.log('score: ' + mark);
    //     console.log('time taken: ' + this.utilitiesService.secondsElapsed(new Date()));
    // }

    mark(story : Story, cards : Card[]) : Observable<Log> {
        /* logic for this:
          Correct sequence - 2 points
          Correct beginning and end - 1 point
          Incorrect sequence - 0 points
        */
        let mark;
        if ((cards[0].position === 1) &&
            (cards[1].position === 2) &&
            (cards[2].position === 3) &&
            (cards[3].position === 4)) {
            mark = 2;
        } else if ((cards[0].position === 1) && (cards[3].position === 4)) {
            mark = 1;
        } else {
            mark = 0;
        }

        // post mark
        const log = new Log(this.id, 1, story.type, mark, this.utilitiesService.secondsElapsed(new Date()));

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/log/create', log, options).map(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }
}
