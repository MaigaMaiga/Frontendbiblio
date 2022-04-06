import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  img: any;
  librairy: any;
  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
    
    this.img = this.service.library;
    this.service.getAllLibrairy().subscribe((data)=>{
      this.librairy = data;
    });
  }
  contentLibrairy(id:any){

  }

}
