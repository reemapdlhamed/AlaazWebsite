import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpageArComponent } from './endpage-ar.component';

describe('EndpageArComponent', () => {
  let component: EndpageArComponent;
  let fixture: ComponentFixture<EndpageArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndpageArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpageArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
