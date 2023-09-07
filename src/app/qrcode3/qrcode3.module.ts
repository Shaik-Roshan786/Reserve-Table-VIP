import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRCODE3PageRoutingModule } from './qrcode3-routing.module';

import { QRCODE3Page } from './qrcode3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCODE3PageRoutingModule
  ],
  declarations: [QRCODE3Page]
})
export class QRCODE3PageModule {}
