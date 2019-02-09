import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage  {
  slides = [
    {
      title: "Scan QR-Code",
      description: "Tracebility Digital Farm<br>เป็นบริการให้ข้อมูลตรวจสอบย้อนกลับข้อมูลผลิตภัณฑ์ที่เกี่ยวข้องของระบบเกษตรอัจฉริยะ(Smart Agriculture)เพื่อเป็นเอกสารประกันคุณภาพเเละสร้างความมั่นใจให้กับผู้บริโภค ด้วยระบบเเสกน QR-Code",
      image: "https://image.flaticon.com/icons/svg/975/975943.svg",
    },
    {
      title: "Search by Code",
      description: "ผู้บริโภคสามารถตรวจสอบย้อนกลับได้จากรหัสของผลิตภัณฑ์ที่มีอยู่ข้างถุงเเละรหัสที่มาจากเว็บหลักซึ่งจะเเสดงข้อมูลกระบวนการผลิตของผลิตภัณฑ์นั้น",
      image: "https://image.flaticon.com/icons/svg/149/149009.svg" 
    },
  ];
  navCtrl: any;

  primary() {
  this.navCtrl.push('IndexHomePage');
  }
}


