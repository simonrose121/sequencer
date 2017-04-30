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

            // get date from set A
            let setADate = new Date();
            if (player.cardSets[0].answers.length > 0) {
                setADate = new Date(player.cardSets[0].answers[0].dateTime);
            }

            // get date from set B
            let setBDate = new Date();
            if (player.cardSets[1].answers.length > 0) {
                setBDate = new Date(player.cardSets[1].answers[0].dateTime);
            }

            // load results depending which card set was done first
            if (setADate < setBDate) {
                this.addResultsToPlayer(player, newPlayer, 0, 'preTestResults');
                this.addResultsToPlayer(player, newPlayer, 1, 'postTestResults');
            } else {
                this.addResultsToPlayer(player, newPlayer, 1, 'preTestResults');
                this.addResultsToPlayer(player, newPlayer, 0, 'postTestResults');
            }

            this.players.push(newPlayer);
        });
    }

    private addResultsToPlayer( player: any,
                                newPlayer: Player,
                                cardTypeIndex: number,
                                testType: string) {

        player.cardSets[cardTypeIndex].answers
            .sort((a1, a2) => a1.typeId - a2.typeId).forEach(element => {

                newPlayer[testType].score += element.score;
                newPlayer[testType].questionsAnswered++;
                newPlayer[testType].possibleScore += 2;
                newPlayer[testType].timeTaken += element.timeTaken;
                newPlayer[testType].cardSet = cardTypeIndex == 0 ? 'A' : 'B';

                // // push answers for each type
                // // if type exists
                // let typeScore =
                //     newPlayer[testType].typeResults.find(obj => obj.typeId == element.typeId);

                // if (typeScore) {
                //     typeScore.score += element.score;
                //     typeScore.questionsAnswered++;
                //     typeScore.possibleScore += 2;
                //     typeScore.timeTaken += element.timeTaken;
                // }
        });
    }
}
