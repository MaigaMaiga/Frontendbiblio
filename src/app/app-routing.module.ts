import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'livre',
    loadChildren: () => import('./livre/livre.module').then( m => m.LivrePageModule)
  },

  {
    path: 'livre/:format',
    loadChildren: () => import('./livre/livre.module').then( m => m.LivrePageModule)
  },
  {
    path: 'all-livre',
    loadChildren: () => import('./all-livre/all-livre.module').then( m => m.AllLivrePageModule)
  },
  {
    path: 'pdfviewer',
    loadChildren: () => import('./pdfviewer/pdfviewer.module').then( m => m.PdfviewerPageModule)
  },
  {
    path: 'audiolecteur',
    loadChildren: () => import('./audiolecteur/audiolecteur.module').then( m => m.AudiolecteurPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
