import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
loginInfo: any;
prenom : any;
email : any;
identifiant:any;
password : any;
  constructor(
    private service:ServiceService,
    private toast :ToastController
  ) { }

  ngOnInit() {
  }

  login(){
    this.service.login(this.identifiant,this.password).subscribe((res)=>{
      if(res){

        console.log(res);
        this.loginInfo = res;
        let loginStatus = true
        location.replace("/home");
        localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
      }else{
         
      this.presentToast();
    }
  })
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
}

