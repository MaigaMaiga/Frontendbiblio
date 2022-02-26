import { Component, OnInit } from '@angular/core';
import { DocumentViewer,DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.page.html',
  styleUrls: ['./pdfviewer.page.scss'],
})
export class PdfviewerPage implements OnInit {

  constructor(private document: DocumentViewer) { }
  public options: DocumentViewerOptions = {
    title: 'My PDF'}

    
  ngOnInit() {
    this.document.viewDocument('assets/test.pdf', 'application/pdf', this.options)

  }
}
