(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <div class=\"container\">\n      <div class=\"row d-none\">\n        <div class=\"col-sm-6\">\n          <div class=\"form-inline\">\n            <input\n              class=\"form-control mr-sm-2\"\n              #state\n              type=\"search\"\n              placeholder=\"Send State\"\n              aria-label=\"Search\"\n            />\n            <button\n              class=\"btn btn-secondary my-2 my-sm-0\"\n              (click)=\"sendState(state.value)\"\n            >\n              Send State\n            </button>\n          </div>\n          <div>\n            <button\n              class=\"btn btn-success my-2 my-sm-0\"\n              (click)=\"simulateString()\"\n            >\n              Simulate String\n            </button>\n            <button\n              class=\"btn btn-success my-2 my-sm-0\"\n              (click)=\"simulateMsg(true)\"\n            >\n              Simulate 2 True\n            </button>\n            <button\n              class=\"btn btn-warning my-2 my-sm-0\"\n              (click)=\"simulateMsg(false)\"\n            >\n              Simulate 2 False\n            </button>\n          </div>\n          <div>\n            <button\n              class=\"btn btn-success my-2 my-sm-0\"\n              (click)=\"simulateAMsg(true)\"\n            >\n              Simulate 11 True\n            </button>\n            <button\n              class=\"btn btn-warning my-2 my-sm-0\"\n              (click)=\"simulateAMsg(false)\"\n            >\n              Simulate 11 False\n            </button>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <card-stats\n                label=\"Sprint\"\n                value=\"60\"\n                color=\"text-warning\"\n                icon=\"fa-running\"\n              ></card-stats>\n            </div>\n            <div class=\"col-sm-6\">\n              <card-stats\n                label=\"Passing\"\n                value=\"90\"\n                color=\"text-primary\"\n                icon=\"fa-futbol\"\n              ></card-stats>\n            </div>\n          </div>\n\n          <skill-progress label=\"Dribbling\" progress=\"30\"></skill-progress>\n          <skill-progress label=\"Passing\" progress=\"80\"></skill-progress>\n          <skill-progress label=\"Skills\" progress=\"40\"></skill-progress>\n          <skill-progress label=\"Shooting\" progress=\"90\"></skill-progress>\n          <skill-progress label=\"Defense\" progress=\"70\"></skill-progress>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div id=\"content\">\n            <!-- Web Components go here -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"footer\">\n      <div class=\"container-fluid\">\n        <ul class=\"nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#/news/newsPage\">News</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#/team/fixture\">Teams</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#/players/cards\">Players</a>\n          </li>\n        </ul>\n        <div class=\" copyright\">\n          © <i class=\"far fa-futbol\"></i> EDGE FC\n          <i class=\" tim-icons icon-heart-2\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <header>\n  <nav class=\"navbar navbar-expand-md fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">EDGE FC</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n      aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#/team/fixture\">Teams</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#/players/cards\">Players</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"sendState('State change from Club Root')\">Send Seate</a>\n        </li>>\n      </ul>\n      <div class=\"form-inline\">\n        <input class=\"form-control mr-sm-2\" #state type=\"search\" placeholder=\"Send State\" aria-label=\"Search\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" (click)=\"sendState(state.value)\">Send State</button>\n      </div>\n    </div>\n  </nav>\n</header> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-dark\" data-color=\"orange\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#/news/newsPage\"><i class=\"far fa-futbol\"></i>EDGE FC</a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarColor01\"\n      aria-controls=\"navbarColor01\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#/news/newsPage\">News</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#/team/fixture\">Teams</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#/players/cards\">Players</a>\n        </li>\n      </ul>\n      <!--  <button\n        href=\"javascript:void(0)\"\n        class=\"btn btn-icon btn-round\"\n        data-toggle=\"modal\"\n        data-target=\"#sendModal\"\n      >\n        <span class=\"badge badge-light\">9</span>\n        <i class=\"fas fa-paper-plane\"></i>\n      </button> -->\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item dropdown\">\n          <a\n            data-toggle=\"modal\"\n            data-target=\"#sendModal\"\n            href=\"javascript:void(0)\"\n            ngbdropdowntoggle=\"\"\n            class=\"dropdown-toggle nav-link\"\n            aria-expanded=\"false\"\n            ><div *ngIf=\"showStatus\" class=\"notification d-none d-lg-block d-xl-block\"></div>\n            <i class=\"icon-bell-55 tim-icons\"></i>\n            <p class=\"d-lg-none\">Notifications</p></a\n          >\n        </li>\n        <li ngbdropdown=\"\" class=\"nav-item dropdown\">\n          <a\n            aria-haspopup=\"true\"\n            data-toggle=\"dropdown\"\n            href=\"javascript:void(0)\"\n            ngbdropdowntoggle=\"\"\n            class=\"dropdown-toggle nav-link\"\n            aria-expanded=\"false\"\n            ><div class=\"photo\">\n              <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\n            </div>\n            <b class=\"caret d-none d-lg-block d-xl-block\"></b>\n            <p class=\"d-lg-none\">Log out</p></a\n          >\n          <ul ngbdropdownmenu=\"\" class=\"dropdown-navbar dropdown-menu\">\n            <li class=\"nav-link\">\n              <a\n                href=\"javascript:void(0)\"\n                ngbdropdownitem=\"\"\n                class=\"dropdown-item nav-item\"\n              >\n                Profile\n              </a>\n            </li>\n            <li class=\"nav-link\">\n              <a\n                href=\"javascript:void(0)\"\n                ngbdropdownitem=\"\"\n                class=\"dropdown-item nav-item\"\n              >\n                Settings\n              </a>\n            </li>\n            <li class=\"dropdown-divider\"></li>\n            <li class=\"nav-link\">\n              <a\n                href=\"javascript:void(0)\"\n                ngbdropdownitem=\"\"\n                class=\"dropdown-item nav-item\"\n              >\n                Log out\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"separator d-lg-none\"></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- Send Invite Modal -->\n<div\n  class=\"modal fade\"\n  id=\"sendModal\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"sendModal\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"sendModalLabel\">Send Invite</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th class=\"text-center\">#</th>\n              <th>Name</th>\n              <th>Position</th>\n              <th class=\"text-right\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let selectionInfo of selectionInfos\">\n              <td class=\"text-center\">{{ selectionInfo.shirtnumber }}</td>\n              <td>{{ selectionInfo.firstname }} {{ selectionInfo.lastname }}</td>\n              <td>{{ selectionInfo.position }}</td>\n              <td class=\"status text-center\">\n                <div *ngIf=\"selectionInfo.status && selectionInfo.received\">\n                  <i class=\"far fa-check-circle text-success\"></i>\n                </div>\n                <div *ngIf=\"!selectionInfo.status && selectionInfo.received\">\n                  <i class=\"far fa-times-circle text-danger\"></i>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button\n          type=\"button\"\n          (click)=\"sendState('sendInvite')\"\n          class=\"btn btn-secondary\"\n        >\n          Send Invite\n        </button>\n        <button\n          type=\"button\"\n          (click)=\"sendState('requestLineUp')\"\n          class=\"btn btn-secondary\"\n        >\n          Request Line Up\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 10px;\n}\n\n.active-route {\n  color: #ffffff;\n  background-color: transparent;\n  border-bottom: 4px solid #e14eca;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXEFDRSB3ZWIgY29tcG9uZW50c1xcZm9vdGJhbGwtY2x1Yi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmFjdGl2ZS1yb3V0ZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNlMTRlY2E7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5hY3RpdmUtcm91dGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZTE0ZWNhO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.service */ "./src/app/state.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(stateService) {
        this.stateService = stateService;
        this.title = 'football-club';
        this.config = {
            team: {
                loaded: false,
                path: 'team/main.js',
                element: 'team-root'
            },
            players: {
                loaded: false,
                path: 'players/main.js',
                element: 'players-root'
            },
            news: {
                loaded: false,
                path: 'news/main.js',
                element: 'news-root'
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.load('news');
        this.load('team');
        this.load('players');
        this.loadWebComponentLibrary();
    };
    AppComponent.prototype.loadWebComponentLibrary = function () {
        var content = document.getElementById('content');
        var skillsProgressScript = document.createElement('script');
        skillsProgressScript.src =
            'assets/webComponentLibraries/skills-progress.js';
        content.appendChild(skillsProgressScript);
        var cardStatsScript = document.createElement('script');
        cardStatsScript.src = 'assets/webComponentLibraries/card-stats.js';
        content.appendChild(cardStatsScript);
    };
    AppComponent.prototype.load = function (name) {
        var _this = this;
        console.log('Load ', name);
        var configItem = this.config[name];
        if (configItem.loaded) {
            return;
        }
        var content = document.getElementById('content');
        var script = document.createElement('script');
        script.src = configItem.path;
        content.appendChild(script);
        var microAppElement = document.createElement(configItem.element);
        content.appendChild(microAppElement);
        microAppElement.addEventListener('messageToClub', function (msg) {
            return _this.handleMessage(msg);
        });
        microAppElement.setAttribute('state', 'init');
        script.onerror = function () { return console.error("error loading " + configItem.path); };
        this.stateService.registerClient(microAppElement);
    };
    AppComponent.prototype.handleMessage = function (msg) {
        console.log('Club received message: ', msg.detail);
        this.stateService.setMessage(msg.detail);
    };
    AppComponent.prototype.sendState = function (msg) {
        this.stateService.setState(msg);
    };
    AppComponent.prototype.simulateMsg = function (flag) {
        var msgToSimulate = {
            id: 'EDGE_02',
            name: 'Anthony Martial',
            status: flag
        };
        this.stateService.setMessage(msgToSimulate);
    };
    AppComponent.prototype.simulateString = function () {
        this.stateService.setMessage('init');
    };
    AppComponent.prototype.simulateAMsg = function (flag) {
        var msgAToSimulate = {
            id: 'EDGE_11',
            name: 'Johnson Leo',
            status: flag
        };
        this.stateService.setMessage(msgAToSimulate);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.service */ "./src/app/state.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status {\n  font-size: 24px;\n}\n\n.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {\n  padding: 5px 3px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxBQ0Ugd2ViIGNvbXBvbmVudHNcXGZvb3RiYWxsLWNsdWIvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXN7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxufVxyXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZSA+IHRib2R5ID4gdHIgPiB0aCwgLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLCAudGFibGUgPiB0aGVhZCA+IHRyID4gdGQsIC50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRkIHtcclxuICAgIHBhZGRpbmc6IDVweCAzcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbiIsIi5zdGF0dXMge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aCwgLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLCAudGFibGUgPiB0Zm9vdCA+IHRyID4gdGgsIC50YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCwgLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUgPiB0Zm9vdCA+IHRyID4gdGQge1xuICBwYWRkaW5nOiA1cHggM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(stateService) {
        this.stateService = stateService;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.initNav();
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
        this.playerSubscription.unsubscribe();
    };
    NavbarComponent.prototype.initNav = function () {
        var _this = this;
        this.showStatus = false;
        this.getPlayers();
        this.subscription = this.stateService.getMessage().subscribe(function (data) {
            if (typeof data !== 'string') {
                _this.changeStatus(data);
            }
        });
    };
    NavbarComponent.prototype.changeStatus = function (data) {
        this.selectionInfos.find(function (selectionInfos) { return selectionInfos.id === data.id; }).status = data.status;
        this.selectionInfos.find(function (selectionInfos) { return selectionInfos.id === data.id; }).received = true;
        this.showStatus = true;
        /* for (const i in this.selectionInfos) {
          if (this.selectionInfos[i].id === data.id) {
            this.selectionInfos[i].status = data.status;
            this.selectionInfos[i].received = true;
            this.showStatus = true;
            break; // Stop this loop, we found it!
          }
        } */
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent.prototype.sendState = function (msg) {
        this.stateService.setState(msg);
    };
    NavbarComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerSubscription = this.stateService
            .getPlayers()
            .subscribe(function (players) {
            _this.selectionInfos = players.data;
            console.log(_this.selectionInfos);
        });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/state.service.ts":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var StateService = /** @class */ (function () {
    function StateService(http) {
        this.http = http;
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.clients = [];
    }
    StateService.prototype.registerClient = function (client) {
        this.clients.push(client);
    };
    StateService.prototype.setState = function (state) {
        var e_1, _a;
        switch (state) {
            case 'init':
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.clients), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var client = _c.value;
                        client.setAttribute('state', state);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                break;
            case 'requestLineUp':
                this.clients
                    .filter(function (elm) { return elm.nodeName === 'TEAM-ROOT'; })[0]
                    .setAttribute('state', state);
                break;
            case 'sendInvite':
                this.clients
                    .filter(function (elm) { return elm.nodeName === 'PLAYERS-ROOT'; })[0]
                    .setAttribute('state', state);
                break;
            default:
                break;
        }
    };
    StateService.prototype.getMessage = function () {
        return this.message$.asObservable();
    };
    StateService.prototype.setMessage = function (state) {
        this.message$.next(state);
    };
    StateService.prototype.getPlayers = function () {
        return this.http.get('assets/data/players.status.json');
    };
    StateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    StateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ACE web components\football-club\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map