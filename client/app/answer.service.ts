import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UtilitiesService } from './utilities.service';
import { Question } from './models/Question';
import { Answer } from './models/Answer';
import { Card } from './models/Card';

@Injectable()
export class AnswerService {

    private id : number;
    private addAnswerUrl : string;
    private getAllAnswersUrl : string;

    constructor(private utilitiesService: UtilitiesService,
                private http: Http) {
        
        this.addAnswerUrl = '/answers/add';
        this.getAllAnswersUrl = '/answers/all';
    }

    public setId(id : number) : void {
        this.id = id;
    }

    public getId() : number {
        return this.id;
    }

    public mark(story : Question, cards : Card[]) : Observable<Answer> {
        /*
          Correct sequence - 2 points
          Correct beginning and end - 1 point
          Incorrect sequence - 0 points
        */
        let mark;
        
        if ((cards[0].position === 1) &&
            (cards[1].position === 2) &&
            (cards[2].position === 3) &&
            (cards[3].position === 4)) {
            // if correct sequence
            mark = 2;
        } else if ((cards[0].position === 1) && 
                   (cards[3].position === 4)) {
            // if start and end cards are correct
            mark = 1;
        } else {
            mark = 0;
        }

         // post mark
        const answer = new Answer( this.id, 
                                story.questionId, 
                                story.typeId, 
                                mark, 
                                new Date(), 
                                this.utilitiesService.secondsElapsed(new Date()));

        return this.saveAnswer(answer);
    }

    public getAll() : Observable<Answer[]> {
        return this.http.get(this.getAllAnswersUrl).map(this.utilitiesService.extractData);
    }

    private saveAnswer(answer : Answer) : Observable<Answer> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.addAnswerUrl, answer, options).map(this.utilitiesService.extractData);
    }
}
