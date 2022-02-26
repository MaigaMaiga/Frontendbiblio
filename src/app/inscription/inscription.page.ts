import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  nom: any;
  prenom : any;
  email : any;
  identifiant:any;
  password : any;
  confirmPassword : any;
    constructor(
      private service:ServiceService
    ) { }
  
    ngOnInit() {
    }
  
    inscription(){
      let data = {
        nom:this.nom,
        prenom :this.prenom,
        email : this.email,
        identifiant:this.identifiant,
        password : this.password,
        confirmPassword :this.confirmPassword
      }
    }
  
}
