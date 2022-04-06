import { EbookvuePage } from './../ebookvue/ebookvue.page';
import { Component, OnInit } from '@angular/core';
import { DocumentViewer,DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';
import { PopoverController } from '@ionic/angular';
import { ShowLivreComponent } from '../show-livre/show-livre.component';
@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.page.html',
  styleUrls: ['./pdfviewer.page.scss'],
})
export class PdfviewerPage implements OnInit {

  constructor(
    private popCtrl:PopoverController,
    ) { }
  public options: DocumentViewerOptions = {
    title: 'My PDF'}

    
  ngOnInit() {
   

  }

}
