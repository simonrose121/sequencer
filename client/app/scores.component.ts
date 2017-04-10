import { Component } from '@angular/core';

import { LogService } from "./log.service";

import { Log } from './models/Log';
import { Player } from "./models/Player";

@Component({
    templateUrl: 'app/scores.component.html',
    styleUrls: [
        'app/scores.component.css',
    ]
})
export class ScoresComponent {
    players : Player[];

    constructor(private logService: LogService) { 
        this.players = [];
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
        data.forEach(element => {
            // check if id exists in players array
            let player = this.players.find(x => x.playerId === element.userId);

            // add the score and total questions to an array of objects with that id
            if (player) {
                player.score += element.score;
                player.possibleScore += 2;
                player.questionsAnswered++;
            } else {
                player = new Player(element.userId, element.score, 1, 2);
                this.players.push(player);
            }
        });
        console.log(this.players);
    }
}