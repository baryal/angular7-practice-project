import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/modules/authentication/models/user";

@Injectable()
export class AuthenticationService {

  isLoggedIn:boolean = false;

  baseUrl:string = "https://microservice-api.herokuapp.com";

  constructor( private httpClient: HttpClient) { }

  

  login(email: string, password: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/login?email=${email}&password=${password}`);
  }



  }