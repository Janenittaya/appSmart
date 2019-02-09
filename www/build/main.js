webpackJsonp([29],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_home_index_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FarmPage = /** @class */ (function () {
    function FarmPage(navCtrl, http, Storage, loadingCtrl, navParams, alerCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.Storage = Storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.app = app;
        this.news = [
            {
                "name": "",
                "picture": "",
                "address": "",
                "amphoe": "",
                "district": "",
                "province": "",
                "zipcode": "",
                "description": "",
            }
        ];
        this.Storage.ready().then(function () {
            _this.Storage.get('memID').then(function (val) {
                _this.memID = val;
                console.log(val);
            });
            _this.Storage.get('memName').then(function (val) {
                _this.memName = val;
            });
            _this.Storage.get('memPic').then(function (val) {
                _this.memPic = val;
            });
        });
    }
    // ionViewWillLeave(){
    //   this.Storage.remove('memID');
    //   this.Storage.remove('memName');
    //   this.Storage.remove('memPic');
    // }
    FarmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FarmPage');
    };
    FarmPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // let loading = this.loadingCtrl.create({
        //   content: 'กำลังโหลดข้อมูล'
        // });
        // loading.present();
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loaddata.php?memID=' + this.memID);
        console.log(this.memID);
        ob.subscribe(function (data) {
            if (data.arr == null) {
                // loading.dismiss();
                _this.news = data;
                console.log(data);
            }
            else {
                alert('ไม่พบข้อมูลฟาร์ม!');
                console.log(data);
            }
        });
    };
    FarmPage.prototype.viewDetail = function (newsInfo) {
        this.navCtrl.push('CorpPage');
    };
    FarmPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'คุณต้องการออกจากระบบ?',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'ตกลง',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__index_home_index_home__["a" /* IndexHomePage */]);
                        var nav = _this.app.getRootNav();
                        nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__index_home_index_home__["a" /* IndexHomePage */]);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    FarmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-farm',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\farm\farm.html"*/'<ion-header>\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title class="t-title">ข้อมูลฟาร์ม</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://farm.digitalsmartfarm.com/{{ memPic }}">\n      </ion-avatar>\n      <h2>ข้อมูลฟาร์มคุณ{{ memName}}</h2>\n    </ion-item>\n  </ion-card>\n\n  <button style="color: #909090;background-color: #ffffff" ion-item detail-none block menuClose (click)="logout()">\n    <img src=\'assets/imgs/logout.png\' alt="" width="25px" height="25px">\n    <span>\n      <span style="margin-left: 15px">ออกจากระบบ</span>\n    </span>\n  </button>\n  <ion-list>\n    <ion-item *ngFor="let newsInfo of news" (click)="viewDetail(newsInfo)" no-lines>\n      <ion-card>\n        <img src="https://farm.digitalsmartfarm.com/{{ newsInfo.picture }}">\n        <ion-card-content>\n          <ion-card-title>\n            {{ newsInfo.name }}\n            <p>{{ newsInfo.address }} {{ newsInfo.amphoe }}<br >{{ newsInfo.district }}\n              {{ newsInfo.province }} {{ newsInfo.zipcode }}\n          </ion-card-title>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\farm\farm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], FarmPage);
    return FarmPage;
}());

//# sourceMappingURL=farm.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activity-rice-compost/activity-rice-compost.module": [
		287,
		25
	],
	"../pages/activity-rice-food/activity-rice-food.module": [
		288,
		24
	],
	"../pages/activity-rice/activity-rice.module": [
		289,
		23
	],
	"../pages/activity-veg-compost/activity-veg-compost.module": [
		290,
		22
	],
	"../pages/activity-veg-food/activity-veg-food.module": [
		291,
		21
	],
	"../pages/activity-veg/activity-veg.module": [
		292,
		20
	],
	"../pages/activityharves-veg/activityharves-veg.module": [
		293,
		19
	],
	"../pages/activityharves/activityharves.module": [
		294,
		18
	],
	"../pages/connect/connect.module": [
		295,
		17
	],
	"../pages/corp/corp.module": [
		296,
		16
	],
	"../pages/farm/farm.module": [
		297,
		28
	],
	"../pages/harvet-rice/harvet-rice.module": [
		298,
		15
	],
	"../pages/index-home/index-home.module": [
		299,
		27
	],
	"../pages/login/login.module": [
		300,
		14
	],
	"../pages/manual/manual.module": [
		301,
		13
	],
	"../pages/menucorp-veg/menucorp-veg.module": [
		302,
		12
	],
	"../pages/menucorp/menucorp.module": [
		303,
		11
	],
	"../pages/pin-login/pin-login.module": [
		161
	],
	"../pages/plan-veg/plan-veg.module": [
		304,
		10
	],
	"../pages/plan/plan.module": [
		305,
		9
	],
	"../pages/planrice/planrice.module": [
		306,
		8
	],
	"../pages/planveg/planveg.module": [
		307,
		7
	],
	"../pages/save-plan/save-plan.module": [
		308,
		6
	],
	"../pages/save-planone/save-planone.module": [
		309,
		5
	],
	"../pages/scanbarcode/scanbarcode.module": [
		310,
		4
	],
	"../pages/search/search.module": [
		311,
		3
	],
	"../pages/slide/slide.module": [
		312,
		2
	],
	"../pages/tabspage/tabspage.module": [
		313,
		26
	],
	"../pages/tracebility-veg/tracebility-veg.module": [
		314,
		1
	],
	"../pages/tracebility/tracebility.module": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { PinLoginPage } from '../pin-login/pin-login';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, barcodeScanner, navParams, http, Storage) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.http = http;
        this.Storage = Storage;
        this.resultText = "";
        this.resultFormat = "";
        this.readStatus = false;
    }
    // ionViewDidLoad(){
    //   this.navCtrl.push(PinLoginPage);
    HomePage.prototype.onScan = function () {
        var _this = this;
        this.barcodeScanner
            .scan()
            .then(function (barcodeData) {
            _this.qrcode_result = barcodeData.text;
            _this.qrcode_format = barcodeData.format;
            var xQcode = JSON.stringify(barcodeData.text);
            var nindex = xQcode.indexOf("=");
            var lQcode = xQcode.length;
            var sQRcode = xQcode.substring(nindex + 1, lQcode - 1);
            // alert(sQRcode);
            var ob = _this.http.get('https://traceability.digitalsmartfarm.com/api/search.php?search=' + sQRcode);
            ob.subscribe(function (serch) {
                if (ob = serch[0].code_rice) {
                    _this.navCtrl.push('TracebilityPage', serch);
                    _this.Storage.set('codeRice', serch[0].code_rice).then(function (val) {
                        console.log(val);
                    });
                    console.log(serch);
                }
                else {
                    _this.navCtrl.push('TracebilityVegPage', serch);
                    _this.Storage.set('codeVeg', serch[0].code_veg).then(function (val) {
                        console.log(val);
                    });
                    console.log(serch);
                }
            });
        });
    };
    HomePage.prototype.viewDetail = function (newsInfo) {
        this.navCtrl.push('LoginPage', newsInfo);
    };
    HomePage.prototype.viewSearch = function (newsInfo) {
        this.navCtrl.push('SearchPage', newsInfo);
    };
    HomePage.prototype.connect = function () {
        this.navCtrl.push('ConnectPage');
    };
    HomePage.prototype.manual = function () {
        this.navCtrl.push('ManualPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\home\home.html"*/'\n  <ion-header>\n      <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n        <ion-title class="t-title">ระบบตรวจสอบย้อนกลับ</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <!-- <ion-content padding>\n  <div text-center *ngIf="!ShowPin">\n     <button ion-button clear large (click)="showPin()">Enter Pin</button>\n     <br>\n     <label *ngIf="Pin">Pin entered is {{Pin}}</label>\n  </div>\n \n<custom-pin *ngIf="ShowPin" pagetitle="Enter The Pin" (change)="eventCapture($event)"></custom-pin>\n</ion-content> -->\n\n    <ion-content padding>\n        <p align=\'center\'><img src="assets/imgs/icon1.png"></p>   \n        <div class="t-title">TRACEBILITY DIGITAL FARM</div><p>\n\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-card (click)="onScan()">\n                <img src="assets/imgs/qrcode.svg" width="100" height="100">\n              </ion-card>\n              <div align=\'center\'>SCAN QR CODE</div>\n        </ion-col>\n        <ion-col>\n            <ion-card  (click)="viewSearch(newsInfo)">\n                <img src="assets/imgs/search.svg" width="100" height="100">\n              </ion-card>\n              <div align=\'center\'>SEARCH BY CODE</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n              <ion-card (click)="connect()">\n                  <img src="assets/imgs/contact.svg"  width="100" height="100">\n                </ion-card>\n                <div align=\'center\'>CONTACT</div>\n          </ion-col>\n          <ion-col>\n            <ion-card (click)="manual()">\n                <img src="https://image.flaticon.com/icons/svg/1028/1028907.svg"  width="100" height="100">\n              </ion-card>\n              <div align=\'center\'>MANULA</div>\n        </ion-col>\n        </ion-row>\n    </ion-grid></p>\n</ion-content>\n\n <!-- <ion-footer class="icons-basic-page">\n  <ion-toolbar  (click)="viewDetail(newsInfo)" no-lines>\n    <ion-title>\n      <ion-col><ion-icon name="person"></ion-icon></ion-col>FARMER LOGIN\n    </ion-title>\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

// viewScanQRcode(newsInfo){
//   this.navCtrl.push('ScanbarcodePage', newsInfo);
// }
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinLoginPageModule", function() { return PinLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pin_login__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PinLoginPageModule = /** @class */ (function () {
    function PinLoginPageModule() {
    }
    PinLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pin_login__["a" /* PinLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pin_login__["a" /* PinLoginPage */]),
            ],
        })
    ], PinLoginPageModule);
    return PinLoginPageModule;
}());

//# sourceMappingURL=pin-login.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabspagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__farm_farm__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TabspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabspagePage = /** @class */ (function () {
    function TabspagePage(NavParams, navctrl) {
        this.NavParams = NavParams;
        this.navctrl = navctrl;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__farm_farm__["a" /* FarmPage */];
    }
    TabspagePage.prototype.ionviewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabspagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabspage',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\tabspage\tabspage.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1" tabTitle="TRACEBILITY" tabIcon="md-barcode"></ion-tab>\n    <ion-tab [root]="tab2" tabTitle="MY FARM" tabIcon="ios-contact"></ion-tab>\n  </ion-tabs>\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\tabspage\tabspage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], TabspagePage);
    return TabspagePage;
}());

//# sourceMappingURL=tabspage.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabspage_tabspage__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_farm_farm__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_index_home_index_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_simple_lockscreen__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pin_login_pin_login_module__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabspage_tabspage__["a" /* TabspagePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_index_home_index_home__["a" /* IndexHomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_farm_farm__["a" /* FarmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activity-rice-compost/activity-rice-compost.module#ActivityRiceCompostPageModule', name: 'ActivityRiceCompostPage', segment: 'activity-rice-compost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-rice-food/activity-rice-food.module#ActivityRiceFoodPageModule', name: 'ActivityRiceFoodPage', segment: 'activity-rice-food', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-rice/activity-rice.module#ActivityRicePageModule', name: 'ActivityRicePage', segment: 'activity-rice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-veg-compost/activity-veg-compost.module#ActivityVegCompostPageModule', name: 'ActivityVegCompostPage', segment: 'activity-veg-compost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-veg-food/activity-veg-food.module#ActivityVegFoodPageModule', name: 'ActivityVegFoodPage', segment: 'activity-veg-food', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-veg/activity-veg.module#ActivityVegPageModule', name: 'ActivityVegPage', segment: 'activity-veg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activityharves-veg/activityharves-veg.module#ActivityharvesVegPageModule', name: 'ActivityharvesVegPage', segment: 'activityharves-veg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activityharves/activityharves.module#ActivityharvesPageModule', name: 'ActivityharvesPage', segment: 'activityharves', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/connect/connect.module#ConnectPageModule', name: 'ConnectPage', segment: 'connect', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/corp/corp.module#CorpPageModule', name: 'CorpPage', segment: 'corp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/farm/farm.module#FarmPageModule', name: 'FarmPage', segment: 'farm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/harvet-rice/harvet-rice.module#HarvetRicePageModule', name: 'HarvetRicePage', segment: 'harvet-rice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/index-home/index-home.module#IndexHomePageModule', name: 'IndexHomePage', segment: 'index-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manual/manual.module#ManualPageModule', name: 'ManualPage', segment: 'manual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menucorp-veg/menucorp-veg.module#MenucorpVegPageModule', name: 'MenucorpVegPage', segment: 'menucorp-veg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menucorp/menucorp.module#MenucorpPageModule', name: 'MenucorpPage', segment: 'menucorp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pin-login/pin-login.module#PinLoginPageModule', name: 'PinLoginPage', segment: 'pin-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan-veg/plan-veg.module#PlanVegPageModule', name: 'PlanVegPage', segment: 'plan-veg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan/plan.module#PlanPageModule', name: 'PlanPage', segment: 'plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/planrice/planrice.module#PlanricePageModule', name: 'PlanricePage', segment: 'planrice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/planveg/planveg.module#PlanvegPageModule', name: 'PlanvegPage', segment: 'planveg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/save-plan/save-plan.module#SavePlanPageModule', name: 'SavePlanPage', segment: 'save-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/save-planone/save-planone.module#SavePlanonePageModule', name: 'SavePlanonePage', segment: 'save-planone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanbarcode/scanbarcode.module#ScanbarcodePageModule', name: 'ScanbarcodePage', segment: 'scanbarcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide.module#SlidePageModule', name: 'SlidePage', segment: 'slide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabspage/tabspage.module#TabspagePageModule', name: 'TabspagePage', segment: 'tabspage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracebility-veg/tracebility-veg.module#TracebilityVegPageModule', name: 'TracebilityVegPage', segment: 'tracebility-veg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracebility/tracebility.module#TracebilityPageModule', name: 'TracebilityPage', segment: 'tracebility', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_ionic_simple_lockscreen__["b" /* LockScreenModule */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__pages_pin_login_pin_login_module__["PinLoginPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // SlidePage,
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabspage_tabspage__["a" /* TabspagePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_index_home_index_home__["a" /* IndexHomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_farm_farm__["a" /* FarmPage */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_simple_lockscreen__["a" /* LockScreenComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_simple_lockscreen__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PinLoginPage = /** @class */ (function () {
    function PinLoginPage(navCtrl, plt, alertCtrl, storage, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.plt.ready().then(function () {
            _this.storage.get('passcode').then(function (code) {
                if (!code) {
                    _this.setupCode();
                }
            });
        });
    }
    PinLoginPage.prototype.setupCode = function () {
        var _this = this;
        var inputAlert = this.alertCtrl.create({
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
                    handler: function (data) {
                        if (data.code.length > 3 && data.code.length < 5) {
                            return false;
                        }
                        else {
                            _this.storage.set('passcode', data.code);
                            return true;
                        }
                    }
                }
            ]
        });
        inputAlert.present();
    };
    PinLoginPage.prototype.openLockscreen = function () {
        var _this = this;
        this.storage.get('passcode').then(function (code) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2_ionic_simple_lockscreen__["a" /* LockScreenComponent */], {
                code: code,
                ACDelbuttons: false,
                passcodeLabel: 'ใส่รหัสผ่าน',
                onCorrect: function () {
                    var toast = _this.toastCtrl.create({
                        message: 'รหัสผ่านถูกต้อง',
                        duration: 2000
                    });
                    toast.present();
                },
                onWrong: function (attempts) {
                    var toast = _this.toastCtrl.create({
                        message: attempts + " \u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E1C\u0E34\u0E14\u0E01\u0E23\u0E38\u0E13\u0E32\u0E43\u0E2A\u0E48\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07!",
                        duration: 2000
                    });
                    toast.present();
                }
            });
        });
    };
    PinLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pin-login',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\pin-login\pin-login.html"*/'<ion-header>\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title>\n     Lock Screen\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n<button ion-button full icon-left (click)="openLockscreen()">\n    <ion-icon name="lock"></ion-icon>\n  ใส่รหัสผ่าน</button>\n \n  <button ion-button full icon-left (click)="setupCode()">\n    <ion-icon name="settings"></ion-icon>\n  ตั้งค่ารหัสผ่าน</button>\n \n</ion-content>'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\pin-login\pin-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], PinLoginPage);
    return PinLoginPage;
}());

//# sourceMappingURL=pin-login.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_home_index_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LoginPage } from '../pages/login/login';

// import { TabspagePage } from '../pages/tabspage/tabspage';
// import { HomePage } from '../pages/home/home';z
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_index_home_index_home__["a" /* IndexHomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { PinLoginPage } from '../pin-login/pin-login';
var IndexHomePage = /** @class */ (function () {
    function IndexHomePage(navCtrl, barcodeScanner, navParams, http, Storage) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.http = http;
        this.Storage = Storage;
        this.resultText = "";
        this.resultFormat = "";
        this.readStatus = false;
    }
    // ionViewDidLoad(){
    //   this.navCtrl.push(PinLoginPage);
    IndexHomePage.prototype.onScan = function () {
        var _this = this;
        this.barcodeScanner
            .scan()
            .then(function (barcodeData) {
            _this.qrcode_result = barcodeData.text;
            _this.qrcode_format = barcodeData.format;
            var xQcode = JSON.stringify(barcodeData.text);
            var nindex = xQcode.indexOf("=");
            var lQcode = xQcode.length;
            var sQRcode = xQcode.substring(nindex + 1, lQcode - 1);
            // alert(sQRcode);
            var ob = _this.http.get('https://traceability.digitalsmartfarm.com/api/search.php?search=' + sQRcode);
            ob.subscribe(function (serch) {
                if (ob = serch[0].code_rice) {
                    _this.navCtrl.push('TracebilityPage', serch);
                    _this.Storage.set('codeRice', serch[0].code_rice).then(function (val) {
                        console.log(val);
                    });
                    console.log(serch);
                }
                else {
                    _this.navCtrl.push('TracebilityVegPage', serch);
                    _this.Storage.set('codeVeg', serch[0].code_veg).then(function (val) {
                        console.log(val);
                    });
                    console.log(serch);
                }
            });
        });
    };
    IndexHomePage.prototype.viewDetail = function () {
        this.navCtrl.push('PinLoginPage');
        // this.navCtrl.push('LoginPage');
    };
    IndexHomePage.prototype.viewSearch = function (newsInfo) {
        this.navCtrl.push('SearchPage', newsInfo);
    };
    IndexHomePage.prototype.connect = function () {
        this.navCtrl.push('ConnectPage');
    };
    IndexHomePage.prototype.manual = function () {
        this.navCtrl.push('ManualPage');
    };
    IndexHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-index-home',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\index-home\index-home.html"*/'<ion-content padding>\n  <p align=\'center\'><img src="assets/imgs/icon1.png"></p>\n  <div class="t-title">TRACEBILITY DIGITAL FARM</div>\n  <p>\n    <!-- <ion-card (click)="onScan()">\n      <img src="assets/imgs/icon2.png"  width="50" height="100">\n      <div class="card-title">SCAN QR CODE</div>\n    </ion-card>\n    <ion-card  (click)="viewSearch(newsInfo)" no-lines>\n      <img src="assets/imgs/icon3.png"  width="50" height="100">\n      <div class="card-title">SEARCH BY CODE</div>\n    </ion-card>\n    <p><button ion-button color="light" block (click)="onScan()">  <ion-icon ios="ios-barcode" md="md-barcode"></ion-icon>SCAN QR CODE</button></p>\n    <p><button ion-button color="light" block (click)="viewSearch(newsInfo)">SEARCH BY CODE</button></p>\n        <p><button ion-button color="light" block (click)="connect()">CONNECT</button></p>\n         -->\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card (click)="onScan()">\n            <img src="assets/imgs/qrcode.svg" width="100" height="100">\n          </ion-card>\n          <div align=\'center\'>SCAN QR CODE</div>\n        </ion-col>\n        <ion-col>\n          <ion-card (click)="viewSearch(newsInfo)">\n            <img src="assets/imgs/search.svg" width="100" height="100">\n          </ion-card>\n          <div align=\'center\'>SEARCH BY CODE</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card (click)="connect()">\n            <img src="assets/imgs/contact.svg" width="100" height="100">\n          </ion-card>\n          <div align=\'center\'>CONTACT</div>\n        </ion-col>\n        <ion-col>\n          <ion-card (click)="viewDetail()">\n            <img src="assets/imgs/login.svg" width="100" height="100">\n          </ion-card>\n          <div align=\'center\'>FARMER LOGIN</div>\n        </ion-col>\n\n        <ion-col>\n          <ion-card (click)="manual()">\n            <img src="https://image.flaticon.com/icons/svg/1028/1028907.svg" width="100" height="100">\n          </ion-card>\n          <div align=\'center\'>MANULA</div>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n<!--   \n   <ion-footer class="icons-basic-page" >\n    <ion-toolbar [color]="isAndroid ? \'danger\' : \'secondary\'"  (click)="viewDetail()" no-lines>\n      <ion-title>\n        <ion-col><ion-icon name="person"></ion-icon></ion-col>FARMER LOGIN\n      </ion-title>\n    </ion-toolbar>\n  </ion-footer> -->'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\index-home\index-home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], IndexHomePage);
    return IndexHomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=index-home.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map