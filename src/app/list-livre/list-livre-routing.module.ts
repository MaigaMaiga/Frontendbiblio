import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLIvrePage } from './list-livre.page';

const routes: Routes = [
  {
    path: '',
    component: ListLIvrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListLIvrePageRoutingModule {}
