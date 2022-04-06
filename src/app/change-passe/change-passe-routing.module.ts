import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePassePage } from './change-passe.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePassePageRoutingModule {}
