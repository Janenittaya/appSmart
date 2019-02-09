webpackJsonp([16],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorpPageModule", function() { return CorpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__corp__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CorpPageModule = /** @class */ (function () {
    function CorpPageModule() {
    }
    CorpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__corp__["a" /* CorpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__corp__["a" /* CorpPage */]),
            ],
        })
    ], CorpPageModule);
    return CorpPageModule;
}());

//# sourceMappingURL=corp.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorpPage; });
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





var CorpPage = /** @class */ (function () {
    function CorpPage(navCtrl, http, Storage, nav, loadingCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.Storage = Storage;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.corp = [
            {
                "id": "",
                "image": "",
                "name": "",
                "start_date": "",
            }
        ];
        this.Storage.ready().then(function () {
            _this.Storage.get('farmID').then(function (val) {
                _this.farmID = val;
                console.log(val);
            });
        });
    }
    CorpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetailPage');
        // this.newsInfo = this.navParams.data;
        // console.log(this.newsInfo);
    };
    CorpPage.prototype.viewCorp = function (corpInfo) {
        if (corpInfo.type_crop == 2) {
            this.navCtrl.push('MenucorpPage', corpInfo);
        }
        else {
            this.navCtrl.push('MenucorpVegPage', corpInfo);
        }
        // this.navCtrl.push('MenucorpPage', corpInfo);
        // console.log(corpInfo)
    };
    CorpPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'กำลังโหลดข้อมูล'
        });
        loading.present();
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loaddatacorp.php?farmID=' + this.farmID);
        console.log(this.farmID);
        ob.subscribe(function (data) {
            loading.dismiss();
            _this.corp = data;
            console.log(data);
        });
    };
    CorpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-corp',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\corp\corp.html"*/'<ion-header>\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title class="t-title">ข้อมูลแปลงปลูกย่อย</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let corpInfo of corp" (click)="viewCorp(corpInfo)">\n    <img src="https://farm.digitalsmartfarm.com/{{ corpInfo.image }}">\n    <ion-card-header>\n      <h2>ข้อมูลแปลงย่อย : {{ corpInfo.name }}</h2>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>วันเริ่มปลูก : {{ corpInfo.start_date }}</ion-label>\n      <ion-label>ชนิด : {{corpInfo.type_description}}</ion-label>\n      <ion-label>หมายเหตุ : {{ corpInfo.type_description}}</ion-label>\n      <ion-label>อัพเดทล่าสุด: {{corpInfo.updated_at}}</ion-label>\n      <ion-label>เริ่มปลูก: {{ corpInfo.start_date}}</ion-label>\n      <ion-label> คาดว่าจะเก็บเกี่ยว : {{corpInfo.expected_date}}</ion-label>\n      <ion-label>สถานะ : {{ corpInfo.status }}</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\corp\corp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], CorpPage);
    return CorpPage;
}());

//# sourceMappingURL=corp.js.map

/***/ })

});
//# sourceMappingURL=16.js.map