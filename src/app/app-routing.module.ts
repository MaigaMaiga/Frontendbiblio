import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
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
    path: 'audiolecteur/:idLivre',
    loadChildren: () => import('./audiolecteur/audiolecteur.module').then( m => m.AudiolecteurPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'ebookvue/:idLivre',
    //path: 'ebookvue',
    loadChildren: () => import('./ebookvue/ebookvue.module').then( m => m.EbookvuePageModule)
  },
  {
    path: 'detail-livre/:idLivre',
    loadChildren: () => import('./detail-livre/detail-livre.module').then( m => m.DetailLivrePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'profile-pop',
    loadChildren: () => import('./profile-pop/profile-pop.module').then( m => m.ProfilePopPageModule)
  },
  {
    path: 'detail-librairy/:id',
    loadChildren: () => import('./detail-librairy/detail-librairy.module').then( m => m.DetailLibrairyPageModule)
  },
  {
    path: 'payment/:id',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'choix-payment',
    loadChildren: () => import('./choix-payment/choix-payment.module').then( m => m.ChoixPaymentPageModule)
  },
  {
    path: 'listlivre/:format/:id',
    loadChildren: () => import('./list-livre/list-livre.module').then( m => m.ListLIvrePageModule)
  },
  {
    path: 'social-share',
    loadChildren: () => import('./social-share/social-share.module').then( m => m.SocialSharePageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'optionpop',
    loadChildren: () => import('./optionpop/optionpop.module').then( m => m.OptionpopPageModule)
  },  {
    path: 'edit-user-photo',
    loadChildren: () => import('./edit-user-photo/edit-user-photo.module').then( m => m.EditUserPhotoPageModule)
  },
  {
    path: 'change-passe',
    loadChildren: () => import('./change-passe/change-passe.module').then( m => m.ChangePassePageModule)
  },











];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
