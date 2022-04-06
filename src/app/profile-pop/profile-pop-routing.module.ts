import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePopPage } from './profile-pop.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePopPageRoutingModule {}
