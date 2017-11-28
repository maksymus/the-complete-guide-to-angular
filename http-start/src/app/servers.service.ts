import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServersService {

  constructor(private http: Http) {}

  storeServers(servers: any[]): Observable<Response> {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://udemy-ng-http-635ee.firebaseio.com/data.json', servers, {
      headers: headers
    });
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-635ee.firebaseio.com/data.json')
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw('Somthing is wrong: ' + error.json()));
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-635ee.firebaseio.com/appName.json')
      .map((response: Response) => response.json());
  }
}
