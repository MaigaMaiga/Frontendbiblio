import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    public router: Router
  ) {
    setTimeout(()=>{
      this.router.navigateByUrl('login');
    },3000);
  }

  ngOnInit() {
  }

}
