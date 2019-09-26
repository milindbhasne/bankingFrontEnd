import { Component, OnInit } from '@angular/core';
import { Cheque } from '../../services/cheque'
import { AdminchequeService } from '../../services/admincheque.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cheque-report',
  templateUrl: './cheque-report.component.html',
  styleUrls: ['./cheque-report.component.css']
})


export class ChequeReportComponent implements OnInit {

  constructor(private toastr:ToastrService,private adminchequeservice: AdminchequeService) { }
  // status:"Approved";
  list: Cheque[];

  ngOnInit() {
    this.restore();

  }

  restore() {
    this.adminchequeservice.getlist().subscribe(

      data => {
        this.list = data;
      }

    );
  }

received(accountNumber: string) {

    this.adminchequeservice.receivedreq(accountNumber).subscribe((res) => {
      this.toastr.success("Cheque Status","Received");
      console.log("Received");

    });
  }

clearnace(accountNumber: string) {

    this.adminchequeservice.clearancereq(accountNumber).subscribe((res) => {
      this.toastr.success("Cheque Status","Sent For Clearance");
      console.log("sent for clearance");

    });
  }

cleared(accountNumber: string) {

    this.adminchequeservice.clearedreq(accountNumber).subscribe((res) => {
      this.toastr.success("Cheque Status","Cleared");
      console.log("cleared");

    });
  }

  bounced (accountNumber: string) {

    this.adminchequeservice.bouncedreq(accountNumber).subscribe((res) => {
      this.toastr.success("Cheque Status","Bounced");
      console.log("Bounced");

    });
  }

  buttons1 = Array(100).fill(false);
  buttons2 = Array(100).fill(false);
  buttons3 = Array(100).fill(false);
  buttons4 = Array(100).fill(false);


  deductbalance(accountNumber: string,amount:number) {

    this.adminchequeservice.bounced_amt(accountNumber,amount).subscribe((res) => {
      this.toastr.success("Cheque Status","Amount Deducted");
      console.log("amount deducted");

    });
  }

  addbalance(accountNumber: string,amount:number,account:string,username:string,chequeNo:string) {
       console.log(accountNumber);
    this.adminchequeservice.clearadd_amt(accountNumber,amount,account,username,chequeNo).subscribe((res) => {
      // console.log(this.list[2]);
      this.toastr.success("Cheque Status","Amount Added");
      console.log(" amount added");
    });
  }
}

