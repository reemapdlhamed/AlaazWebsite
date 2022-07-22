import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyArComponent } from './academy-ar.component';

describe('AcademyArComponent', () => {
  let component: AcademyArComponent;
  let fixture: ComponentFixture<AcademyArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
