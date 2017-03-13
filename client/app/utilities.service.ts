import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {
    private startDate;

    startTimer() {
        this.startDate = new Date();
    }

    secondsElapsed(endDate: Date) {
        return (endDate.getTime() - this.startDate.getTime()) / 1000;
    }

    shuffle(array) {
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
}
