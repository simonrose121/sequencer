import { Component } from '@angular/core';

import { ConfigService } from './config.service';
import { PlayerService } from './player.service';

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
    error: string;

    constructor(private playerService: PlayerService,
                private configService: ConfigService) {
        this.countdownText = 'Start';

        configService.getConfig().subscribe(config => {
            if (!config.id) {
                // set a defaultId
                this.id = 1;
                playerService.id = 1;
            }
            if (!config.countdown) {
                this.startScreen = false;
            }
            playerService.cardSet = config.cardSet;
        });
    }

    private setId(id): void {
        this.playerService.createPlayer(id).subscribe(res => {
            if (res.error) {
                this.error = res.error;
            } else {
                this.id = id;
                this.playerService.id = id;
                this.startScreen = true;
            }
        });
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
