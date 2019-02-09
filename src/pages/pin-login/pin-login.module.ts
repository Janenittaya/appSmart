import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinLoginPage } from './pin-login';

@NgModule({
  declarations: [
    PinLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PinLoginPage),
  ],
})
export class PinLoginPageModule {}
