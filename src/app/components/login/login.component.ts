import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import { Agent } from 'src/app/models/agent';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  agent = new Agent("", "")
  authMessage = ""

  isLoggedIn: Boolean = this.authService.isAuthenticated();

  onClick() {
    this.authMessage = ""
  }

  ngOnInit(): void {
  }

  onSubmit() {
   console.log(this.agent);
    this.authService.Authenticate(this.agent)
      .subscribe(
        res => {
          this.authService.LoginAgent(res);
        },
        err => {
          console.log(err);
          this.authMessage = "Please Enter Valid Credentials";
        }
      )
  }
}
