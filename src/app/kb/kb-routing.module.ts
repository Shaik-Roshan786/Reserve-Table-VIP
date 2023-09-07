import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KbPage } from './kb.page';

const routes: Routes = [
  {
    path: '',
    component: KbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KbPageRoutingModule {}
