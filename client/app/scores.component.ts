import { Component } from '@angular/core';

import { LogService } from "./log.service";
import { Log } from './models/Log';

@Component({
    templateUrl: 'app/scores.component.html',
    styleUrls: [
        'app/scores.component.css',
    ]
})
export class ScoresComponent {
    constructor(private logService: LogService) { 
        this.getLogs();
    }

    // pull through log files and create score for user
    getLogs() {
        console.log('getting logs');
        this.logService.getAll().subscribe(data => {
            this.process(data);
        });
    }

    process(data : Log[]) {
        // list for each id the total score and questions answered
        let users = [];

        // for each element
        data.forEach(element => {
            // get it's id

            // add the score and total questions to an array of objects with that id

        });
    }
}