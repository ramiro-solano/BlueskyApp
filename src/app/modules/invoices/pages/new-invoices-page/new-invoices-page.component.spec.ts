import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvoicesPageComponent } from './new-invoices-page.component';

describe('NewInvoicesPageComponent', () => {
  let component: NewInvoicesPageComponent;
  let fixture: ComponentFixture<NewInvoicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInvoicesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInvoicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
