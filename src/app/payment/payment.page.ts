import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  livre:any;

  constructor(
    private modalCtrl:ModalController,
    private servvice:ServiceService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    

    this.getLivre();
    this.modalCtrl.dismiss({


    });


}
getLivre(){

 this.servvice.livreById(this.route.snapshot.params.id).subscribe((data)=>{
  this.livre =data;
  
   this.modalCtrl.dismiss({
  })
 });
}

}
