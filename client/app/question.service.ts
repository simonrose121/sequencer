import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

@Injectable()
export class QuestionService {
    private storiesUrl = 'app/stories.json';

    constructor(private httpService: HttpService) {}

    // public methods
    public getStoriesData(): Observable<any> {
        return this.httpService.get(this.storiesUrl);
    }
}
