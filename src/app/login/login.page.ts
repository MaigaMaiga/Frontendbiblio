import { Router } from '@angular/router';
import { ForgotPage } from './../forgot/forgot.page';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, PopoverController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
loginInfo: any;
prenom: any;
email: any;
identifiant: any;
password: any;
  constructor(
    private service: ServiceService,
    private toast: ToastController,
    private modalctrl: PopoverController,
    private route :Router
  ) { }

  ngOnInit() {
  }

  login(){
    console.log(this.identifiant);
    console.log(this.password);

    this.service.login(this.identifiant,this.password).subscribe((res)=>{
      if(res){

        console.log(res);
        this.loginInfo = res;
        const loginStatus = true;
        this.route.navigateByUrl('/home');
        localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
      }else{

      this.presentToast();
    }
  },
  (error: HttpErrorResponse) => {
    const err = error;
    console.error('Here is your error: ' + err);
    this.errorServer();
  }
  );

}
  async presentToast() {
          const toast = await this.toast.create({
            message: 'Identifiant ou mot de passe incorrect',
            duration: 2000,
            position: 'middle',
            color:'danger'
          });
          toast.present();
        }
        async errorServer() {
          const toast = await this.toast.create({
            message: 'Oups! Erreur de connexion veillez réessayez ultérieurement',
            duration: 3000,
            position: 'middle',
            color:'danger'
          });
          toast.present();
        }

        async forgot() {

          const modal = await this.modalctrl.create({
            component: ForgotPage,
            cssClass:'popoverCss',
            componentProps: {
            },
          });
          return modal.present();
        }
}

