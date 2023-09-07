import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetReviewPageRoutingModule } from './get-review-routing.module';

import { GetReviewPage } from './get-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetReviewPageRoutingModule
  ],
  declarations: [GetReviewPage]
})
export class GetReviewPageModule {}
