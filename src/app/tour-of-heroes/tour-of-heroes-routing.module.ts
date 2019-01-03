import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroListComponent} from'./hero-list/hero-list.component';
import { HeroesComponent } from "src/app/tour-of-heroes/heroes/heroes.component";
import { DashboardComponent } from "src/app/tour-of-heroes/dashboard/dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: HeroListComponent,
    children: [
      {
        path: 'heroes',
        component: HeroesComponent

      
      },
      {
        path: 'dashboard',
        component: DashboardComponent

      },
      {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourOfHerosRoutingModule { }
