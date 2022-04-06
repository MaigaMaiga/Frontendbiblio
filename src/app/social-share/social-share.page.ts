import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SocialSharing} from '@ionic-native/social-sharing/ngx';
import { environment } from '@env/environment';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.page.html',
  styleUrls: ['./social-share.page.scss'],
})
export class SocialSharePage implements OnInit {

  public sharingList = environment.socialShareOption;
  loader: any = null;
  // eslint-disable-next-line max-len
  sharingText = 'Acceder a des livres a partir de virtual biblio  ';
  emailSubject = 'Download Apps';
  recipent = ['vbiblio@gmail.com'];
  sharingImage = ['/assets/Images/Virtual_biblio2.png'];
  sharingUrl = 'https://store.vbiblio.com';
  constructor(
    private modal: ModalController,
    private socialSharing: SocialSharing,
    ) { }

  ngOnInit() {}
  closeModal() {
    this.modal.dismiss();
  }
  async shareVia(shareData) {
    if (shareData.shareType === 'viaEmail') {
     this.shareViaEmail();
    } else {
      this.socialSharing[`${shareData.shareType}`](this.sharingText, this.sharingImage, this.sharingUrl)
      .then((res) => {
        this.modal.dismiss();
      })
      .catch((e) => {
        console.log('error', e);
        this.modal.dismiss();
      });
    }
  }
  shareViaEmail() {
    this.socialSharing.canShareViaEmail().then((res) => {
      this.socialSharing.shareViaEmail(this.sharingText, this.emailSubject, this.recipent, null, null, this.sharingImage).then(() => {
        this.modal.dismiss();
      });
    }).catch((e) => {
      // Error!
    });
  }
}
