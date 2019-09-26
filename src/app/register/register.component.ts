import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import {RegisterService} from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]

})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  constructor(private routes:Router, private toastr : ToastrService, private formBuilder: FormBuilder,private registerService: RegisterService) { }

  get cityName() {
    return this.registerForm.get('account');
  }

  changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({

          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          account: ['', Validators.required],
          address1:  ['', Validators.required],
          address2:  ['', ],
          address3:  ['', ],
          city:  ['', Validators.required],
          state:  ['', Validators.required],
          pin:  ['', Validators.required],
          phone:  ['', [Validators.required, Validators.minLength(10)]],
          username:  ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });

  }


  get f() {return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid)
    {
        console.log("Invaild");
        this.toastr.warning('FAILED', 'Invalid Information');
        console.log(this.registerForm.controls);
        return;
    }
   console.log(this.registerForm.value);
    const formData = this.registerForm.value;
    console.log(formData + 'data');
    this.registerService.postRegister(formData).subscribe(
      () => {
        this.toastr.success('REGISTERED', 'Data successfully Saved');
        this.routes.navigate(['/login']);
        this.registerForm.reset();
      }
    );
  }



}