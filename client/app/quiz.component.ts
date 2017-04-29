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
        });

        this.loadImages();
    }

    private setPlayerDetails(id, cardSet): void {
        this.playerService.cardSet = cardSet;
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

    private loadImages() {
        let images = [];
        for (let i = 1; i <= 30; i++) {
            for (let j = 1; j <= 4; j++) {
                const imageName = 'assets/' + i + '/' + j + '.jpg';
                images.push(imageName);
            }
        }
        this.preloadImages(images);
    }

    private preloadImages(array) {
        if (!this.preloadImages.list) {
            this.preloadImages.list = [];
        }
        var list = this.preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function() {
                var index = list.indexOf(this);
                if (index !== -1) {
                    // remove image from the array once it's loaded
                    // for memory consumption reasons
                    list.splice(index, 1);
                }
            };
            list.push(img);
            img.src = array[i];
        }
    }
}
