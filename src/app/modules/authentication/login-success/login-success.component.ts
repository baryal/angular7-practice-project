import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "src/app/modules/authentication/authentication.service";

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
