import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-scanbarcode', 
  templateUrl: 'scanbarcode.html',
})
export class ScanbarcodePage {

  qrcode_result: any;
  qrcode_format: any;
  readStatus = false;

  constructor(public navCtrl: NavController,  
    private barcodeScanner: BarcodeScanner, 
    public navParams:NavParams,
    public http: HttpClient,
    public Storage: Storage) {}

  onScan() {
    window.open("https://traceability.digitalsmartfarm.com")
    //  this.barcodeScanner
    //    .scan()
      // .then(barcodeData => {
      //   this.qrcode_result = barcodeData.text;
      //   this.qrcode_format = barcodeData.format;
    //     var xQcode = JSON.stringify(barcodeData);
    //     var nindex = xQcode.indexOf("=");
    //     var endofxQcode = xQcode.length;
    //     var sQRcode = xQcode.substring(nindex+1,endofxQcode);
   
    //     let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/search.php?search=' + sQRcode)
    //     ob.subscribe(
    //       (serch: any) => {
    //         if (ob = serch[0].code_rice) {
    //           this.navCtrl.push('TracebilityPage',serch);
    //           this.Storage.set('codeRice',serch[0].code_rice).then((val)=>{
    //             console.log(val);
    //             })
    //           console.log(serch);
    //         } else  {
    //           this.navCtrl.push('TracebilityVegPage', serch,);
    //           this.Storage.set('codeVeg',serch[0].code_veg).then((val)=>{
    //             console.log(val);
    //             })
    //           console.log(serch);
    
    //         }
    //       }
    //     );
      // });
    }

}
