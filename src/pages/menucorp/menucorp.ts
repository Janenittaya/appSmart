import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({
  selector: 'page-menucorp',
  templateUrl: 'menucorp.html',
})
export class MenucorpPage {

  corpInfo : any;

   menu = [
    {
      "id": "",
      "name": "",
    }
  ];

  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public Storage: Storage,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
  }

viewMenu(m) {
    if(m.id == 1) {
      this.navCtrl.push('ActivityRicePage', m);
      console.log(m);
    }else if(m.id == 2){
       this.navCtrl.push('ActivityRiceCompostPage', m);
       console.log(m);
    }
    else if(m.id == 3){
       this.navCtrl.push('ActivityRiceFoodPage', m);
       console.log(m);
    }
    else{
       this.navCtrl.push('ActivityharvesPage', m);
       console.log(m);
    }
  }

  ionViewDidEnter() {
  let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loadprocroprice.php')
  ob.subscribe(
      (data: any) => {
       console.log(data); 
          this.menu = data; 
   }
 );
}


  viewPlan(corpInfo){
    this.navCtrl.push('PlanricePage', corpInfo);
  }
  
 
  ionViewDidLoad(corpInfo) { 
    console.log('ionViewDidLoad MenucorpPage',corpInfo);
    this.corpInfo = this.navParams.data;
    console.log(this.corpInfo);
    localStorage.setItem('corpInfo', JSON.stringify(this.corpInfo))
    console.log(this.corpInfo);
  }

}
