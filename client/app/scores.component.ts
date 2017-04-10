import { Component } from '@angular/core';

import { LogService } from "./log.service";

import { Log } from './models/Log';
import { User } from "./models/User";

@Component({
    templateUrl: 'app/scores.component.html',
    styleUrls: [
        'app/scores.component.css',
    ]
})
export class ScoresComponent {
    users : User[] = [];

    constructor(private logService: LogService) { 
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
            // check if id exists in users array
            let user = this.users.find(x => x.userId === element.userId);

            // add the score and total questions to an array of objects with that id
            if (user) {
                user.score += element.score;
                user.possibleScore += 2;
                user.questionsAnswered++;
            } else {
                user = new User(element.userId, element.score, 1, 2);
                this.users.push(user);
            }
        });
        console.log(this.users);
    }
}