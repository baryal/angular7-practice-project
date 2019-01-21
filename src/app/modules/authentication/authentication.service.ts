import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "src/app/modules/authentication/models/user";

@Injectable()

export class AuthenticationService {
  baseUrl:string = "https://microservice-api.herokuapp.com"
  constructor(private httpclient: HttpClient) { }


login(email: string, password: string): Observable<User> {
    return this.httpclient.get<User>(`${this.baseUrl}/login?email=${email}&password=${password}`);
  }
}
