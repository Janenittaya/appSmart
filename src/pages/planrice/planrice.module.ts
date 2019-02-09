import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanricePage } from './planrice';

@NgModule({
  declarations: [
    PlanricePage,
  ],
  imports: [
    IonicPageModule.forChild(PlanricePage),
  ],
})
export class PlanricePageModule {}
