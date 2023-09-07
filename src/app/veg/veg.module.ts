import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegPageRoutingModule } from './veg-routing.module';

import { VegPage } from './veg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegPageRoutingModule
  ],
  declarations: [VegPage]
})
export class VegPageModule {}
