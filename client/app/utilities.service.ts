import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {
    startDate: Date;

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

    public interval(milliseconds, callback): void {
        setInterval(function() {
            callback();
        }, milliseconds);
    }
}
