import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ChequeservicesService } from  '../../services/chequeservices.service'
import {Cheque}  from  '../../services/cheque'
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { BillingserviceService } from "../../services/billingservice.service";


@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css'],
   providers:[ChequeservicesService]
})
export class ChequeComponent implements OnInit {
  Electric : FormGroup;
  userdata : any;
  type : any;
  accno :any;
  name :any;
  value : boolean = false;
  newcheque : boolean = false;
  submitted: boolean = false;
  subscription: Subscription;
  isShown: boolean = false ;
  messages: any[] = [];
  list:Cheque[];
  chq:any;
  chq2:any;



	constructor(private toastr:ToastrService, private dataservice :DataService, private formBuilder: FormBuilder, private chequeservice:ChequeservicesService) {
    // subscribe to home component messages
   this.dataservice.sendMessage(localStorage.getItem('data'));
   this.subscription = this.dataservice.getMessage().subscribe(message => {
     if (message) {
       this.userdata = JSON.parse(message.text);
      // this.userdata = JSON.parse(message.text);
        this.accno = this.userdata.accountNumber;
        this.name = this.userdata.username;
        this.type =  this.userdata.account;
     } else {
       this.messages = [];
     }
   });
   }
	// Call student list function on page load
	ngOnInit() {

    this.get(this.accno);

		this.Electric = this.formBuilder.group({
      chequeNo:['',Validators.required],
			amount: ['', Validators.required],
      account:[this.type],
      accountNumber:[this.accno],
      username:[this.name]
				 });
  }

   status(){

    this.value = ! this.value;
   }

   // hidden by default




// convenience getter for easy access to form fields
get f() { return this.Electric.controls; }


  onSubmit()
  {
      this.submitted = true;
    //   stop here if form is invalid
      if (this.Electric.invalid)
      {
        this.toastr.warning('Request', "Not Send");
          if(this.Electric.controls)
          return;
      }
console.log(this.Electric.value);
  const formData = this.Electric.value;
    this.chequeservice.postCheque(formData).subscribe(
      () => {
        this.toastr.success('success', "Request Send");
        this.Electric.reset();
      }
    );
   }



   get(accno) {
    this.chequeservice.getstatus(accno).subscribe(data => {
    console.log(data.state);
    this.chq = data.state;
    this.chq2=data.amount;
    console.log(this.chq+ "from trans");
    });
    }
}
