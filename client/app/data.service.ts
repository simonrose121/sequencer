import { Injectable } from '@angular/core';

import { UtilitiesService } from './utilities.service';

import { Story } from './../models/story';

@Injectable()
export class DataService {
    constructor(private utilitiesService: UtilitiesService) {}

    private id = 1; // TODO: Change me back

    setId(id : number) {
        this.id = id;
    }

    storeMark(story : Story, mark : number) {
        console.log('---------------');
        console.log('user: ' + this.id);
        console.log('question: ' + story.action);
        console.log('type: ' + story.type);
        console.log('score: ' + mark);
        console.log('time taken: ' + this.utilitiesService.secondsElapsed(new Date()));
    }
}
