import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KbPage } from './kb.page';

describe('KbPage', () => {
  let component: KbPage;
  let fixture: ComponentFixture<KbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
