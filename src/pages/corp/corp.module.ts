import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorpPage } from './corp';

@NgModule({
  declarations: [
    CorpPage,
  ],
  imports: [
    IonicPageModule.forChild(CorpPage),
  ],
})
export class CorpPageModule {}
