import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRCODEPageRoutingModule } from './qrcode-routing.module';

import { QRCODEPage } from './qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCODEPageRoutingModule
  ],
  declarations: [QRCODEPage]
})
export class QRCODEPageModule {}
