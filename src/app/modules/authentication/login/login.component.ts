import { Component, OnInit } from '@angular/core';
import { User } from "src/app/modules/authentication/models/user";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/modules/authentication/authentication.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
       
  constructor(private authenticationService:AuthenticationService, private router: Router){ }

  ngOnInit() {
    this.user = new User();
  }

  onLoginClick(email:string,password:string) {
    this.authenticationService.login(email, password)
        .subscribe(user => {
          this.authenticationService.isLoggedIn = true;
          this.router.navigate(['/authentication/login-success']);
    });
  }
  
  login(){
    this.authenticationService.login(this.user.email, this.user.password)
        .subscribe(user => {
          this.authenticationService.isLoggedIn = true;
          this.router.navigate(['/authentication/login-success']);
    });
  }
}
