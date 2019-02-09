webpackJsonp([13],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPageModule", function() { return ManualPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manual__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManualPageModule = /** @class */ (function () {
    function ManualPageModule() {
    }
    ManualPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manual__["a" /* ManualPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manual__["a" /* ManualPage */]),
            ],
        })
    ], ManualPageModule);
    return ManualPageModule;
}());

//# sourceMappingURL=manual.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManualPage = /** @class */ (function () {
    function ManualPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ManualPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManualPage');
    };
    ManualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manual',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\manual\manual.html"*/'\n<ion-header>\n\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title>คู่มือการใช้งาน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card padding>\n    <h2>คู่มือการใช้งานทั่วไป</h2><br>\n    <p>Application Traceability Digital Farm</p>\n    <p> เป็นบริการให้ข้อมูลตรวจสอบย้อนกลับข้อมูลผลิตภัณฑ์ที่เกี่ยวข้องของระบบเกษตรอัจฉริยะ (Smart Agriculture) เพื่อเป็นเอกสารการประกันคุณภาพและสร้างความมั่นใจให้กับผู้บริโภค\n    ด้วยระบบแสกน QR-Code ผ่านแอปพลิเคชั่น สามารถตรวจสอบข้อมูลตั้งแต่ต้นทาง (ผู้ผลิต) ไปจนถึงปลายทาง (ผู้บริโภค)ได้โดยคู่มือการใช้งานอย่างละเอียดได้รวบรวมไว้ที่ลิงค์ด้านล่างผู้ใช้งานสามารถศึกษาทำความเข้าใจจากคู่มือการใช้งานก่อน เพื่อที่จะได้เข้าใจการทำงานของเเอพพลิเคชั่น</p>\n    </ion-card>\n  <ion-card padding>\n        <button ion-button color="light" block onclick=\'location.replace("https://drive.google.com/file/d/1JsRYHxUhwLBhqWFZafEMbgM01HyaEstO/view?usp=sharing")\'>https://drive.google.com/file/d/1JsRYHxUhwLBhqWFZafEMbgM01HyaEstO/view?usp=sharing</button>\n  </ion-card>\n      </ion-content>\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\manual\manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ManualPage);
    return ManualPage;
}());

//# sourceMappingURL=manual.js.map

/***/ })

});
//# sourceMappingURL=13.js.map