import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { getHostElement } from '@angular/core/src/render3';


@Component({
  selector: 'app-overdraft',
  templateUrl: './overdraft.component.html',
  styleUrls: ['./overdraft.component.css']
})
export class OverdraftComponent implements OnInit {registerForm: FormGroup;
  newrequest : boolean = false;
  pending : boolean = false;
  submitted = false;
  amt1 : Number ;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {



    amt : Number;
      this.registerForm = this.formBuilder.group({
          amount: ['', Validators.required]
               });
  }

  NewRequest(){
    this.newrequest = !this.newrequest;
    this.pending = false;
  }

  Pending(){
    this.pending = !this.pending;
    this.newrequest = false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit()
  {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid)
      {
          console.log("Invaild");
          console.log(this.registerForm.controls);
          return;
      }
      const amt = this.registerForm.controls.amount.value;

      const rate = 10;
       const final1 = (parseInt(amt))*(1+(rate/100)) ;
       this.amt1= final1;
     console.log(this.amt1);


      const rated = 1  ;

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }
}
