import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable(

)
export class ListService {

  readonly baseURL = 'http://localhost:3000/user';
  readonly baseURL1 = 'http://localhost:3000/Approve';


  constructor(private httpclient: HttpClient) { }

  getlist(): Observable<any> {
  return this.httpclient.get("http://localhost:3000/user/notApproved");
  }

  rejecteduser(email: string) {
    return this.httpclient.delete(this.baseURL + `/${email}`);
  }

  approveduser(email: string, firstName: string, account: string) {
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    const bodyData = {
      email,
      firstName,
      account
    }
    return this.httpclient.put(this.baseURL + `/${email}`, bodyData, options);
  }


  getlocked(): Observable<any> {
    return this.httpclient.get("http://localhost:3000/user/locked");
    }



  Lockeduser(email: string, firstName: string, account: string) {
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    const bodyData = {
      email,
      firstName,
      account
    }
    return this.httpclient.put(this.baseURL1 + `/${email}`, bodyData, options);
  }
}
















