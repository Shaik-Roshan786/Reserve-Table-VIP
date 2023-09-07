import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRCODE2Page } from './qrcode2.page';

const routes: Routes = [
  {
    path: '',
    component: QRCODE2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRCODE2PageRoutingModule {}
