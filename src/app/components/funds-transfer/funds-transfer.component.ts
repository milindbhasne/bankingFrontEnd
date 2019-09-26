import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsertransctionService } from "../../services/usertransction.service";
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { Routes, RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-funds-transfer',
  templateUrl: './funds-transfer.component.html',
  styleUrls: ['./funds-transfer.component.scss'],
  providers: [UsertransctionService]
})
export class FundsTransferComponent implements OnInit {

  Transfer : FormGroup;
  submitted: boolean = false;
  subscription: Subscription;
  messages: any[] = [];
  userdata : any;
  accno : any;
  constructor(private router:Router,private toastr:ToastrService, private dataservice :DataService,private formBuilder: FormBuilder,private usertran:UsertransctionService) {
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
    this.Transfer = this.formBuilder.group({
      accountNumber:[this.accno],
      toAccountNumber: ['', Validators.required],
			amount: ['', Validators.required]

				 });
  }

// convenience getter for easy access to form fields
get f() { return this.Transfer.controls; }


  onSubmit()
  {
    this.submitted = true;
    // stop here if form is invalid
    if (this.Transfer.invalid)
    {
        console.log("Invaild");
        console.log(this.Transfer.controls);
        return;
    }
    console.log(this.Transfer.value);


    const formData = this.Transfer.value;
    console.log(formData + 'data');
    this.usertran.postRegister(formData).subscribe(
      () => {
        this.toastr.success('success', "Debit");
        this.Transfer.reset();
        this.router.navigate(['dash/details']);
      }
    );
  }
}
