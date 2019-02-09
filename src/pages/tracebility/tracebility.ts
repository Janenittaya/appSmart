import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TracebilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracebility',
  templateUrl: 'tracebility.html',
})
export class TracebilityPage {

  serch: any;
  codeRice : any;


  news = [
    {
      "lot_no": "",
      "name": "",
      "lot_date_act": "",
      "lot_detail": "",
      "lot_note": "",
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public Storage: Storage) {
      this.Storage.ready().then(() => {

        this.Storage.get('codeRice').then((val) => {
          this.codeRice = val;
          console.log(val);
        });
      });
    }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoac NewsDetailPage');
    this.serch = this.navParams.data;
    console.log('serch ', this.serch);
  }


  ionViewDidEnter() {

    let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loaddatabenja.php?codeID=' + this.codeRice)
    console.log(this.codeRice);
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

}
