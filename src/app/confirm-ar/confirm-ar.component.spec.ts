import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmArComponent } from './confirm-ar.component';

describe('ConfirmArComponent', () => {
  let component: ConfirmArComponent;
  let fixture: ComponentFixture<ConfirmArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
