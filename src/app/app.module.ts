import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PdfviewerPageModule } from './pdfviewer/pdfviewer.module';
import { Media } from '@ionic-native/media/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
//import { FileOpener} from '@ionic-native/file-opener/ngx';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { ChangePassePipe } from './change-passe.pipe';
@NgModule({
  declarations: [AppComponent, ChangePassePipe],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    PdfviewerPageModule,
    Ng2SearchPipeModule,
    // SocialSharing
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }, Media, // <- plugin Media
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
  File,
  FileTransfer,
  DocumentViewer,
  //FileOpener
   SocialSharing,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
