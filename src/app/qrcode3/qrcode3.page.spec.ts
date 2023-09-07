import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRCODE3Page } from './qrcode3.page';

describe('QRCODE3Page', () => {
  let component: QRCODE3Page;
  let fixture: ComponentFixture<QRCODE3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRCODE3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
