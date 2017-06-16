import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Profile} from './profile';


@Injectable()
export class ProfileService {

    //private defUrl = 'api/def';
    private defUrl = 'api/TDAFPatient.json';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getDef(): Promise<Profile> {
        //const url = `${this.defUrl}`; 
        return this.http.get(this.defUrl)
            .toPromise()
            .then(response => {return response.json() as Profile})
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}


