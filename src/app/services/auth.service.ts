import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url1 ='http://localhost:8089/api/v1/user/userLogin';

  constructor(private router:Router, private http: HttpClient) { }



  canActivate(): boolean{
    if(this.loggedIn()){
    return true;
    }
    else{
    this.router.navigate(['login']);//main home
    return false;
      }
    }



  login(log){
    return this.http.post<any>(this._url1, log);
  }

  loggedIn(){
    console.log();
    return !!localStorage.getItem('token');

  }

  logout(){
    console.log("logout");
     localStorage.removeItem('token');
     return localStorage.removeItem('data');

  }


  lockit(username){
    return this.http.put("http://localhost:3000/notApprove/" + `${username}`,username);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}




















