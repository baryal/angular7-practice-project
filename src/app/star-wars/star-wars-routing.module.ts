import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StarWarsComponent} from './star-wars/star-wars.component';

const routes: Routes = [
{
  path: '',
    component: StarWarsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsRoutingModule { }
