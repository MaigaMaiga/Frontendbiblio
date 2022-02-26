import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllLivrePageRoutingModule } from './all-livre-routing.module';

import { AllLivrePage } from './all-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllLivrePageRoutingModule
  ],
  declarations: [AllLivrePage]
})
export class AllLivrePageModule {}
