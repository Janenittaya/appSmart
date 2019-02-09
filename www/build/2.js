webpackJsonp([2],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePageModule", function() { return SlidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidePageModule = /** @class */ (function () {
    function SlidePageModule() {
    }
    SlidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slide__["a" /* SlidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slide__["a" /* SlidePage */]),
            ],
        })
    ], SlidePageModule);
    return SlidePageModule;
}());

//# sourceMappingURL=slide.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidePage = /** @class */ (function () {
    function SlidePage() {
        this.slides = [
            {
                title: "Scan QR-Code",
                description: "Tracebility Digital Farm<br>เป็นบริการให้ข้อมูลตรวจสอบย้อนกลับข้อมูลผลิตภัณฑ์ที่เกี่ยวข้องของระบบเกษตรอัจฉริยะ(Smart Agriculture)เพื่อเป็นเอกสารประกันคุณภาพเเละสร้างความมั่นใจให้กับผู้บริโภค ด้วยระบบเเสกน QR-Code",
                image: "https://image.flaticon.com/icons/svg/975/975943.svg",
            },
            {
                title: "Search by Code",
                description: "ผู้บริโภคสามารถตรวจสอบย้อนกลับได้จากรหัสของผลิตภัณฑ์ที่มีอยู่ข้างถุงเเละรหัสที่มาจากเว็บหลักซึ่งจะเเสดงข้อมูลกระบวนการผลิตของผลิตภัณฑ์นั้น",
                image: "https://image.flaticon.com/icons/svg/149/149009.svg"
            },
        ];
    }
    SlidePage.prototype.primary = function () {
        this.navCtrl.push('IndexHomePage');
    };
    SlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slide',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\slide\slide.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Slides</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="http://localhost:8100/assets/imgs/icon1.png" class="slide-image"/>\n      <h2 class="slide-title"><h1>Welcome to Application</h1>Tracebility Digital Farm</h2>\n      <button ion-button large clear icon-end color="primary">\n        เข้าสู่หน้าหลัก\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\slide\slide.html"*/,
        })
    ], SlidePage);
    return SlidePage;
}());

//# sourceMappingURL=slide.js.map

/***/ })

});
//# sourceMappingURL=2.js.map