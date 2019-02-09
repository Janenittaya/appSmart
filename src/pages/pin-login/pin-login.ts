import { Component } from '@angular/core';
import { IonicPage, NavParams, Platform, AlertController, ToastController } from 'ionic-angular';
import { LockScreenComponent } from 'ionic-simple-lockscreen';
import { NavController } from 'ionic-angular';import { Storage } from '@ionic/storage'


@IonicPage()
@Component({
  selector: 'page-pin-login',
  templateUrl: 'pin-login.html',
})
export class PinLoginPage {

  constructor(public navCtrl: NavController, 
                     private plt: Platform, 
                     private alertCtrl: AlertController, 
                     private storage: Storage, 
                     private toastCtrl: ToastController) {
    this.plt.ready().then(() => {
      this.storage.get('passcode').then(code => {
        if (!code) {
          this.setupCode();
        }
      })
    });
  }
 
  setupCode() {
    let inputAlert = this.alertCtrl.create({
      title: 'รักษาความปลอดภัยของเเอปคุณ',
      message: 'กรุณาตั้งค่ารหัสล็อคสำหรับเเอพนี้!',
      inputs: [
        {
          name: 'code',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'ตั้งค่ารหัส',
          handler: data => {
            if (data.code.length > 3 && data.code.length < 5) {
              return false;
            } else {
              this.storage.set('passcode', data.code);
              return true;
            }
          }
        }
      ]
    });
    inputAlert.present();
  }
 
  openLockscreen() {
    this.storage.get('passcode').then(code => {
      this.navCtrl.push(LockScreenComponent,{
        code: code,
        ACDelbuttons: false,
        passcodeLabel: 'ใส่รหัสผ่าน',
        onCorrect: () => {
          let toast = this.toastCtrl.create({
            message: 'รหัสผ่านถูกต้อง',
            duration: 2000
          });
          toast.present();
        },
        onWrong: (attempts) => {
          let toast = this.toastCtrl.create({
            message: `${attempts} รหัสผ่านผิดกรุณาใส่รหัสผ่านใหม่อีกครั้ง!`,
            duration: 2000
          });
          toast.present();
        }
      });
    });
  }
 
}