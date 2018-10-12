import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutGreatBlackMomsComponent } from './about-great-black-moms/about-great-black-moms.component';
import { AboutTheStudyComponent } from './about-the-study/about-the-study.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      AboutGreatBlackMomsComponent,
      AboutTheStudyComponent,
      ContactUsComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
