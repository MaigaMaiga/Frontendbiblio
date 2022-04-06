import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { ChoixPaymentPage } from '../choix-payment/choix-payment.page';
import { LivrePage } from '../livre/livre.page';
import { ServiceService } from '../service.service';
// import { SocialSharePage } from '../social-share/social-share.page';
//import { SocialSharePage } from '../social-share/social-share.page';
import { File } from '@ionic-native/file/ngx';
import  { saveAs } from 'file-saver';
@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.page.html',
  styleUrls: ['./detail-livre.page.scss'],
})
export class DetailLivrePage implements OnInit {
  @Input() idLivre: number;

  livre: any;
  photo: any;
  platform: any;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    public alert: AlertController,
    private router: Router,
    private livreTs: LivrePage,
    private popCtrl: PopoverController,
    public modalCtrl: ModalController,
    private file: File,
    private transfer: FileTransfer
  ) { }

  ngOnInit() {
    this.photo =this.service.img;
    this.detailLivre();
  }
  detailLivre() {
    this.service.livreById(this.idLivre).subscribe((data: any)=>{
      this.livre = data;
      console.log('Detail'+ JSON.stringify(this.livre));
    });}

  close(){
    this.modalCtrl.dismiss({

  });
  }
   async choix(idLivre){

      const modal = await this.popCtrl.create({
        component: ChoixPaymentPage,
        cssClass:'popoverCss',
        componentProps: {
          idLivre,
        },
      });
      return modal.present();

  }
  async showShareOptions(id: any) {
  //   const modal = await this.modalCtrl.create({
  //     component: SocialSharePage,
  //     cssClass: 'backTransparent',
  //     backdropDismiss: true,
  //   });
  //   return modal.present();
  }

  rate(idLIvre: number){}


  downloadAndOpenPdf(idLivre: number) {

    let path = null;


      path = this.file.dataDirectory;


    const transfer = this.transfer.create();
    transfer.download(this.service.livrefile+'/'+idLivre , path + 'myfile.pdf').then(entry => {

      let url = entry.toURL();
     // this.document.viewDocument(url, 'application', {});

    });

  }

  download(){
    const blob = new Blob(['https://devdactic.com/html/5-simple-hacks-LBT.pdf'], {type: 'application/pdf'});
    saveAs(blob, 'testData.pdf');
  }
  }
