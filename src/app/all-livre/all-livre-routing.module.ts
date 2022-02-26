import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllLivrePage } from './all-livre.page';

const routes: Routes = [
  {
    path: '',
    component: AllLivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllLivrePageRoutingModule {}
