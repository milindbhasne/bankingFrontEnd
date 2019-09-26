import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmintransctionService } from "../../services/admintransction.service";
import { Admintran } from "../../services/admintran";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
  providers:[AdmintransctionService]

})
export class DepositComponent implements OnInit {

  list:Admintran[];

  Deposit : FormGroup;
  submitted: boolean = false;
  constructor(private toastr:ToastrService, private formBuilder: FormBuilder,private Admintran:AdmintransctionService) { }

  ngOnInit() {
    this.Deposit = this.formBuilder.group({
      accountNumber:['',Validators.required],
			amount: ['', Validators.required]

				 });
  }
  get f() {return this.Deposit.controls;}
  onSubmit()
  {
    this.submitted = true;
    // stop here if form is invalid
    if (this.Deposit.invalid)
    {

      this.toastr.warning("Invaild","Information");
        console.log("Invaild");
        console.log(this.Deposit.controls);
        return;
    }
    console.log(this.Deposit.value);
    const formData = this.Deposit.value;
    console.log(formData + 'data');
    this.Admintran.postdeposit(formData).subscribe(
      () => {
        this.toastr.warning("Amount","Transferred");
        this.Deposit.reset();
      }
    );

  }
}
