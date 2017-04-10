import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UtilitiesService } from './utilities.service';
import { Question } from './models/Question';
import { Answer } from './models/Answer';
import { Card } from './models/Card';

@Injectable()
export class AnswerService {

    constructor(private utilitiesService: UtilitiesService,
                private http: Http) {}

    private id;

    setId(id : number) {
        this.id = id;
    }

    getId() : number {
        return this.id;
    }

    mark(story : Question, cards : Card[]) : Observable<Answer> {
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
        const log = new Answer(this.id, story.questionId, story.typeId, mark, new Date(), this.utilitiesService.secondsElapsed(new Date()));

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/answers/add', log, options).map(this.extractData);
    }

    getAll() : Observable<Answer[]> {
        console.log('getting all');
        
        return this.http.get('/answers/all').map(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }
}
