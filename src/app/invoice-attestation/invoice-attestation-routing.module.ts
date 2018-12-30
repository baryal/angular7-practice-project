import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceAttestationComponent} from './invoice-attestation/invoice-attestation.component';
const routes: Routes = [
  {
  path: '',
    component: InvoiceAttestationComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceAttestationRoutingModule { }
