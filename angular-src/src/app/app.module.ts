import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { ContactComponent } from './components/contact/contact.component';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path:'experience', component: ExperienceComponent},
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    MainnavComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
