import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the PlanricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planveg',
  templateUrl: 'planveg.html',
})
export class PlanvegPage {
  [x: string]: any;
  cropID: any;

  news = [
    {
      "name": "",
      "description": "",
      "status": "",
      "newPlan": "",
    }
  ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alerCtrl: AlertController,
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

    let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/planveg.php?cropID=' + this.corpInfo.id)
    console.log(this.cropID)
    ob.subscribe(
      (data: any) => {
        if (data.arr == null) {
          console.log(ob);
          this.news = data;
        } else {
          // ob = data[0].arr
          console.log(data);

        }
      }
    );
  }
  OnDelete(_textplan, _textdetail, _myDate) {
    let data = {
      textplan: _textplan,
      textdetail: _textdetail,
      crop_id: this.corpInfo.id,
      date_active: _myDate
    };
    this.http.post('', data)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
    this.textplan = null;
    this.textdetail = null;
    this.actionSaveDataSuccess()

  }
  newPlan() {
    this.navCtrl.push('PlanVegPage');
  }

  actionSaveDataSuccess() {
    const alert = this.alerCtrl.create({
      title: 'ลบข้อมูลเเผน',
      subTitle: 'ลบข้อมูลเเผนสำเร็จ',
      buttons: ['ตกลง']
    });
    alert.present()
  }
}


