import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialSharePageRoutingModule } from './social-share-routing.module';

import { SocialSharePage } from './social-share.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialSharePageRoutingModule
  ],
  declarations: [SocialSharePage]
})
export class SocialSharePageModule {}
