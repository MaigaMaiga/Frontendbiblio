import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionpopPage } from './optionpop.page';

const routes: Routes = [
  {
    path: '',
    component: OptionpopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionpopPageRoutingModule {}
