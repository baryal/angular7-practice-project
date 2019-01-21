import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "src/app/modules/authentication/authentication.service";
import { User } from "src/app/modules/authentication/models/user";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
users: User[];
  constructor(private authenticationService: AuthenticationService,
  private router:Router) { }
              
  ngOnInit() {
    
  }
  onLoginClick(email:string,password:string) {
  this.authenticationService.login(email, password)
      .subscribe(user => {
        console.log("success");
        this.router.navigate(['/authenticate/login-success']);
  });

}

}
