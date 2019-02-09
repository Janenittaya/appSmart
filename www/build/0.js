webpackJsonp([0],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracebilityPageModule", function() { return TracebilityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracebility__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TracebilityPageModule = /** @class */ (function () {
    function TracebilityPageModule() {
    }
    TracebilityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tracebility__["a" /* TracebilityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tracebility__["a" /* TracebilityPage */]),
            ],
        })
    ], TracebilityPageModule);
    return TracebilityPageModule;
}());

//# sourceMappingURL=tracebility.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracebilityPage; });
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
 * Generated class for the TracebilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TracebilityPage = /** @class */ (function () {
    function TracebilityPage(navCtrl, navParams, http, Storage) {
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
            _this.Storage.get('codeRice').then(function (val) {
                _this.codeRice = val;
                console.log(val);
            });
        });
    }
    TracebilityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoac NewsDetailPage');
        this.serch = this.navParams.data;
        console.log('serch ', this.serch);
    };
    TracebilityPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loaddatabenja.php?codeID=' + this.codeRice);
        console.log(this.codeRice);
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
    TracebilityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracebility',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\tracebility\tracebility.html"*/'<ion-header>\n\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title>ข้อมูลตรวจสอบย้อนกลับ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n \n  <ion-card>\n      <ion-item>\n  <div *ngFor="let s of serch">\n      <img src="https://farm.digitalsmartfarm.com/{{ s?.image }}"> <br>\n        <h2>เกษตรกร : {{ s?.name }}</h2>\n        <p>ฟาร์ม : {{ s?.fd_name }}</p>\n        <p>ที่ตั้ง : {{ s?.fd_address }} {{ s?.fd_amphoe }} {{ s?.fd_distric }} <br>\n                 {{ s?.fd_province }} {{ s?.zipcode }} \n          <br>โทรศัพท์ : {{ s?.fd_phone }}</p>\n        </div>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n          <div *ngFor="let s of serch">\n          <h3>ข้อมูลตรวจสอบย้อนกลับแปลงข้าว:{{ s?.code_rice }}</h3>\n        <h3>ชื่อแปลง : {{ s?.crop_name }}</h3>\n        <h3>ประเภทแปลงปลูก : {{ s?.type_description }}</h3>\n      </div>\n      </ion-item>\n    </ion-card>\n    \n    <ion-card *ngFor="let newsInfo of news" (click)="viewDetail(newsInfo)" no-lines>\n      <ion-item class="page-tracebility">\n        <h2>กิจกรรม{{ newsInfo.lot_no}}</h2><br>\n        <h2>{{ newsInfo.name}}</h2>\n        <h3>วันที่ : {{ newsInfo.lot_date_act }}</h3>\n        <h3>รายละเอียดกิจกรรม : {{ newsInfo.lot_detail }}</h3>\n        <h3>คำอธิบายเพิ่มเติม : {{ newsInfo.lot_note}}</h3>\n      </ion-item>\n      </ion-card>\n \n          <!-- <ion-card >\n              <ion-card-header>\n              สถานที่จัดจำหน่าย\n              </ion-card-header>\n              <ion-item class="page-tracebility2" *ngFor="let newsInfo of news" (click)="viewDetail(newsInfo)">\n                  <h3>{{ newsInfo.store_name }}</h3>\n                </ion-item>\n            </ion-card>--> \n  <!-- <div *ngFor="let s of serch">\n    {{s?.crop_name}}\n    <hr>\n  </div> -->\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\tracebility\tracebility.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TracebilityPage);
    return TracebilityPage;
}());

//# sourceMappingURL=tracebility.js.map

/***/ })

});
//# sourceMappingURL=0.js.map