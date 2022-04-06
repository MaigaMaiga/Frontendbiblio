import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePopPageRoutingModule } from './profile-pop-routing.module';

import { ProfilePopPage } from './profile-pop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePopPageRoutingModule
  ],
  declarations: [ProfilePopPage]
})
export class ProfilePopPageModule {}
