import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { AuthenticationService } from "src/app/modules/authentication/authentication.service";
import { HttpClientModule }    from '@angular/common/http';
import { AuthGuard } from "src/app/modules/authentication/auth.guard";
@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthenticationComponent, LoginSuccessComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, AuthGuard]
})
export class AuthenticationModule { }
