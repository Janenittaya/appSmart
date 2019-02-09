import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({ 
  selector: 'page-menucorp-veg',
  templateUrl: 'menucorp-veg.html',
})
export class MenucorpVegPage {
  corpInfo : any;
  menuV = [
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
  viewMenu(v) {
    if(v.id == 1) {
      this.navCtrl.push('ActivityVegPage', v);
      console.log(v);
    }else if(v.id == 2){
       this.navCtrl.push('ActivityVegCompostPage', v);
       console.log(v);
    }
    else if(v.id == 3){
       this.navCtrl.push('ActivityVegFoodPage', v);
       console.log(v);
    }
    else{
       this.navCtrl.push('ActivityharvesVegPage', v);
       console.log(v);
    }
    // this.navCtrl.push('MenucorpPage', corpInfo);
    // console.log(corpInfo)
  }
 ionViewDidEnter() {
  let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loadprocropveg.php')
   ob.subscribe(
      (data: any) => {
       console.log(data); 
          this.menuV = data;  
   }
 );
}
   
   
     viewPlan(corpInfo){
       this.navCtrl.push('PlanvegPage', corpInfo);
     }
     
  ionViewDidLoad(corpInfo) {
    console.log('ionViewDidLoad MenucorpVegPage', corpInfo);
    this.corpInfo = this.navParams.data;
    console.log(this.corpInfo);
    localStorage.setItem('corpInfo', JSON.stringify(this.corpInfo))
    console.log(this.corpInfo);
  }

} 
