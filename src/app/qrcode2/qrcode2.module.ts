import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRCODE2PageRoutingModule } from './qrcode2-routing.module';

import { QRCODE2Page } from './qrcode2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCODE2PageRoutingModule
  ],
  declarations: [QRCODE2Page]
})
export class QRCODE2PageModule {}
