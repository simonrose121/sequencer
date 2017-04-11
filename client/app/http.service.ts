import { Injectable } from '@angular/core';
import { Response, Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    public get(url: string) : Observable<any> {
         return this.http.get(url)
                         .map(this.extractData)
                         .catch(this.handleError);
    }
    
    public post(url: string, data: any) : Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, data, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res : Response) {
        let body = res.json()
        return body || { };
    }

    private handleError(error: Response | any) {
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