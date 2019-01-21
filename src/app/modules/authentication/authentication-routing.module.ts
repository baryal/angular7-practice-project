import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from "src/app/modules/authentication/authentication/authentication.component";
import { LoginComponent } from "src/app/modules/authentication/login/login.component";
import { LoginSuccessComponent } from "src/app/modules/authentication/login-success/login-success.component";

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component:LoginComponent,

      },
      {
        path: 'login-success',
        component:LoginSuccessComponent,

      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
  