import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';
import { HeroesComponent } from "src/app/modules/tour-of-heroes/heroes/heroes.component";
import { DashboardComponent } from "src/app/modules/tour-of-heroes/dashboard/dashboard.component";
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { CrisisCenterComponent } from "src/app/modules/tour-of-heroes/crisis-center/crisis-center/crisis-center.component";
import { CrisisListComponent } from "src/app/modules/tour-of-heroes/crisis-center/crisis-list/crisis-list.component";
import { CrisisDetailsComponent } from "src/app/modules/tour-of-heroes/crisis-center/crisis-details/crisis-details.component";
import { CrisisCenterHomeComponent } from "src/app/modules/tour-of-heroes/crisis-center/crisis-center-home/crisis-center-home.component";
import { AdminComponent } from "src/app/modules/tour-of-heroes/admin/admin.component";
import { AuthGuard } from "src/app/modules/tour-of-heroes/auth.guard";

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
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      
      },
      {
        path: 'dashboard',
        component: DashboardComponent

      },

      { 
        path: 'detail/:id', 
        component: HeroesDetailsComponent
      },
      {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
      },
      {
        path: 'crisis-center',
        component: CrisisCenterComponent, 
        children: [
          {
            path: '',
            component: CrisisListComponent,
            children: [
              {
                path: ':id',
                component: CrisisDetailsComponent
              },
              {
                path: '',
                component: CrisisCenterHomeComponent
              }
            ]
          } 
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourOfHerosRoutingModule { }
