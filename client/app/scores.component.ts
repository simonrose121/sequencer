import { Component } from '@angular/core';

import { LogService } from "./log.service";

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
            console.log(data);
        });
    }
}