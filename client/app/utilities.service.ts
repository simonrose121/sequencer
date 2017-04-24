import { Injectable } from '@angular/core';

import { Question } from './models/Question';

@Injectable()
export class UtilitiesService {
    startDate: Date;
    typeCount = 5;

    public startTimer(): void {
        this.startDate = new Date();
    }

    public secondsElapsed(endDate: Date): number {
        return (endDate.getTime() - this.startDate.getTime()) / 1000;
    }

    public shuffle(array): Array<any> {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    public shuffleQuestions(questions: Array<Question>): Array<Question> {
        let orderedQuestions: Array<Question> = [];

        // come in with 15 questions

        // for each type
        for (let questionsInSet = 0; questionsInSet <= 2; questionsInSet++) {
            for (let typeId = 1; typeId <= this.typeCount; typeId++) {
                const typeQuestions = questions.filter(obj => obj.typeId == typeId);

                const rand = Math.floor(Math.random() * typeQuestions.length);
                orderedQuestions.push(typeQuestions[rand]);

                const index = questions.indexOf(typeQuestions[rand]);
                if (index > -1) {
                    questions.splice(index, 1);
                }
            }
        }

        return orderedQuestions;
    }

    public interval(milliseconds, callback): void {
        setInterval(function() {
            callback();
        }, milliseconds);
    }
}
