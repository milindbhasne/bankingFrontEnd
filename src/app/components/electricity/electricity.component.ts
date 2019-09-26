import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingserviceService } from "../../services/billingservice.service";
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Routes, RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.scss'],
  providers:[BillingserviceService]
})
export class ElectricityComponent implements OnInit {
  electric : FormGroup;
  submitted = false;
  subscription: Subscription;
  userdata : any;
  type : any;
  accno :any;
  name :any;
  messages: any[] = [];
  constructor(private toastr :ToastrService, private dataservice:DataService, private formBuilder: FormBuilder,private billing:BillingserviceService,private router:Router) {
      // subscribe to home component messages
   this.dataservice.sendMessage(localStorage.getItem('data'));
   this.subscription = this.dataservice.getMessage().subscribe(message => {
     if (message) {
       this.messages.push(message);
       this.userdata = JSON.parse(message.text);
        this.accno = this.userdata.accountNumber;

     } else {
       this.messages = [];
     }
   });
   }

  ngOnInit() {
    this.electric = this.formBuilder.group({
      accountNumber: [this.accno],
      billNumber: ['', Validators.required],
      amount: ['', Validators.required],
           });
  }

// convenience getter for easy access to form fields
get f() { return this.electric.controls; }

  onSubmit()
  {
      this.submitted = true;
      // stop here if form is invalid
      if (this.electric.invalid)
      {
          console.log("Invaild");
          console.log(this.electric.controls);
          return;
      }
      console.log(this.electric.value);


      const formData = this.electric.value;
      console.log(formData + 'data');
      this.billing.postelectricityPayment(formData).subscribe(
        () => {
          this.toastr.success('success', "Payment Done");
          this.electric.reset();
          this.router.navigate(['dash/details']);
        }
      );

  }
}

