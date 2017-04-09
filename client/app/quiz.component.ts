import { Component } from '@angular/core';

import { LogService } from "./log.service";
import { ConfigService } from "./config.service";

@Component({
    templateUrl: 'app/quiz.component.html',
    styleUrls: [
        'app/quiz.component.css'
    ]
})
export class QuizComponent {
    id : Number;
    startScreen : boolean;
    countdownText : string;

    constructor(private logService: LogService,
                private configService: ConfigService) {
        this.countdownText = 'Start';
        
        configService.getConfig().subscribe(config => {
            console.log(config);
            if (!config.id) {
                this.setId(1);
            }
            if (!config.countdown) {
                this.startScreen = false;
            }
        });
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