import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//the lazy loading syntax uses loadChildren followed by a string that is the relative path to the module, a hash mark or #, and the module’s class name./
const routes: Routes = [
  {
    path: 'tour-of-heroes',
    loadChildren: './modules/tour-of-heroes/tour-of-heroes.module#TourOfHeroesModule'
  },
  {
    path: 'starwars',
    loadChildren: 'src/app/modules/star-wars/star-wars.module#StarWarsModule'
  },
  {
    path: 'others',
    loadChildren: 'src/app/modules/others/others.module#OthersModule'
  },
  {
    path: 'invoice',
    loadChildren: 'src/app/modules/invoice-attestation/invoice-attestation.module#InvoiceAttestationModule'
  },
  {
    path: 'order',
    loadChildren: 'src/app/modules/order/order.module#OrderModule'

  },
  {
    path: 'authentication',
    loadChildren: 'src/app/modules/authentication/authentication.module#AuthenticationModule'

  },
  {
    path: '',
    redirectTo: 'tour-of-heroes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
