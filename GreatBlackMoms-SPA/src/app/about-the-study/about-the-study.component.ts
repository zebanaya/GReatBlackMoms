import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-about-the-study',
  templateUrl: './about-the-study.component.html',
  styleUrls: ['./about-the-study.component.css']
})
export class AboutTheStudyComponent implements OnInit {
  studyRegistrationForm: FormGroup;

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
    this.studyRegistrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  sendRegistrant() {
    this.alertify.success('Your Registration Request Has Been Sent');
  }

}
