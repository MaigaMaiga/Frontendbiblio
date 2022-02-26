import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrePageRoutingModule } from './livre-routing.module';

import { LivrePage } from './livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivrePageRoutingModule
  ],
  declarations: [LivrePage]
})
export class LivrePageModule {}
