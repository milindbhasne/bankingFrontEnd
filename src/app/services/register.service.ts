import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  {Register} from './register.model'
import {environment} from '../../environments/environment';

@Injectable()
export class RegisterService {
  url: string;
  header: any;
  readonly baseURL = 'http://localhost:3000/register';

  constructor(private http: HttpClient) {
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  postRegister(reg: Register) {
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })


    }
    return this.http.post<Register[]>(
      this.baseURL,
      reg,
      options
    );
  }
}