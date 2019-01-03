import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Hero } from "src/app/tour-of-heroes/hero";

@Injectable()
export class HeroService {

  constructor(private httpclient: HttpClient) {}


  getHeroes (): Observable<Hero[]> {
  return this.httpclient.get<Hero[]>("http://localhost:3000/heroes")
}
}


