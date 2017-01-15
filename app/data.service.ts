import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private id = 1; // TODO: Change me back

    setId(id) {
        this.id = id;
    }

    storeMark(story, mark) {
        console.log('user: ' + this.id + ' has scored: ' + mark + ' for q: '
                    + story.action + ' of type: ' + story.type);
    }
}
