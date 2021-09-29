import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatebusinesspropertyComponent } from './components/createbusinessproperty/createbusinessproperty.component';
import { CreateconsumerbusinessComponent } from './components/createconsumerbusiness/createconsumerbusiness.component';
import { CreatepolicyComponent } from './components/createpolicy/createpolicy.component';
import { GetPolicyComponent } from './components/get-policy/get-policy.component';
import { HomeComponent } from './components/home/home.component';
import { IssuepolicyComponent } from './components/issuepolicy/issuepolicy.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { ShowQuotesComponent } from './components/show-quotes/show-quotes.component';
import { UpdatebusinesspropertyComponent } from './components/updatebusinessproperty/updatebusinessproperty.component';
import { UpdateconsumerbusinessComponent } from './components/updateconsumerbusiness/updateconsumerbusiness.component';
import { ViewcomsumerpropertyComponent } from './components/viewcomsumerproperty/viewcomsumerproperty.component';
import { ViewconsumerbusinessComponent } from './components/viewconsumerbusiness/viewconsumerbusiness.component';
import { AuthGuard } from './guards/auth.guard';
import { RandomGuard } from './guards/random.guard';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [RandomGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path:'login/member',component:MemberdetailsComponent},
  {path: 'consumer', component: ViewconsumerbusinessComponent, canActivate: [RandomGuard]},
  {path: 'viewcp',component:ViewcomsumerpropertyComponent, canActivate:[RandomGuard]},
  {path: 'createcb', component: CreateconsumerbusinessComponent, canActivate: [RandomGuard]},
  {path: 'updatecb', component: UpdateconsumerbusinessComponent, canActivate: [RandomGuard]},
  {path: 'createbp', component: CreatebusinesspropertyComponent, canActivate: [RandomGuard]},
  {path: 'updatebp', component: UpdatebusinesspropertyComponent, canActivate: [RandomGuard]},
  {path: 'createpol',component: CreatepolicyComponent,canActivate:[RandomGuard]},
  {path: 'issuepol',component:IssuepolicyComponent,canActivate:[RandomGuard]},
  {path:'member',component:MemberdetailsComponent},
  {path: 'quotes', component: ShowQuotesComponent, canActivate: [RandomGuard]},
  {path: 'policy', component: GetPolicyComponent, canActivate: [RandomGuard]},
  {path: '**', component: PagenotfoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  AppComponent, HomeComponent, LoginComponent, 
  ProtectedComponent, PagenotfoundComponent, 
  NavbarComponent, ViewconsumerbusinessComponent, CreateconsumerbusinessComponent,
  ShowQuotesComponent, GetPolicyComponent
]
