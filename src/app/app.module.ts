import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SlidePage } from '../pages/slide/slide';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { TabspagePage } from '../pages/tabspage/tabspage';
import { SearchPage } from '../pages/search/search';
import { FarmPage } from '../pages/farm/farm';
import { TracebilityPage } from '../pages/tracebility/tracebility';
import { ScanbarcodePage } from '../pages/scanbarcode/scanbarcode';
import { PlanricePage } from '../pages/planrice/planrice';
import { PlanvegPage } from '../pages/planveg/planveg';
import { PlanVegPage } from '../pages/plan-veg/plan-veg';
import { ActivityRicePage } from '../pages/activity-rice/activity-rice';
import { ActivityRiceCompostPage } from '../pages/activity-rice-compost/activity-rice-compost';
import { ActivityRiceFoodPage } from '../pages/activity-rice-food/activity-rice-food';
import { ActivityharvesPage } from '../pages/activityharves/activityharves';
import { ActivityVegCompostPage } from '../pages/activity-veg-compost/activity-veg-compost';
import { ActivityVegFoodPage } from '../pages/activity-veg-food/activity-veg-food';
import { ActivityharvesVegPage } from '../pages/activityharves-veg/activityharves-veg';
import { ActivityVegPage } from '../pages/activity-veg/activity-veg';
import { IndexHomePage } from '../pages/index-home/index-home';
import { ConnectPage } from '../pages/connect/connect';
import { TracebilityVegPage } from '../pages/tracebility-veg/tracebility-veg';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';
import { LockScreenModule, LockScreenComponent } from 'ionic-simple-lockscreen';
import { PinLoginPage} from '../pages/pin-login/pin-login'
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { PinLoginPageModule } from '../pages/pin-login/pin-login.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabspagePage,
    IndexHomePage,
    FarmPage,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LockScreenModule,
    IonicStorageModule.forRoot(),
    PinLoginPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // SlidePage,
    HomePage,
    TabspagePage,
    IndexHomePage,
    FarmPage,
    LockScreenComponent

   
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
