import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show-livre',
  templateUrl: './show-livre.component.html',
  styleUrls: ['./show-livre.component.scss'],
})
export class ShowLivreComponent implements OnInit {
  listLivre: any[] = [];
  format: any;
  livre: any;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    public alert: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.detailLivre(this.route.snapshot.params.idLivre);
    console.log("test for id"+this.route.snapshot.params.idLivre)
  }
  detailLivre(id: any) {
    console.log(id);
    this.service.livreById(17).subscribe((data:any)=>{
      this.livre = data;
      console.log('Detail'+ JSON.stringify(this.livre));
    });}
}
