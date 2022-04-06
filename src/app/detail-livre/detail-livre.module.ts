import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailLivrePageRoutingModule } from './detail-livre-routing.module';

import { DetailLivrePage } from './detail-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailLivrePageRoutingModule
  ],
  declarations: [DetailLivrePage]
})
export class DetailLivrePageModule {}
