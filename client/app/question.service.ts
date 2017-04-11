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
    private storiesUrl: string = 'app/stories.json';

    constructor(private httpService: HttpService) {}

    // public methods
    public getStoriesData() : Observable<any> {
        return this.httpService.get(this.storiesUrl);
    }
}
