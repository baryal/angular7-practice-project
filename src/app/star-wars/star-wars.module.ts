import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import { StarWarsComponent } from './star-wars/star-wars.component';

@NgModule({
  declarations: [StarWarsComponent],
  imports: [
    CommonModule,
    StarWarsRoutingModule
  ]
})
export class StarWarsModule { }
