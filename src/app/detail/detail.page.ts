import { DetailLivrePage } from './../detail-livre/detail-livre.page';
import { LivrePage } from './../livre/livre.page';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @Input() idLivre: number;

  livre: any;
  photo: any;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    public alert: AlertController,
    private router: Router,
    private popCtrl: PopoverController,
    private modalctrl:ModalController,

  ) {}

  ngOnInit() {
    this.photo = this.service.img;
    this.detailLivre();
  }

  //get detail 
  detailLivre() {
    this.service.livreById(this.idLivre).subscribe((data: any) => {
      this.livre = data;
    });
  }

  //Show more details 

  async showDetail(idLivre: any) {

    const modal = await this.modalctrl.create({
      component: DetailLivrePage,
      cssClass:'CSS',
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: {
        idLivre: idLivre,
      },
    });

    return modal.present();

    
  }
}
