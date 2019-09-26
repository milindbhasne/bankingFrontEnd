import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from "../services/data.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = [];
  loginForm: FormGroup;
  uname : any;
  counter : any = 0;
  flag : boolean = true;


  constructor(private toastr:ToastrService, private dataservice:DataService, private formBuilder: FormBuilder, private routes: Router, private _authService: AuthService) { }

  ngOnInit() {
    console.log(this.data);
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
lock(){
  if(this.uname==this.loginForm.controls.username.value)
  {
    this.toastr.warning("Wrong","password");
      this.counter++;
      console.log(this.counter);
      if(this.counter==3)
      {
 this.toastr.error("3 Invaild Attempts","account locked");
        this.counter = 0;
   this._authService.lockit(this.uname)
   .subscribe   (     res=> {
     console.log(res);
   },
  err=> {console.log("API ERROR")}
)

        return
      }
  }
    else if(this.uname!=this.loginForm.controls.username.value)
    {
      this.toastr.warning("Wrong","password");
      this.uname = this.loginForm.controls.username.value;
      this.counter=0;
      return
    }
}


  doLogin(){
    if(this.flag){
this.uname = this.loginForm.controls.username.value;
this.flag = false;
    }
    this._authService.login(this.loginForm.value)
      .subscribe(
        res=> {
          this.data = res.data;
          if(res.data==false){
            this.lock();

          }


           localStorage.setItem('data',JSON.stringify(res.data));
          localStorage.setItem('token',res.token);
          this.dataservice.sendMessage(res.data);
          if(res.data.role=="user")
          {
            console.log("user");
            this.routes.navigate(['/dash/transactions']);
          }
          if(res.data.role=="admin")
          {
            console.log("admin");
            this.routes.navigate(['/admindash']);
          }
        },
        err=> {
          this.counter = 0;
        this.toastr.warning('Invaild', 'Credentials');
        console.log("error",err);}
      )
  }
}

