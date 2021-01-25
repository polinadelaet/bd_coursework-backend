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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@charset \"UTF-8\";\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  \n  margin: 0;\n  \n  padding-left: 0;\n  \n  margin-top: 25px;\n  \n  background: #7deeff;\n  \n  height: 50px;\n  \n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  \n  background: #7deeff;\n  \n  color: #000000;\n  \n  padding: 0px 15px;\n  \n  font-family: arial;\n  \n  line-height: 50px;\n  \n  display: block;\n  border-right: 1px solid #efe4f3;\n  \n  -moz-transition: all 0.3s 0.01s ease;\n  \n  -o-transition: all 0.3s 0.01s ease;\n  -webkit-transition: all 0.3s 0.01s ease;\n}\na[_ngcontent-%COMP%]:hover {\n  background: #5594d4;\n  \n}\nli[_ngcontent-%COMP%] {\n  float: left;\n  \n}\nul[_ngcontent-%COMP%] {\n  margin: 0.5rem -0.25rem;\n  justify-content: stretch;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n}\nrouter-outlet[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 1rem;\n}\n@media screen and (min-width: 1247px) {\n  #checkForm[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media screen and (min-width: 737px) and (max-width: 1247px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    background: #7deeff;\n  }\n}\n@media screen and (max-width: 737px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    border-bottom: 10em;\n    background: #7deeff;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n}\n.p-toolbar-group-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxnQkFBQTtFQUFrQix5QkFBQTtFQUNsQixTQUFBO0VBQVcsa0JBQUE7RUFDWCxlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLGdCQUFBO0VBQWlCLHVCQUFBO0VBQ2pCLG1CQUFBO0VBQXFCLGlGQUFBO0VBQ3JCLFlBQUE7RUFBYyxnQkFBQTtBQVFoQjtBQU5BO0VBQ0UscUJBQUE7RUFBdUIsc0NBQUE7RUFDdkIsbUJBQUE7RUFBcUIsMkZBQUE7RUFDckIsY0FBQTtFQUFnQixxQkFBQTtFQUNoQixpQkFBQTtFQUFrQixtQkFBQTtFQUNsQixrQkFBQTtFQUFvQixlQUFBO0VBQ3BCLGlCQUFBO0VBQWtCLDRCQUFBO0VBQ2xCLGNBQUE7RUFDQSwrQkFBQTtFQUFpQywwQkFBQTtFQUNqQyxvQ0FBQTtFQUFzQyx5QkFBQTtFQUN0QyxrQ0FBQTtFQUNBLHVDQUFBO0FBaUJGO0FBZkE7RUFDRSxtQkFBQTtFQUFvQixpQ0FBQTtBQW1CdEI7QUFqQkE7RUFDRSxXQUFBO0VBQVkscURBQUE7QUFxQmQ7QUFDQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBRUY7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7QUFJQTtFQUNFO0lBQ0UsWUFBQTtFQURGOztFQUdBO0lBQ0Usa0JBQUE7RUFBRjtBQUNGO0FBSUE7RUFDRTtJQUNFLGdCQUFBO0VBRkY7O0VBTUE7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFIRjtBQUNGO0FBT0E7RUFJRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFSRjs7RUFXQTtJQUNFLDJCQUFBO0VBUkY7QUFDRjtBQVdBO0VBQ0UsbUJBQUE7QUFURiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgLyrRg9Cx0LjRgNCw0LXQvCDQvNCw0YDQutC10YDRiyDRgdC/0LjRgdC60LAqL1xuICBtYXJnaW46IDA7XG4gIC8q0YPQsdC40YDQsNC10Lwg0L7RgtGB0YLRg9C/0YsqL1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIC8q0YPQsdC40YDQsNC10Lwg0L7RgtGB0YLRg9C/0YsqL1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICAvKtC00LXQu9Cw0LXQvCDQvtGC0YHRgtGD0L8g0YHQstC10YDRhdGDKi9cbiAgYmFja2dyb3VuZDogIzdkZWVmZjtcbiAgLyrQtNC+0LHQsNCy0LvRj9C10Lwg0YTQvtC9INCy0YHQtdC80YMg0LzQtdC90Y4gKNC30LDQvNC10L3QuNCyINGN0YLQvtGCINC/0LDRgNCw0LzQtdGC0YAsINCy0Ysg0L/QvtC80LXQvdGP0LXRgtC1INGG0LLQtdGCINCy0YHQtdCz0L4g0LzQtdC90Y4pKi9cbiAgaGVpZ2h0OiA1MHB4O1xuICAvKtC30LDQtNCw0LXQvCDQstGL0YHQvtGC0YMqL1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvKtGD0LHQuNGA0LDQtdC8INC/0L7QtNGH0LXRgNC60LjQstCw0L3QuNC1INGC0LXQutGB0YLQsCDRgdGB0YvQu9C+0LoqL1xuICBiYWNrZ3JvdW5kOiAjN2RlZWZmO1xuICAvKtC00L7QsdCw0LLQu9GP0LXQvCDRhNC+0L0g0Log0L/Rg9C90LrRgtGDINC80LXQvdGOICjQt9Cw0LzQtdC90LjQsiDRjdGC0L7RgiDQv9Cw0YDQsNC80LXRgtGALCDQstGLINC/0L7QvNC10L3Rj9C10YLQtSDRhtCy0LXRgiDQstGB0LXRhSDQv9GD0L3QutGC0L7QsiDQvNC10L3RjikqL1xuICBjb2xvcjogIzAwMDAwMDtcbiAgLyrQvNC10L3Rj9C10Lwg0YbQstC10YIg0YHRgdGL0LvQvtC6Ki9cbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIC8q0LTQvtCx0LDQstC70Y/QtdC8INC+0YLRgdGC0YPQvyovXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgLyrQvNC10L3Rj9C10Lwg0YjRgNC40YTRgiovXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAvKtGA0L7QstC90Y/QtdC8INC80LXQvdGOINC/0L4g0LLQtdGA0YLQuNC60LDQu9C4Ki9cbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZmU0ZjM7XG4gIC8q0LTQvtCx0LDQstC70Y/QtdC8INCx0L7RgNC00Y7RgCDRgdC/0YDQsNCy0LAqL1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMDFzIGVhc2U7XG4gIC8q0LTQtdC70LDQtdC8INC/0LvQsNCy0L3Ri9C5INC/0LXRgNC10YXQvtC0Ki9cbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4wMXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjAxcyBlYXNlO1xufVxuXG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1OTRkNDtcbiAgLyrQtNC+0LHQsNCy0LvRj9C10Lwg0Y3RhNGE0LXQutGCINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LgqL1xufVxuXG5saSB7XG4gIGZsb2F0OiBsZWZ0O1xuICAvKtCg0LDQt9C80LXRidCw0LXQvCDRgdC/0LjRgdC+0Log0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L4g0LTQu9GPINGA0LXQsNC70LjQt9Cw0YbQuNC4INC80LXQvdGOKi9cbn1cblxudWwge1xuICBtYXJnaW46IDAuNXJlbSAtMC4yNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ud3JhcHBlciA+ICoge1xuICBtYXJnaW46IDAgMC4yNXJlbSAwLjVyZW07XG59XG5cbnJvdXRlci1vdXRsZXQge1xuICBtYXJnaW46IDAgMC41cmVtIDFyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNDdweCkge1xuICAjY2hlY2tGb3JtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cblxuICAjaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDczN3B4KSBhbmQgKG1heC13aWR0aDogMTI0N3B4KSB7XG4gICNoZWFkZXIge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gIH1cblxuICAjaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZDogIzdkZWVmZjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM3cHgpIHtcbiAgI2hlYWRlciB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMTBlbTtcbiAgICBiYWNrZ3JvdW5kOiAjN2RlZWZmO1xuICB9XG5cbiAgLm10LTQge1xuICAgIG1hcmdpbi10b3A6IDVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuLnAtdG9vbGJhci1ncm91cC1yaWdodCA+ICoge1xuICBtYXJnaW4tbGVmdDogMC40cmVtO1xufSJdfQ== */"] });
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
function SiteLayoutComponent_div_18_Template(rf, ctx) { if (rf & 1) {
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
function SiteLayoutComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
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
            // console.log(this.auth.token);
            console.log('auth true');
            console.log(localStorage.getItem('auth-login'));
            console.log('auth true');
            this.auth.getPoints().subscribe(data => {
                this.pointsList = data;
            });
        }
        else {
            console.log('auth false');
            this.router.navigate(['/login']);
        }
    }
    refresh() {
        this.auth.getPoints().subscribe(data => {
            this.pointsList = data;
        });
    }
    handleChange(e) {
        const svgDiagram = jquery__WEBPACK_IMPORTED_MODULE_1__('#svgDiagram');
        svgDiagram.remove();
        const svg = jquery__WEBPACK_IMPORTED_MODULE_1__('#diagram');
        svg.append(`<svg class="svvg" #svvg id="svgDiagram" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <line x1="0" y1="150" x2="300" y2="150" stroke="#000000"></line>
      <line x1="150" y1="0" x2="150" y2="300" stroke="#000000"></line>

      <line x1="250" y1="145" x2="250" y2="155" stroke="#000000"></line>
      <line x1="200" y1="145" x2="200" y2="155" stroke="#000000"></line>
      <line x1="100" y1="145" x2="100" y2="155" stroke="#000000"></line>
      <line x1="50" y1="145" x2="50" y2="155" stroke="#000000"></line>

      <line x1="145" y1="50" x2="155" y2="50" stroke="#000000"></line>
      <line x1="145" y1="100" x2="155" y2="100" stroke="#000000"></line>
      <line x1="145" y1="200" x2="155" y2="200" stroke="#000000"></line>
      <line x1="145" y1="250" x2="155" y2="250" stroke="#000000"></line>

      <text x="245" y="140" stroke="#000000">R</text>
      <text x="185" y="140" stroke="#000000">R/2</text>
      <text x="77" y="140" stroke="#000000">-R/2</text>
      <text x="37" y="140" stroke="#000000">-R</text>
      <text x="156" y="55" stroke="#000000">R</text>
      <text x="156" y="105" stroke="#000000">R/2</text>
      <text x="156" y="205" stroke="#000000">-R/2</text>
      <text x="156" y="255" stroke="#000000">-R</text>
      <polygon points="300,150 295,155 295, 145" fill="#000720" stroke="#000000"></polygon>
      <polygon points="150,0 145,5 155,5" fill="#000720" stroke="#000000"></polygon>

      <rect x="150" y="100" width="100" height="50" fill-opacity="0.4" stroke="navy" fill="blue"></rect>
      <polygon points="150,150 100,150 150,200" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>
      <path d="M150 150 L 250 150 C 250 150 250 250 150 250 L Z" fill-opacity="0.4" stroke="navy" fill="blue"></path>
    </svg>`);
    }
    onClick(e) {
        if (this.r !== undefined && this.r > 0) {
            this.done = false;
            const svg = jquery__WEBPACK_IMPORTED_MODULE_1__('svg');
            const offset = jquery__WEBPACK_IMPORTED_MODULE_1__('.svvg').offset();
            const relativeX = (e.pageX - offset.left);
            const relativeY = (e.pageY - offset.top);
            const basis = 100 / this.r;
            // tslint:disable-next-line:variable-name
            const x_val = ((relativeX - 150) / basis).toFixed(2);
            // tslint:disable-next-line:variable-name
            const y_val = ((150 - relativeY) / basis).toFixed(2);
            this.point = new _point_point__WEBPACK_IMPORTED_MODULE_2__["Point"]();
            this.point.x = +x_val;
            this.point.y = +y_val;
            this.point.r = this.r;
            this.auth.addPoint(this.point).subscribe((result) => {
                if (result.result == 'true') {
                    this.d1.nativeElement.insertAdjacentHTML('beforeend', `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="0.7" fill="${'green'}"></circle>`);
                    //  this.d1.nativeElement += `<circle r="3" cx="${relativeX}" cy="${relativeY}" fill-opacity="0.7" fill="${'green'}"></circle>`;
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
                    this.auth.getPoints().subscribe(data => {
                        this.pointsList = data;
                    });
                }
            }, error => {
                console.log('ошибка site-layout');
            }, () => console.log('complete site-layout'));
            // tslint:disable-next-line:max-line-length
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
            console.log('x =' + this.point.x);
            console.log('y =' + this.point.y);
            console.log('r =' + this.point.r);
            this.auth.addPoint(this.point).subscribe((result) => {
                this.auth.getPoints().subscribe(data => {
                    this.pointsList = data;
                });
                this.auth.getPoints().subscribe(data => {
                    this.pointsList = data;
                });
            }, error => {
                console.log('ошибка site-layout');
            }, () => console.log('complete site-layout'));
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
    } }, decls: 77, vars: 13, consts: [[1, "p-toolbar-group-left"], ["routerLink", "login", "pButton", "", "pRipple", "", "type", "button", "label", "Logout", 1, "p-button-rounded", "p-button-danger", 3, "click"], [1, "wrapper"], ["method", "post", "action", "", "id", "checkForm"], ["f", "ngForm"], ["id", "XRlocation"], ["id", "area_x", 1, "border"], ["for", "coordinateX"], ["id", "coordinateX", "name", "coordinateX", 3, "ngModel", "min", "max", "step", "ngModelChange"], ["id", "area_r", 1, "border"], ["for", "coordinateR"], ["id", "coordinateR", "name", "coordinateR", 3, "ngModel", "min", "max", "ngModelChange", "onChange"], [4, "ngIf"], ["id", "YSlocation"], ["id", "area_y", 1, "border"], ["for", "coordinateY"], ["id", "coordinateY", "name", "coordinateR", 3, "ngModel", "min", "max", "step", "ngModelChange"], [1, "coordinateYE"], ["id", "area_submit"], ["type", "submit", "id", "formSubmit", "value", "Check", 3, "click"], ["id", "diagram", 1, "da", 3, "click"], ["id", "svgDiagram", "xmlns", "http://www.w3.org/2000/svg", "width", "300", "height", "300", 1, "svvg"], ["svvg", ""], ["x1", "0", "y1", "150", "x2", "300", "y2", "150", "stroke", "#000000"], ["x1", "150", "y1", "0", "x2", "150", "y2", "300", "stroke", "#000000"], ["x1", "250", "y1", "145", "x2", "250", "y2", "155", "stroke", "#000000"], ["x1", "200", "y1", "145", "x2", "200", "y2", "155", "stroke", "#000000"], ["x1", "100", "y1", "145", "x2", "100", "y2", "155", "stroke", "#000000"], ["x1", "50", "y1", "145", "x2", "50", "y2", "155", "stroke", "#000000"], ["x1", "145", "y1", "50", "x2", "155", "y2", "50", "stroke", "#000000"], ["x1", "145", "y1", "100", "x2", "155", "y2", "100", "stroke", "#000000"], ["x1", "145", "y1", "200", "x2", "155", "y2", "200", "stroke", "#000000"], ["x1", "145", "y1", "250", "x2", "155", "y2", "250", "stroke", "#000000"], ["x", "245", "y", "140", "stroke", "#000000"], ["x", "185", "y", "140", "stroke", "#000000"], ["x", "77", "y", "140", "stroke", "#000000"], ["x", "37", "y", "140", "stroke", "#000000"], ["x", "156", "y", "55", "stroke", "#000000"], ["x", "156", "y", "105", "stroke", "#000000"], ["x", "156", "y", "205", "stroke", "#000000"], ["x", "156", "y", "255", "stroke", "#000000"], ["points", "300,150 295,155 295, 145", "fill", "#000720", "stroke", "#000000"], ["points", "150,0 145,5 155,5", "fill", "#000720", "stroke", "#000000"], ["x", "150", "y", "100", "width", "100", "height", "50", "fill-opacity", "0.4", "stroke", "navy", "fill", "blue"], ["points", "150,150 100,150 150,200", "fill-opacity", "0.4", "stroke", "navy", "fill", "blue"], ["d", "M150 150 L 250 150 C 250 150 250 250 150 250 L Z", "fill-opacity", "0.4", "stroke", "navy", "fill", "blue"], ["id", "table-wrapper"], ["id", "table-scroll"], ["id", "tableWithResults"], [4, "ngFor", "ngForOf"]], template: function SiteLayoutComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Choose a parameter R: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_p_slider_ngModelChange_17_listener($event) { return ctx.r = $event; })("onChange", function SiteLayoutComponent_Template_p_slider_onChange_17_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SiteLayoutComponent_div_18_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose a parameter Y: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SiteLayoutComponent_Template_p_slider_ngModelChange_24_listener($event) { return ctx.y = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_input_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteLayoutComponent_Template_div_click_29_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "line", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "line", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "line", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "line", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "text", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "text", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "R/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "text", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "-R/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "text", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "-R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "text", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "text", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "R/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "text", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "-R/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "text", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "-R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "polygon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "polygon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rect", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "polygon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "RESULT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SiteLayoutComponent_tr_76_Template, 9, 4, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.x)("min", -5)("max", 3)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.r)("min", -5)("max", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.y)("min", -5)("max", 3)("step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pointsList);
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], primeng_slider__WEBPACK_IMPORTED_MODULE_8__["Slider"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["@charset \"UTF-8\";\nbody[_ngcontent-%COMP%] {\n  color: aliceblue;\n  font-size: 22px;\n  min-width: 50%;\n  background-size: cover;\n}\nheader[_ngcontent-%COMP%] {\n  font-family: Monotype Corsiva, monospace;\n  color: #ff9efd;\n  line-height: 125%;\n  font-size: 50px;\n  font-weight: bold;\n  font-style: oblique;\n  text-align: center;\n  text-shadow: -1px -3px 3px #000000;\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  background-color: rgba(5, 5, 5, 0.3);\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-auto-rows: minmax(100px, auto);\n  grid-gap: 1em;\n}\n.wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n#header[_ngcontent-%COMP%] {\n  grid-column: 1/5;\n}\n#checkForm[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.diagram[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n  height: 300px;\n  grid-column: 3;\n  border: 10px solid rgba(5, 5, 5, 0.3);\n  border-radius: 50px;\n}\n#table-wrapper[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n}\n#checkForm[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: minmax(10px, auto);\n  grid-gap: 1em;\n  justify-items: stretch;\n  align-items: stretch;\n}\n#checkForm[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n#XRlocation[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: minmax(100px, auto);\n  grid-gap: 1em;\n}\n#YSlocation[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: minmax(100px, auto);\n  grid-gap: 1em;\n}\n#XRlocation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n#YSlocation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n#area_x[_ngcontent-%COMP%], #area_r[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\n#area_submit[_ngcontent-%COMP%], #area_y[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\n#area_submit[_ngcontent-%COMP%] {\n  justify-self: center;\n  grid-column: 1/3;\n}\n#formSubmit[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 120px;\n  height: 70px;\n  background: rgba(5, 5, 5, 0.3);\n  border-radius: 30px;\n  color: #ffffff;\n  outline: none;\n}\n#table-scroll[_ngcontent-%COMP%] {\n  height: 180px;\n  overflow: auto;\n  margin-top: -36px;\n}\n#table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 660px;\n  background: rgba(5, 5, 5, 0.3);\n  border-radius: 30px;\n  text-align: center;\n}\nth[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #ffffff;\n  border-bottom: 2px solid #d73bd9;\n  padding: 10px 8px;\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 9px 8px;\n  transition: 0.3s linear;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n  \n  display: none;\n  width: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  background-repeat: no-repeat;\n  width: 5px;\n  height: 4px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #ffffff;\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 30px;\n  background-color: #ff55f8;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #56999f;\n}\n[_ngcontent-%COMP%]::-webkit-resizer {\n  background-repeat: no-repeat;\n  width: 4px;\n  height: 0;\n}\n.wrapper[_ngcontent-%COMP%] {\n  margin: 0.5rem -0.25rem;\n  justify-content: stretch;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n}\n@media screen and (min-width: 1247px) {\n  #checkForm[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n\n  #table-wrapper[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media screen and (min-width: 737px) and (max-width: 1247px) {\n  #table-wrapper[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  #manual-input-panel[_ngcontent-%COMP%] {\n    min-width: 250px;\n    flex-basis: 250px;\n    flex-grow: 1;\n  }\n\n  #checkForm[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media screen and (max-width: 737px) {\n  .wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  #diagram[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n}\n.p-toolbar-group-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaXRlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsc0JBQUE7QUFDRjtBQUVBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBQUY7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFBYSx1Q0FBQTtFQUNiLGFBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTtFQUNFLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0E7RUFFRSxtQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFDQTtFQUNFLHlCQUFBO0FBRUY7QUFDQTtFQUNFLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFFRjtBQXFCQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBbEJGO0FBc0JBO0VBQ0Usd0JBQUE7QUFuQkY7QUF3QkE7RUFDRTtJQUNFLFlBQUE7RUFyQkY7O0VBdUJBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQXBCRjtBQUNGO0FBd0JBO0VBQ0U7SUFDRSxnQkFBQTtFQXRCRjs7RUF3QkE7SUFuQ0EsZ0JBb0N3QjtJQW5DeEIsaUJBbUN3QjtJQUN0QixZQUFBO0VBcEJGOztFQXNCQTtJQUNFLDBCQUFBO0VBbkJGO0FBQ0Y7QUF1QkE7RUFJRTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7RUF4QkY7O0VBMEJBO0lBQ0Usa0JBQUE7RUF2QkY7QUFDRjtBQTBCQTtFQUNFLG1CQUFBO0FBeEJGIiwiZmlsZSI6InNpdGUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYm9keSB7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBNb25vdHlwZSBDb3JzaXZhLCBtb25vc3BhY2U7XG4gIGNvbG9yOiAjZmY5ZWZkO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtM3B4IDNweCAjMDAwMDAwO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA1LCA1LCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG4gIGdyaWQtZ2FwOiAxZW07XG59XG5cbi53cmFwcGVyID4gZGl2IHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4jaGVhZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEvNTtcbn1cblxuI2NoZWNrRm9ybSB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4uZGlhZ3JhbSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZ3JpZC1jb2x1bW46IDM7XG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDUsIDUsIDUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbiN0YWJsZS13cmFwcGVyIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbn1cblxuI2NoZWNrRm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMHB4LCBhdXRvKTtcbiAgZ3JpZC1nYXA6IDFlbTtcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbiNjaGVja0Zvcm0gPiBkaXYge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbiNYUmxvY2F0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbiAgZ3JpZC1nYXA6IDFlbTtcbn1cblxuI1lTbG9jYXRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xuICBncmlkLWdhcDogMWVtO1xufVxuXG4jWFJsb2NhdGlvbiA+IGRpdiB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuI1lTbG9jYXRpb24gPiBkaXYge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbiNhcmVhX3gsICNhcmVhX3Ige1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG4jYXJlYV9zdWJtaXQsICNhcmVhX3kge1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG4jYXJlYV9zdWJtaXQge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cblxuI2Zvcm1TdWJtaXQge1xuICBmb250LXNpemU6IDIycHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUsIDUsIDUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jdGFibGUtc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxODBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0zNnB4O1xufVxuXG4jdGFibGUtd3JhcHBlciB0YWJsZSB7XG4gIHdpZHRoOiA2NjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSg1LCA1LCA1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDczYmQ5O1xuICBwYWRkaW5nOiAxMHB4IDhweDtcbn1cblxudGQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogOXB4IDhweDtcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDhweDtcbiAgLyog0LLRi9GB0L7RgtCwINC00LvRjyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtCz0L4g0YHQutGA0L7Qu9C70LAgKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA0cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NWY4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2OTk5Zjtcbn1cblxuOjotd2Via2l0LXJlc2l6ZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDA7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwLjVyZW0gLTAuMjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLndyYXBwZXIgPiAqIHtcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMC41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjQ3cHgpIHtcbiAgI2NoZWNrRm9ybSB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG5cbiAgI3RhYmxlLXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzM3cHgpIGFuZCAobWF4LXdpZHRoOiAxMjQ3cHgpIHtcbiAgI3RhYmxlLXdyYXBwZXIge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gIH1cblxuICAjbWFudWFsLWlucHV0LXBhbmVsIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGZsZXgtYmFzaXM6IDI1MHB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuXG4gICNjaGVja0Zvcm0ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzdweCkge1xuICAud3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gICNkaWFncmFtIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbi5wLXRvb2xiYXItZ3JvdXAtcmlnaHQgPiAqIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcbn0iXX0= */"] });
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

/***/ "My0d":
/*!******************************************************!*\
  !*** ./src/app/points-page/points-page.component.ts ***!
  \******************************************************/
/*! exports provided: PointsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsPageComponent", function() { return PointsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PointsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PointsPageComponent.ɵfac = function PointsPageComponent_Factory(t) { return new (t || PointsPageComponent)(); };
PointsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PointsPageComponent, selectors: [["app-points-page"]], decls: 0, vars: 0, template: function PointsPageComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2ludHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-points-page',
                templateUrl: './points-page.component.html',
                styleUrls: ['./points-page.component.scss']
            }]
    }], function () { return []; }, null); })();


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
        // const potentialToken = localStorage.getItem('auth-token');
        //
        // if (potentialToken !== null) {
        //   this.auth.setToken(potentialToken);
        // }
    }
    ngOnDestroy() {
        localStorage.clear();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"), "rel", "stylesheet", "integrity", "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1", "crossorigin", "anonymous"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
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
/* harmony import */ var _points_page_points_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./points-page/points-page.component */ "My0d");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register-page/register-page.component */ "lH1B");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/site-layout/site-layout.component */ "Ftrl");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var _classes_token_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/token.interceptor */ "t/IX");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");





















const appRoutes = [
    { path: '', component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"], children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
            { path: 'registration', component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"] },
        ] },
    // {path: '', component: SiteLayoutComponent, children: [
    //     {path: 'points', component: PointsPageComponent}
    //   ]},
    { path: 'points', component: _layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_11__["SiteLayoutComponent"] },
    { path: '**', redirectTo: '/login' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            multi: true,
            useClass: _classes_token_interceptor__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptor"]
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__["ToolbarModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_16__["SliderModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
        _points_page_points_page_component__WEBPACK_IMPORTED_MODULE_8__["PointsPageComponent"],
        _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"],
        _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"],
        _layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_11__["SiteLayoutComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__["ToolbarModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_16__["SliderModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
                    _points_page_points_page_component__WEBPACK_IMPORTED_MODULE_8__["PointsPageComponent"],
                    _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"],
                    _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"],
                    _layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_11__["SiteLayoutComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__["ToolbarModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
                    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
                    primeng_slider__WEBPACK_IMPORTED_MODULE_16__["SliderModule"],
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
                providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        multi: true,
                        useClass: _classes_token_interceptor__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptor"]
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
        console.log('in auth l= ' + user.login);
        console.log('in auth p= ' + user.password);
        return this.http.post(this.url + '/auth/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(({ token }) => {
            //  localStorage.setItem('auth-token', user.login);
            console.log('skipidi');
            localStorage.setItem('auth-login', user.login);
            localStorage.setItem('auth-pass', user.password);
            console.log(localStorage.getItem('auth-login'));
            this.setLogin(user.login);
        }, (err) => {
            console.log('ошибка');
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
        return this.http.post(this.url + '/points/add-point', point);
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








function RegisterPageComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_12_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_div_12_div_2_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
} }
function RegisterPageComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_19_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_div_19_div_2_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
} }
class RegisterPageComponent {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
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
            form.form.enable();
        });
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 23, vars: 7, consts: [[1, "row"], [1, "col-md-6", "offset-md-3", "mt-4"], ["f", "ngForm"], [1, "form-group"], ["for", "login"], ["type", "text", "name", "login", "id", "login", "placeholder", "Enter username", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["loginv", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "placeholder", "Password", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordv", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fas", "fa-sign-in-alt"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegisterPageComponent_div_12_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterPageComponent_div_19_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid || _r3.invalid || _r0.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0.5rem -0.25rem;\n  justify-content: stretch;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n}\n\nrouter-outlet[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 1rem;\n}\n\n@media screen and (min-width: 1247px) {\n  #checkForm[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n@media screen and (min-width: 737px) and (max-width: 1247px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    background: #7deeff;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n}\n\n@media (min-width: 737px) {\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n}\n\n@media (min-width: 737px) {\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n}\n\n@media (min-width: 737px) {\n  .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 737px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    border-bottom: 10em;\n    background: #7deeff;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    display: block;\n    width: 50%;\n  }\n}\n\n.p-toolbar-group-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVZGOztBQWNBO0VBQ0Usd0JBQUE7QUFYRjs7QUFjQTtFQUNFLHFCQUFBO0FBWEY7O0FBZ0JBO0VBQ0U7SUFDRSxZQUFBO0VBYkY7O0VBZUE7SUFDRSxrQkFBQTtFQVpGO0FBQ0Y7O0FBZ0JBO0VBQ0U7SUFDRSxnQkFBQTtFQWRGOztFQWtCQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQWZGOztFQWlCQTtJQUNFLDJCQUFBO0VBZEY7QUFDRjs7QUFrQkE7RUFDRTtJQUNFLGdCQUFBO0VBaEJGO0FBQ0Y7O0FBa0JBO0VBQ0U7SUFDRSxnQkFBQTtFQWhCRjtBQUNGOztBQWtCQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFVBQUE7RUFoQkY7QUFDRjs7QUFvQkE7RUFJRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFyQkY7O0VBd0JBO0lBQ0UsMkJBQUE7RUFyQkY7O0VBd0JBO0lBQ0UsY0FBQTtJQUNBLFVBQUE7RUFyQkY7QUFDRjs7QUF3QkE7RUFDRSxtQkFBQTtBQXRCRiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1vYmlsZTogMDtcclxuJHRhYmxldDogNzM3cHg7XHJcbiRkZXNrdG9wOiAxMjQ3cHg7XHJcblxyXG4vLyBNaXhpbnNcclxuQG1peGluIHNocmluay1saW1pdCgkd2lkdGgpIHtcclxuICBtaW4td2lkdGg6ICR3aWR0aDtcclxuICBmbGV4LWJhc2lzOiAkd2lkdGg7XHJcbn1cclxuXHJcbi8vIFBhbmVsIGNvbnRhaW5lclxyXG51bCB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gLTAuMjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoOyAvLyBob3Jpem9udGFsIGFsaWdubWVudFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8vIG9uIHRvcCBvZiBpdGVtc1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLy8gUGFuZWxzXHJcbi53cmFwcGVyID4gKiB7XHJcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMC41cmVtO1xyXG59XHJcblxyXG5yb3V0ZXItb3V0bGV0IHtcclxuICBtYXJnaW46IDAgMC41MHJlbSAxcmVtO1xyXG59XHJcblxyXG5cclxuLy8gRGVza3RvcFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xyXG4gICNjaGVja0Zvcm0ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAjaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYmxldFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0KSBhbmQgKG1heC13aWR0aDogJGRlc2t0b3ApIHtcclxuICAjaGVhZGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7IC8vIGZvcmNlcyB0YWJsZS1wYW5lbCBiZSBzY3JlZW4td2lkZSBvbiBuZXh0IHJvd1xyXG5cclxuICB9XHJcblxyXG4gICNoZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2RlZWZmO1xyXG4gIH1cclxuICAubXQtNCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbiAgLm9mZnNldC1tZC0zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgfX1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAub2Zmc2V0LW1kLTMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICB9fVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcclxuICAuY29sLW1kLTYge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTW9iaWxlXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAvLyNhcmVhX3gsICNhcmVhX3ksICNhcmVhX3J7XHJcbiAgLy8gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAvL31cclxuICAjaGVhZGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7IC8vIGZvcmNlcyB0YWJsZS1wYW5lbCBiZSBzY3JlZW4td2lkZSBvbiBuZXh0IHJvd1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxMGVtO1xyXG4gICAgYmFja2dyb3VuZDogIzdkZWVmZjtcclxuICB9XHJcblxyXG4gIC5tdC00IHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW0haW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4ucC10b29sYmFyLWdyb3VwLXJpZ2h0ID4gKiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbVxyXG59XHJcbiJdfQ== */"] });
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








function LoginPageComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_12_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_12_div_2_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
} }
function LoginPageComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " It is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_19_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginPageComponent_div_19_div_2_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
} }
function LoginPageComponent_div_23_Template(rf, ctx) { if (rf & 1) {
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
        // this.route.queryParams.subscribe((params: Params) => {
        //   if (params['registered']) {
        //     // теперь вы можете зайти в систему используя свои данные
        //   } else if (params['accessDenied']) {
        //     // для начала авторизуйтесь
        //   }
        // });
    }
    ngOnDestroy() {
        // if (this.aSub) {
        //   this.aSub.unsubscribe();
        // }
    }
    onSubmit(form) {
        //  form.form.disable();
        this.user = new _user_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.user.login = this.login;
        this.user.password = this.password;
        this.aSub = this.auth.login(this.user).subscribe(p => {
            this.router.navigate(['points']);
        }, error => {
            this.done = true;
            if (error.status == '401' || error.status == '400') {
                this.answer = 'Такого пользователя не существует';
            }
            form.form.enable();
        }, () => console.log('complete login-page'));
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 24, vars: 8, consts: [[1, "row"], [1, "col-md-6", "offset-md-3", "mt-4"], ["f", "ngForm"], [1, "form-group"], ["for", "login"], ["type", "text", "name", "login", "id", "login", "placeholder", "Enter username", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["loginv", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "placeholder", "Password", "required", "", "minlength", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordv", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fas", "fa-sign-in-alt"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginPageComponent_div_12_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginPageComponent_div_19_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginPageComponent_div_23_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid || _r3.invalid || _r0.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.done);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0.5rem -0.25rem;\n  justify-content: stretch;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n}\n\nrouter-outlet[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 1rem;\n}\n\n@media screen and (min-width: 1247px) {\n  #checkForm[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n@media screen and (min-width: 737px) and (max-width: 1247px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  #header[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    background: #7deeff;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n}\n\n@media (min-width: 737px) {\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n}\n\n@media (min-width: 737px) {\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n}\n\n@media (min-width: 737px) {\n  .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 737px) {\n  #header[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    border-bottom: 10em;\n    background: #7deeff;\n  }\n\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    display: block;\n    width: 50%;\n  }\n}\n\n.p-toolbar-group-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVhGOztBQWVBO0VBQ0Usd0JBQUE7QUFaRjs7QUFlQTtFQUNFLHFCQUFBO0FBWkY7O0FBaUJBO0VBQ0U7SUFDRSxZQUFBO0VBZEY7O0VBZ0JBO0lBQ0Usa0JBQUE7RUFiRjtBQUNGOztBQWlCQTtFQUNFO0lBQ0UsZ0JBQUE7RUFmRjs7RUFtQkE7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFoQkY7O0VBa0JBO0lBQ0UsMkJBQUE7RUFmRjtBQUNGOztBQW1CQTtFQUNBO0lBQ0UsZ0JBQUE7RUFqQkE7QUFDRjs7QUFtQkE7RUFDQTtJQUNFLGdCQUFBO0VBakJBO0FBQ0Y7O0FBbUJBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsVUFBQTtFQWpCRjtBQUNGOztBQXFCQTtFQUlFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQXRCRjs7RUF5QkE7SUFDRSwyQkFBQTtFQXRCRjs7RUF5QkE7SUFDRSxjQUFBO0lBQ0EsVUFBQTtFQXRCRjtBQUNGOztBQXlCQTtFQUNFLG1CQUFBO0FBdkJGIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJG1vYmlsZTogMDtcclxuJHRhYmxldDogNzM3cHg7XHJcbiRkZXNrdG9wOiAxMjQ3cHg7XHJcblxyXG4vLyBNaXhpbnNcclxuQG1peGluIHNocmluay1saW1pdCgkd2lkdGgpIHtcclxuICBtaW4td2lkdGg6ICR3aWR0aDtcclxuICBmbGV4LWJhc2lzOiAkd2lkdGg7XHJcbn1cclxuXHJcbi8vIFBhbmVsIGNvbnRhaW5lclxyXG51bCB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gLTAuMjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoOyAvLyBob3Jpem9udGFsIGFsaWdubWVudFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8vIG9uIHRvcCBvZiBpdGVtc1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLy8gUGFuZWxzXHJcbi53cmFwcGVyID4gKiB7XHJcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMC41cmVtO1xyXG59XHJcblxyXG5yb3V0ZXItb3V0bGV0IHtcclxuICBtYXJnaW46IDAgMC41MHJlbSAxcmVtO1xyXG59XHJcblxyXG5cclxuLy8gRGVza3RvcFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xyXG4gICNjaGVja0Zvcm0ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAjaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYmxldFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0KSBhbmQgKG1heC13aWR0aDogJGRlc2t0b3ApIHtcclxuICAjaGVhZGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7IC8vIGZvcmNlcyB0YWJsZS1wYW5lbCBiZSBzY3JlZW4td2lkZSBvbiBuZXh0IHJvd1xyXG5cclxuICB9XHJcblxyXG4gICNoZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2RlZWZmO1xyXG4gIH1cclxuICAubXQtNCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbi5vZmZzZXQtbWQtMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufX1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuLm9mZnNldC1tZC0zIHtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59fVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcclxuICAuY29sLW1kLTYge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTW9iaWxlXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAvLyNhcmVhX3gsICNhcmVhX3ksICNhcmVhX3J7XHJcbiAgLy8gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAvL31cclxuICAjaGVhZGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7IC8vIGZvcmNlcyB0YWJsZS1wYW5lbCBiZSBzY3JlZW4td2lkZSBvbiBuZXh0IHJvd1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxMGVtO1xyXG4gICAgYmFja2dyb3VuZDogIzdkZWVmZjtcclxuICB9XHJcblxyXG4gIC5tdC00IHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW0haW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4ucC10b29sYmFyLWdyb3VwLXJpZ2h0ID4gKiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbVxyXG59XHJcbiJdfQ== */"] });
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
        // }
        console.log(this.auth.getLogin());
        console.log(this.auth.getPassword());
        console.log('v tokene');
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