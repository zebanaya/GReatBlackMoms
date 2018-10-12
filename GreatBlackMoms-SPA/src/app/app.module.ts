import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '.c:/Users/zah33532/Workspace/GreatBlackMoms/GreatBlackMoms-SPA/src/Home/Home.component';
import { AboutGreatBlackMomsComponent } from '.c:/Users/zah33532/Workspace/GreatBlackMoms/GreatBlackMoms-SPA/src/About-Great-Black-Moms/About-Great-Black-Moms.component';
import { AboutTheStudyComponent } from '.c:/Users/zah33532/Workspace/GreatBlackMoms/GreatBlackMoms-SPA/src/About-The-Study/About-The-Study.component';
import { ContactUsComponent } from '.c:/Users/zah33532/Workspace/GreatBlackMoms/GreatBlackMoms-SPA/src/Contact-Us/Contact-Us.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutGreatBlackMomsComponent,
      AboutTheStudyComponent,
      ContactUsComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
