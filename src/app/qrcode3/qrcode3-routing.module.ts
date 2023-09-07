import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRCODE3Page } from './qrcode3.page';

const routes: Routes = [
  {
    path: '',
    component: QRCODE3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRCODE3PageRoutingModule {}
