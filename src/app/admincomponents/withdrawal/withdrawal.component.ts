import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmintransctionService } from "../../services/admintransction.service";


@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css'],
  providers:[AdmintransctionService]
})
export class WithdrawalComponent implements OnInit {

  Withdrawal : FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,private Admintran:AdmintransctionService) { }

  ngOnInit() {
    this.Withdrawal = this.formBuilder.group({
      accountNumber:['',Validators.required],
			amount: ['', Validators.required]
    });
  }
  get f() {return this.Withdrawal.controls;}
  onSubmit()
  {
    this.submitted = true;
    // stop here if form is invalid
    if (this.Withdrawal.invalid)
    {
        console.log("Invaild");
        console.log(this.Withdrawal.controls);
        return;
    }

    console.log(this.Withdrawal.value);


    const formData = this.Withdrawal.value;
    console.log(formData + 'data');
    this.Admintran.postwithdraw(formData).subscribe(
      () => {
        this.Withdrawal.reset();
      }
    );

  }
}
