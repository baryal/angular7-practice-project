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
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { CrisisDetailsComponent } from './crisis-center/crisis-details/crisis-details.component';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisService } from "src/app/tour-of-heroes/crisis-center/crisis.service";
@NgModule({
  declarations: [HeroListComponent, HeroesComponent, HeroesDetailsComponent, DashboardComponent, CrisisCenterComponent, CrisisListComponent, CrisisDetailsComponent, CrisisCenterHomeComponent],
  imports: [
    CommonModule,
    TourOfHerosRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeroService,CrisisService]
})
export class TourOfHeroesModule { }
