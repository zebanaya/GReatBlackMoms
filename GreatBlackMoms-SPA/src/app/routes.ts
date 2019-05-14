import { Routes } from '@angular/router';
import { AboutGreatBlackMomsComponent } from './about-great-black-moms/about-great-black-moms.component';
import { AboutTheStudyComponent } from './about-the-study/about-the-study.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'aboutgreatblackmoms', component: AboutGreatBlackMomsComponent },
    { path: 'aboutthestudy', component: AboutTheStudyComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
    // { path: '', component: HomeComponent },
    // {
    //     path: '',
    //     children: [
    //         { path: 'aboutgreatblackmoms', component: AboutGreatBlackMomsComponent },
    //         { path: 'aboutthestudy', component: AboutTheStudyComponent },
    //         { path: 'contactus', component: ContactUsComponent }
    //     ]
    // },
    // { path: '**', redirectTo: '', pathMatch: 'full'},
];
