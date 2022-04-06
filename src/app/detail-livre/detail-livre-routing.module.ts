import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailLivrePage } from './detail-livre.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailLivrePageRoutingModule {}
