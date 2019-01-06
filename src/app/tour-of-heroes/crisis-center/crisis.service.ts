import { Injectable } from '@angular/core';
import { Crisis } from 'src/app/tour-of-heroes/crisis-center/crisis';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable ()
  export class CrisisService{

  baseUrl:string = "http://localhost:3000/crises"
  constructor(private httpclient: HttpClient) { }



  getCrises(): Observable<Crisis[]> {
    return this.httpclient.get<Crisis[]>(this.baseUrl);
  }
}
