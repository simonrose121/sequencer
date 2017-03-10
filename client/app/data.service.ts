import { Injectable } from '@angular/core';

import { UtilitiesService } from './utilities.service';

@Injectable()
export class DataService {
    constructor(private utilitiesService: UtilitiesService) {}

    private id = 1; // TODO: Change me back

    setId(id) {
        this.id = id;
    }

    storeMark(story, mark) {
        console.log('---------------');
        console.log('user: ' + this.id);
        console.log('question: ' + story.action);
        console.log('type: ' + story.type);
        console.log('score: ' + mark);
        console.log('time taken: ' + this.utilitiesService.secondsElapsed(new Date()));
    }
}
