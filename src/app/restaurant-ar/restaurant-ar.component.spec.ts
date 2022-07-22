import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantArComponent } from './restaurant-ar.component';

describe('RestaurantArComponent', () => {
  let component: RestaurantArComponent;
  let fixture: ComponentFixture<RestaurantArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
