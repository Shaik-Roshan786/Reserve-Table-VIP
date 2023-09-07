import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KbPageRoutingModule } from './kb-routing.module';

import { KbPage } from './kb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KbPageRoutingModule
  ],
  declarations: [KbPage]
})
export class KbPageModule {}
