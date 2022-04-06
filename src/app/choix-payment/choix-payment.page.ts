import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choix-payment',
  templateUrl: './choix-payment.page.html',
  styleUrls: ['./choix-payment.page.scss'],
})
export class ChoixPaymentPage implements OnInit {
  @Input() idLivre: number;
  id: any;
  constructor() { }

  ngOnInit() {
    this.id = this.idLivre;
    console.log( this.id);
    
  }

}
