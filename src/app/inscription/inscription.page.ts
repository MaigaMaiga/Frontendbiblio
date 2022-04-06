import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormBuilder, Validators,ValidationErrors } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})


export class InscriptionPage implements OnInit {
  @Input() errors: ValidationErrors;
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder,
    private toast: ToastController,
    public userService: ServiceService,
    public router: Router,

    ) { }


    ngOnInit() {

      this.ionicForm = this.formBuilder.group({
        nom: ['', [Validators.required, Validators.minLength(2)]],
        prenom:['',[Validators.required, Validators.minLength(2)]],
        telephone:['',[Validators.required,Validators.pattern('[5-9][0-9]{7}')]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        login: ['',Validators.minLength(3)],
        confirmPassword: ['', [Validators.required]]

      });
    }
  // eslint-disable-next-line @typescript-eslint/member-ordering
   get errorControl() {
      return this.ionicForm.controls;
    }

    inscription(){
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        if(this.ionicForm.value.password!==this.ionicForm.value.confirmPassword){
          this.presentToast();
        }else{

        console.log('Please provide all the required values!');
        //this.allrequire();
        return false;
        }

      } else {
        this.userService.add(this.ionicForm.value).subscribe((data)=>{
          this.router.navigateByUrl('/login');
          this.successToast();
        },
        (error: HttpErrorResponse) => {
          const err = error;
          console.error('Here is your error: ' + err);
          this.errorServer();
        }
        );

      }
    }

    async successToast() {
      const toast = await this.toast.create({
        message: 'Compte créer avec succès, Consulter votre email pour activer votre compte',
        duration: 4000,
        position: 'middle',
        color:'success'
      });
      toast.present();
    }


    async presentToast() {
      const toast = await this.toast.create({
        message: 'Mot de passe non identique',
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
        color:'danger',

      });
      toast.present();
    }
    async allrequire() {
      const toast = await this.toast.create({
        message: 'Tous les champs doivent être correctement remplis',
        duration: 2000,
        position: 'middle',
        color:'danger'
      });
      toast.present();
    }
  }
