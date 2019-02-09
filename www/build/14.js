webpackJsonp([14],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabspage_tabspage__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, storage, alerCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.alerCtrl = alerCtrl;
    }
    LoginPage.prototype.signIn = function (_username, _password) {
        var _this = this;
        var ob = this.http.get('https://traceability.digitalsmartfarm.com/api/login.php?email=' + _username + '&phone=' + _password);
        ob.subscribe(function (data) {
            if (ob = data[0].id) {
                _this.storage.set('memID', data[0].id).then(function (val) {
                    console.log(val);
                });
                _this.storage.set('memName', data[0].name).then(function (val) {
                    console.log(val);
                });
                _this.storage.set('farmID', data[0].fd_id).then(function (val) {
                    console.log(val);
                });
                _this.storage.set('memPic', data[0].image).then(function (val) {
                    console.log(val);
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabspage_tabspage__["a" /* TabspagePage */]);
            }
            else {
                data.arr == null;
                alert("username หรือ password ไม่ถูกต้องโปรดตรวจสอบอีกครั้ง!");
                console.log(data);
            }
        });
    };
    LoginPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'รหัสผ่านไม่ถูกต้อง!',
            message: 'โปรดลองอีกครั้งในภายหลัง!',
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title class="t-title">Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p align=\'center\'><img src="assets/imgs/icon1.png"></p>\n  <div class="t-title">TRACEBILITY DIGITAL FARM</div>\n  <ion-item>\n    <ion-label stacked>Username:</ion-label>\n    <ion-input type="username" [(ngModel)]="username"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Password:</ion-label>\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n  </ion-item>\n\n  <p><button ion-button color="secondary" block (click)="signIn(username, password)">Sign In</button></p>\n  <!-- <button ion-button color="secondary" block (click)="doAlert()">Sign In</button> -->\n</ion-content>'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=14.js.map