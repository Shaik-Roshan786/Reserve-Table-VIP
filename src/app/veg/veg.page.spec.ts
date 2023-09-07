import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VegPage } from './veg.page';

describe('VegPage', () => {
  let component: VegPage;
  let fixture: ComponentFixture<VegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
