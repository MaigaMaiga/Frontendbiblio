import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookvuePageRoutingModule } from './ebookvue-routing.module';

import { EbookvuePage } from './ebookvue.page';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookvuePageRoutingModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,

  ],
  declarations: [EbookvuePage]
})
export class EbookvuePageModule {}
