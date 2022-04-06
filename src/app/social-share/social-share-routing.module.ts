import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialSharePage } from './social-share.page';

const routes: Routes = [
  {
    path: '',
    component: SocialSharePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialSharePageRoutingModule {}
