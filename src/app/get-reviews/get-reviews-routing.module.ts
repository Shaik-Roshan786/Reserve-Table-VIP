import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetReviewsPage } from './get-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: GetReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetReviewsPageRoutingModule {}
