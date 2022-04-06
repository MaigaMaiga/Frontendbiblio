import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-user-photo',
  templateUrl: './edit-user-photo.page.html',
  styleUrls: ['./edit-user-photo.page.scss'],
})
export class EditUserPhotoPage implements OnInit {
  public imgfile: any = File;
  constructor(
    private modalController: ModalController
  ) { }
  ngOnInit() {}
  closeModal() {
    this.modalController.dismiss(null, 'backdrop');
  }
  startCapture(type) {
    this.modalController.dismiss(type, 'select');
  }

  imgSelect(event){
    const img = event.target.files[0];
   this.imgfile =img;
   console.log(this.imgfile);

  }
}
