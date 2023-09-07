import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Swiper2Page } from './swiper2.page';

const routes: Routes = [
  {
    path: '',
    component: Swiper2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Swiper2PageRoutingModule {}
