import { ServiceService } from './../service.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;
  livre: any;
  photo: any;
  slideImg: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,

  };
  constructor(
    private service: ServiceService,
    private popctrl: PopoverController
  ) {
    this.photo = this.service.img;
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems : this.livre,

    };

  }
ngOnInit() {

  this.slideImg=["ncov4.jpg","bibn.png","vbiblio.png"];
  this.service.listLivre().subscribe((response:any)=>{
    this.livre = response;
  })
  console.log(this.photo);

  console.log(this.livre);


}

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
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

getAllbook(){


}


}
