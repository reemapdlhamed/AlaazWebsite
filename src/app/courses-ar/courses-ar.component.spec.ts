import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesArComponent } from './courses-ar.component';

describe('CoursesArComponent', () => {
  let component: CoursesArComponent;
  let fixture: ComponentFixture<CoursesArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
