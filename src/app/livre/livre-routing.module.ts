import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrePage } from './livre.page';

const routes: Routes = [
  {
    path: '',
    component: LivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrePageRoutingModule {}
