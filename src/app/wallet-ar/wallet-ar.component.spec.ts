import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletArComponent } from './wallet-ar.component';

describe('WalletArComponent', () => {
  let component: WalletArComponent;
  let fixture: ComponentFixture<WalletArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
