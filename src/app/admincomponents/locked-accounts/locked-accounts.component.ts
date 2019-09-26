import { Component, OnInit } from '@angular/core';
import { List } from "../../services/list.model";
import { ListService } from "../../services/list.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-locked-accounts',
  templateUrl: './locked-accounts.component.html',
  styleUrls: ['./locked-accounts.component.css'],
  providers:[ListService]
})
export class LockedAccountsComponent implements OnInit {

  constructor(private toastr:ToastrService, private listService: ListService) { }

  ngOnInit() {
    this.restore();
  }


  list: List[];


  restore() {
    this.listService.getlocked().subscribe(

      data => {
        this.list = data;
      }

    );
  }
  Unlock(email: string, firstName: string, account: string) {
    this.listService.Lockeduser(email, firstName, account).subscribe((res) => {
      this.toastr.success("account unlocked","success");
      this.restore();

    });
  }


}
