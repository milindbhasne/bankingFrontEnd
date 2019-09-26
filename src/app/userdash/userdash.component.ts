import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,ParamMap } from '@angular/router';
import {DataService} from "../services/data.service"
import{Datalist} from "../services/datalist.model"
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css'],
  providers:[DataService]
})
export class UserDashComponent implements OnInit {

  messages: any[] = [];
  userdata : any;
  role : any;
  accno :any;
  name :any;
  subscription: Subscription;

  constructor(private toastr:ToastrService, private authservice :AuthService,private dataservice: DataService,private router: Router,private route: ActivatedRoute) {

     // subscribe to home component messages
   this.dataservice.sendMessage(localStorage.getItem('data'));
   this.subscription = this.dataservice.getMessage().subscribe(message => {
     if (message) {
       this.messages.push(message);
console.log(typeof(message)+" message");
console.log(message.text);
       this.userdata = JSON.parse(message.text);
        this.accno = this.userdata.AccountNumber;
    
     } else {
       this.messages = [];
     }
   });
  }

  ngOnInit() {
    this.toastr.success('Welcome', this.name);
  }

  Logout(){
    this.authservice.logout();
    this.router.navigate(['/login']);
   }
}






