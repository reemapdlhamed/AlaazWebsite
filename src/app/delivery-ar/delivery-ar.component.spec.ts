import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryArComponent } from './delivery-ar.component';

describe('DeliveryArComponent', () => {
  let component: DeliveryArComponent;
  let fixture: ComponentFixture<DeliveryArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
