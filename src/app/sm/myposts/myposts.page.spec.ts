import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MypostsPage } from './myposts.page';

describe('MypostsPage', () => {
  let component: MypostsPage;
  let fixture: ComponentFixture<MypostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MypostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
