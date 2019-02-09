import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams ,App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { LoginPage } from './../login/login';
import { IndexHomePage } from '../index-home/index-home';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-farm',
  templateUrl: 'farm.html',
})
export class FarmPage {
  
  memID: any;
  memName: string;
  memPic : string;
  
  news = [
    {
      "name": "",
      "picture": "",
      "address": "",
      "amphoe": "",
      "district": "", 
      "province": "",
      "zipcode": "",
      "description": "",
    }
  ];
 

  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public Storage: Storage,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public app : App) {

    this.Storage.ready().then(() => {
      this.Storage.get('memID').then((val) => {
        this.memID = val;
        console.log(val);
      });
      this.Storage.get('memName').then((val) => {
        this.memName = val;
      });
      this.Storage.get('memPic').then((val) => {
        this.memPic = val;
      });
    });
  }

  // ionViewWillLeave(){
  //   this.Storage.remove('memID');
  //   this.Storage.remove('memName');
  //   this.Storage.remove('memPic');
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmPage');
  }

  ionViewDidEnter() {
    // let loading = this.loadingCtrl.create({
    //   content: 'กำลังโหลดข้อมูล'
    // });
    // loading.present();
    let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loaddata.php?memID=' + this.memID)
    console.log(this.memID);
    ob.subscribe(
      (data:any) => {
        if (data.arr == null) {
          // loading.dismiss();
          this.news = data;
           console.log(data);
        } else {
          alert('ไม่พบข้อมูลฟาร์ม!')
          console.log(data);  
        }
      }
    );
  }

  viewDetail(newsInfo) {
    this.navCtrl.push('CorpPage');
  }

  logout() {
    let confirm = this.alerCtrl.create({
      title: 'คุณต้องการออกจากระบบ?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            this.navCtrl.setRoot(IndexHomePage);
            let nav = this.app.getRootNav();
            nav.setRoot(IndexHomePage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
  

