import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import  {Cheque} from './cheque'
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChequeservicesService {
  url: string;
  header: any;
  
  readonly baseURL = 'http://localhost:3000/cheque/Application';

  constructor(private http: HttpClient) {
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  postCheque(reg: Cheque) {
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })


    }
    return this.http.post<Cheque[]>(
      this.baseURL,
      reg,
      options
    );
  }
  getstatus(accno): Observable<any> {
    console.log(accno +'sdkjsk');
    return this.http.get("http://localhost:3000/user/getCheque" + `/${accno}`);
    }
}