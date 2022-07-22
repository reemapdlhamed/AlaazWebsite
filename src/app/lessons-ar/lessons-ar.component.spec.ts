import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsArComponent } from './lessons-ar.component';

describe('LessonsArComponent', () => {
  let component: LessonsArComponent;
  let fixture: ComponentFixture<LessonsArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
