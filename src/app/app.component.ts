import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router: Router,
  ) {
    this.initializeApp();
  }
  initializeApp(){
    this.router.navigateByUrl('splash-screen');
  }

  logOut(){
    localStorage.removeItem('isLogin');
    localStorage.removeItem('loginStatus');
    this.router.navigateByUrl('/login');
  }
}
