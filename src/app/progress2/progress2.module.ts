import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Progress2PageRoutingModule } from './progress2-routing.module';

import { Progress2Page } from './progress2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Progress2PageRoutingModule
  ],
  declarations: [Progress2Page]
})
export class Progress2PageModule {}
