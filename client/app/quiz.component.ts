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
    cardSet: string;
    testType: string;
    preloadedImages: any[];

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
            this.testType = config.testType;
        });

        this.loadImages();
    }

    private setPlayerDetails(id): void {
        let cardSet;
        if (this.testType === 'pre') {
            if (id % 2 === 0) { // if even
                cardSet = 'A';
            } else {
                cardSet = 'B';
            }
        } else if (this.testType === 'post') {
            if (id % 2 === 0) { // if even
                cardSet = 'B';
            } else {
                cardSet = 'A';
            }
        }
        this.playerService.cardSet = cardSet;
        this.cardSet = cardSet;
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
        if (!this.preloadedImages) {
            this.preloadedImages = [];
        }
        var list = this.preloadedImages;
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
