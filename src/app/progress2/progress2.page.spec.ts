import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Progress2Page } from './progress2.page';

describe('Progress2Page', () => {
  let component: Progress2Page;
  let fixture: ComponentFixture<Progress2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Progress2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
