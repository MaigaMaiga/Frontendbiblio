import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { ListLIvrePageRoutingModule } from './list-livre-routing.module';

import { ListLIvrePage } from './list-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListLIvrePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListLIvrePage]
})
export class ListLIvrePageModule {}
