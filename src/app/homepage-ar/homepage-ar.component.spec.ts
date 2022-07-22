import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageArComponent } from './homepage-ar.component';

describe('HomepageArComponent', () => {
  let component: HomepageArComponent;
  let fixture: ComponentFixture<HomepageArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
