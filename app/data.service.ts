import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private id;

    setId(id) {
        this.id = id;
    }

    storeMark(storyId, mark) {
        console.log('user: ' + this.id + ' has scored: ' + mark + ' for q: ' + storyId);
    }
}