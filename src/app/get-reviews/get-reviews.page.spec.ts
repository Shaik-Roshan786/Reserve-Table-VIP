import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetReviewsPage } from './get-reviews.page';

describe('GetReviewsPage', () => {
  let component: GetReviewsPage;
  let fixture: ComponentFixture<GetReviewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
