import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
/**
 * Generated class for the PlanVegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plan-veg',
  templateUrl: 'plan-veg.html',
})
export class PlanVegPage {
  textplan: string;
  textdetail: string;
  cropID: string;

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
    public navParams: NavParams,
    public http: HttpClient,
    public alerCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public Storage: Storage) {

    this.Storage.ready().then(() => {
      this.Storage.get('cropID').then((val) => {
        this.cropID = val;
        console.log(val);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanvegPage');
    this.m = this.navParams.data;
    console.log(this.m);
    const dataStorage = localStorage.getItem('corpInfo');
    const dataStorageUse = JSON.parse(dataStorage);
    console.log(dataStorageUse);
    this.corpInfo = localStorage.getItem('corpInfo');
    this.corpInfo = JSON.parse(this.corpInfo);
    console.log(this.corpInfo)
  }

  savePlan(_textplan, _textdetail, _myDate) {
    let data = {
      textplan: _textplan,
      textdetail: _textdetail,
      cropID: this.corpInfo.id,
      date_active: _myDate
    };
    this.http.post('https://traceability.digitalsmartfarm.com/api/saveplanveg.php',data)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.textplan = null;
    this.textdetail = null;
    this.showConfirm()
  }

  ionViewDidEnter() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล'
    });

    loading.present();
    let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/planveg.php?cropID='+this.corpInfo.id)
    console.log(this.corpInfo.id);
    ob.subscribe(
      (data: any) => {
        loading.dismiss();
        this.news = data;
        console.log(data);
      }
    );
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
    this.http.get('https://traceability.digitalsmartfarm.com/api/saveplanrice.php').subscribe((resp) => {
      if (resp) {
        // this.actionSaveDataSuccess();
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
