import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutGreatBlackMomsComponent } from './about-great-black-moms/about-great-black-moms.component';
import { AboutTheStudyComponent } from './about-the-study/about-the-study.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './_services/alertify.service';
import { SliderComponent } from './slider/slider.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      AboutGreatBlackMomsComponent,
      AboutTheStudyComponent,
      ContactUsComponent,
      HomeComponent,
      SliderComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
      ModalModule.forRoot(),
      AngularFullpageModule
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

