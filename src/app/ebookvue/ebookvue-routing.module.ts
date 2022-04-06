import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbookvuePage } from './ebookvue.page';

const routes: Routes = [
  {
    path: '',
    component: EbookvuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbookvuePageRoutingModule {}
