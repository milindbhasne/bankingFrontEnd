import { Injectable } from '@angular/core';
import { Payment } from "../services/payment";
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

const type = 'company';

@Injectable()
export class BillingserviceService {

url: string;
header: any;
readonly baseURL = 'http://localhost:3000/user/transaction';
readonly baseURL1 = 'http://localhost:3000/user';


constructor(private http: HttpClient) {
const headerSettings: { [name: string]: string | string[] } = {};
this.header = new HttpHeaders(headerSettings);
}

postPhonePayment(reg:Payment) {
const companyName = 'phone';
reg['companyName'] = companyName;
reg['type'] = type;
const options = {
headers: new HttpHeaders({ 'content-type': 'application/json' })
}
return this.http.post<Payment[]>(
this.baseURL,
reg,
options
);
}

postdthPayment(reg) {
const companyName = 'dth';
reg['companyName'] = companyName;
reg['type'] = type;
const options = {
headers: new HttpHeaders({ 'content-type': 'application/json' })
}
return this.http.post(
this.baseURL,
reg,
options
);
}

postelectricityPayment(reg:Payment) {
const companyName = 'electricity';
reg['companyName'] = companyName;
reg['type'] = type;
const options = {
headers: new HttpHeaders({ 'content-type': 'application/json' })
}
return this.http.post<Payment[]>(
this.baseURL,
reg,
options
);
}


getlist(accno): Observable<any> {
console.log(accno +'sdkjsk');
return this.http.get("http://localhost:3000/user/getTransactionMini" + `/${accno}`);

}


getamount(accno): Observable<any> {
  console.log(accno +'sdkjsk');
  "/user/getBalanceByCheque/:accountNumber"
  return this.http.get("http://localhost:3000/user/getBalanceByCheque" + `/${accno}`);
  }




//   getlist1(accno): Observable<any> {
//     console.log(accno +'sdkjsk');
//   return this.http.get("http://localhost:3000/user/getCheque" + `/${accno}`);

// }

}