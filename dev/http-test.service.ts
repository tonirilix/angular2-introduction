import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService {
    constructor(private _http: Http) { };
    
    getCurrentIp(){
        return this._http.get('https://httpbin.org/ip').map(res => res.json());
    }
}