import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceAttestationRoutingModule } from './invoice-attestation-routing.module';
import { InvoiceAttestationComponent } from './invoice-attestation/invoice-attestation.component';

@NgModule({
  declarations: [InvoiceAttestationComponent],
  imports: [
    CommonModule,
    InvoiceAttestationRoutingModule
  ]
})
export class InvoiceAttestationModule { }
