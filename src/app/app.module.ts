import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PeopleServiceProvider } from '../providers/people-service/people-service';

import { MyApp } from './app.component';
import { BottomFabComponent } from '../components/bottom-fab/bottom-fab';
import { HeaderComponent } from '../components/header/header';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { PropertiesPage } from "../pages/properties/properties";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BottomFabComponent,
    HeaderComponent,
    PropertiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PropertiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider
  ]
})
export class AppModule {}
