import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-activity-rice',
  templateUrl: 'activity-rice.html',
})

export class ActivityRicePage {
  [x: string]: any;

  corpInfo: any;
  m: any;
  textdetail1: any;
  textdetail2: any;
  news = [
    {
      "lot_no": "",
      "lot_date_act": "",
      "lot_detail": "",
      "lot_note": "",
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
    console.log('ionViewDidLoad ActivityRicePage');
    this.m = this.navParams.data;
    console.log(this.m);
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
    let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/activity_rice.php?crop_id=' + this.corpInfo.id)
    console.log(this.corpInfo.id);
    ob.subscribe(
      (data: any) => {
        loading.dismiss();
        this.news = data;
        console.log(data);
      }
    );

  }
  saveActivityRice(_textdetail1, _textdetail2) {
    let data = {
      textdetail1: _textdetail1,
      textdetail2: _textdetail2,
      processID: 1, // this.m.id,
      cropID: this.corpInfo.id,
      farmID: this.corpInfo.farm_id,
      plotID: this.corpInfo.plot_id
    };


    this.http.post('https://traceability.digitalsmartfarm.com/api/saveactrice.php', data)
      // console.log(data);
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.textdetail1 = null;
    this.textdetail2 = null;
    this.showConfirm()
    // this.actionSaveDataSuccess();
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
    this.http.get('https://traceability.digitalsmartfarm.com/api/saveactrice.php').subscribe((resp) => {
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







