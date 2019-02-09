import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanbarcodePage } from './scanbarcode';

@NgModule({
  declarations: [
    ScanbarcodePage,
  ],
  imports: [
    IonicPageModule.forChild(ScanbarcodePage),
  ],
})
export class ScanbarcodePageModule {}
