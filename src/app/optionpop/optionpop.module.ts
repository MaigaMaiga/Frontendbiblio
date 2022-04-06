import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionpopPageRoutingModule } from './optionpop-routing.module';

import { OptionpopPage } from './optionpop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionpopPageRoutingModule
  ],
  declarations: [OptionpopPage]
})
export class OptionpopPageModule {}
