webpackJsonp([10],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanVegPageModule", function() { return PlanVegPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plan_veg__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlanVegPageModule = /** @class */ (function () {
    function PlanVegPageModule() {
    }
    PlanVegPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plan_veg__["a" /* PlanVegPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plan_veg__["a" /* PlanVegPage */]),
            ],
        })
    ], PlanVegPageModule);
    return PlanVegPageModule;
}());

//# sourceMappingURL=plan-veg.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanVegPage; });
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






/**
 * Generated class for the PlanVegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanVegPage = /** @class */ (function () {
    function PlanVegPage(navCtrl, navParams, http, alerCtrl, loadingCtrl, Storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alerCtrl = alerCtrl;
        this.loadingCtrl = loadingCtrl;
        this.Storage = Storage;
        this.news = [
            {
                "lot_no": "",
                "lot_date_act": "",
                "lot_detail": "",
                "lot_note": "",
            }
        ];
        this.Storage.ready().then(function () {
            _this.Storage.get('cropID').then(function (val) {
                _this.cropID = val;
                console.log(val);
            });
        });
    }
    PlanVegPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanvegPage');
        this.m = this.navParams.data;
        console.log(this.m);
        var dataStorage = localStorage.getItem('corpInfo');
        var dataStorageUse = JSON.parse(dataStorage);
        console.log(dataStorageUse);
        this.corpInfo = localStorage.getItem('corpInfo');
        this.corpInfo = JSON.parse(this.corpInfo);
        console.log(this.corpInfo);
    };
    PlanVegPage.prototype.savePlan = function (_textplan, _textdetail, _myDate) {
        var data = {
            textplan: _textplan,
            textdetail: _textdetail,
            cropID: this.corpInfo.id,
            date_active: _myDate
        };
        this.http.post('https://traceability.digitalsmartfarm.com/api/saveplanveg.php', data)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.textplan = null;
        this.textdetail = null;
        this.showConfirm();
    };
    PlanVegPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'กำลังโหลดข้อมูล'
        });
        loading.present();
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/planveg.php?cropID=' + this.corpInfo.id);
        console.log(this.corpInfo.id);
        ob.subscribe(function (data) {
            loading.dismiss();
            _this.news = data;
            console.log(data);
        });
    };
    PlanVegPage.prototype.showConfirm = function () {
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
    PlanVegPage.prototype.actionConfirm = function () {
        this.http.get('https://traceability.digitalsmartfarm.com/api/saveplanrice.php').subscribe(function (resp) {
            if (resp) {
                // this.actionSaveDataSuccess();
            }
        });
    };
    PlanVegPage.prototype.actionSaveDataSuccess = function () {
        var alert = this.alerCtrl.create({
            title: 'การบันทึกข้อมูล',
            subTitle: 'บันทึกข้อมูลสำเร็จ',
            buttons: ['ตกลง']
        });
        alert.present();
    };
    PlanVegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plan-veg',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\plan-veg\plan-veg.html"*/'<ion-header>\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title  class="t-title">สร้างแผน</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h3>สร้างแผนก่อนการปลูก</h3>\n  <ion-list radio-group [(ngModel)]="textplan">\n      <ion-list-header>\n          <h2>สร้างแผนก่อนการปฏิบัติ การปลูกผัก</h2>\n      </ion-list-header>\n    \n      <ion-item>\n        <ion-label>การปลูกและเตรียมดิน</ion-label>\n        <ion-radio checked="true" value="การปลูกและเตรียมดิน"></ion-radio>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>การหว่านปุ๋ย</ion-label>\n        <ion-radio value="การใส่ปุ๋ย"></ion-radio>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>การใส่สารและยาฆ่าแมลง</ion-label>\n        <ion-radio value="การใส่สารและยาฆ่าแมลง" ></ion-radio>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>การเก็บเกี่ยว</ion-label>\n          <ion-radio value="การเก็บเกี่ยว" ></ion-radio>\n      </ion-item>\n    </ion-list>\n  <ion-card>\n    <ion-item>\n        <ion-label stacked> <h2>ชื่อแผน:</h2> </ion-label>\n        <ion-input type="text" [(ngModel)]="textplan"></ion-input>\n    </ion-item>\n  </ion-card>\n  \n<ion-card> \n   \n    <ion-item>\n      <ion-label stacked><h2>รายละเอียดแผน:</h2></ion-label>\n      <ion-textarea name="text-detail" rows="10" cols= "20" [(ngModel)]="textdetail"></ion-textarea>\n    </ion-item>\n</ion-card>\n\n<ion-card>\n    <ion-item>\n        <ion-label stacked><h2>วันที่วางแผนปฏิบัติ (ปี/เดือน/วัน):</h2></ion-label>\n        <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n  </ion-card>\n\n<p><button ion-button color="secondary" block (click)="savePlan(textplan, textdetail, myDate)">บันทึกแผน</button></p>\n<p><ion-card-header>\n  ข้อมูลแสดงการบันทึกการปลูกผัก\n</ion-card-header></p>\n\n<ion-card *ngFor="let newsInfo of news"> \n  <ion-card-content>\n    <ion-card-title>\n    <h2>กิจกรรม{{ newsInfo.name}}</h2><br>\n    <h3>วันที่ : {{ newsInfo.date_active }}</h3><br>\n    <h3>รายละเอียดกิจกรรม : {{ newsInfo.description }}</h3>\n  </ion-card-title>\n</ion-card-content>\n</ion-card>\n\n</ion-content> '/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\plan-veg\plan-veg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PlanVegPage);
    return PlanVegPage;
}());

//# sourceMappingURL=plan-veg.js.map

/***/ })

});
//# sourceMappingURL=10.js.map