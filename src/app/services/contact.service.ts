import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  {Contact} from './contact.model';
import {environment} from '../../environments/environment';

@Injectable(

)
export class ContactService {
  url: string;
  header: any;
  readonly baseURL = 'http://localhost:3000/contactUs';

  constructor(private http: HttpClient) {
    const headerSettings: { [name: string]: string | string[] } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  postContact(con: Contact) {
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })


    }
    return this.http.post<Contact[]>(
      this.baseURL,
      con,
      options
    );
  }
}