import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BillingserviceService } from "../../services/billingservice.service";
import { ToastrService } from "ngx-toastr";
import { DataService } from "src/app/services/data.service";
import { Subscription } from "rxjs";
import { Routes, RouterModule, Router } from "@angular/router";
import { Payment } from "src/app/services/payment";

@Component({
  selector: "app-dth",
  templateUrl: "./dth.component.html",
  styleUrls: ["./dth.component.css"],
  providers: [BillingserviceService]
})
export class DthComponent implements OnInit {
  [x: string]: Object;
  dth: FormGroup;
  submitted = false;
  subscription: Subscription;
  messages: any[] = [];
  userdata: any;
  accno: any;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private dataservice: DataService,
    private formBuilder: FormBuilder,
    private billing: BillingserviceService
  ) {
    this.dataservice.sendMessage(localStorage.getItem("data"));
    this.subscription = this.dataservice.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        this.userdata = JSON.parse(message.text);
        this.accno = this.userdata.accountNumber;
      } else {
        this.messages = [];
      }
    });
  }

  ngOnInit() {
    this.dth = this.formBuilder.group({
      dthNumber: ["", Validators.required],
      amount: ["", Validators.required],
      accountNumber: [this.accno]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.dth.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.dth.invalid) {
      return;
    }
    const formData = this.dth.value;

    this.billing.postdthPayment(formData).subscribe(data => {

      if (data.success) {
        this.toastr.success("success", "Payment Done");
      }
      else if (!(data.success)){
        this.toastr.warning("unsuccessful", "Payment");
      }

      this.dth.reset();
      this.router.navigate(["dash/details"]);
    });
  }
}
