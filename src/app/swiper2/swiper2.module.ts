import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Swiper2PageRoutingModule } from './swiper2-routing.module';

import { Swiper2Page } from './swiper2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Swiper2PageRoutingModule
  ],
  declarations: [Swiper2Page]
})
export class Swiper2PageModule {}
