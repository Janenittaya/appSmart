webpackJsonp([12],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenucorpVegPageModule", function() { return MenucorpVegPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menucorp_veg__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenucorpVegPageModule = /** @class */ (function () {
    function MenucorpVegPageModule() {
    }
    MenucorpVegPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menucorp_veg__["a" /* MenucorpVegPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menucorp_veg__["a" /* MenucorpVegPage */]),
            ],
        })
    ], MenucorpVegPageModule);
    return MenucorpVegPageModule;
}());

//# sourceMappingURL=menucorp-veg.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenucorpVegPage; });
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





var MenucorpVegPage = /** @class */ (function () {
    function MenucorpVegPage(navCtrl, http, Storage, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.Storage = Storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.menuV = [
            {
                "id": "",
                "name": "",
            }
        ];
    }
    MenucorpVegPage.prototype.viewMenu = function (v) {
        if (v.id == 1) {
            this.navCtrl.push('ActivityVegPage', v);
            console.log(v);
        }
        else if (v.id == 2) {
            this.navCtrl.push('ActivityVegCompostPage', v);
            console.log(v);
        }
        else if (v.id == 3) {
            this.navCtrl.push('ActivityVegFoodPage', v);
            console.log(v);
        }
        else {
            this.navCtrl.push('ActivityharvesVegPage', v);
            console.log(v);
        }
        // this.navCtrl.push('MenucorpPage', corpInfo);
        // console.log(corpInfo)
    };
    MenucorpVegPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loadprocropveg.php');
        ob.subscribe(function (data) {
            console.log(data);
            _this.menuV = data;
        });
    };
    MenucorpVegPage.prototype.viewPlan = function (corpInfo) {
        this.navCtrl.push('PlanvegPage', corpInfo);
    };
    MenucorpVegPage.prototype.ionViewDidLoad = function (corpInfo) {
        console.log('ionViewDidLoad MenucorpVegPage', corpInfo);
        this.corpInfo = this.navParams.data;
        console.log(this.corpInfo);
        localStorage.setItem('corpInfo', JSON.stringify(this.corpInfo));
        console.log(this.corpInfo);
    };
    MenucorpVegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menucorp-veg',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\menucorp-veg\menucorp-veg.html"*/'<ion-header>\n\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title class="t-title">จัดการแปลงผัก</ion-title>\n  </ion-navbar>\n\n</ion-header> \n\n\n<ion-content class="grid-basic-page">\n    <ion-card (click)="viewPlan(corpInfo)">\n        <ion-card-content class="body">\n             บันทึกแผนก่อนการปฏิบัติ\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngFor="let v of menuV" (click)="viewMenu(v)">\n          <ion-card-content class="body">\n              {{v.name}}\n          </ion-card-content>\n        </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\menucorp-veg\menucorp-veg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], MenucorpVegPage);
    return MenucorpVegPage;
}());

//# sourceMappingURL=menucorp-veg.js.map

/***/ })

});
//# sourceMappingURL=12.js.map