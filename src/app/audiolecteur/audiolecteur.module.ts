import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiolecteurPageRoutingModule } from './audiolecteur-routing.module';

import { AudiolecteurPage } from './audiolecteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiolecteurPageRoutingModule
  ],
  declarations: [AudiolecteurPage]
})
export class AudiolecteurPageModule {}
