import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Swiper2Page } from './swiper2.page';

describe('Swiper2Page', () => {
  let component: Swiper2Page;
  let fixture: ComponentFixture<Swiper2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Swiper2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
