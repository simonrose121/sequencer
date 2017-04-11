import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpService } from "./http.service";

import { Card } from './models/card';
import { Question } from './models/question';

@Injectable()
export class QuestionService {

    private storiesUrl = 'app/stories.json';

    constructor(private httpService: HttpService) {}

    // public methods
    public getStoriesData() : Observable<any> {
        return this.httpService.get(this.storiesUrl);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
