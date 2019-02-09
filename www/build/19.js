webpackJsonp([19],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityharvesVegPageModule", function() { return ActivityharvesVegPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activityharves_veg__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivityharvesVegPageModule = /** @class */ (function () {
    function ActivityharvesVegPageModule() {
    }
    ActivityharvesVegPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activityharves_veg__["a" /* ActivityharvesVegPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activityharves_veg__["a" /* ActivityharvesVegPage */]),
            ],
        })
    ], ActivityharvesVegPageModule);
    return ActivityharvesVegPageModule;
}());

//# sourceMappingURL=activityharves-veg.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityharvesVegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(52);
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
 * Generated class for the ActivityharvesVegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivityharvesVegPage = /** @class */ (function () {
    function ActivityharvesVegPage(navCtrl, http, Storage, loadingCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.Storage = Storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.event = {
            month: '2018-01-01',
        };
        this.news = [
            {
                "lot_no": "",
                "lot_date_act": "",
                "lot_detail": "",
                "lot_note": "",
                "code": "",
            }
        ];
    }
    ActivityharvesVegPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivityharvesVegPage');
        this.v = this.navParams.data;
        console.log(this.v);
        var dataStorage = localStorage.getItem('corpInfo');
        var dataStorageUse = JSON.parse(dataStorage);
        console.log(dataStorageUse);
        this.corpInfo = localStorage.getItem('corpInfo');
        this.corpInfo = JSON.parse(this.corpInfo);
        console.log(this.corpInfo);
    };
    ActivityharvesVegPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'กำลังโหลดข้อมูล'
        });
        loading.present();
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/activity_harves_veg.php?crop_id=' + this.corpInfo.id);
        ob.subscribe(function (data) {
            loading.dismiss();
            _this.news = data;
            console.log(data);
        });
    };
    ActivityharvesVegPage.prototype.saveActivityRice = function (_event, _textdetail1, _textdetail2, _textsequence, _textamount) {
        var data = {
            event: _event,
            textdetail1: _textdetail1,
            textdetail2: _textdetail2,
            textsequence: _textsequence,
            textamount: _textamount,
            processID: 5,
            cropID: this.corpInfo.id,
            farmID: this.corpInfo.farm_id,
            plotID: this.corpInfo.plot_id
        };
        this.http.post('https://traceability.digitalsmartfarm.com/api/saveaddharvesveg.php', data)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.event = null;
        this.textdetail1 = null;
        this.textdetail2 = null;
        this.textsequence = null;
        this.textamount = null;
        this.showConfirm();
    };
    ActivityharvesVegPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'ยืนยันการบันทึกข้อมูล',
            message: 'ไม่สามารถเเก้ไขข้อมูลย้อนหลังได้กรุณาตรวจสอบข้อมูล!',
            buttons: [
                {
                    text: 'ตกลง',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.actionSaveDataSuccess();
                    }
                },
                {
                    text: 'ยกเลิก',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    ActivityharvesVegPage.prototype.actionConfirm = function () {
        this.http.get('https://traceability.digitalsmartfarm.com/api/saveaddharvesveg.php').subscribe(function (resp) {
            if (resp) {
            }
        });
    };
    ActivityharvesVegPage.prototype.actionSaveDataSuccess = function () {
        var alert = this.alerCtrl.create({
            title: 'การบันทึกข้อมูล',
            subTitle: 'บันทึกข้อมูลสำเร็จ',
            buttons: ['ตกลง']
        });
        alert.present();
    };
    ActivityharvesVegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activityharves-veg',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\activityharves-veg\activityharves-veg.html"*/'\n<ion-header>\n\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title  class="t-title">บันทึกการเก็บเกี่ยว</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n  <h2 class="text-body">บันทึกกิจกรรม</h2>\n  <ion-card>\n    <ion-item>\n        <ion-label stacked>รอบการเก็บเกี่ยวที่ :</ion-label>\n        <ion-input type="text" [(ngModel)]="textsequence"></ion-input>\n      </ion-item>\n    </ion-card>\n\n  <ion-card> \n    <ion-item>\n      <ion-label stacked>รอบการเก็บเกี่ยววันที่ : </ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event"></ion-datetime>\n    </ion-item>\n</ion-card>\n\n  <ion-card> \n    <ion-item>\n      <ion-label stacked>รายละเอียดการเก็บเกี่ยว :</ion-label>\n      <ion-textarea name="text-detail" rows="5" cols= "20" [(ngModel)]="textdetail1"></ion-textarea>\n    </ion-item>\n</ion-card>\n\n<ion-card> \n  <ion-item>\n    <ion-label stacked>คำอธิบายเพิ่มเติม(ถ้ามี):</ion-label>\n    <ion-textarea name="text-detail" rows="5" cols= "20" [(ngModel)]="textdetail2"></ion-textarea>\n  </ion-item>\n</ion-card>\n\n  <ion-card>\n  <ion-item>\n      <ion-label stacked>จำนวนผลผลิตที่เก็บเกี่ยวได้:</ion-label>\n      <ion-input type="text" [(ngModel)]="textamount"></ion-input>\n    </ion-item>\n  </ion-card>\n\n\n<p><button ion-button color="secondary" block (click)="saveActivityRice(event,textdetail1, textdetail2,textsequence,textamount)">บันทึกแผน</button></p>\n<!-- <button ion-button color="secondary" block onclick=\'location.replace("https://traceability.digitalsmartfarm.com/trace_famer_farm.php")\'>บันทึกการเก็บเกี่ยว</button> -->\n<p><ion-card-header> \n  ข้อมูลแสดงการบันทึกการเก็บเกี่ยวย่อย\n</ion-card-header></p>\n\n<ion-card *ngFor="let newsInfo of news"> \n    <ion-card-content>\n      <ion-card-title>\n      <h2>กิจกรรม{{ newsInfo.lot_no}}</h2><br>\n      <h3>วันที่ : {{ newsInfo.lot_date_act }}</h3><br>\n      <h3>รายละเอียดกิจกรรม : {{ newsInfo.lot_detail }}</h3><br>\n      <h3>คำอธิบายเพิ่มเติม : {{ newsInfo.lot_note}}</h3><br>\n      <h3>รหัสตรวจสอบย้อนกลับ : {{ newsInfo.code}}</h3>\n    </ion-card-title>\n  </ion-card-content>\n</ion-card>\n\n<!-- <ion-fab right bottom>\n    <button ion-fab color="light"><ion-icon name="add" (click)="insertAct(corpInfo)"></ion-icon></button>\n  </ion-fab> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\activityharves-veg\activityharves-veg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ActivityharvesVegPage);
    return ActivityharvesVegPage;
}());

//# sourceMappingURL=activityharves-veg.js.map

/***/ })

});
//# sourceMappingURL=19.js.map