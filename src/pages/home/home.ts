import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
// import { PinLoginPage } from '../pin-login/pin-login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
       
  
  resultText = "";
  resultFormat = "";

  qrcode_result: any;
  qrcode_format: any;
  readStatus = false;

  constructor(
    public navCtrl: NavController, 
    private barcodeScanner: BarcodeScanner,
    public navParams:NavParams,
    public http: HttpClient,
    public Storage: Storage) {
    
  }
  // ionViewDidLoad(){
  //   this.navCtrl.push(PinLoginPage);

  onScan() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.qrcode_result = barcodeData.text;
        this.qrcode_format = barcodeData.format;
        var xQcode = JSON.stringify(barcodeData.text);
        var nindex = xQcode.indexOf("=");
        var lQcode = xQcode.length;
        var sQRcode = xQcode.substring(nindex+1,lQcode-1);
        // alert(sQRcode);
        let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/search.php?search=' + sQRcode)
        ob.subscribe(
          (serch: any) => {
            if (ob = serch[0].code_rice) {
              this.navCtrl.push('TracebilityPage',serch);
              this.Storage.set('codeRice',serch[0].code_rice).then((val)=>{
                console.log(val);
                })
              console.log(serch);
            } else  {
              this.navCtrl.push('TracebilityVegPage', serch,);
              this.Storage.set('codeVeg',serch[0].code_veg).then((val)=>{
                console.log(val);
                })
              console.log(serch);
    
            }
          }
        );
      });
    }

  viewDetail(newsInfo){
    this.navCtrl.push('LoginPage', newsInfo);
  }
  viewSearch(newsInfo){
    this.navCtrl.push('SearchPage', newsInfo);
  }
  connect(){
    this.navCtrl.push('ConnectPage');
  }
  manual(){
    this.navCtrl.push('ManualPage');
  }
  }
  // viewScanQRcode(newsInfo){
  //   this.navCtrl.push('ScanbarcodePage', newsInfo);
  // }

