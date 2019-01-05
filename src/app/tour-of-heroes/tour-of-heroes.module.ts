import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TourOfHerosRoutingModule } from './tour-of-heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule }    from '@angular/common/http';
import { HeroService } from "src/app/tour-of-heroes/hero.service";
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [HeroListComponent, HeroesComponent, HeroesDetailsComponent, DashboardComponent],
  imports: [
    CommonModule,
    TourOfHerosRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeroService]
})
export class TourOfHeroesModule { }
