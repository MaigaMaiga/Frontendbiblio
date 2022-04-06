import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUserPhotoPageRoutingModule } from './edit-user-photo-routing.module';

import { EditUserPhotoPage } from './edit-user-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditUserPhotoPageRoutingModule
  ],
  declarations: [EditUserPhotoPage]
})
export class EditUserPhotoPageModule {}
