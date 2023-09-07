import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Progress2Page } from './progress2.page';

const routes: Routes = [
  {
    path: '',
    component: Progress2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Progress2PageRoutingModule {}
