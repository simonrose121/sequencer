import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {
    private configUrl = 'app/config.json';

    constructor(private http: Http) { 
    }

    // public methods
    public getConfig() : Observable<any> {
        return this.http.get(this.configUrl).map(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }
}