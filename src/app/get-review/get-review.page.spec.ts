import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetReviewPage } from './get-review.page';

describe('GetReviewPage', () => {
  let component: GetReviewPage;
  let fixture: ComponentFixture<GetReviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
