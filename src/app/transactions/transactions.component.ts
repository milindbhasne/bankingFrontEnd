import { Component, OnInit } from "@angular/core";
import {
  Router,
  RouterModule,
  ActivatedRoute,
  ParamMap
} from "@angular/router";
import { DataService } from "../services/data.service";
import { AuthService } from "../services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";

import { BillingserviceService } from "../services/billingservice.service";
import { List } from "../services/list.model";
import{List1} from "./../services/list1";
@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"],
  providers: [BillingserviceService]
})
export class TransactionsComponent implements OnInit {
  messages: any[] = [];
  userdata: any;
  role: any;
  accno: any;
  name: any;
  subscription: Subscription;
  list: List[];


  constructor(
    private toastr: ToastrService,
    private authservice: AuthService,
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private billing: BillingserviceService
  ) {
    this.dataservice.sendMessage(localStorage.getItem("data"));
    this.subscription = this.dataservice.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        console.log(typeof message + " message");
        console.log(message.text);
        this.userdata = JSON.parse(message.text);
        console.log(this.userdata);
        this.accno = this.userdata.accountNumber;
      } else {
        this.messages = [];
      }
    });
  }

  ngOnInit() {
    console.log(this.accno);
    this.get(this.accno);

  }

  get(accno) {
    this.billing.getlist(accno).subscribe(data => {
      this.list = data;
      console.log(data + "from trans");
    });
  }


}
