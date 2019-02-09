import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, Button } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { FarmPage } from '../farm/farm';
import { TabspagePage } from '../tabspage/tabspage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public storage: Storage,
    public alerCtrl: AlertController
  ) {


  }

  signIn(_username, _password) {
    let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/login.php?email=' + _username + '&phone=' + _password)
    ob.subscribe(
      (data: any) => {
        if (ob = data[0].id) {
          this.storage.set('memID', data[0].id).then((val) => {
            console.log(val);
          })
          this.storage.set('memName', data[0].name).then((val) => {
            console.log(val);
          })
          this.storage.set('farmID', data[0].fd_id).then((val) => {
            console.log(val);
          })
          this.storage.set('memPic', data[0].image).then((val) => {
            console.log(val);
          })
          this.navCtrl.setRoot(TabspagePage)
        } else {
          data.arr == null
          alert("username หรือ password ไม่ถูกต้องโปรดตรวจสอบอีกครั้ง!");
          console.log(data);

        }
      }
    );

  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'รหัสผ่านไม่ถูกต้อง!',
      message: 'โปรดลองอีกครั้งในภายหลัง!',
      buttons: ['Ok']
    });
    alert.present()
  }
}
