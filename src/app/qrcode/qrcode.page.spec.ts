import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRCODEPage } from './qrcode.page';

describe('QRCODEPage', () => {
  let component: QRCODEPage;
  let fixture: ComponentFixture<QRCODEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRCODEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
