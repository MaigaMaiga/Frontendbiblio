import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
@Component({
  selector: 'app-audiolecteur',
  templateUrl: './audiolecteur.page.html',
  styleUrls: ['./audiolecteur.page.scss'],
})
export class AudiolecteurPage implements OnInit {
  file: MediaObject;
  constructor(
    public media: Media,
    public platform: Platform
  ) { 
    this.platform.ready().then(() => {
      this.readAudio();
    });
  }

  ngOnInit() {
  }
  readAudio() {
    this.file = this.media.create('../../assets/test.pdf ');
    // to listen to plugin events:
    this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
    this.file.onSuccess.subscribe(() => console.log('Action is successful'));
    this.file.onError.subscribe(error => console.log('Error!', error));
    // play the file
    this.file.play();
  }
}
