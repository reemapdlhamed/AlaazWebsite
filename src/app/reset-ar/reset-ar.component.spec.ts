import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetArComponent } from './reset-ar.component';

describe('ResetArComponent', () => {
  let component: ResetArComponent;
  let fixture: ComponentFixture<ResetArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
