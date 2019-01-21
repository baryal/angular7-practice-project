import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginSuccessComponent } from "src/app/modules/authentication/login-success/login-success.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AuthenticationService } from "src/app/modules/authentication/authentication.service";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthenticationComponent,LoginSuccessComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:  [AuthenticationService]
})
export class AuthenticationModule { }
