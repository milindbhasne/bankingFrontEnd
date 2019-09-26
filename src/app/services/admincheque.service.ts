import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable({
providedIn: 'root'
})
export class AdminchequeService {


readonly baseURL = 'http://localhost:3000/cheque';
readonly baseURL1 = 'http://localhost:3000/cheque/clearence';
readonly baseURL2 = 'http://localhost:3000/cheque/cleared';
readonly baseURL3 = 'http://localhost:3000/cheque/bounced';
readonly baseURL4 = 'http://localhost:3000/user/addAmountByCheque';
readonly baseURL5 = 'http://localhost:3000/user/deductFine';
constructor(private httpclient: HttpClient) { }

getlist(): Observable<any> {

return this.httpclient.get("http://localhost:3000/cheque/Application");
}

receivedreq(accountNumber: string) {
return this.httpclient.put(this.baseURL + `/${accountNumber}`,status);
}

clearancereq(accountNumber: string) {
return this.httpclient.put(this.baseURL1 + `/${accountNumber}`,status);
}

clearedreq(accountNumber: string) {
return this.httpclient.put(this.baseURL2 + `/${accountNumber}`,status);
}



clearadd_amt(accountNumber: string,amount:number,account:string,username:string,chequeNo:string) {

const options = {
headers: new HttpHeaders({ 'content-type': 'application/json' })
}

const body={
amount,
account,
username,
chequeNo,
accountNumber

}
return this.httpclient.put(this.baseURL4 + `/${accountNumber}`,body,options);

}

bouncedreq(accountNumber: string) {
return this.httpclient.put(this.baseURL3 + `/${accountNumber}`,status);
}



bounced_amt(accountNumber: string,amount:number) {

const options = {
headers: new HttpHeaders({ 'content-type': 'application/json' })
}

const bodydata={
amount,
accountNumber
}
return this.httpclient.put(this.baseURL5 + `/${accountNumber}`,bodydata,options);
}

}






















