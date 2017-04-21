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
    players: any[];

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

    private process(data: any[]) {
        data.sort((p1 , p2) => p1.playerId - p2.playerId).forEach(player => {
            // add the score and total questions to an array of objects with that id
            let newPlayer = new Player(player.playerId);

            // get the pre-test results
            player.cardSets[0].answers.sort((a1, a2) => a1.typeId - a2.typeId).forEach(element => {
                newPlayer.preTestResults.score += element.score;
                newPlayer.preTestResults.questionsAnswered++;
                newPlayer.preTestResults.possibleScore += 2;
                newPlayer.preTestResults.timeTaken += element.timeTaken;

                // push answers for each type
                // if type exists
                let typeScore =
                    newPlayer.preTestResults.typeResults.find(obj => obj.typeId == element.typeId);

                if (typeScore) {
                    typeScore.score += element.score;
                    typeScore.questionsAnswered++;
                    typeScore.possibleScore += 2;
                    typeScore.timeTaken += element.timeTaken;
                }
            });

            // get the post-test results
            player.cardSets[1].answers.sort((a1, a2) => a1.typeId - a2.typeId).forEach(element => {
                newPlayer.postTestResults.score += element.score;
                newPlayer.postTestResults.questionsAnswered++;
                newPlayer.postTestResults.possibleScore += 2;
                newPlayer.postTestResults.timeTaken += element.timeTaken;

                // push answers for each type
                // if type exists
                let typeScore =
                    newPlayer.postTestResults.typeResults.find(obj => obj.typeId == element.typeId);

                if (typeScore) {
                    typeScore.score += element.score;
                    typeScore.questionsAnswered++;
                    typeScore.possibleScore += 2;
                    typeScore.timeTaken += element.timeTaken;
                }
            });

            this.players.push(newPlayer);
        });
    }
}
