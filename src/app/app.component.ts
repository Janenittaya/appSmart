import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { LoginPage } from '../pages/login/login';
import { IndexHomePage } from '../pages/index-home/index-home';
import { PinLoginPage} from '../pages/pin-login/pin-login'
// import { TabspagePage } from '../pages/tabspage/tabspage';
// import { HomePage } from '../pages/home/home';z
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  [x: string]: any;
  rootPage:any = IndexHomePage;

  constructor(platform: Platform, statusBar: StatusBar,splashScreen: SplashScreen) {  

           platform.ready().then(() => {

           statusBar.styleDefault();
           splashScreen.hide();        
    });
  }
}