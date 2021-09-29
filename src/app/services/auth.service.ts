import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Agent } from '../models/agent';
import { Router } from '@angular/router';
import { ApiRoutes } from '../constants/ApiRoutes'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _url = ApiRoutes.LoginRoute

  token = localStorage.getItem("Authorization");
  isLoggedIn = (this.token == null || this.token == "") ? false : true;

  constructor(private _http: HttpClient, private router: Router) { }
  Token(){
    return localStorage.getItem("Authorization");
  }

  Authenticate(agent: Agent) {
    return this._http.post<any>(this._url, agent);
  }

  LoginAgent(res: any) {
    localStorage.setItem("Authorization", res.token);
    this.isLoggedIn = true
    this.router.navigate([''])
  }

  Logout() {
    localStorage.removeItem("Authorization")
    this.isLoggedIn = false
    this.router.navigate(['/login'])
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
