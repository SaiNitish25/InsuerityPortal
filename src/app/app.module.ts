import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { UpdateconsumerbusinessComponent } from './components/updateconsumerbusiness/updateconsumerbusiness.component';
import { CreatebusinesspropertyComponent } from './components/createbusinessproperty/createbusinessproperty.component';
import { UpdatebusinesspropertyComponent } from './components/updatebusinessproperty/updatebusinessproperty.component';
import { CreatepolicyComponent } from './components/createpolicy/createpolicy.component';
import { IssuepolicyComponent } from './components/issuepolicy/issuepolicy.component';
import { ViewcomsumerpropertyComponent } from './components/viewcomsumerproperty/viewcomsumerproperty.component';
import { CreateconsumerbusinessComponent } from './components/createconsumerbusiness/createconsumerbusiness.component';

@NgModule({
  declarations: [
    RoutingComponents,
    MemberdetailsComponent,
    UpdateconsumerbusinessComponent,
    CreatebusinesspropertyComponent,
    UpdatebusinesspropertyComponent,
    CreatepolicyComponent,
    IssuepolicyComponent,
    ViewcomsumerpropertyComponent,
    CreateconsumerbusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
