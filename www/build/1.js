webpackJsonp([1],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracebilityVegPageModule", function() { return TracebilityVegPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracebility_veg__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TracebilityVegPageModule = /** @class */ (function () {
    function TracebilityVegPageModule() {
    }
    TracebilityVegPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tracebility_veg__["a" /* TracebilityVegPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tracebility_veg__["a" /* TracebilityVegPage */]),
            ],
        })
    ], TracebilityVegPageModule);
    return TracebilityVegPageModule;
}());

//# sourceMappingURL=tracebility-veg.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracebilityVegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
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
 * Generated class for the TracebilityVegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TracebilityVegPage = /** @class */ (function () {
    function TracebilityVegPage(navCtrl, navParams, http, Storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.Storage = Storage;
        this.news = [
            {
                "lot_no": "",
                "name": "",
                "lot_date_act": "",
                "lot_detail": "",
                "lot_note": "",
            }
        ];
        this.Storage.ready().then(function () {
            _this.Storage.get('codeVeg').then(function (val) {
                _this.codeVeg = val;
                console.log(val);
            });
        });
    }
    TracebilityVegPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TracebilityVegPage');
        this.serch = this.navParams.data;
        console.log('serch ', this.serch);
    };
    TracebilityVegPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loaddata_veg.php?codeID=' + this.codeVeg);
        console.log(this.codeVeg);
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
    TracebilityVegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracebility-veg',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\tracebility-veg\tracebility-veg.html"*/'<ion-header>\n\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title>ข้อมูลตรวจสอบย้อนกลับ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n<div *ngFor="let s of serch">\n    <img src="https://farm.digitalsmartfarm.com/{{ s?.image }}"> <br>\n      <h2>เกษตรกร : {{ s?.name }}</h2>\n      <p>ฟาร์ม : {{ s?.fd_name }}</p>\n      <p>ที่ตั้ง : {{ s?.fd_address }} {{ s?.fd_amphoe }} {{ s?.fd_distric }} <br>\n               {{ s?.fd_province }} {{ s?.zipcode }} \n        <br>โทรศัพท์ : {{ s?.fd_phone }}</p>\n      </div>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n        <div *ngFor="let s of serch">\n        <h3>ข้อมูลตรวจสอบย้อนกลับแปลง :{{ s?.code_veg }}</h3>\n      <h3>ชื่อแปลง : {{ s?.crop_name }}</h3>\n      <h3>ประเภทแปลงปลูก : {{ s?.type_description }}</h3>\n    </div>\n    </ion-item>\n  </ion-card>\n\n    <ion-card *ngFor="let newsInfo of news" (click)="viewDetail(newsInfo)" no-lines>\n      <ion-item class="page-tracebility">\n        <h2>กิจกรรม{{ newsInfo.lot_no}}</h2><br>\n        <h2>{{ newsInfo.name}}</h2>\n        <h3>วันที่ : {{ newsInfo.lot_date_act }}</h3>\n        <h3>รายละเอียดกิจกรรม : {{ newsInfo.lot_detail }}</h3>\n        <h3>คำอธิบายเพิ่มเติม : {{ newsInfo.lot_note}}</h3>\n      </ion-item>\n      </ion-card>\n          <!-- <ion-card >\n              <ion-card-header>\n              สถานที่จัดจำหน่าย\n              </ion-card-header>\n              <ion-item class="page-tracebility2" *ngFor="let newsInfo of news" (click)="viewDetail(newsInfo)">\n                  <h3>{{ newsInfo.store_name }}</h3>\n                </ion-item>\n            </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\tracebility-veg\tracebility-veg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TracebilityVegPage);
    return TracebilityVegPage;
}());

//# sourceMappingURL=tracebility-veg.js.map

/***/ })

});
//# sourceMappingURL=1.js.map