import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  model: any;

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
    this.contactUsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      contents: new FormControl('', Validators.required)
    });
  }

  sendContact() {
    console.log(this.contactUsForm.value);
    this.alertify.success('You have successfully sent your message.  Thank you.');
  }
}
