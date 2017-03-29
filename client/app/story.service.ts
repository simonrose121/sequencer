import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UtilitiesService } from './utilities.service';

import { Card } from './models/card';
import { Story } from './models/story';

@Injectable()
export class StoryService {

    private storiesUrl = 'app/stories.json';

    constructor(private http: Http) {}

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
}
