webpackJsonp([4],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanbarcodePageModule", function() { return ScanbarcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanbarcode__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScanbarcodePageModule = /** @class */ (function () {
    function ScanbarcodePageModule() {
    }
    ScanbarcodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scanbarcode__["a" /* ScanbarcodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scanbarcode__["a" /* ScanbarcodePage */]),
            ],
        })
    ], ScanbarcodePageModule);
    return ScanbarcodePageModule;
}());

//# sourceMappingURL=scanbarcode.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanbarcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScanbarcodePage = /** @class */ (function () {
    function ScanbarcodePage(navCtrl, barcodeScanner, navParams, http, Storage) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.http = http;
        this.Storage = Storage;
        this.readStatus = false;
    }
    ScanbarcodePage.prototype.onScan = function () {
        window.open("https://traceability.digitalsmartfarm.com");
        //  this.barcodeScanner
        //    .scan()
        // .then(barcodeData => {
        //   this.qrcode_result = barcodeData.text;
        //   this.qrcode_format = barcodeData.format;
        //     var xQcode = JSON.stringify(barcodeData);
        //     var nindex = xQcode.indexOf("=");
        //     var endofxQcode = xQcode.length;
        //     var sQRcode = xQcode.substring(nindex+1,endofxQcode);
        //     let ob = this.http.get('https://traceability.digitalsmartfarm.com/api/search.php?search=' + sQRcode)
        //     ob.subscribe(
        //       (serch: any) => {
        //         if (ob = serch[0].code_rice) {
        //           this.navCtrl.push('TracebilityPage',serch);
        //           this.Storage.set('codeRice',serch[0].code_rice).then((val)=>{
        //             console.log(val);
        //             })
        //           console.log(serch);
        //         } else  {
        //           this.navCtrl.push('TracebilityVegPage', serch,);
        //           this.Storage.set('codeVeg',serch[0].code_veg).then((val)=>{
        //             console.log(val);
        //             })
        //           console.log(serch);
        //         }
        //       }
        //     );
        // });
    };
    ScanbarcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scanbarcode',template:/*ion-inline-start:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\scanbarcode\scanbarcode.html"*/'<ion-header>\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'secondary\'">\n    <ion-title>\n      SCAN QR CODE\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="primary" block round (click)="onScan()">QR Code Scan</button>\n  <ion-item>\n    Text: {{qrcode_result}}\n  </ion-item>\n  <ion-item>\n    Format: {{qrcode_format}}\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jane\Desktop\appSmart1.30.01.62rar\appSmart1\appSmart1\appSmart\src\pages\scanbarcode\scanbarcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ScanbarcodePage);
    return ScanbarcodePage;
}());

//# sourceMappingURL=scanbarcode.js.map

/***/ })

});
//# sourceMappingURL=4.js.map