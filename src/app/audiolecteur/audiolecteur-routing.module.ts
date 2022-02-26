import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiolecteurPage } from './audiolecteur.page';

const routes: Routes = [
  {
    path: '',
    component: AudiolecteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiolecteurPageRoutingModule {}
