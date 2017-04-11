import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UtilitiesService {
    private startDate;

    public startTimer() {
        this.startDate = new Date();
    }

    public secondsElapsed(endDate: Date) {
        return (endDate.getTime() - this.startDate.getTime()) / 1000;
    }

    public shuffle(array) : Array<any> {
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

    public extractData(res : Response) {
        let body = res.json()
        return body || { };
    }

    public handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
  }
}
