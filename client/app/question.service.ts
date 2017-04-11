import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UtilitiesService } from './utilities.service';

import { Card } from './models/card';
import { Question } from './models/question';

@Injectable()
export class QuestionService {

    private storiesUrl = 'app/stories.json';
    private storySet : number;

    constructor(private http: Http) {}

    // public methods
    public getStories() : Observable<Question[]> {
        return this.http.get(this.storiesUrl).map((res : Response) => {
            switch (this.storySet) {
                case 1:
                    return res.json().stories.firstSet;
                case 2:
                    return res.json().stories.secondSet;
            }
        });
    }

    public getDemoStory() : Observable<Question[]> {
        return this.http.get(this.storiesUrl).map((res : Response) => {
            return res.json().demoStory;
        });
    }

    public setStorySet(storySet : number) {
        this.storySet = storySet;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
