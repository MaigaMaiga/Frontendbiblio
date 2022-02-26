import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonSlides } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  listLivre: any;
  format: any;
  detail: any;
//slider config
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,

  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 5

  };


  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    public alert: AlertController,
    private router: Router

  ) {
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995
        },
        {
          id: 925
        },
        {
          id: 940
        },
        {
          id: 943
        },
        {
          id: 944
        }
      ]
    };
    //Item object for Food
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 324
        },
        {
          id: 321
        },
        {
          id: 435
        },
        {
          id: 524
        },
        {
          id: 235
        }
      ]
    };
    //Item object for Fashion
    this.sliderThree =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 643
        },
        {
          id: 532
        },
        {
          id: 232
        },
        {
          id: 874
        },
        {
          id: 193
        }
      ]
    };

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
  slideDidChange(object, slideView) {
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








  ngOnInit() {
    this.livrebyformat( this.route.snapshot.params.format);
    this.format = this.route.snapshot.params.format;
    console.log('ok'+this.format);

  }



  livrebyformat(format: string){

    this.service.listLivre(format).subscribe((data)=>{
      this.listLivre = data;
      console.log('content'+ this.listLivre);
    });
  }

    async showLivre(id: number) {
      this.service.livreById(id).subscribe((data)=>{
        this.detail = data;

      });

      const alert = await this.alert.create({

        cssClass: 'my-custom-class',
        message: '<img src="../../assets/Images/livre1.jpg" style="width:210px;height:200px;">'+this.detail.titre,
        buttons: [
          {
            text: 'Lire',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'show-button',
            handler: (blah) => {
              this.router.navigateByUrl('/home/'+this.detail.idLivre);
            }
          }, {
            text: 'Detail',
            id: 'detail-button',
            handler: () => {
              this.router.navigateByUrl('/pdfviewer');
            }
          }
        ]
      });
      await alert.present();

    }

}
