import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Admintran } from "../services/admintran";
import {environment} from '../../environments/environment';

@Injectable()
export class AdmintransctionService {
  url: string;
  header: any;
  readonly baseURL = 'http://localhost:3000/admin/deposit';

  readonly baseURL1 = 'http://localhost:3000/admin/withdraw';

  constructor(private http: HttpClient) {
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  postdeposit(reg: Admintran) {
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })


    }
    return this.http.post<Admintran[]>(
      this.baseURL,
      reg,
      options
    );
  }



  postwithdraw(reg: Admintran) {
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })


    }
    return this.http.post<Admintran[]>(
      this.baseURL1,
      reg,
      options
    );
}

}






