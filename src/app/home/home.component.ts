
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ContactService]
})
export class HomeComponent implements OnInit {
  constructor(private toastr : ToastrService, private contactService: ContactService,) { }
  ngOnInit() {
  }
    processForm(form: NgForm) {
    console.log('Your form data : ', form.value);
    const formData = form.value;
    form.form.reset();

    // console.log(formData + 'data');

   this.contactService.postContact(formData).subscribe(
      () => {
this.toastr.success("Message Send","Sucess");
        console.log("sucess");
      }
    );


  }
}