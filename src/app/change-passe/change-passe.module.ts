import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePassePageRoutingModule } from './change-passe-routing.module';

import { ChangePassePage } from './change-passe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePassePageRoutingModule
  ],
  declarations: [ChangePassePage]
})
export class ChangePassePageModule {}
