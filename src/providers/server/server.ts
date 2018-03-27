import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RemoteService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {

  constructor(public http: Http) {
  }

  baseUrl: string = "http://googleseopro.com:3001/api/";
  assetsUrl: string = "assets/data/";

  getResult(apiUrl:string, accessToken?: string) {

    let header = new Headers();
    if(accessToken)
      header.append('authorization', accessToken);

    return this.http.get(this.baseUrl + apiUrl, {
      headers: header
    })
    .map(res => res.json());
  }

  postResult(apiUrl:string, content:any, accessToken?: string) {
    
    let header = new Headers();
    if(accessToken)
      header.append('authorization', accessToken);

    return this.http.post(this.baseUrl + apiUrl, content, {
      headers: header
    })
    .map(res => res.json());
  }

  putResult(apiUrl:string, content:any, accessToken?: string) {
    
    let header = new Headers();
    if(accessToken)
      header.append('authorization', accessToken);

    return this.http.put(this.baseUrl + apiUrl, content, {
      headers: header
    })
    .map(res => res.json());
  }

  getResource(resource:string) {
    return this.http.get(this.assetsUrl + resource)
    .map(res => res.json());
  }

}
