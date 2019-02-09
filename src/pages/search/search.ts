import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  keyword: string;

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public storage: Storage,
    public alerCtrl: AlertController) {
  }
  search(_keyword) {

    // let data = {
    //   keyword: _keyword
    // };

    let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/search.php?search=' + _keyword)
    ob.subscribe(
      (serch: any) => {
        if (ob = serch[0].code_rice) {
          this.navCtrl.push('TracebilityPage',serch);
          this.storage.set('codeRice',serch[0].code_rice).then((val)=>{
            console.log(val);
            })
          console.log(serch);
        } else  {
          this.navCtrl.push('TracebilityVegPage', serch,);
          this.storage.set('codeVeg',serch[0].code_veg).then((val)=>{
            console.log(val);
            })
          console.log(serch); 

        }
      }
    );
  }

  // search(newsInfo){
  //   this.navCtrl.push('TracebilityPage', newsInfo);
  // }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'ไม่พบสิ่งที่ค้นหา!',
      message: 'โปรดลองอีกครั้งในภายหลัง!',
      buttons: ['Ok']
    });
    alert.present()
  }
}
