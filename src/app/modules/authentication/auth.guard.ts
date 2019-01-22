import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from "src/app/modules/authentication/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authenticationService:AuthenticationService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.authenticationService.isLoggedIn;
  }
}
