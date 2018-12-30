import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourOfHerosRoutingModule } from './tour-of-heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    TourOfHerosRoutingModule
  ]
})
export class TourOfHeroesModule { }
