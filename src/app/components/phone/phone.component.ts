import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingserviceService } from "../../services/billingservice.service";
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Routes, RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  providers:[BillingserviceService]

})
export class PhoneComponent implements OnInit {
  phone : FormGroup;
  submitted = false;
  subscription: Subscription;
  messages: any[] = [];
  userdata : any;
  accno : any;
  constructor(private router:Router,private toastr:ToastrService, private dataservice :DataService,private formBuilder: FormBuilder,private billing:BillingserviceService) {  this.dataservice.sendMessage(localStorage.getItem('data'));
  this.subscription = this.dataservice.getMessage().subscribe(message => {
    if (message) {
      this.messages.push(message);
      this.userdata = JSON.parse(message.text);
       this.accno = this.userdata.accountNumber;

    } else {
      this.messages = [];
    }
  }); }

  ngOnInit() {

    this.phone = this.formBuilder.group({
      accountNumber: [this.accno],
      phoneNumber: ['', Validators.required],
      amount:['',Validators.required],

      });

  }

// convenience getter for easy access to form fields
get f() { return this.phone.controls; }


  onSubmit()
  {
      this.submitted = true;
      // stop here if form is invalid
      if (this.phone.invalid)
      {
          console.log("Invaild");

          console.log(this.phone.controls);

          return;
      }


      console.log(this.phone.value);


      const formData = this.phone.value;
      console.log(formData + 'data');
      this.billing.postPhonePayment(formData).subscribe(
        () => {
          this.toastr.success('success', "Payment Done");
          this.phone.reset();
          this.router.navigate(['dash/details']);
        }
      );

  }


}
