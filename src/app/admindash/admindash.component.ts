import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,ParamMap } from '@angular/router';

import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit() {
  }

  Logout(){
    this.authservice.logout();
    this.router.navigate(['/login']);
   }
}
