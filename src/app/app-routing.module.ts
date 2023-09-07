import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'veg',
    loadChildren: () => import('./veg/veg.module').then( m => m.VegPageModule)
  },
  {
    path: 'additem',
    loadChildren: () => import('./additem/additem.module').then( m => m.AdditemPageModule)
  },
  {
    path: 'kb',
    loadChildren: () => import('./kb/kb.module').then( m => m.KbPageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'reserve',
    loadChildren: () => import('./reserve/reserve.module').then( m => m.ReservePageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./rate/rate.module').then( m => m.RatePageModule)
  },
  {
    path: 'rateus',
    loadChildren: () => import('./rateus/rateus.module').then( m => m.RateusPageModule)
  },
  {
    path: 'reply',
    loadChildren: () => import('./reply/reply.module').then( m => m.ReplyPageModule)
  },
  {
    path: 'sm',
    loadChildren: () => import('./sm/sm.module').then( m => m.SmPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'get-reviews',
    loadChildren: () => import('./get-reviews/get-reviews.module').then( m => m.GetReviewsPageModule)
  },
  {
    path: 'get-review',
    loadChildren: () => import('./get-review/get-review.module').then( m => m.GetReviewPageModule)
  },
  {
    path: 'progress2',
    loadChildren: () => import('./progress2/progress2.module').then( m => m.Progress2PageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'swiper',
    loadChildren: () => import('./swiper/swiper.module').then( m => m.SwiperPageModule)
  },
  {
    path: 'like',
    loadChildren: () => import('./like/like.module').then( m => m.LikePageModule)
  },
  {
    path: 'swiper2',
    loadChildren: () => import('./swiper2/swiper2.module').then( m => m.Swiper2PageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QRCODEPageModule)
  },
  {
    path: 'qrcode2',
    loadChildren: () => import('./qrcode2/qrcode2.module').then( m => m.QRCODE2PageModule)
  },
  {
    path: 'qrcode3',
    loadChildren: () => import('./qrcode3/qrcode3.module').then( m => m.QRCODE3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
