import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetReviewsPageRoutingModule } from './get-reviews-routing.module';

import { GetReviewsPage } from './get-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetReviewsPageRoutingModule
  ],
  declarations: [GetReviewsPage]
})
export class GetReviewsPageModule {}
