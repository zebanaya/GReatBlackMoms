import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-about-the-study',
  templateUrl: './about-the-study.component.html',
  styleUrls: ['./about-the-study.component.css']
})
export class AboutTheStudyComponent implements OnInit {
  studyRegistrationForm: FormGroup;
  modalRef: BsModalRef;
  items: any[];

  constructor(private alertify: AlertifyService, private modalService: BsModalService) { }

  ngOnInit() {
    this.studyRegistrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  sendRegistrant() {
    this.alertify.success('Your Registration Request Has Been Sent');
  }

  openSurveyModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
