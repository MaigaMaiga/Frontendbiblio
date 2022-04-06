import { DetailPage } from './../detail/detail.page';
import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonSlides, ModalController, PopoverController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { DetailLivrePage } from '../detail-livre/detail-livre.page';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage implements OnInit {
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  sliderTwo: any;

  livrefile: any;
  photo: any;
  listLivre: any[] = [];
  format: any;
  idLivre: any;
  slideImg: any;
  filterTerm: any;
  category: any;

  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2.2,
    spaceBetween: 2,
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

  ) {}

  slideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

   // eslint-disable-next-line @angular-eslint/contextual-lifecycle
   ngOnInit() {

    this.slideImg=[
      {
        img:'ncov0.jpg',
        text:'Des livre en abondance',
      },
      {
        img:'ncov1.jpg',
        text:'Découvrer facilement des meilleurs livre',
      },
      {
        img:'cover4.png',
        text:'lire partout où vous voulez',
      },

    ];

    this.livrebyformat(this.route.snapshot.params.format);
    this.format = this.route.snapshot.params.format;
    this.livrefile = this.service.livrefile;
    this.photo = this.service.img;
    this.allCategory();


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

  //end popover
  livrebyformat(format: string) {
    this.service.livreByFormatNotDeleted(format, false).subscribe((data: any) => {
      this.listLivre = data;

      console.log('Tous les livres ' + JSON.stringify(this.listLivre));
    });
  }
  allCategory(){
    this.service.getAllcategory(false).subscribe((data)=>{
      this.category = data;
      console.log('toutes les category '+ JSON.stringify(this.category));
    });
  }

  tousLivre(){
    console.log('ok');

  }
}
