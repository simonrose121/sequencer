import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UtilitiesService } from './utilities.service';
import { HttpService } from './http.service';

import { Question } from './models/Question';
import { Answer } from './models/Answer';
import { Card } from './models/Card';
import { Player } from './models/Player';

@Injectable()
export class PlayerService {

    id: number;
    addAnswerUrl: string;
    getAllAnswersUrl: string;
    createPlayerUrl: string;

    constructor(private utilitiesService: UtilitiesService,
                private httpService: HttpService) {
        this.addAnswerUrl = '/player/addAnswer';
        this.getAllAnswersUrl = '/player/getAll';
        this.createPlayerUrl = '/player/create';
    }

    public createPlayer(id: number): Observable<Player> {
        let player = new Player();
        player.playerId = id;

        return this.httpService.post(this.createPlayerUrl, player);
    }

    public getId(): number {
        return this.id;
    }

    public markAnswer(story: Question, cards: Card[]): Observable<Answer> {
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

        const answer = new Answer( this.id,
                                story.questionId,
                                story.typeId,
                                mark,
                                new Date(),
                                this.utilitiesService.secondsElapsed(new Date()));

        return this.httpService.post(this.addAnswerUrl, answer);
    }

    public getAll(): Observable<Answer[]> {
        return this.httpService.get(this.getAllAnswersUrl);
    }
}
