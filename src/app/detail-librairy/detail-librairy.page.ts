import { ServiceService } from './../service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailLivrePage } from '@app/detail-livre/detail-livre.page';

@Component({
  selector: 'app-detail-librairy',
  templateUrl: './detail-librairy.page.html',
  styleUrls: ['./detail-librairy.page.scss'],
})
export class DetailLibrairyPage implements OnInit {
 slidesOptions = {
    slidesPerView: 1.5
  };
  id: number;
  livre: any;
  librairy:any;
  image:any;
  lib:any;
  constructor(
    private route: ActivatedRoute,
    private service: ServiceService,
    private modalctrl: ModalController,
  ) { }


  ngOnInit() {
    this.lib = this.service.library
    this.image = this.service.img;
    this.service.getLibrairById(this.id = this.route.snapshot.params.id).subscribe((data)=>{
      this.librairy = data;
    })
    this.getLIvreByLibrairy(this.route.snapshot.params.id);
  }

  getLIvreByLibrairy(id: any){
    this.service.getLivreByLibrairy(id).subscribe((data)=>{
      this.livre = data;
      console.log(this.livre);

    });
  }

    //content of popover
    async detailLivre(idLivre: any ) {

      const modal = await this.modalctrl.create({
        component: DetailLivrePage,
        cssClass:'popoverCss',
        componentProps: {
          idLivre,
        },
      });
      return modal.present();
    }
}
