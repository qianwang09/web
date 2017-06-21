import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ConfidentialMatch } from './confidentialmatch';

@Injectable()
export class ConfidentialMatchService {

    constructor(private http: Http) { }

    getConfidentials() {
        return this.http.get('src/app/resources/data/confidentialmatch.json')
            .toPromise()
            .then(res => <ConfidentialMatch[]>res.json().data)
            .then(data => { return data; });
    }
}
