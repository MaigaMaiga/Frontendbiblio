import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { DetailLivrePage } from '../detail-livre/detail-livre.page';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.page.html',
  styleUrls: ['./list-livre.page.scss'],
})
export class ListLIvrePage implements OnInit {

  livrefile: any;
  photo: any;
  idLivre: any;
  filterTerm: any;
  category: any;
  format: any;
  listlivre: any;
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    // spaceBetween: 2,
    // speed:400,
    //loop: true,
    //centeredSlides: true,
    // autoplay:{
    //   delay:2000,
    // }

  };
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    public alert: AlertController,
    private router: Router,
    private popCtrl: PopoverController,
    private modalctrl: ModalController

  ) { }

  ngOnInit() {
    this.getCatSelect(this.route.snapshot.params.id);
    this.format = this.route.snapshot.params.format;
    this.livrebyformatAndCat(this.route.snapshot.params.format, this.route.snapshot.params.id);
    this.livrefile = this.service.livrefile;
    this.photo = this.service.img;


  }
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

  livrebyformatAndCat(format: string, category: any,) {
    this.service.getLivreByCat(format, category, false).subscribe((data)=>{
        this.listlivre =data;
    });
}
getCatSelect(id: number){
  this.service.getCategoryById(id).subscribe((data)=>{
    this.category = data;
  });
}
}
