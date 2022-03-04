import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalPage } from '../app/modal/modal.page';
import { StanfordModalPage } from '../app/stanford-modal/stanford-modal.page'
import { FormsModule } from '@angular/forms';

import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [AppComponent, ModalPage, StanfordModalPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent, ModalPage, StanfordModalPage]
})
export class AppModule { }
