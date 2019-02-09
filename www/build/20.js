webpackJsonp([20],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityVegPageModule", function() { return ActivityVegPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_veg__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivityVegPageModule = /** @class */ (function () {
    function ActivityVegPageModule() {
    }
    ActivityVegPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activity_veg__["a" /* ActivityVegPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_veg__["a" /* ActivityVegPage */]),
            ],
        })
    ], ActivityVegPageModule);
    return ActivityVegPageModule;
}());

//# sourceMappingURL=activity-veg.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityVegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
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






var ActivityVegPage = /** @class */ (function () {
    function ActivityVegPage(navCtrl, http, Storage, loadingCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.Storage = Storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.news = [
            {
                "lot_no": "",
                "lot_date_act": "",
                "lot_detail": "",
                "lot_note": "",
            }
        ];
    }
    ActivityVegPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivityVegPage');
        this.v = this.navParams.data;
        console.log(this.v);
        var dataStorage = localStorage.getItem('corpInfo');
        var dataStorageUse = JSON.parse(dataStorage);
        console.log(dataStorageUse);
        this.corpInfo = localStorage.getItem('corpInfo');
        this.corpInfo = JSON.parse(this.corpInfo);
        console.log(this.corpInfo);
    };
    ActivityVegPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'กำลังโหลดข้อมูล'
        });
        loading.present();
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/activity_veg.php?crop_id=' + this.corpInfo.id);
        console.log(this.corpInfo.id);
        ob.subscribe(function (data) {
            loading.dismiss();
            _this.news = data;
            console.log(data);
        });
    };
    ActivityVegPage.prototype.saveActivityRice = function (_textdetail1, _textdetail2) {
        var data = {
            textdetail1: _textdetail1,
            textdetail2: _textdetail2,
            processID: 1,
            cropID: this.corpInfo.id,
            farmID: this.corpInfo.farm_id,
            plotID: this.corpInfo.plot_id
        };
        this.http.post('https://traceability.digitalsmartfarm.com/api/savecctveg.php', data)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.textdetail1 = null;
        this.textdetail2 = null;
        this.showConfirm();
    };
    ActivityVegPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'ยืนยันการบันทึกข้อมูล',
            message: 'ไม่สามารถเเก้ไขข้อมูลย้อนหลังได้กรุณาตรวจสอบข้อมูล',
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
    ActivityVegPage.prototype.actionConfirm = function () {
        this.http.get('https://traceability.digitalsmartfarm.com/api/savecctveg.php').subscribe(function (resp) {
            if (resp) {
                // this.actionSaveDataSuccess();
            }
        });
    };
    ActivityVegPage.prototype.actionSaveDataSuccess = function () {
        var alert = this.alerCtrl.create({
            title: 'การบันทึกข้อมูล',
            subTitle: 'บันทึกข้อมูลสำเร็จ',
            buttons: ['ตกลง']
        });
        alert.present();
    };
    ActivityVegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-veg',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\activity-veg\activity-veg.html"*/'<ion-header>\n\n  <ion-navbar  [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title  class="t-title">บันทึกการปลูกและการเตรียมดิน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h2 class="text-body">การบันทึกกิจกรรม </h2>\n    <ion-card>\n    <ion-item>\n        <ion-label stacked>การปลูกและการเตรียมดิน(รายละเอียดกิจกรรม):</ion-label>\n        <ion-textarea name="text-detail" rows="5" cols= "10" [(ngModel)]="textdetail1"></ion-textarea>\n      </ion-item>\n    </ion-card>\n  \n  <ion-card> \n      <ion-item>\n        <ion-label stacked>คำอธิบายเพิ่มเติม(ถ้ามี):</ion-label>\n        <ion-textarea name="text-detail" rows="5" cols= "10" [(ngModel)]="textdetail2"></ion-textarea>\n      </ion-item>\n  </ion-card>\n  <p><button ion-button color="secondary" block (click)="saveActivityRice(textdetail1, textdetail2)">บันทึกกิจกรรม</button></p>\n  <!-- <button ion-button color="secondary" block onclick=\'location.replace("https://traceability.digitalsmartfarm.com/trace_famer_farm.php")\'>  บันทึกข้อมูลการปลูกและการเตรียมดิน</button> -->\n  <p><ion-card-header>\n    ข้อมูลการปลูกและการเตรียมดิน\n  </ion-card-header></p>\n  \n  <ion-card *ngFor="let newsInfo of news"> \n      <ion-card-content>\n        <ion-card-title>\n        <h2>กิจกรรม{{ newsInfo.lot_no}}</h2><br>\n        <h3>วันที่ : {{ newsInfo.lot_date_act }}</h3><br>\n        <h3>รายละเอียดกิจกรรม : {{ newsInfo.lot_detail }}</h3><br>\n        <h3>คำอธิบายเพิ่มเติม : {{ newsInfo.lot_note}}</h3>\n      </ion-card-title>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-fab right bottom>\n    <button ion-fab color="light"><ion-icon name="add" (click)="insertAct(corpInfo)"></ion-icon></button>\n  </ion-fab> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\activity-veg\activity-veg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ActivityVegPage);
    return ActivityVegPage;
}());

//# sourceMappingURL=activity-veg.js.map

/***/ })

});
//# sourceMappingURL=20.js.map