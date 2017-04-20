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

            player.answers.sort((a1, a2) => a1.typeId - a2.typeId).forEach(element => {
                newPlayer.score += element.score;
                newPlayer.questionsAnswered++;
                newPlayer.possibleScore += 2;
                newPlayer.timeTaken += element.timeTaken;

                // push answers for each type
                // if type exists
                let typeScore = newPlayer.typeScore.find(obj => obj.typeId == element.typeId);

                if (typeScore) {
                    typeScore.score += element.score;
                    typeScore.questionsAnswered++;
                    typeScore.possibleScore += 2;
                    typeScore.timeTaken += element.timeTaken;
                } else {
                    typeScore = {
                        typeId: element.typeId,
                        score: element.score,
                        questionsAnswered: 1,
                        possibleScore: 2,
                        timeTaken: element.timeTaken
                    };
                    newPlayer.typeScore.push(typeScore);
                }
            });

            console.log(newPlayer);

            this.players.push(newPlayer);
        });
    }
}
