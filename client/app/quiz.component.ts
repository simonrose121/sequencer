import { Component } from '@angular/core';

import { ConfigService } from './config.service';
import { AnswerService } from './answer.service';

@Component({
    templateUrl: 'app/quiz.component.html',
    styleUrls: [
        'app/quiz.component.css'
    ]
})
export class QuizComponent {
    id: Number;
    startScreen: boolean;
    countdownText: string;

    constructor(private answerService: AnswerService,
                private configService: ConfigService) {
        this.countdownText = 'Start';

        configService.getConfig().subscribe(config => {
            if (!config.id) {
                // set a defaultId
                this.setId(1);
            }
            if (!config.countdown) {
                this.startScreen = false;
            }
        });
    }

    private setId(id): void {
        this.id = id;
        this.answerService.setId(id);
        this.startScreen = true;
    }

    private countdown(): void {
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
