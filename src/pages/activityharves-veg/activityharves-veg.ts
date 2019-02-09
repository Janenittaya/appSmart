import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ActivityharvesVegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activityharves-veg',
  templateUrl: 'activityharves-veg.html',
})
export class ActivityharvesVegPage {
  public event = { 
    month: '2018-01-01',
  }

  corpInfo : any;
  v : any;
  textdetail1: any;
  textdetail2: any;
  textsequence: any;
  textamount: any;
  news = [
    {
      "lot_no": "",
      "lot_date_act": "", 
      "lot_detail": "",
      "lot_note": "",
      "code": "",
    }
  ];
  constructor(public navCtrl: NavController,
    public http: HttpClient, 
    public Storage: Storage,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityharvesVegPage');
    this.v = this.navParams.data;
    console.log(this.v);
    const dataStorage = localStorage.getItem('corpInfo');
    const dataStorageUse = JSON.parse(dataStorage);
    console.log(dataStorageUse);
    this.corpInfo = localStorage.getItem('corpInfo');
    this.corpInfo = JSON.parse(this.corpInfo);
    console.log(this.corpInfo)
  
  }
  ionViewDidEnter() {
    let loading = this.loadingCtrl.create({
   content: 'กำลังโหลดข้อมูล'
 });

 loading.present();
 let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/activity_harves_veg.php?crop_id='+this.corpInfo.id)
 ob.subscribe(
   (data: any) => {
       loading.dismiss();
       this.news = data;
       console.log(data);
   }
 );
}
saveActivityRice(_event,_textdetail1, _textdetail2,_textsequence,_textamount){
  let data = {
    event : _event,
    textdetail1 : _textdetail1,
    textdetail2 : _textdetail2,
    textsequence : _textsequence,
    textamount : _textamount,
    processID : 5, //this.m.id,
    cropID : this.corpInfo.id,
    farmID: this.corpInfo.farm_id,
    plotID : this.corpInfo.plot_id
  };
  this.http.post('https://traceability.digitalsmartfarm.com/api/saveaddharvesveg.php', data)
    // console.log(data);
    .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error); 
      });
      this.event=null;
      this.textdetail1=null;
      this.textdetail2=null;
      this.textsequence=null;
      this.textamount=null;
      this.showConfirm()
  }

  showConfirm() {
    const confirm = this.alerCtrl.create({
      title: 'ยืนยันการบันทึกข้อมูล',
      message: 'ไม่สามารถเเก้ไขข้อมูลย้อนหลังได้กรุณาตรวจสอบข้อมูล!',
      buttons: [
        {
          text: 'ตกลง',
          handler: () => {
            console.log('Agree clicked');
            this.actionSaveDataSuccess();
          }
 
        },
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  actionConfirm() {
    this.http.get('https://traceability.digitalsmartfarm.com/api/saveaddharvesveg.php').subscribe((resp) => {
      if (resp) {

      }

    });
  }
  actionSaveDataSuccess() {
    const alert = this.alerCtrl.create({
      title: 'การบันทึกข้อมูล',
      subTitle: 'บันทึกข้อมูลสำเร็จ',
      buttons: ['ตกลง']
    });
    alert.present()
  }
}

