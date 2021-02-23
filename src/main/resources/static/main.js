(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\laba4\src\main.ts */"zUnb");


/***/ }),

/***/ "3TnI":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 13, vars: 0, consts: [["charset", "utf-8"], ["routerLinkActive", "active"], ["routerLink", "login"], ["routerLink", "registration"], ["id", "header"], ["align", "center"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F\u0440\u043E\u043A\u0443\u0448\u0435\u0432\u0430 \u041F\u043E\u043B\u0438\u043D\u0430 \u0410\u043D\u0434\u0440\u0435\u0435\u0432\u043D\u0430, P3231, 2752");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#header[_ngcontent-%COMP%] {\n  background: #ffd2db;\n  padding-top: 0.5em;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: Comic Sans MS, Comic Sans, cursive;\n  text-shadow: -3px -3px 3px #f0ffec;\n  font-weight: bold;\n  font-style: oblique;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n  margin-top: 25px;\n  background: #ffd2db;\n  height: 50px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: #ffd2db;\n  color: #000000;\n  padding: 0px 15px;\n  font-family: arial;\n  line-height: 50px;\n  display: block;\n  border-right: 1px solid #efe4f3;\n  -moz-transition: all 0.3s 0.01s ease;\n  -o-transition: all 0.3s 0.01s ease;\n  -webkit-transition: all 0.3s 0.01s ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background: #d48b92;\n}\n\nli[_ngcontent-%COMP%] {\n  float: left;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0.5rem -0.25rem;\n  justify-content: stretch;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n}\n\nrouter-outlet[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 1rem;\n}\n\n@media screen and (min-width: 1247px) {\n  #checkForm[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n@media screen and (min-width: 737px) and (max-width: 1247px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    background: #ffd2db;\n  }\n}\n\n@media screen and (max-width: 737px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    border-bottom: 10em;\n    background: #ffd2db;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n}\n\n.p-toolbar-group-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsdUNBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0FBS0Y7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0Usd0JBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0FBTEY7O0FBVUE7RUFDRTtJQUNFLFlBQUE7RUFQRjs7RUFTQTtJQUNFLGtCQUFBO0VBTkY7QUFDRjs7QUFVQTtFQUNFO0lBQ0UsZ0JBQUE7RUFSRjs7RUFXQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQVJGO0FBQ0Y7O0FBWUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFWRjs7RUFhQTtJQUNFLDJCQUFBO0VBVkY7QUFDRjs7QUFhQTtFQUNFLG1CQUFBO0FBWEYiLCJmaWxlIjoiYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZkMmRiO1xyXG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1mYW1pbHk6IENvbWljIFNhbnMgTVMsIENvbWljIFNhbnMsIGN1cnNpdmU7XHJcbiAgdGV4dC1zaGFkb3c6IC0zcHggLTNweCAzcHggI2YwZmZlYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZkMmRiO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZDJkYjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOjBweCAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWZlNGYzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4wMXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjAxcyBlYXNlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4wMXMgZWFzZTtcclxufVxyXG5hOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZDQ4YjkyO1xyXG59XHJcbmxpIHtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4kbW9iaWxlOiAwO1xyXG4kdGFibGV0OiA3MzdweDtcclxuJGRlc2t0b3A6IDEyNDdweDtcclxuXHJcbi8vIE1peGluc1xyXG5AbWl4aW4gc2hyaW5rLWxpbWl0KCR3aWR0aCkge1xyXG4gIG1pbi13aWR0aDogJHdpZHRoO1xyXG4gIGZsZXgtYmFzaXM6ICR3aWR0aDtcclxufVxyXG5cclxudWwge1xyXG4gIG1hcmdpbjogMC41cmVtIC0wLjI1cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDsgLy8gaG9yaXpvbnRhbCBhbGlnbm1lbnRcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvLyBvbiB0b3Agb2YgaXRlbXNcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi53cmFwcGVyID4gKiB7XHJcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMC41cmVtO1xyXG59XHJcblxyXG5yb3V0ZXItb3V0bGV0IHtcclxuICBtYXJnaW46IDAgMC41MHJlbSAxcmVtO1xyXG59XHJcblxyXG5cclxuLy8gRGVza3RvcFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xyXG4gICNjaGVja0Zvcm0ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAjaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYmxldFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0KSBhbmQgKG1heC13aWR0aDogJGRlc2t0b3ApIHtcclxuICAjaGVhZGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZDJkYjtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1vYmlsZVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgI2hlYWRlciB7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxMGVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZDJkYjtcclxuICB9XHJcblxyXG4gIC5tdC00IHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW0haW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnAtdG9vbGJhci1ncm91cC1yaWdodCA+ICoge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4Zia":
/*!********************************!*\
  !*** ./src/app/point/point.ts ***!
  \********************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
class Point {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ftrl":
/*!**************************************************************!*\
  !*** ./src/app/layouts/site-layout/site-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _point_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../point/point */ "4Zia");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












const _c0 = ["someInput"];
const _c1 = ["svvg"];
function SiteLayoutComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.answer);
} }
function SiteLayoutComponent_tr_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r4.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r4.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r4.r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r4.hit);
} }
class SiteLayoutComponent {
    constructor(auth, zone, router) {
        this.auth = auth;
        this.zone = zone;
        this.router = router;
        this.done = false;
        this.x = 2;
        this.y = 2;
        this.r = 1;
    }
    ngOnInit() {
        if (localStorage.getItem('auth-login') !== null && localStorage.getItem('auth-login') !== undefined) {
            this.auth.getPoints().subscribe(data => {
                this.pointsList = data;
                this.pointsList.forEach((item) => {
                    let relativeX = item.x * 100 / item.r + 150;
                    let relativeY = 150 - item.y * 100 / item.r;
                    if (item.hit == true) {
                        this.d1.nativeElement.insertAdjacentHTML('beforeend', `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="1" fill="${'green'}"></circle>`);
                    }
                    else {
                        this.d1.nativeElement.insertAdjacentHTML('beforeend', `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="1" fill="${'red'}"></circle>`);
                    }
                    const svgDiagram = jquery__WEBPACK_IMPORTED_MODULE_1__('#svgDiagram');
                    svgDiagram.remove();
                    const ssvg = jquery__WEBPACK_IMPORTED_MODULE_1__('#diagram');
                    ssvg.append(this.d1.nativeElement);
                });
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    handleChange(e) {
        if (this.r !== undefined && this.r > 0) {
            this.done = false;
            const svgDiagram = jquery__WEBPACK_IMPORTED_MODULE_1__('#svgDiagram');
            svgDiagram.remove();
            const svg = jquery__WEBPACK_IMPORTED_MODULE_1__('#diagram');
            svg.append(`<svg class="svvg" #svvg id="svgDiagram" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <line x1="0" y1="150" x2="300" y2="150" stroke="#ffffff"></line>
      <line x1="150" y1="0" x2="150" y2="300" stroke="#ffffff"></line>

      <line x1="250" y1="145" x2="250" y2="155" stroke="#ffffff"></line>
      <line x1="200" y1="145" x2="200" y2="155" stroke="#ffffff"></line>
      <line x1="100" y1="145" x2="100" y2="155" stroke="#ffffff"></line>
      <line x1="50" y1="145" x2="50" y2="155" stroke="#ffffff"></line>

      <line x1="145" y1="50" x2="155" y2="50" stroke="#ffffff"></line>
      <line x1="145" y1="100" x2="155" y2="100" stroke="#ffffff"></line>
      <line x1="145" y1="200" x2="155" y2="200" stroke="#ffffff"></line>
      <line x1="145" y1="250" x2="155" y2="250" stroke="#ffffff"></line>

      <text x="245" y="140" stroke="#ffffff">${this.r}</text>
      <text x="185" y="140" stroke="#ffffff">${(this.r) / 2}</text>
      <text x="77" y="140" stroke="#ffffff">-${(this.r) / 2}</text>
      <text x="37" y="140" stroke="#ffffff">-${this.r}</text>
      <text x="156" y="55" stroke="#ffffff">${this.r}</text>
      <text x="156" y="105" stroke="#ffffff">${(this.r) / 2}</text>
      <text x="156" y="205" stroke="#ffffff">-${(this.r) / 2}</text>
      <text x="156" y="255" stroke="#ffffff">-${this.r}</text>
      <polygon points="300,150 295,155 295, 145" fill="#000720" stroke="#ffffff"></polygon>
      <polygon points="150,0 145,5 155,5" fill="#000720" stroke="#ffffff"></polygon>

      <rect x="150" y="100" width="100" height="50" fill-opacity="0.4" stroke="navy" fill="blue"></rect>
      <polygon points="150,150 100,150 150,200" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>
      <path d="M150 150 L 250 150 C 250 150 250 250 150 250 L Z" fill-opacity="0.4" stroke="navy" fill="blue"></path>
      </svg>`);
            this.pointsList.forEach((item) => {
                let relativeX = item.x * 100 / item.r + 150;
                let relativeY = 150 - item.y * 100 / item.r;
                if (item.hit == true) {
                    this.d1.nativeElement.insertAdjacentHTML('beforeend', `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="1" fill="${'green'}"></circle>`);
                }
                else {
                    this.d1.nativeElement.insertAdjacentHTML('beforeend', `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="1" fill="${'red'}"></circle>`);
                }
                const svgDiagram = jquery__WEBPACK_IMPORTED_MODULE_1__('#svgDiagram');
                svgDiagram.remove();
                const ssvg = jquery__WEBPACK_IMPORTED_MODULE_1__('#diagram');
                ssvg.append(this.d1.nativeElement);
            });
        }
        else {
            this.done = true;
            this.answer = 'R must be bigger than 0.';
        }
    }
    onClick(e) {
        if (this.r !== undefined && this.r > 0) {
            this.done = false;
            const svg = jquery__WEBPACK_IMPORTED_MODULE_1__('svg');
            const offset = jquery__WEBPACK_IMPORTED_MODULE_1__('.svvg').offset();
            const relativeX = (e.pageX - offset.left);
            const relativeY = (e.pageY - offset.top);
            const basis = 100 / this.r;
            const x_val = ((relativeX - 150) / basis).toFixed(2);
            const y_val = ((150 - relativeY) / basis).toFixed(2);
            this.point = new _point_point__WEBPACK_IMPORTED_MODULE_2__["Point"]();
            this.point.x = +x_val;
            this.point.y = +y_val;
            this.point.r = this.r;
            this.auth.addPoint(this.point).subscribe((result) => {
                if (result.result == 'true') {
                    this.d1.nativeElement.insertAdjacentHTML('beforeend', `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="0.7" fill="${'green'}"></circle>`);
                    const svgDiagram = jquery__WEBPACK_IMPORTED_MODULE_1__('#svgDiagram');
                    svgDiagram.remove();
                    const ssvg = jquery__WEBPACK_IMPORTED_MODULE_1__('#diagram');
                    ssvg.append(this.d1.nativeElement);
                    this.auth.getPoints().subscribe(data => {
                        this.pointsList = data;
                    });
                }
                else {
                    this.d1.nativeElement.insertAdjacentHTML('beforeend', `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="0.7" fill="${'red'}"></circle>`);
                    const svgDiagram = jquery__WEBPACK_IMPORTED_MODULE_1__('#svgDiagram');
                    svgDiagram.remove();
                    const ssvg = jquery__WEBPACK_IMPORTED_MODULE_1__('#diagram');
                    ssvg.append(this.d1.nativeElement);
                    this.auth.getPoints().subscribe(data => {
                        this.pointsList = data;
                    });
                }
            }, error => {
            });
        }
        else {
            this.done = true;
            this.answer = 'R must be bigger than 0.';
        }
    }
    onSubmit(form) {
        if (this.r !== undefined && this.r > 0) {
            this.done = false;
            this.point = new _point_point__WEBPACK_IMPORTED_MODULE_2__["Point"]();
            this.point.x = this.x;
            this.point.y = this.y;
            this.point.r = this.r;
            this.auth.addPoint(this.point).subscribe((result) => {
                let relativeX = this.x * 100 / this.r + 150;
                let relativeY = 150 - this.y * 100 / this.r;
                if (result.result == 'true') {
                    this.d1.nativeElement.insertAdjacentHTML('beforeend', `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="0.7" fill="${'green'}"></circle>`);
                }
                else {
                    this.d1.nativeElement.insertAdjacentHTML('beforeend', `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="0.7" fill="${'red'}"></circle>`);
                }
                const svgDiagram = jquery__WEBPACK_IMPORTED_MODULE_1__('#svgDiagram');
                svgDiagram.remove();
                const ssvg = jquery__WEBPACK_IMPORTED_MODULE_1__('#diagram');
                ssvg.append(this.d1.nativeElement);
                this.auth.getPoints().subscribe(data => {
                    this.pointsList = data;
                });
            });
        }
        else {
            this.done = true;
            this.answer = 'R must be bigger than 0.';
        }
    }
    setResult(result) {
        this.result = result;
    }
    logout() {
        this.auth.logout();
    }
}
SiteLayoutComponent.ɵfac = function SiteLayoutComponent_Factory(t) { return new (t || SiteLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SiteLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteLayoutComponent, selectors: [["app-site-layout"]], viewQuery: function SiteLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.someInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.d1 = _t.first);
    } }, decls: 83, vars: 24, consts: [[1, "p-toolbar-group-left"], ["routerLink", "login", "pButton", "", "pRipple", "", "type", "button", "label", "Logout", 1, "p-button-rounded", "p-button-danger", 3, "click"], [1, "wrapper"], ["method", "post", "action", "", "id", "checkForm"], ["f", "ngForm"], ["id", "XRlocation"], ["id", "area_x", 1, "border"], ["for", "coordinateX"], ["id", "coordinateX", "name", "coordinateX", 3, "ngModel", "min", "max", "step", "ngModelChange"], ["id", "area_r", 1, "border"], ["for", "coordinateR"], ["id", "coordinateR", "name", "coordinateR", 3, "ngModel", "min", "max", "ngModelChange", "onChange"], [4, "ngIf"], ["id", "YSlocation"], ["id", "area_y", 1, "border"], ["for", "coordinateY"], ["id", "coordinateY", "name", "coordinateR", 3, "ngModel", "min", "max", "step", "ngModelChange"], [1, "coordinateYE"], ["id", "area_submit"], ["type", "submit", "id", "formSubmit", "value", "Check", 3, "click"], ["id", "diagram", 1, "da", 3, "click"], ["id", "svgDiagram", "xmlns", "http://www.w3.org/2000/svg", "width", "300", "height", "300", 1, "svvg"], ["svvg", ""], ["x1", "0", "y1", "150", "x2", "300", "y2", "150", "stroke", "#ffffff"], ["x1", "150", "y1", "0", "x2", "150", "y2", "300", "stroke", "#ffffff"], ["x1", "250", "y1", "145", "x2", "250", "y2", "155", "stroke", "#ffffff"], ["x1", "200", "y1", "145", "x2", "200", "y2", "155", "stroke", "#ffffff"], ["x1", "100", "y1", "145", "x2", "100", "y2", "155", "stroke", "#ffffff"], ["x1", "50", "y1", "145", "x2", "50", "y2", "155", "stroke", "#ffffff"], ["x1", "145", "y1", "50", "x2", "155", "y2", "50", "stroke", "#ffffff"], ["x1", "145", "y1", "100", "x2", "155", "y2", "100", "stroke", "#ffffff"], ["x1", "145", "y1", "200", "x2", "155", "y2", "200", "stroke", "#ffffff"], ["x1", "145", "y1", "250", "x2", "155", "y2", "250", "stroke", "#ffffff"], ["x", "245", "y", "140", "stroke", "#ffffff"], ["x", "185", "y", "140", "stroke", "#ffffff"], ["x", "77", "y", "140", "stroke", "#ffffff"], ["x", "37", "y", "140", "stroke", "#ffffff"], ["x", "156", "y", "55", "stroke", "#ffffff"], ["x", "156", "y", "105", "stroke", "#ffffff"], ["x", "156", "y", "205", "stroke", "#ffffff"], ["x", "156", "y", "255", "stroke", "#ffffff"], ["points", "300,150 295,155 295, 145", "fill", "#000720", "stroke", "#ffffff"], ["points", "150,0 145,5 155,5", "fill", "#000720", "stroke", "#ffffff"], ["x", "150", "y", "100", "width", "100", "height", "50", "fill-opacity", "0.4", "stroke", "navy", "fill", "blue"], ["points", "150,150 100,150 150,200", "fill-opacity", "0.4", "stroke", "navy", "fill", "blue"], ["d", "M150 150 L 250 150 C 250 150 250 250 150 250 L Z", "fill-opacity", "0.4", "stroke", "navy", "fill", "blue"], ["id", "table-wrapper"], ["id", "table-scroll"], ["id", "tableWithResults"], [4, "ngFor", "ngForOf"]], template: function SiteLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_button_click_2_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose a coordinate \u0425: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_p_slider_ngModelChange_12_listener($event) { return ctx.x = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Choose a parameter R: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_p_slider_ngModelChange_19_listener($event) { return ctx.r = $event; })("onChange", function SiteLayoutComponent_Template_p_slider_onChange_19_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SiteLayoutComponent_div_22_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Choose a parameter Y: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_p_slider_ngModelChange_28_listener($event) { return ctx.y = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_input_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_div_click_35_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "line", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "line", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "line", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "line", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "line", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "line", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "line", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "line", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "text", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "text", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "text", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "text", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "text", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "text", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "text", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "text", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "polygon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "polygon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "rect", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "polygon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "table", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "RESULT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, SiteLayoutComponent_tr_82_Template, 9, 4, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.x)("min", -5)("max", 3)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value: ", ctx.x, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.r)("min", -5)("max", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value: ", ctx.r, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.y)("min", -3)("max", 5)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value: ", ctx.y, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.r);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.r / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", ctx.r / 2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", ctx.r, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.r);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.r / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", ctx.r / 2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", ctx.r, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pointsList);
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], primeng_slider__WEBPACK_IMPORTED_MODULE_8__["Slider"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["@charset \"UTF-8\";\nbody[_ngcontent-%COMP%] {\n  color: aliceblue;\n  font-size: 22px;\n  background-image: url('IMG.jpg');\n  background-size: cover;\n}\nheader[_ngcontent-%COMP%] {\n  font-family: Monotype Corsiva, monospace;\n  color: #ff9efd;\n  line-height: 125%;\n  font-size: 50px;\n  font-weight: bold;\n  font-style: oblique;\n  text-align: center;\n  text-shadow: -1px -3px 3px #000000;\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  background-color: rgba(5, 5, 5, 0.3);\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%] {\n  margin: 0rem 0rem !important;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-auto-rows: minmax(100px, auto);\n  grid-gap: 1em;\n}\n.wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n#header[_ngcontent-%COMP%] {\n  grid-column: 1/5;\n}\n#checkForm[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.diagram[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n  height: 300px;\n  grid-column: 3;\n  border: 10px solid rgba(5, 5, 5, 0.3);\n  border-radius: 50px;\n}\n#table-wrapper[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n}\n#checkForm[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: minmax(10px, auto);\n  grid-gap: 1em;\n  justify-items: stretch;\n  align-items: stretch;\n}\n#checkForm[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n#XRlocation[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: minmax(100px, auto);\n  grid-gap: 1em;\n}\n#YSlocation[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: minmax(100px, auto);\n  grid-gap: 1em;\n}\n#XRlocation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n#YSlocation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n#area_x[_ngcontent-%COMP%], #area_r[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\n#area_submit[_ngcontent-%COMP%], #area_y[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\n#area_submit[_ngcontent-%COMP%] {\n  justify-self: center;\n  grid-column: 1/3;\n}\n#formSubmit[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 120px;\n  height: 70px;\n  background: rgba(5, 5, 5, 0.3);\n  border-radius: 30px;\n  color: #ffffff;\n  outline: none;\n}\n#table-scroll[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow: auto;\n  margin-top: -36px;\n}\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 660px;\n  background: rgba(5, 5, 5, 0.3);\n  border-radius: 30px;\n  text-align: center;\n}\nth[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #ffffff;\n  border-bottom: 2px solid #d73bd9;\n  padding: 10px 8px;\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 9px 8px;\n  transition: 0.3s linear;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n  \n  display: none;\n  width: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  background-repeat: no-repeat;\n  width: 5px;\n  height: 4px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #ffffff;\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 30px;\n  background-color: #ff55f8;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #56999f;\n}\n[_ngcontent-%COMP%]::-webkit-resizer {\n  background-repeat: no-repeat;\n  width: 4px;\n  height: 0;\n}\n.wrapper[_ngcontent-%COMP%] {\n  margin: 0.5rem -0.25rem;\n  justify-content: stretch;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n}\n@media screen and (min-width: 1247px) and (max-width: 1756px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  #checkForm[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n\n  #table-wrapper[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media screen and (min-width: 737px) and (max-width: 1247px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  #table-wrapper[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  #manual-input-panel[_ngcontent-%COMP%] {\n    min-width: 250px;\n    flex-basis: 250px;\n    flex-grow: 1;\n  }\n\n  #checkForm[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media screen and (max-width: 737px) {\n  .wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    display: flex;\n  }\n\n  #diagram[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n}\n.p-toolbar-group-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaXRlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7RUFBYSx1Q0FBQTtFQUNiLGFBQUE7RUFDQSxXQUFBO0FBR0Y7QUFBQTtFQUNFLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHRjtBQUFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUdGO0FBQUE7RUFFRSxtQkFBQTtFQUNBLHlCQUFBO0FBR0Y7QUFBQTtFQUNFLHlCQUFBO0FBR0Y7QUFBQTtFQUNFLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFHRjtBQW9CQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFqQkY7QUFxQkE7RUFDRSx3QkFBQTtBQWxCRjtBQXVCQTtFQUNFO0lBQ0UsYUFBQTtFQXBCRjs7RUFzQkE7SUFDRSxZQUFBO0VBbkJGOztFQXFCQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUFsQkY7QUFDRjtBQXNCQTtFQUNFO0lBQ0UsYUFBQTtFQXBCRjs7RUFzQkE7SUFDRSxnQkFBQTtFQW5CRjs7RUFxQkE7SUF4Q0EsZ0JBeUN3QjtJQXhDeEIsaUJBd0N3QjtJQUN0QixZQUFBO0VBakJGOztFQW1CQTtJQUNFLDBCQUFBO0VBaEJGO0FBQ0Y7QUFvQkE7RUFJRTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxhQUFBO0VBckJGOztFQXVCQTtJQUNFLGtCQUFBO0VBcEJGO0FBQ0Y7QUF1QkE7RUFDRSxtQkFBQTtBQXJCRiIsImZpbGUiOiJzaXRlLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmJvZHkge1xuICBjb2xvcjogYWxpY2VibHVlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIklNRy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBNb25vdHlwZSBDb3JzaXZhLCBtb25vc3BhY2U7XG4gIGNvbG9yOiAjZmY5ZWZkO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtM3B4IDNweCAjMDAwMDAwO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA1LCA1LCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwcmVtIDByZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG4gIGdyaWQtZ2FwOiAxZW07XG59XG5cbi53cmFwcGVyID4gZGl2IHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4jaGVhZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEvNTtcbn1cblxuI2NoZWNrRm9ybSB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4uZGlhZ3JhbSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZ3JpZC1jb2x1bW46IDM7XG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDUsIDUsIDUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbiN0YWJsZS13cmFwcGVyIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbn1cblxuI2NoZWNrRm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMHB4LCBhdXRvKTtcbiAgZ3JpZC1nYXA6IDFlbTtcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbiNjaGVja0Zvcm0gPiBkaXYge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbiNYUmxvY2F0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbiAgZ3JpZC1nYXA6IDFlbTtcbn1cblxuI1lTbG9jYXRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xuICBncmlkLWdhcDogMWVtO1xufVxuXG4jWFJsb2NhdGlvbiA+IGRpdiB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuI1lTbG9jYXRpb24gPiBkaXYge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbiNhcmVhX3gsICNhcmVhX3Ige1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG4jYXJlYV9zdWJtaXQsICNhcmVhX3kge1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG4jYXJlYV9zdWJtaXQge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cblxuI2Zvcm1TdWJtaXQge1xuICBmb250LXNpemU6IDIycHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUsIDUsIDUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jdGFibGUtc2Nyb2xsIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0zNnB4O1xufVxuXG4jdGFibGUtd3JhcHBlciB0YWJsZSB7XG4gIHdpZHRoOiA2NjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSg1LCA1LCA1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDczYmQ5O1xuICBwYWRkaW5nOiAxMHB4IDhweDtcbn1cblxudGQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogOXB4IDhweDtcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDhweDtcbiAgLyog0LLRi9GB0L7RgtCwINC00LvRjyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtCz0L4g0YHQutGA0L7Qu9C70LAgKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA0cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NWY4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2OTk5Zjtcbn1cblxuOjotd2Via2l0LXJlc2l6ZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDA7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwLjVyZW0gLTAuMjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLndyYXBwZXIgPiAqIHtcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMC41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjQ3cHgpIGFuZCAobWF4LXdpZHRoOiAxNzU2cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAjY2hlY2tGb3JtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cblxuICAjdGFibGUtd3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzdweCkgYW5kIChtYXgtd2lkdGg6IDEyNDdweCkge1xuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gICN0YWJsZS13cmFwcGVyIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICB9XG5cbiAgI21hbnVhbC1pbnB1dC1wYW5lbCB7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBmbGV4LWJhc2lzOiAyNTBweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cblxuICAjY2hlY2tGb3JtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM3cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gICNkaWFncmFtIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbi5wLXRvb2xiYXItZ3JvdXAtcmlnaHQgPiAqIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-site-layout',
                templateUrl: './site-layout.component.html',
                styleUrls: ['./site-layout.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]]
            }] }]; }, { someInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['someInput']
        }], d1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['svvg']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'laba4';
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        localStorage.clear();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"), "rel", "stylesheet", "integrity", "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1", "crossorigin", "anonymous"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-page/register-page.component */ "lH1B");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/site-layout/site-layout.component */ "Ftrl");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var _classes_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./classes/token.interceptor */ "t/IX");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");




















const appRoutes = [
    { path: '', component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutComponent"], children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
            { path: 'registration', component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"] },
        ] },
    { path: 'points', component: _layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_10__["SiteLayoutComponent"] },
    { path: '**', redirectTo: '/login' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            multi: true,
            useClass: _classes_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"]
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__["ToolbarModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__["ProgressSpinnerModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_15__["SliderModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
        _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
        _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutComponent"],
        _layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_10__["SiteLayoutComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__["ToolbarModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__["ProgressSpinnerModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_15__["SliderModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
                    _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
                    _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutComponent"],
                    _layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_10__["SiteLayoutComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__["ToolbarModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"],
                    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__["ProgressSpinnerModule"],
                    primeng_slider__WEBPACK_IMPORTED_MODULE_15__["SliderModule"],
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
                providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        multi: true,
                        useClass: _classes_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"]
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cauy":
/*!******************************!*\
  !*** ./src/app/user/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AuthService {
    constructor(http) {
        this.http = http;
        this.token = null;
        this.loginH = null;
        this.passwordH = null;
        this.url = 'http://localhost:10821';
        this.token = null;
    }
    login(user) {
        this.loginH = user.login;
        this.passwordH = user.password;
        return this.http.post(this.url + '/auth/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(({ token }) => {
            localStorage.setItem('auth-login', user.login);
            localStorage.setItem('auth-pass', user.password);
            this.setLogin(user.login);
        }, (err) => {
            console.log(err);
        }));
    }
    registration(user) {
        return this.http.post(this.url + '/auth/registration', user);
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    isAuthenticated() {
        return !!this.loginH;
    }
    logout() {
        this.setLogin(null);
        localStorage.clear();
    }
    setLogin(login) {
        this.loginH = login;
    }
    setPassword(password) {
        this.passwordH = password;
    }
    getLogin() {
        return this.loginH;
    }
    getPassword() {
        return this.passwordH;
    }
    getPoints() {
        return this.http.get(this.url + '/points');
    }
    addPoint(point) {
        return this.http.post(this.url + '/points', point);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lH1B":
/*!**********************************************************!*\
  !*** ./src/app/register-page/register-page.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user */ "cauy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RegisterPageComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_15_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_div_15_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
} }
function RegisterPageComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_23_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_div_23_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
} }
function RegisterPageComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords should be the same. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_32_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_div_32_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
} }
function RegisterPageComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.answer);
} }
class RegisterPageComponent {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.done = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
    onSubmit(form) {
        this.user = new _user_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.user.login = this.login;
        this.user.password = this.password;
        form.form.disable();
        this.aSub = this.auth.registration(this.user).subscribe(() => {
            this.router.navigate(['login'], {
                queryParams: {
                    registered: true
                }
            });
        }, error => {
            this.done = true;
            if (error.status == '401' || error.status == '400') {
                this.answer = 'The user already exists.';
            }
            form.form.enable();
        });
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 37, vars: 12, consts: [[1, "row"], [1, "col-md-6", "offset-md-3", "mt-4"], ["align", "center"], ["align", "center", 1, "border"], ["f", "ngForm"], [1, "form-group"], ["for", "login"], ["type", "text", "name", "login", "id", "login", "placeholder", "Enter username", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["loginv", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "placeholder", "Enter password", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordv", "ngModel"], ["for", "password2"], ["type", "password", "name", "password2", "id", "password2", "placeholder", "Repeat password", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password1", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "submit", 2, "background-color", "#ffd2db", "border-color", "#fff1fd", "color", "#6c6c6c", 3, "disabled", "click"], [1, "fas", "fa-sign-in-alt"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please fill in the information below to create your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_12_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterPageComponent_div_15_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterPageComponent_div_23_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Repeat password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_28_listener($event) { return ctx.password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterPageComponent_div_31_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegisterPageComponent_div_32_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterPageComponent_div_36_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", (_r5.valid || _r5.untouched) && ctx.password == ctx.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password != ctx.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid || _r3.invalid || _r0.disabled || ctx.password != ctx.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.done);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0.5rem -0.25rem;\n  justify-content: stretch;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin: 1rem 0rem 0.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin: 1rem 0rem 0.5rem;\n}\n\n.border[_ngcontent-%COMP%] {\n  font-family: monospace;\n  border-radius: 30px;\n  background-color: rgba(255, 204, 210, 0.91);\n  text-align: center;\n}\n\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n}\n\nrouter-outlet[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 1rem;\n}\n\n@media screen and (min-width: 1247px) {\n  #checkForm[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    background: #ffd2db;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media screen and (min-width: 737px) and (max-width: 1247px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    background: #7deeff;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n}\n\n@media (min-width: 737px) {\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n\n  .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 737px) {\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 15%;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n\n  .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n}\n\n.p-toolbar-group-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVdBO0VBQ0Usd0JBQUE7QUFSRjs7QUFXQTtFQUNFLHdCQUFBO0FBUkY7O0FBV0E7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBO0VBQ0Usd0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0FBUkY7O0FBWUE7RUFDRTtJQUNFLFlBQUE7RUFURjs7RUFXQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQVJGOztFQVVBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQVBGO0FBQ0Y7O0FBVUE7RUFDRTtJQUNFLGdCQUFBO0VBUkY7O0VBVUE7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFQRjs7RUFTQTtJQUNFLDJCQUFBO0VBTkY7QUFDRjs7QUFTQTtFQUNFO0lBQ0UsZ0JBQUE7RUFQRjs7RUFTQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFORjs7RUFRQTtJQUNFLGNBQUE7SUFDQSxVQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFO0lBQ0UsZ0JBQUE7RUFORjs7RUFRQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFMRjs7RUFPQTtJQUNFLGNBQUE7SUFDQSxVQUFBO0VBSkY7O0VBTUE7SUFDRSwyQkFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSxtQkFBQTtBQUpGIiwiZmlsZSI6InJlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlOiAwO1xyXG4kdGFibGV0OiA3MzdweDtcclxuJGRlc2t0b3A6IDEyNDdweDtcclxuXHJcbkBtaXhpbiBzaHJpbmstbGltaXQoJHdpZHRoKSB7XHJcbiAgbWluLXdpZHRoOiAkd2lkdGg7XHJcbiAgZmxleC1iYXNpczogJHdpZHRoO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gLTAuMjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICBtYXJnaW46IDFyZW0gMHJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW46IDFyZW0gMHJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwNCwgMjEwLCAwLjkxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyID4gKiB7XHJcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMC41cmVtO1xyXG59XHJcblxyXG5yb3V0ZXItb3V0bGV0IHtcclxuICBtYXJnaW46IDAgMC41MHJlbSAxcmVtO1xyXG59XHJcblxyXG4vLyBEZXNrdG9wXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRkZXNrdG9wKSB7XHJcbiAgI2NoZWNrRm9ybSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gICNoZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZkMmRiO1xyXG4gIH1cclxuICAuYm9yZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4vLyBUYWJsZXRcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHRhYmxldCkgYW5kIChtYXgtd2lkdGg6ICRkZXNrdG9wKSB7XHJcbiAgI2hlYWRlciB7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIH1cclxuICAjaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogIzdkZWVmZjtcclxuICB9XHJcbiAgLm10LTQge1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbiAgLm9mZnNldC1tZC0zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgfVxyXG4gIC5ib3JkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIH1cclxuICAuY29sLW1kLTYge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gIC5vZmZzZXQtbWQtMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIH1cclxuICAuYm9yZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICB9XHJcbiAgLmNvbC1tZC02IHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLm10LTQge1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucC10b29sYmFyLWdyb3VwLXJpZ2h0ID4gKiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-page',
                templateUrl: './register-page.component.html',
                styleUrls: ['./register-page.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [["routerLinkActive", "active"], ["routerLink", "login"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pT+O":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user */ "cauy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginPageComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_13_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_13_div_2_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
} }
function LoginPageComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_21_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_21_div_2_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
} }
function LoginPageComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.answer);
} }
class LoginPageComponent {
    constructor(auth, zone, router, route) {
        this.auth = auth;
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.done = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    onSubmit(form) {
        this.user = new _user_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.user.login = this.login;
        this.user.password = this.password;
        this.aSub = this.auth.login(this.user).subscribe(p => {
            this.router.navigate(['points']);
        }, error => {
            this.done = true;
            if (error.status == '401' || error.status == '400') {
                this.answer = 'User does not exist.';
            }
            form.form.enable();
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 26, vars: 8, consts: [[1, "row"], [1, "col-md-6", "offset-md-3", "mt-4"], ["align", "center"], ["f", "ngForm"], [1, "form-group"], ["for", "login"], ["type", "text", "placeholder", "Enter username", "name", "login", "id", "login", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["loginv", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "placeholder", "Enter password", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordv", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "submit", 2, "background-color", "#ffd2db", "border-color", "#fff1fd", "color", "#6c6c6c", 3, "disabled", "click"], [1, "fas", "fa-sign-in-alt"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginPageComponent_div_13_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_18_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginPageComponent_div_21_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginPageComponent_div_25_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid || _r3.invalid || _r0.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.done);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0.5rem -0.25rem;\n  justify-content: stretch;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin: 1rem 0rem 0.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin: 1rem 0rem 0.5rem;\n}\n\n.border[_ngcontent-%COMP%] {\n  font-family: monospace;\n  border-radius: 30px;\n  background-color: rgba(255, 204, 210, 0.91);\n  text-align: center;\n}\n\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n}\n\nrouter-outlet[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 1rem;\n}\n\n@media screen and (min-width: 1247px) {\n  #checkForm[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    background: #ffd2db;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media screen and (min-width: 737px) and (max-width: 1247px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    background: #7deeff;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n}\n\n@media (min-width: 737px) {\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n\n  .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 737px) {\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 15%;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n\n  .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n}\n\n.p-toolbar-group-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVdBO0VBQ0Usd0JBQUE7QUFSRjs7QUFXQTtFQUNFLHdCQUFBO0FBUkY7O0FBV0E7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBO0VBQ0Usd0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0FBUkY7O0FBYUE7RUFDRTtJQUNFLFlBQUE7RUFWRjs7RUFZQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQVRGOztFQVdBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQVJGO0FBQ0Y7O0FBWUE7RUFDRTtJQUNFLGdCQUFBO0VBVkY7O0VBYUE7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFWRjs7RUFZQTtJQUNFLDJCQUFBO0VBVEY7QUFDRjs7QUFZQTtFQUNFO0lBQ0UsZ0JBQUE7RUFWRjs7RUFZQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFURjs7RUFXQTtJQUNFLGNBQUE7SUFDQSxVQUFBO0VBUkY7QUFDRjs7QUFXQTtFQUNFO0lBQ0UsZ0JBQUE7RUFURjs7RUFXQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFSRjs7RUFVQTtJQUNFLGNBQUE7SUFDQSxVQUFBO0VBUEY7O0VBU0E7SUFDSSwyQkFBQTtFQU5KO0FBQ0Y7O0FBU0E7RUFDRSxtQkFBQTtBQVBGIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlOiAwO1xyXG4kdGFibGV0OiA3MzdweDtcclxuJGRlc2t0b3A6IDEyNDdweDtcclxuXHJcbkBtaXhpbiBzaHJpbmstbGltaXQoJHdpZHRoKSB7XHJcbiAgbWluLXdpZHRoOiAkd2lkdGg7XHJcbiAgZmxleC1iYXNpczogJHdpZHRoO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gLTAuMjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICBtYXJnaW46IDFyZW0gMHJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW46IDFyZW0gMHJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwNCwgMjEwLCAwLjkxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyID4gKiB7XHJcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMC41cmVtO1xyXG59XHJcblxyXG5yb3V0ZXItb3V0bGV0IHtcclxuICBtYXJnaW46IDAgMC41MHJlbSAxcmVtO1xyXG59XHJcblxyXG5cclxuLy8gRGVza3RvcFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xyXG4gICNjaGVja0Zvcm0ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAjaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZDJkYjtcclxuICB9XHJcbiAgLmJvcmRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYmxldFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0KSBhbmQgKG1heC13aWR0aDogJGRlc2t0b3ApIHtcclxuICAjaGVhZGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7IC8vIGZvcmNlcyB0YWJsZS1wYW5lbCBiZSBzY3JlZW4td2lkZSBvbiBuZXh0IHJvd1xyXG5cclxuICB9XHJcbiAgI2hlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICM3ZGVlZmY7XHJcbiAgfVxyXG4gIC5tdC00IHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW0haW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpe1xyXG4gIC5vZmZzZXQtbWQtMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuICAuYm9yZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICB9XHJcbiAgLmNvbC1tZC02IHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAub2Zmc2V0LW1kLTMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcbiAgLmJvcmRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG4gIC5jb2wtbWQtNiB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5tdC00IHtcclxuICAgICAgbWFyZ2luLXRvcDogNXJlbSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucC10b29sYmFyLWdyb3VwLXJpZ2h0ID4gKiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "t/IX":
/*!**********************************************!*\
  !*** ./src/app/classes/token.interceptor.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");



class TokenInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        let authReq;
        if (localStorage.getItem('auth-login') == null || localStorage.getItem('auth-login') == undefined) {
            authReq = req.clone({
                headers: req.headers.set('LO', encodeURIComponent(this.auth.getLogin()))
                    .set('PA', encodeURIComponent(this.auth.getPassword()))
            });
        }
        else {
            authReq = req.clone({
                headers: req.headers.set('LO', encodeURIComponent(localStorage.getItem('auth-login')))
                    .set('PA', encodeURIComponent(localStorage.getItem('auth-pass')))
            });
        }
        return next.handle(authReq);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map