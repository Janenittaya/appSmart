import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { MenucorpPage } from './../menucorp/menucorp';
import { MenucorpVegPage } from './../menucorp-veg/menucorp-veg';
@IonicPage()
@Component({
  selector: 'page-corp',
  templateUrl: 'corp.html',
})
export class CorpPage {
  farmID: any;


  corp = [
    {
      "id": "",
      "image": "",
      "name": "",
      "start_date": "",
    }
  ];


  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public Storage: Storage,
    public nav: Nav,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {

    this.Storage.ready().then(() => {
      this.Storage.get('farmID').then((val) => {
        this.farmID = val;
        console.log(val);
      });

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
    // this.newsInfo = this.navParams.data;
    // console.log(this.newsInfo);
  }


  viewCorp(corpInfo) {
    if(corpInfo.type_crop == 2) {
      this.navCtrl.push('MenucorpPage', corpInfo);
    }else{
       this.navCtrl.push('MenucorpVegPage', corpInfo);
    }
    // this.navCtrl.push('MenucorpPage', corpInfo);
    // console.log(corpInfo)
  }
  

  ionViewDidEnter() {
       let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล'
    });

    loading.present();
    let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loaddatacorp.php?farmID=' + this.farmID)
    console.log(this.farmID);
    ob.subscribe(
      (data: any) => {
          loading.dismiss();
          this.corp = data;
          console.log(data); 
      }
    );
  }
}
