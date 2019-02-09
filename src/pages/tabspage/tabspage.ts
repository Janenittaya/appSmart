import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FarmPage } from '../farm/farm';
/**
 * Generated class for the TabspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabspage',
  templateUrl: 'tabspage.html',
})
export class TabspagePage {

  tab1:any;
  tab2:any;
  constructor(public NavParams: NavParams, public navctrl: NavController) {
    this.tab1 = HomePage;
    this.tab2 = FarmPage;
  }

  ionviewDidLoad(){
    console.log('ionViewDidLoad TabsPage');
  }
}

