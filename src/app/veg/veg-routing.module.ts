import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegPage } from './veg.page';

const routes: Routes = [
  {
    path: '',
    component: VegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegPageRoutingModule {}
