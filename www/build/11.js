webpackJsonp([11],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenucorpPageModule", function() { return MenucorpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menucorp__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenucorpPageModule = /** @class */ (function () {
    function MenucorpPageModule() {
    }
    MenucorpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menucorp__["a" /* MenucorpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menucorp__["a" /* MenucorpPage */]),
            ],
        })
    ], MenucorpPageModule);
    return MenucorpPageModule;
}());

//# sourceMappingURL=menucorp.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenucorpPage; });
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





var MenucorpPage = /** @class */ (function () {
    function MenucorpPage(navCtrl, http, Storage, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.Storage = Storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.menu = [
            {
                "id": "",
                "name": "",
            }
        ];
    }
    MenucorpPage.prototype.viewMenu = function (m) {
        if (m.id == 1) {
            this.navCtrl.push('ActivityRicePage', m);
            console.log(m);
        }
        else if (m.id == 2) {
            this.navCtrl.push('ActivityRiceCompostPage', m);
            console.log(m);
        }
        else if (m.id == 3) {
            this.navCtrl.push('ActivityRiceFoodPage', m);
            console.log(m);
        }
        else {
            this.navCtrl.push('ActivityharvesPage', m);
            console.log(m);
        }
    };
    MenucorpPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/loadprocroprice.php');
        ob.subscribe(function (data) {
            console.log(data);
            _this.menu = data;
        });
    };
    MenucorpPage.prototype.viewPlan = function (corpInfo) {
        this.navCtrl.push('PlanricePage', corpInfo);
    };
    MenucorpPage.prototype.ionViewDidLoad = function (corpInfo) {
        console.log('ionViewDidLoad MenucorpPage', corpInfo);
        this.corpInfo = this.navParams.data;
        console.log(this.corpInfo);
        localStorage.setItem('corpInfo', JSON.stringify(this.corpInfo));
        console.log(this.corpInfo);
    };
    MenucorpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menucorp',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\menucorp\menucorp.html"*/'<ion-header>\n\n    <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n        <ion-title class="t-title">จัดการแปลงข้าว</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="grid-basic-page">\n    <ion-card (click)="viewPlan(corpInfo)">\n        <ion-card-content class="body">\n            บันทึกแผนก่อนการปฏิบัติ\n        </ion-card-content>\n    </ion-card>\n   \n        <ion-card *ngFor="let m of menu" (click)="viewMenu(m)">\n            <ion-card-content class="body">\n                {{m.name}}\n            </ion-card-content>\n        </ion-card>\n    </ion-content>'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\menucorp\menucorp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], MenucorpPage);
    return MenucorpPage;
}());

//# sourceMappingURL=menucorp.js.map

/***/ })

});
//# sourceMappingURL=11.js.map