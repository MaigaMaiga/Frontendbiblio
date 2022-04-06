import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixPaymentPageRoutingModule } from './choix-payment-routing.module';

import { ChoixPaymentPage } from './choix-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixPaymentPageRoutingModule
  ],
  declarations: [ChoixPaymentPage]
})
export class ChoixPaymentPageModule {}
