import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TracebilityVegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracebility-veg',
  templateUrl: 'tracebility-veg.html',
})
export class TracebilityVegPage {
  serch: any;
  codeVeg : any;
  news = [
    { 
      "lot_no": "",
      "name": "",
      "lot_date_act": "",
      "lot_detail": "",
      "lot_note": "",
    }
  ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public Storage: Storage) {
      this.Storage.ready().then(() => {

        this.Storage.get('codeVeg').then((val) => {
          this.codeVeg = val;
          console.log(val);
        });
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracebilityVegPage');
    this.serch = this.navParams.data;
    console.log('serch ', this.serch);
  }

  ionViewDidEnter() {

    let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loaddata_veg.php?codeID=' + this.codeVeg)
    console.log(this.codeVeg);
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
