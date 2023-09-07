import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRCODE2Page } from './qrcode2.page';

describe('QRCODE2Page', () => {
  let component: QRCODE2Page;
  let fixture: ComponentFixture<QRCODE2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRCODE2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
