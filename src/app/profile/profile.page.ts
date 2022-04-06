import { ChangePassePage } from './../change-passe/change-passe.page';
import { EditProfilePage } from './../edit-profile/edit-profile.page';
import { PopoverController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { EditUserPhotoPage } from '@app/edit-user-photo/edit-user-photo.page';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;
  photo :any;


  public imgfile: any = File;
  constructor(
    private popoverCtrl: PopoverController,
    private modalctrl: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.photo);
    this.userData =JSON.parse(localStorage['isLogin']);
  }

 async edit(){
    const popover = await this.popoverCtrl.create({
      component: EditProfilePage,

    });

    return popover.present();

  }

  async updateImg() {

    const modal = await this.modalctrl.create({
      component: EditUserPhotoPage,
      cssClass:'editprofile',
      breakpoints: [1, 2, 3, 4],
      initialBreakpoint: 0.2,
      handle: true,

    });
   this.photo = localStorage.setItem('photo',this.photo);
    return modal.present();
  }

async openOptionSelection() {
  const mod = await this.modalctrl.create({
    component: EditUserPhotoPage,
    cssClass: 'transparent-modal',
  });
  mod.onDidDismiss()
  .then(res => {
    console.log(res);
    if (res.role !== 'backdrop') {
      this.takePicture(res.data);
    }
  });
  return await mod.present();
}

async takePicture(type) {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource[type]
  });
  this.photo = image.webPath;
  this.imgfile =image.base64String;
  console.log(this.photo);
}
async changePasse(){
  const popover = await this.popoverCtrl.create({
    component: ChangePassePage,

  });

  return popover.present();

}
}
