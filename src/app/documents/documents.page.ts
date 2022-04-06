import { ServiceService } from './../service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
@ViewChild(IonSegment) segment: IonSegment;
  memoires: any;
  articles: any;
  type: string = 'article';
  data: Observable<any>;
  constructor(
    public service: ServiceService

  ) { }

  ngOnInit() {
    //this.segment.value = "";
    this.data =this.service.livreByFormat('Article');
    this.service.livreByFormat('Article').subscribe((data)=>{
      this.articles = data;
    });

  this.service.livreByFormat('Memoire').subscribe((data)=>{
    this.memoires = data;
  });
  }

  segmentChange( event){
    this.type = event.detail.value;
    console.log( event.detail.value);

  }
  detailarticle(){


  }

}
