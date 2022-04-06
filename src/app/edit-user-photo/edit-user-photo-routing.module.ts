import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUserPhotoPage } from './edit-user-photo.page';

const routes: Routes = [
  {
    path: '',
    component: EditUserPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditUserPhotoPageRoutingModule {}
