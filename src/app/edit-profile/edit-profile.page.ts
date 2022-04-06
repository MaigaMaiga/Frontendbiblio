import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {


  userData: any;
  constructor(
    private userService :ServiceService,
    private popover : PopoverController,
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage['isLogin'])
  }



  update(){

    console.log(this.userData);
    this.userService.updateUser(this.userData.idUtilisateur, this.userData).subscribe((data)=>{
        localStorage.setItem('isLogin',data);
        this.popover.dismiss();
    });
  }
  cancel(){
    this.popover.dismiss();
  }
}
