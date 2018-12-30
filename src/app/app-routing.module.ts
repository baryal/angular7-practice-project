import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//the lazy loading syntax uses loadChildren followed by a string that is the relative path to the module, a hash mark or #, and the module’s class name./
const routes: Routes = [
    {
    path: 'hero',
    loadChildren:'./tour-of-heroes/tour-of-heroes.module#TourOfHeroesModule'
  },
  {
    path:'starwars',
  loadChildren:'src/app/star-wars/star-wars.module#StarWarsModule'
},
{
  path:'others',
  loadChildren:'src/app/others/others.module#OthersModule'
},
{
  path:'invoice',
  loadChildren: 'src/app/invoice-attestation/invoice-attestation.module#InvoiceAttestationModule'
},
{
    path: '',
    redirectTo: 'hero',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
