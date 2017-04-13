import { Component } from '@angular/core';

import { PlayerService } from './player.service';

import { Player } from './models/Player';

@Component({
    templateUrl: 'app/scores.component.html',
    styleUrls: [
        'app/scores.component.css',
    ]
})
export class ScoresComponent {
    players: Player[];

    constructor(private playerService: PlayerService) {
        this.players = [];
        this.getPlayers();
    }

    // pull through log files and create score for user
    private getPlayers() {
        this.playerService.getAll().subscribe(data => {
            this.process(data);
        });
    }

    private process(data: Player[]) {
        data.sort((p1 , p2) => p1.playerId - p2.playerId).forEach(player => {
            // add the score and total questions to an array of objects with that id
            let newPlayer = new Player(player.playerId);

            player.answers.forEach(element => {
                newPlayer.score += element.score;
                newPlayer.questionsAnswered++;
                newPlayer.possibleScore += 2;
                newPlayer.timeTaken += element.timeTaken;
            });

            this.players.push(newPlayer);
        });
    }
}
