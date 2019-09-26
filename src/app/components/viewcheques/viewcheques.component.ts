import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,ParamMap } from '@angular/router';
import {DataService} from "../../services/data.service"
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
// import { UsertransctionService } from "../../services/usertransction.service";
import { Cheque } from "../../services/cheque";
import { ChequeservicesService } from "../../services/chequeservices.service";

import { BillingserviceService } from "../../services/billingservice.service";
import { List } from "../../services/list.model";
@Component({
selector: 'app-viewcheques',
templateUrl: './viewcheques.component.html',
styleUrls: ['./viewcheques.component.css'],
providers:[BillingserviceService,ChequeservicesService]
})
export class ViewchequesComponent implements OnInit {

messages: any[] = [];

userdata : any;
role : any;
accno :any;
name :any;
subscription: Subscription;
list:List[];
chequestatus:Cheque[];
chq:any;




constructor(private toastr:ToastrService, private authservice :AuthService,private dataservice: DataService,private router: Router,private route: ActivatedRoute,private billing:BillingserviceService,private cheque:ChequeservicesService )
{
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
console.log(this.accno+"here");
this.get(this.accno);
}
get(accno) {
this.cheque.getstatus(accno).subscribe(data => {
console.log(data.state);
this.chq = data.state;
console.log(this.chequestatus+ "from trans");
});
}
}
