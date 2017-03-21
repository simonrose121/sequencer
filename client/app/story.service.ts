import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { DataService } from './data.service';
import { UtilitiesService } from './utilities.service';

import { Card } from './models/card';
import { Story } from './models/story';

@Injectable()
export class StoryService {

    private storiesUrl = 'app/stories.json';

    constructor(private dataService: DataService,
                private utilitiesService: UtilitiesService,
                private http: Http) {}

    // public methods
    public getStories() : Observable<Story[]> {
        return this.http.get(this.storiesUrl).map(this.extractData);
    }

    private extractData(res: Response) {
        return res.json().stories;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    mark(story : Story, cards : Array<Card>) {
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

        this.dataService.createLog(story, mark);
    }
}
