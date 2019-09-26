import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from "../../services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";

import { BillingserviceService } from "../../services/billingservice.service";
import { List } from "../../services/list.model";
@Component({
  selector: 'app-viewamount',
  templateUrl: './viewamount.component.html',
  styleUrls: ['./viewamount.component.css'],
  providers: [BillingserviceService]
})
export class ViewamountComponent implements OnInit {

  messages: any[] = [];
  userdata: any;
  role: any;
  accno: any;
  name: any;
  subscription: Subscription;
  list: List[];
  rec:any;
  rec1:any;rec2:any;rec3:any;rec4:any;

  constructor(private billing:BillingserviceService, private dataservice : DataService) { this.dataservice.sendMessage(localStorage.getItem("data"));
  this.subscription = this.dataservice.getMessage().subscribe(message => {
    if (message) {
      this.messages.push(message);
      console.log(typeof message + " message");
      //console.log(message.text);
      this.userdata = JSON.parse(message.text);

      this.accno = this.userdata.accountNumber;
    } else {
      this.messages = [];
    }
  }); }

  ngOnInit() {
   // console.log(this.accno);
    this.amount(this.accno);
  }

  amount(accno) {
    this.billing.getamount(accno).subscribe(data => {
      this.list = data;
      console.log(data.balance + "paisaaaaaaaaaaaaaaaaaaaaa");
      console.log(data.firstName);
      this.rec=data.balance;
      this.rec1=data.firstName;
      this.rec2=data.lastName;
      this.rec3=data.email;
      this.rec4=data.phone;
      console.log(this.rec);
    });
  }

}
