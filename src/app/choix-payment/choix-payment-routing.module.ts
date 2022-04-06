import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixPaymentPage } from './choix-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixPaymentPageRoutingModule {}
