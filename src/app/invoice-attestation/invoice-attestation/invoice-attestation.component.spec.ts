import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAttestationComponent } from './invoice-attestation.component';

describe('InvoiceAttestationComponent', () => {
  let component: InvoiceAttestationComponent;
  let fixture: ComponentFixture<InvoiceAttestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceAttestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
