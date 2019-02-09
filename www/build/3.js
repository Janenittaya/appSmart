webpackJsonp([3],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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





var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, http, storage, alerCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.alerCtrl = alerCtrl;
    }
    SearchPage.prototype.search = function (_keyword) {
        // let data = {
        //   keyword: _keyword
        // };
        var _this = this;
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/search.php?search=' + _keyword);
        ob.subscribe(function (serch) {
            if (ob = serch[0].code_rice) {
                _this.navCtrl.push('TracebilityPage', serch);
                _this.storage.set('codeRice', serch[0].code_rice).then(function (val) {
                    console.log(val);
                });
                console.log(serch);
            }
            else {
                _this.navCtrl.push('TracebilityVegPage', serch);
                _this.storage.set('codeVeg', serch[0].code_veg).then(function (val) {
                    console.log(val);
                });
                console.log(serch);
            }
        });
    };
    // search(newsInfo){
    //   this.navCtrl.push('TracebilityPage', newsInfo);
    // }
    SearchPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'ไม่พบสิ่งที่ค้นหา!',
            message: 'โปรดลองอีกครั้งในภายหลัง!',
            buttons: ['Ok']
        });
        alert.present();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="card-background-page">\n  <p align=\'center\'><img src="assets/imgs/icon1.png"></p>   \n  <div class="t-title">TRACEBILITY DIGITAL FARM</div>\n  <ion-card>\n  <!-- <div class="card-title">SEARCH BY CODE</div> -->\n\n  <ion-searchbar type="keyword" [(ngModel)]="keyword"></ion-searchbar>\n  \n  </ion-card>\n\n  <div padding>\n    <button ion-button color="secondary" block (click)="search(keyword)">SEARCH</button>\n    <!-- <button ion-button color="secondary" block (click)="doAlert()">SEARCH</button> -->\n  </div>\n\n</ion-content> '/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=3.js.map