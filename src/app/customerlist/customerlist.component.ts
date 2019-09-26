import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { HttpClient } from '@angular/common/http';
import { List } from '../services/list.model';
import { reject } from 'q';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'],
  providers: [ListService]
})
export class CustomerlistComponent implements OnInit {

  constructor(private toastr:ToastrService, private listService: ListService) { }
  // status:"Approved";
  list: List[];


  ngOnInit() {
    this.restore();

  }

  restore() {
    this.listService.getlist().subscribe(

      data => {
        this.list = data;
      }

    );
  }

  reject(email: string) {
    if (confirm('Are you sure to reject request ?') == true) {
      this.listService.rejecteduser(email).subscribe((res) => {
       this.ngOnInit();
       this.toastr.success("Applicant","Rejected");
        console.log("rejected");

      });
    }
  }

  approved(email: string, firstName: string, account: string) {
    this.listService.approveduser(email, firstName, account).subscribe((res) => {
      this.toastr.success("Applicant","Approved");
      this.restore();

    });
  }
}











