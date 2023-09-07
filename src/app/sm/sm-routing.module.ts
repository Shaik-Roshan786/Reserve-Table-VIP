import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmPage } from './sm.page';

const routes: Routes = [
  {
    path: '',
    component: SmPage
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'myposts',
    loadChildren: () => import('./myposts/myposts.module').then( m => m.MypostsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmPageRoutingModule {}
