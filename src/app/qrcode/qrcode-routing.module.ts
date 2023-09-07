import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRCODEPage } from './qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: QRCODEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRCODEPageRoutingModule {}
