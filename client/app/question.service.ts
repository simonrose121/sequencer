import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { Question } from './models/Question';

@Injectable()
export class QuestionService {
    private storiesUrl = 'app/stories.json';

    constructor(private httpService: HttpService) {}

    // public methods
    public getStoriesData(): Observable<any> {
        return this.httpService.get(this.storiesUrl);
    }

    public addCards(question: Question) {
        question.cards = [
            {
                'position': 1,
                'imageUrl': question.questionId + '/1'
            },
            {
                'position': 2,
                'imageUrl': question.questionId + '/2'
            },
            {
                'position': 3,
                'imageUrl': question.questionId + '/3'
            },
            {
                'position': 4,
                'imageUrl': question.questionId + '/4'
            }
        ];
    }
}
