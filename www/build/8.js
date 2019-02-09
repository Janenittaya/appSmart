webpackJsonp([8],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanricePageModule", function() { return PlanricePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__planrice__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlanricePageModule = /** @class */ (function () {
    function PlanricePageModule() {
    }
    PlanricePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__planrice__["a" /* PlanricePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__planrice__["a" /* PlanricePage */]),
            ],
        })
    ], PlanricePageModule);
    return PlanricePageModule;
}());

//# sourceMappingURL=planrice.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(42);
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
 * Generated class for the PlanricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanricePage = /** @class */ (function () {
    function PlanricePage(navCtrl, navParams, http, alerCtrl, Storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alerCtrl = alerCtrl;
        this.Storage = Storage;
        this.news = [
            {
                "name": "",
                "description": "",
                "status": "",
                "newPlan": "",
            }
        ];
        this.Storage.ready().then(function () {
            _this.Storage.get('cropID').then(function (val) {
                _this.cropID = val;
                console.log(val);
            });
        });
    }
    PlanricePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanricePage');
        this.v = this.navParams.data;
        console.log(this.v);
        var dataStorage = localStorage.getItem('corpInfo');
        var dataStorageUse = JSON.parse(dataStorage);
        console.log(dataStorageUse);
        this.corpInfo = localStorage.getItem('corpInfo');
        this.corpInfo = JSON.parse(this.corpInfo);
        console.log(this.corpInfo);
    };
    PlanricePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/planrice.php?cropID=' + this.corpInfo.id);
        console.log(this.corpInfo.id);
        ob.subscribe(function (data) {
            if (data.arr == null) {
                console.log(ob);
                _this.news = data;
            }
            else {
                // ob = data[0].arr
                console.log(data);
            }
        });
    };
    PlanricePage.prototype.OnDelete = function (_textplan, _textdetail, _myDate) {
        var data = {
            textplan: _textplan,
            textdetail: _textdetail,
            crop_id: this.corpInfo.id,
            date_active: _myDate
        };
        this.http.post('', data)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.textplan = null;
        this.textdetail = null;
        this.actionSaveDataSuccess();
    };
    PlanricePage.prototype.newPlan = function () {
        this.navCtrl.push('PlanPage');
    };
    PlanricePage.prototype.actionSaveDataSuccess = function () {
        var alert = this.alerCtrl.create({
            title: 'ลบข้อมูลเเผน',
            subTitle: 'ลบข้อมูลเเผนสำเร็จ',
            buttons: ['ตกลง']
        });
        alert.present();
    };
    PlanricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-planrice',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\planrice\planrice.html"*/'<!--\n  Generated template for the PlanricePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title class="t-title">แผนก่อนการปฏิบัติ</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button color="secondary" block (click)="newPlan()">สร้างแผนการปลูกข้าวใหม่</button>\n\n  <p>\n    <ion-card-header>\n      แผนที่จะทำวันถัดไปของข้าว\n    </ion-card-header>\n  </p>\n  <ion-card *ngFor="let newsInfo of news">\n    <ion-card-content>\n      <ion-card-title>\n        <h2>ชื่อแผน :</h2> {{ newsInfo.name }}\n        <p> รายละเอียดแผน : {{ newsInfo.description }}</p>\n        <p> วันที่ลงแผน : {{ newsInfo.date_active }}</p>\n        <button ion-button color="defaul">เเก้ไขเเผน</button>\n        <button ion-button color="danger" (click)="OnDelete(name,description,date_active,corp_id)">ลบเเผน</button>\n      </ion-card-title>\n    </ion-card-content>\n  </ion-card>\n\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\planrice\planrice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], PlanricePage);
    return PlanricePage;
}());

//# sourceMappingURL=planrice.js.map

/***/ })

});
//# sourceMappingURL=8.js.map