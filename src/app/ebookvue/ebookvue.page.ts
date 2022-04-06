import { OptionpopComponent } from './../optionpop/optionpop.component';
import { OptionpopPage } from './../optionpop/optionpop.page';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../service.service';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import  { saveAs } from 'file-saver';
@Component({
  selector: 'app-ebookvue',
  templateUrl: './ebookvue.page.html',
  styleUrls: ['./ebookvue.page.scss'],
})


export class EbookvuePage implements OnInit {
title = 'Test';
public page = 2 ;
public pageLabel!: string;
  idLivre: number;
  livre: any;
  pdfSrc: any;
  renderText = true;
  originalSize = false;
  fitToPage = false;
  showAll = true;
  autoresize = false;
  showBorders = true;
  renderTextModes = [0, 1, 2];
  renderTextMode = 1;
  rotation = 0;
  zoom = 1;
  zoomScale = 'page-width';
  zoomScales = ['page-width', 'page-fit', 'page-height'];
  pdfQuery = '';
  totalPages!: number;


  constructor(

    private     document:   DocumentViewer,
    private     navCtrl:    NavController,
    private     file:       File,
    private     transfer:   FileTransfer,
    private     service:    ServiceService,
    private     route:      ActivatedRoute,
    private     modalCtrl:  ModalController,
    private     popover:    PopoverController,

    ) {
     }



  ngOnInit() {

     this.srcpdf(this.route.snapshot.params.idLivre);

     this.pdfSrc = this.service.livrefile+'/'+this.route.snapshot.params.idLivre;

     this.modalCtrl.dismiss();
  }

  srcpdf(id: number){

    this.service.livreById(id).subscribe((data)=>{

    this.livre = data;

    console.log(this.livre);

  });
}

async option(tr: any) {

  const pop = await this.popover.create({
    component: OptionpopPage,
    trigger:tr,
    cssClass:'popOption',
    side:'start',

    componentProps: {

    },
  });
  return pop.present();
}
download(){
  const blob = new Blob([this.pdfSrc], {type: 'application/pdf'});
  saveAs(blob, 'testData.pdf');
}
zoomIn() {
  this.zoom += 0.05;
}
zoomOut() {
  if (this.zoom > 0.05){
    this.zoom -= 0.05;
}}
zoomD(){
  this.zoom = 1;
}
rotateDoc() {
  this.rotation += 90;
}
}
