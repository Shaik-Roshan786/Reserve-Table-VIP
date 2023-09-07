import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetReviewPage } from './get-review.page';

const routes: Routes = [
  {
    path: '',
    component: GetReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetReviewPageRoutingModule {}
