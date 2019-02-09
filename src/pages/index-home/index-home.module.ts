import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexHomePage } from './index-home';

@NgModule({
  declarations: [
    IndexHomePage,
  ],
  imports: [
    IonicPageModule.forChild(IndexHomePage),
  ],
})
export class IndexHomePageModule {}
