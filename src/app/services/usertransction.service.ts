import { Injectable } from '@angular/core';
import {Usertranc  } from "../services/usertranc";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class UsertransctionService {
  url: string;
  header: any;
  readonly baseURL = 'http://localhost:3000/user/transaction';

    constructor(private http: HttpClient) {
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  postRegister(reg: Usertranc) {
    reg['type'] = 'user';
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.http.post<Usertranc[]>(
      this.baseURL,
      reg,
      options
    );
  }
}