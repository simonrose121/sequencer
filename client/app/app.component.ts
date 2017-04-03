import { Component } from '@angular/core';

import { LogService } from './log.service';

@Component({
    selector: 'sq-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css',
    ]
})
export class AppComponent { 
    id : Number;
    startScreen : boolean;
    countdownText : string;

    constructor(private logService: LogService) {
        this.countdownText = 'Start';
    }

    setId(id) {
        this.id = id;
        this.logService.setId(id);
        this.startScreen = true;
    }

    countdown() {
        this.countdownText = '3';
        setTimeout(() => {
            this.countdownText = '2';
        }, 1000);
        setTimeout(() => {
            this.countdownText = '1';
        }, 2000);
        setTimeout(() => {
            this.startScreen = false;
        }, 3000);
    }
}