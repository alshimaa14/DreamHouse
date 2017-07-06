import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { PropertiesPage } from "../pages/properties/properties";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  appMenuItems: Array<MenuItem>;
  accountMenuItems: Array<MenuItem>;
  helpMenuItems: Array<MenuItem>;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // this.pages = [
    //   { title: 'Home', component: HomePage }
    // ];

    this.appMenuItems = [
      {title: 'Properties', component: PropertiesPage, icon: 'home'},
      {title: 'Brokers', component: HomePage, icon: 'people'},
      {title: 'Favorites', component: HomePage, icon: 'star'}
    ]
    this.accountMenuItems = [
      {title: 'My Account', component: HomePage, icon: 'ios-contact'},
      {title:'Login',component: LoginPage , icon:'log-in'}
    ]
    this.helpMenuItems = [
      {title: 'Welcome', component: HomePage, icon: 'bookmark'},
      {title: 'About', component: HomePage, icon: 'information-circle'},
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.dismissPageChangeViews();
    this.nav.setRoot(page.component);
  }
}
