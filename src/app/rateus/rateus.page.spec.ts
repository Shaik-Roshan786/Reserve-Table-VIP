import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateusPage } from './rateus.page';

describe('RateusPage', () => {
  let component: RateusPage;
  let fixture: ComponentFixture<RateusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RateusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
