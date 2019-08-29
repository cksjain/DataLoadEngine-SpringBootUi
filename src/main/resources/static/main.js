(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/login-layout/login-layout.component */ "./src/app/layouts/login-layout/login-layout.component.ts");
/* harmony import */ var _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/home-layout/home-layout.component */ "./src/app/layouts/home-layout/home-layout.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_soql_query_soql_query_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/soql-query/soql-query.component */ "./src/app/components/soql-query/soql-query.component.ts");
/* harmony import */ var _components_delete_query_delete_query_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/delete-query/delete-query.component */ "./src/app/components/delete-query/delete-query.component.ts");
/* harmony import */ var _components_insert_component_insert_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/insert-component/insert-component.component */ "./src/app/components/insert-component/insert-component.component.ts");
/* harmony import */ var _components_upsert_component_upsert_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/upsert-component/upsert-component.component */ "./src/app/components/upsert-component/upsert-component.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_org_to_org_org_to_org_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/org-to-org/org-to-org.component */ "./src/app/components/org-to-org/org-to-org.component.ts");
/* harmony import */ var _components_export_export_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/export/export.component */ "./src/app/components/export/export.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';

//Add layouts


//Add components









var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: '',
        component: _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_2__["LoginLayoutComponent"],
        children: [{
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            }]
    },
    {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'user-profile',
                component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'soql-query',
                component: _components_soql_query_soql_query_component__WEBPACK_IMPORTED_MODULE_6__["SoqlQueryComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'delete-query',
                component: _components_delete_query_delete_query_component__WEBPACK_IMPORTED_MODULE_7__["DeleteQueryComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'insert',
                component: _components_insert_component_insert_component_component__WEBPACK_IMPORTED_MODULE_8__["InsertComponentComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'upsert',
                component: _components_upsert_component_upsert_component_component__WEBPACK_IMPORTED_MODULE_9__["UpsertComponentComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'org-to-org',
                component: _components_org_to_org_org_to_org_component__WEBPACK_IMPORTED_MODULE_11__["OrgToOrgComponent"]
            }
        ]
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'export',
                component: _components_export_export_component__WEBPACK_IMPORTED_MODULE_12__["ExportComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            //declarations: [],
            imports: [
                //CommonModule
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n        <ng4-loading-spinner> </ng4-loading-spinner>\r\n</router-outlet>\r\n        "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'springbot-angularApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sidenavbar/sidenavbar.component */ "./src/app/components/sidenavbar/sidenavbar.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/home-layout/home-layout.component */ "./src/app/layouts/home-layout/home-layout.component.ts");
/* harmony import */ var _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/login-layout/login-layout.component */ "./src/app/layouts/login-layout/login-layout.component.ts");
/* harmony import */ var _components_soql_query_soql_query_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/soql-query/soql-query.component */ "./src/app/components/soql-query/soql-query.component.ts");
/* harmony import */ var _components_delete_query_delete_query_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/delete-query/delete-query.component */ "./src/app/components/delete-query/delete-query.component.ts");
/* harmony import */ var _components_insert_component_insert_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/insert-component/insert-component.component */ "./src/app/components/insert-component/insert-component.component.ts");
/* harmony import */ var _components_upsert_component_upsert_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/upsert-component/upsert-component.component */ "./src/app/components/upsert-component/upsert-component.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_org_to_org_org_to_org_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/org-to-org/org-to-org.component */ "./src/app/components/org-to-org/org-to-org.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rest/rest.service */ "./src/app/rest/rest.service.ts");
/* harmony import */ var _shared_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/accordion/accordion.component */ "./src/app/shared/accordion/accordion.component.ts");
/* harmony import */ var _components_export_to_org_export_to_org_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/export-to-org/export-to-org.component */ "./src/app/components/export-to-org/export-to-org.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_export_export_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/export/export.component */ "./src/app/components/export/export.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_9__["SidenavbarComponent"],
                _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_12__["HomeLayoutComponent"],
                _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_13__["LoginLayoutComponent"],
                _components_soql_query_soql_query_component__WEBPACK_IMPORTED_MODULE_14__["SoqlQueryComponent"],
                _components_delete_query_delete_query_component__WEBPACK_IMPORTED_MODULE_15__["DeleteQueryComponent"],
                _components_insert_component_insert_component_component__WEBPACK_IMPORTED_MODULE_16__["InsertComponentComponent"],
                _components_upsert_component_upsert_component_component__WEBPACK_IMPORTED_MODULE_17__["UpsertComponentComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_18__["UserProfileComponent"],
                _shared_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_23__["AccordionComponent"],
                _components_org_to_org_org_to_org_component__WEBPACK_IMPORTED_MODULE_19__["OrgToOrgComponent"],
                _components_export_to_org_export_to_org_component__WEBPACK_IMPORTED_MODULE_24__["ExportToOrgComponent"],
                _components_export_to_org_export_to_org_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmationDialog"],
                _components_export_export_component__WEBPACK_IMPORTED_MODULE_27__["ViewRelatedRecord"],
                _components_export_export_component__WEBPACK_IMPORTED_MODULE_27__["ExportComponent"],
                _components_export_export_component__WEBPACK_IMPORTED_MODULE_27__["ExportRelatedRecord"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_21__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _rest_rest_service__WEBPACK_IMPORTED_MODULE_22__["RestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_components_export_to_org_export_to_org_component__WEBPACK_IMPORTED_MODULE_24__["ExportToOrgComponent"], _components_export_to_org_export_to_org_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmationDialog"], _components_export_export_component__WEBPACK_IMPORTED_MODULE_27__["ViewRelatedRecord"], _components_export_export_component__WEBPACK_IMPORTED_MODULE_27__["ExportRelatedRecord"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest/rest.service */ "./src/app/rest/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(rest, router) {
        this.rest = rest;
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        var _this = this;
        console.log(user);
        console.log('----------------------------------------------');
        if (user.email !== '' && user.password !== '' && user.env !== 'Environment') {
            this.rest.login(user).subscribe(function (result) {
                var pathArray = result.metadataServerUrl.split('/');
                var protocol = pathArray[0];
                var host = pathArray[2];
                result.baseURL = protocol + '//' + host;
                result.version = user.api;
                sessionStorage.setItem('env1', JSON.stringify(result));
                sessionStorage.setItem('selected', 'env1');
                _this.router.navigate(['/dashboard']);
            }, function (err) {
                console.log(err);
            });
        }
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_rest_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Dashboard</h4>        \r\n      </div>\r\n      <div class=\"card-body\">\r\n        <!--<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">-->\r\n         <div>Data loading...</div>\r\n        <!--</form>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--<div class=\"col-md-4\">\r\n<div class=\"card card-profile\">\r\n<div class=\"card-avatar\">\r\n<a href=\"#pablo\">\r\n  <img class=\"img\" src=\"/assets/img/faces/marc.jpg\" />\r\n</a>\r\n</div>\r\n<div class=\"card-body\">\r\n<h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\r\n<h4 class=\"card-title\">Alec Thompson</h4>\r\n<p class=\"card-description\">\r\n  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n</p>\r\n<a href=\"#pablo\" class=\"btn btn-primary btn-round\">Follow</a>\r\n</div>\r\n</div>\r\n</div>-->\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/delete-query/delete-query.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/delete-query/delete-query.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card .card-body .form-group.serialCode{\r\n    margin: 0 0 27px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtcXVlcnkvZGVsZXRlLXF1ZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1xdWVyeS9kZWxldGUtcXVlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWJvZHkgLmZvcm0tZ3JvdXAuc2VyaWFsQ29kZXtcclxuICAgIG1hcmdpbjogMCAwIDI3cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/delete-query/delete-query.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/delete-query/delete-query.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Delete Parameters</h4>\r\n        <p class=\"card-category\"></p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> -->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"object\">Select Object Name</label>\r\n                <select class=\"form-control\" id=\"object\" >\r\n                  <option *ngFor=\"let item of objects; let i = index\">{{item.viewValue}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"bmd-label-floating\" for=\"queryEditor\">Where Clause:</label>\r\n                  <textarea class=\"form-control\" id=\"queryEditor\" rows=\"3\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                          <label class=\"bmd-label-floating\" for=\"orderByClause\">ORDER By Clause:</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"orderByClause\">\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"form-check\">\r\n                              <label class=\"form-check-label\" for=\"bulkApi\">\r\n                                  <input type=\"checkbox\" class=\"form-check-input\" id=\"bulkApi\">\r\n                                Bulk API\r\n                                <span class=\"form-check-sign\">\r\n                                    <span class=\"check\"></span>\r\n                                  </span>\r\n                              </label>                              \r\n                          </div>                            \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-check\">\r\n                                <label class=\"form-check-label\" for=\"hardDelete\">\r\n                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"hardDelete\">\r\n                                    Hard Delete\r\n                                  <span class=\"form-check-sign\">\r\n                                      <span class=\"check\"></span>\r\n                                    </span>\r\n                                </label>                              \r\n                            </div>                            \r\n                          </div> \r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group serialCode\">\r\n                            <div class=\"form-check\">\r\n                                <label class=\"form-check-label\" for=\"serialCode\">\r\n                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"serialCode\">\r\n                                    Serial Code processing  \r\n                                  <span class=\"form-check-sign\">\r\n                                      <span class=\"check\"></span>\r\n                                    </span>\r\n                                </label>                              \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                  </div>                \r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pull-left\">Ok</button>\r\n                    <button type=\"reset\" class=\"btn btn-normal pull-left\">Reset</button>\r\n                </div>\r\n            </div>\r\n          \r\n          \r\n          <div class=\"clearfix\"></div>\r\n        <!-- </form> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/delete-query/delete-query.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/delete-query/delete-query.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeleteQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQueryComponent", function() { return DeleteQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/rest.service */ "./src/app/rest/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteQueryComponent = /** @class */ (function () {
    function DeleteQueryComponent(fb, authService, rest) {
        this.fb = fb;
        this.authService = authService;
        this.rest = rest;
    }
    DeleteQueryComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            object: "",
            where: "",
            orderBy: "",
            bulkApi: false,
            hardDelete: false,
            serialCode: false
        });
    };
    DeleteQueryComponent.prototype.onSubmit = function () {
        console.log("this.form", this.form.value);
    };
    DeleteQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-query',
            template: __webpack_require__(/*! ./delete-query.component.html */ "./src/app/components/delete-query/delete-query.component.html"),
            styles: [__webpack_require__(/*! ./delete-query.component.css */ "./src/app/components/delete-query/delete-query.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _rest_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])
    ], DeleteQueryComponent);
    return DeleteQueryComponent;
}());



/***/ }),

/***/ "./src/app/components/export-to-org/confirmation-dialog.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/export-to-org/confirmation-dialog.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">\r\n            Confirmation\r\n            </h4>\r\n        </div>\r\n<div class=\"card-body min-height-200\">\r\n  <div class=\"confirmText\">\r\n      <span>Do you want to procced with <span class=\"bold\">{{totalRecord}} records</span>  to be inserted in <span class=\"bold\">{{targetOrgName}} </span> org?</span>\r\n    </div>\r\n    <div class=\"btn-container\">\r\n        <button type=\"button\" class=\"btn btn-normal pull-left\" (click)=\"onNoClick()\">No</button>  \r\n        <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"onYesClick()\">Yes</button>   \r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/export-to-org/export-to-org.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/export-to-org/export-to-org.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-icon{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.big-icon i{\r\n    font-size: 100px;\r\n}\r\n\r\n.center{\r\n    text-align: center;\r\n}\r\n\r\n.confirmText{\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.btn-container, .card-body{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.card-body {\r\n    flex-direction: column;\r\n}\r\n\r\n.min-height-200 {    \r\n    min-height: 200px;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.card-body .btn-container{\r\n    width: 100%;\r\n}\r\n\r\n.card-body.min-height-200{\r\n    flex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBvcnQtdG8tb3JnL2V4cG9ydC10by1vcmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLFlBQVk7Q0FDZjs7QUFDRDtJQUNJLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksWUFBWTtDQUNmOztBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBvcnQtdG8tb3JnL2V4cG9ydC10by1vcmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWctaWNvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWctaWNvbiBpe1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb25maXJtVGV4dHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG4tY29udGFpbmVyLCAuY2FyZC1ib2R5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLm1pbi1oZWlnaHQtMjAwIHsgICAgXHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxufVxyXG4uYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2FyZC1ib2R5IC5idG4tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQtYm9keS5taW4taGVpZ2h0LTIwMHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/export-to-org/export-to-org.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/export-to-org/export-to-org.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">Export to Target Org\r\n            </h4>\r\n        </div>\r\n\r\n        <div *ngIf=\"sStepper == 'ENV2_DATA_AVAILABLE'; then thenBlock else elseBlock\"></div>\r\n        <ng-template #thenBlock>\r\n          <div class=\"btn-container min-height-200\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"exportParentRec()\">\r\n              Export Parent Record\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"exportRelRec()\">\r\n              Export {{source.curObjName}} related record\r\n            </button> \r\n          </div>\r\n\r\n        </ng-template>\r\n        <ng-template #elseBlock>\r\n          <div *ngIf=\"!isConfirmModalOpen; else confirmModal\">\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"loginToOrg()\">\r\n                <div class=\"card-body\">\r\n                  <!--<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">-->\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <h3>Source:</h3>\r\n                            </div>\r\n                          <div class=\"col-md-12\">\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"URL\" [value]=\"[this.source.srcBaseUrl]\" (change)=\"queryStringBuilder()\" disabled=\"true\">\r\n                              </mat-form-field>\r\n                          </div>\r\n                          <div class=\"col-md-12\">\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Username\" [value]=\"[this.source.srcUsername]\" disabled=\"true\">\r\n                              </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2 big-icon\">\r\n                      <span ><i class=\"material-icons\">arrow_right_alt</i></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      \r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <h3>Destination:</h3>\r\n                          </div>\r\n                        <div class=\"col-md-10\">\r\n                          <mat-form-field>\r\n                              <div *ngIf=\"!isFormDisbaled; then thisEnvBlock else thatEnvBlock\"></div>\r\n                                <ng-template #thisEnvBlock>\r\n                                    <mat-select placeholder=\"Environment\" formControlName=\"env\">\r\n                                        <mat-option value=\"production\">Production </mat-option>\r\n                                        <mat-option value=\"sandbox\">Sandbox</mat-option>\r\n                                    </mat-select>\r\n                                </ng-template>\r\n                                <ng-template #thatEnvBlock>\r\n                                    <mat-select placeholder=\"Environment\" disabled=\"true\">\r\n                                        <mat-option value=\"production\">Production </mat-option>\r\n                                        <mat-option value=\"sandbox\">Sandbox</mat-option>\r\n                                    </mat-select>\r\n                                </ng-template>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-md-10\">\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <div *ngIf=\"!isFormDisbaled; then thisBlock else thatBlock\"></div>\r\n                                <ng-template #thisBlock>\r\n                                    <input matInput placeholder=\"Username\" formControlName=\"email\" >\r\n                                </ng-template>\r\n                                <ng-template #thatBlock>\r\n                                    <input matInput placeholder=\"Username\" [value]=\"[this.dest.email]\" disabled=\"true\">\r\n                                </ng-template>\r\n                              </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-md-10\">\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <div *ngIf=\"!isFormDisbaled; then thisPassBlock else thatPassBlock\"></div>\r\n                                <ng-template #thisPassBlock>\r\n                                    <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\">\r\n                                </ng-template>\r\n                                <ng-template #thatPassBlock>\r\n                                    <input matInput placeholder=\"Password\" [value]=\"[this.dest.password]\" type=\"password\" disabled=\"true\">\r\n                                </ng-template>\r\n                              </mat-form-field>\r\n                        </div>\r\n                      </div>                     \r\n                      \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"btn-container\">                    \r\n                    <div *ngIf=\"sStepper == 'CHANGE_TARGET_ORG'; then proceedBlock else loginBlock\"></div>\r\n                    <ng-template #proceedBlock>\r\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeTargetOrg()\">Change Target Org</button>\r\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"proceedToExport()\">Proceed</button> \r\n                    </ng-template>\r\n                    <ng-template #loginBlock>\r\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"loginToOrg()\">Login</button>\r\n                    </ng-template>\r\n                                         \r\n                  </div>\r\n                  <!--</form>-->\r\n                </div>\r\n              </form>\r\n        </div>\r\n\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/export-to-org/export-to-org.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/export-to-org/export-to-org.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExportToOrgComponent, ConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportToOrgComponent", function() { return ExportToOrgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialog", function() { return ConfirmationDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest/rest.service */ "./src/app/rest/rest.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export/export.component */ "./src/app/components/export/export.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ExportToOrgComponent = /** @class */ (function () {
    function ExportToOrgComponent(fb, authService, rest, confDialog, dialogRef, _a) {
        var env = _a.env, email = _a.email, password = _a.password;
        this.fb = fb;
        this.authService = authService;
        this.rest = rest;
        this.confDialog = confDialog;
        this.dialogRef = dialogRef;
        this.source = {
            exportResults: [],
            curObjName: ""
        };
        this.dest = {
            env: "",
            email: "",
            password: ""
        };
        this.sStepper = "LOGIN"; //Options: LOGIN, CHANGE_TARGET_ORG, ENV2_DATA_AVAILABLE, 
        this.isEnv2DataAvailable = false;
        this.isFormDisbaled = false;
        this.env = env;
        this.form = fb.group({
            env: [env, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ExportToOrgComponent.prototype.ngOnInit = function () {
        this.getSourceDetails();
    };
    ExportToOrgComponent.prototype.getSourceDetails = function () {
        var selected = sessionStorage.getItem("selected");
        var sourceObj = JSON.parse(sessionStorage.getItem(selected));
        var queryIndex = sessionStorage.getItem("curQueryIndex");
        var exportResults = JSON.parse(sessionStorage.getItem("exportResults"));
        var curObjSelected = JSON.parse(sessionStorage.getItem("curObjSelected"));
        var env2 = sessionStorage.getItem("env2");
        if (env2 != null) {
            this.sStepper = "CHANGE_TARGET_ORG";
            var formData = this.form.value;
            var oEnv2 = JSON.parse(env2);
            this.dest = {
                email: oEnv2.userEmail,
                password: "salt&pepper",
                env: 'production'
            };
            this.isFormDisbaled = true;
        }
        this.isEnv2DataAvailable = (env2 != null) ? true : false;
        this.source = {
            srcBaseUrl: sourceObj.baseURL,
            srcUsername: sourceObj.userName,
            exportResults: JSON.parse(exportResults[queryIndex]).records,
            curObjName: curObjSelected[queryIndex]
        };
        console.log("this.source init", this.source);
    };
    ExportToOrgComponent.prototype.changeTargetOrg = function () {
        this.sStepper = 'LOGIN';
        this.isFormDisbaled = false;
        this.dest = {
            email: "",
            password: "",
            env: ''
        };
    };
    ExportToOrgComponent.prototype.proceedToExport = function () {
        this.sStepper = 'ENV2_DATA_AVAILABLE';
    };
    ExportToOrgComponent.prototype.loginToOrg = function () {
        var _this = this;
        console.log("reaches here?");
        var formData = this.form.value;
        this.dialogRef.close();
        if (formData.email !== "" && formData.password !== "") {
            this.rest.login(formData).subscribe(function (result) {
                console.log("result", result);
                var pathArray = result.metadataServerUrl.split("/");
                var protocol = pathArray[0];
                var host = pathArray[2];
                result.baseURL = protocol + "//" + host;
                result.env = formData.env;
                sessionStorage.setItem("env2", JSON.stringify(result));
                var source = _this.source;
                _this.confDialog.open(ConfirmationDialog, {
                    data: { source: source }
                });
            }, function (err) {
                console.log(err);
            });
        }
    };
    ExportToOrgComponent.prototype.save = function () {
        this.dialogRef.close(this.form.value);
    };
    ExportToOrgComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ExportToOrgComponent.prototype.exportParentRec = function () {
        var source = this.source;
        this.dialogRef.close();
        this.confDialog.open(ConfirmationDialog, {
            data: { source: source }
        });
    };
    ExportToOrgComponent.prototype.exportRelRec = function () {
        var curObjName = this.source['curObjName'];
        var exportResults = this.source['exportResults'];
        console.log("this.source on clicl", curObjName, typeof exportResults, exportResults, this.source);
        this.dialogRef.close();
        this.confDialog.open(_export_export_component__WEBPACK_IMPORTED_MODULE_6__["ExportRelatedRecord"], {
            data: {
                recId: "id",
                objectName: curObjName,
                queryResult: exportResults
            }
        });
    };
    ExportToOrgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-export-to-org",
            template: __webpack_require__(/*! ./export-to-org.component.html */ "./src/app/components/export-to-org/export-to-org.component.html"),
            styles: [__webpack_require__(/*! ./export-to-org.component.css */ "./src/app/components/export-to-org/export-to-org.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _rest_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ExportToOrgComponent);
    return ExportToOrgComponent;
}());

var ConfirmationDialog = /** @class */ (function () {
    function ConfirmationDialog(dialogConfRef, restService, spinnerService, snackBar, data) {
        this.dialogConfRef = dialogConfRef;
        this.restService = restService;
        this.spinnerService = spinnerService;
        this.snackBar = snackBar;
        this.data = data;
        this.totalRecord = "";
        this.records = [];
        this.objectName = "";
        this.targetOrgName = "";
        var exportResults = data.source.exportResults;
        this.totalRecord = exportResults.length;
        this.records = exportResults;
        this.objectName = data.source.curObjName;
        var env2 = JSON.parse(sessionStorage.getItem("env2"));
        this.targetOrgName = env2.organizationName;
    }
    ConfirmationDialog.prototype.onNoClick = function () {
        this.dialogConfRef.close();
    };
    ConfirmationDialog.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 2000,
        });
    };
    ConfirmationDialog.prototype.formatData = function () {
        var _this = this;
        var recordArr = [];
        var creatableFields = JSON.parse(sessionStorage.getItem("creatableFields"));
        this.records.forEach(function (rec) {
            var recordObj = rec;
            var objKeys = Object.keys(recordObj);
            var uniquekeyArr = _this.compareArr(creatableFields, objKeys);
            console.log("objKeys", objKeys, creatableFields, uniquekeyArr);
            var refId = recordObj.Id.substring(3);
            recordObj.attributes["referenceId"] = refId;
            objKeys.forEach(function (ele) {
                if (creatableFields.indexOf(ele) == -1 && ele != "attributes")
                    delete recordObj[ele];
            });
            delete recordObj.attributes.url;
            recordArr.push(recordObj);
        });
        return recordArr;
    };
    ConfirmationDialog.prototype.onYesClick = function () {
        var _this = this;
        var objectName = this.objectName;
        var recordData = this.formatData();
        this.spinnerService.show();
        console.log("request object", objectName, recordData);
        var reqData = { records: recordData };
        var reqDataString = JSON.stringify(reqData)
            .split("null")
            .join('""');
        var that = this;
        this.restService.orgtoOrgTransfer(objectName, reqDataString).subscribe(function (data) {
            console.log("records confirmation data", data.results);
            sessionStorage.setItem("refIdMapping", JSON.stringify(data.results));
            that.openSnackBar("Records exported to destination org.");
        }, function (error) {
            console.log(error);
            that.openSnackBar("Something went wrong! Please try again.");
        }, function () {
            _this.spinnerService.hide();
            _this.onNoClick();
        });
    };
    ConfirmationDialog.prototype.compareArr = function (arr1, arr2) {
        var finalArr = [];
        arr1.forEach(function (e1) {
            return arr2.forEach(function (e2) {
                if (e1 === e2) {
                    finalArr.push(e1);
                }
            });
        });
        return finalArr;
    };
    ConfirmationDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "confirmation-dialog",
            template: __webpack_require__(/*! ./confirmation-dialog.html */ "./src/app/components/export-to-org/confirmation-dialog.html"),
            styles: [__webpack_require__(/*! ./export-to-org.component.css */ "./src/app/components/export-to-org/export-to-org.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _rest_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], Object])
    ], ConfirmationDialog);
    return ConfirmationDialog;
}());



/***/ }),

/***/ "./src/app/components/export/export.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/export/export.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multiple-fields{\r\n    min-height: 150px;\r\n}\r\n.res-title{\r\n    padding: 15px;\r\n    color: white;\r\n}\r\n.result-section{\r\n    margin-top: 15px;\r\n    padding: 15px;\r\n    border: 1px solid #e5e5e5;\r\n}\r\n.res-header{\r\n    background-color: #9c27b0;\r\n}\r\n.table tr.active td {\r\n    background-color: rgba(0,0,0,.075);\r\n    color: #212529;\r\n  }\r\n#exportToOrgModal .modal-content{\r\n    background-color: transparent;\r\n    border: none;\r\n    box-shadow: unset;\r\n}\r\n.margin-left-10{\r\n    margin-left: 10px;\r\n}\r\n.hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\ninput.form-control{\r\n    height: calc(2.4375rem + 2px);\r\n}\r\n.cardFooter{\r\n    width: 100%;\r\n}\r\n.alignResButtons{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n/*\r\n    View Related records CSS\r\n*/\r\n.example-container {\r\n    position: absolute;\r\n    top: 60px;\r\n    bottom: 60px;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n.example-sidenav {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 200px;\r\n    background: rgba(255, 0, 0, 0.5);\r\n  }\r\n.example-header {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n.example-footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n.view-related-rec .list-group{\r\n    max-height: 400px;\r\n    overflow-y: scroll;\r\n  }\r\n.list-group-item.active{\r\n    background: linear-gradient(60deg, #ab47bc, #8e24aa)\r\n  }\r\n/*\r\n    Export Related records CSS\r\n*/\r\n.sub-header{\r\n      font-weight: bold;\r\n      text-align: center;\r\n  }\r\n.mat-divider-horizontal{\r\n      margin-bottom: 1rem;\r\n  }\r\n.expRelRecord .chips-container{\r\n      max-height: 400px;\r\n      overflow-y: scroll;\r\n  }\r\n.expRelRecord .btn_wrapper{\r\n      display: flex;\r\n      justify-content: space-around;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBvcnQvZXhwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtHQUNoQjtBQUVIO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsb0JBQW9CO0NBQ3ZCO0FBRUQ7O0VBRUU7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0dBQ1Y7QUFFRDtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixpQ0FBaUM7R0FDbEM7QUFFRDtJQUNFLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7R0FDVjtBQUVEO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztHQUNWO0FBRUQ7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0dBQ3BCO0FBQ0Q7SUFDRSxvREFBb0Q7R0FDckQ7QUFFRDs7RUFFQTtBQUVBO01BQ0ksa0JBQWtCO01BQ2xCLG1CQUFtQjtHQUN0QjtBQUNEO01BQ0ksb0JBQW9CO0dBQ3ZCO0FBQ0Q7TUFDSSxrQkFBa0I7TUFDbEIsbUJBQW1CO0dBQ3RCO0FBRUQ7TUFDSSxjQUFjO01BQ2QsOEJBQThCO0dBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBvcnQvZXhwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXVsdGlwbGUtZmllbGRze1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuLnJlcy10aXRsZXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJlc3VsdC1zZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcbi5yZXMtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcclxufVxyXG5cclxuLnRhYmxlIHRyLmFjdGl2ZSB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNzUpO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgfVxyXG5cclxuI2V4cG9ydFRvT3JnTW9kYWwgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5tYXJnaW4tbGVmdC0xMHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvd3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmlucHV0LmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogY2FsYygyLjQzNzVyZW0gKyAycHgpO1xyXG59XHJcblxyXG4uY2FyZEZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hbGlnblJlc0J1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLypcclxuICAgIFZpZXcgUmVsYXRlZCByZWNvcmRzIENTU1xyXG4qL1xyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIGJvdHRvbTogNjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAudmlldy1yZWxhdGVkLXJlYyAubGlzdC1ncm91cHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2FiNDdiYywgIzhlMjRhYSlcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICBFeHBvcnQgUmVsYXRlZCByZWNvcmRzIENTU1xyXG4qL1xyXG5cclxuICAuc3ViLWhlYWRlcntcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm1hdC1kaXZpZGVyLWhvcml6b250YWx7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIC5leHBSZWxSZWNvcmQgLmNoaXBzLWNvbnRhaW5lcntcclxuICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcblxyXG4gIC5leHBSZWxSZWNvcmQgLmJ0bl93cmFwcGVye1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/export/export.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/export/export.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"exportForm\">\r\n <!-- Value: {{ exportForm.value | json }}\r\n\r\n  <hr />\r\n -->\r\n  <div formArrayName=\"queries\">\r\n    <app-accordion\r\n      [title]=\"['Export']\"\r\n      [desc]=\"\"\r\n      *ngFor=\"let query of queryForms.controls; let i = index\"\r\n      [formGroupName]=\"i\"\r\n    >\r\n      <div class=\"cardBody\">\r\n        <section>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n              <mat-form-field>\r\n                  <mat-select placeholder=\"Object\" formControlName=\"object\" (selectionChange)=\"objectChangeHandler($event, i)\">\r\n                    <mat-option *ngFor=\"let object of objects\" [value]=\"object.value\">\r\n                      {{object.viewValue}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n              <mat-form-field>\r\n                  <mat-select placeholder=\"Fields\" formControlName=\"field\" (selectionChange)=\"queryStringBuilder()\" multiple>\r\n                    <mat-option *ngFor=\"let item of exportObj[i].fields\" [value]=\"item.value\">\r\n                      {{item.viewValue}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                  <mat-form-field>\r\n                      <mat-select placeholder=\"SortBy\" formControlName=\"sortBy\" (selectionChange)=\"queryStringBuilder()\" >\r\n                        <mat-option *ngFor=\"let item of exportObj[i].fields\" [value]=\"item.value\">\r\n                          {{item.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <mat-form-field>\r\n                      <mat-select placeholder=\"Sort Direction\" formControlName=\"sortDir\" (selectionChange)=\"queryStringBuilder()\" >\r\n                          <mat-option value=\"ASC\">A to Z</mat-option>\r\n                          <mat-option value=\"DESC\">Z to A</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <mat-form-field>\r\n                      <mat-select placeholder=\"Nulls\" formControlName=\"null\" (selectionChange)=\"queryStringBuilder()\" >\r\n                          <mat-option value=\"NULLS FIRST\">Nulls First</mat-option>\r\n                          <mat-option value=\"NULLS LAST\">Nulls Last</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Max Record\" formControlName=\"maxRecord\" value=\"\"  (change)=\"queryStringBuilder()\">\r\n                    </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Filter Result By\" formControlName=\"filterBy\" (selectionChange)=\"queryStringBuilder()\" multiple>\r\n                          <mat-option *ngFor=\"let item of exportObj[i].fields\" [value]=\"item.value\">\r\n                            {{item.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Operator\" formControlName=\"operator\" (selectionChange)=\"queryStringBuilder()\" >\r\n                            <mat-option value=\"=\">Equal</mat-option>\r\n                            <mat-option value=\"!=\">Not Equal</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Field Value\" formControlName=\"fieldValue\" value=\"\"  (change)=\"queryStringBuilder()\">\r\n                      </mat-form-field>\r\n                </div>\r\n\r\n\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Enter or modify a SOQL query below:\" formControlName=\"queryString\" [value]=\"queryString\" (change)=\"queryStringBuilder()\"></textarea>\r\n                  </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-primary pull-left\"\r\n                (click)=\"querySOQL(i)\"\r\n              >\r\n                Query\r\n              </button>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </section>\r\n        <section\r\n    class=\"result-section\"\r\n    [ngClass]=\"show_result == true ? 'show' : 'hide'\"\r\n    >\r\n    <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"res-header\">\r\n          <h4 class=\"res-title\">Results</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"res-body\">\r\n              <div class=\"table-responsive\">\r\n                  <table class=\"table table-hover\">\r\n                    <thead class=\"text-primary\">\r\n                      <tr>\r\n                        <th *ngFor=\"let item of exportObj[i].columns\">\r\n                          {{item}}\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n\r\n                      <tr  *ngFor=\"let result of exportObj[i].exportResult; let rInd = index\" (click)=\"setClickedRow(rInd)\" [class.active]=\"rInd == selectedRow\">\r\n                        <td *ngFor=\"let column of exportObj[i].columns\">{{result[column]}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"alignResButtons\">\r\n                  <button type=\"button\" (click)=\"downloadButtonPush()\" class=\"btn btn-primary\">\r\n                      Export to CSV\r\n                    </button>\r\n                    <!-- data-toggle=\"modal\" data-target=\"#exportToOrgModal\" -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n            <!--  <mat-checkbox class=\"example-margin\" formControlName=\"expRelRecords\" ></mat-checkbox> -->\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openDialog('desc')\">\r\n                        Export to Target Org\r\n                      </button>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <button\r\n                type=\"button\"\r\n                (click)=\"exportRelatedRecord(i)\"\r\n                class=\"btn btn-primary pull-right\"\r\n              >\r\n                Export Related Record\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <button\r\n                type=\"button\"\r\n                (click)=\"viewRelatedRecord(i)\"\r\n                class=\"btn btn-primary pull-right\"\r\n              >\r\n                View Related Record\r\n              </button>\r\n            </div>\r\n            </div>\r\n    </section>\r\n      </div>\r\n      <div class=\"cardFooter\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-1\">\r\n              <button\r\n              type=\"button\"\r\n              (click)=\"addquery()\"\r\n              class=\"btn btn-success pull-left\"\r\n            >\r\n              <i class=\"material-icons\">add</i>\r\n            </button></div>\r\n            <div class=\"col-md-1\">\r\n                <button\r\n                type=\"button\"\r\n                (click)=\"deletequery(i)\"\r\n                class=\"btn btn-danger pull-left\"\r\n              >\r\n                <i class=\"material-icons\">remove</i>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-10\">\r\n                <button type=\"button\" class=\"btn btn-primary pull-right\">\r\n                    Export to CSV\r\n                  </button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </app-accordion>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/export/export.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/export/export.component.ts ***!
  \*******************************************************/
/*! exports provided: ExportComponent, ViewRelatedRecord, ExportRelatedRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRelatedRecord", function() { return ViewRelatedRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportRelatedRecord", function() { return ExportRelatedRecord; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rest/rest.service */ "./src/app/rest/rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _export_to_org_export_to_org_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../export-to-org/export-to-org.component */ "./src/app/components/export-to-org/export-to-org.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var ExportComponent = /** @class */ (function () {
    function ExportComponent(fb, restService, dialog, spinnerService) {
        this.fb = fb;
        this.restService = restService;
        this.dialog = dialog;
        this.spinnerService = spinnerService;
        this.objects = [{ value: "", viewValue: "Select an Object" }];
        this.fields = [];
        this.childRlnMapping = [];
        this.show_result = true;
        this.columns = [];
        this.resultsFields = [];
        this.queryIndex = "";
        this.queryString = "";
        this.exportObj = {};
        this.creatableFields = [];
        this.sObjectsNameLabelMap = {};
        //this.byPassAPI();
        this.getAllObjects();
        this.setClickedRow = function (index) {
            this.selectedRow = index;
            this.selectedRecord = this.resultsFields[index];
            console.log("this.resultsFields[index]", this.resultsFields[index]);
        };
    }
    ExportComponent.prototype.ngOnInit = function () {
        this.exportForm = this.fb.group({
            queries: this.fb.array([])
        });
        this.addquery();
    };
    Object.defineProperty(ExportComponent.prototype, "queryForms", {
        get: function () {
            return this.exportForm.get("queries");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportComponent.prototype, "filterByForm", {
        get: function () {
            return this.queryForms.get("filterBy");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportComponent.prototype, "exportFormValue", {
        get: function () {
            return this.exportForm.value.queries;
        },
        enumerable: true,
        configurable: true
    });
    ExportComponent.prototype.addquery = function () {
        var query = this.fb.group({
            object: "",
            field: "",
            sortBy: "",
            sortDir: "",
            null: "",
            maxRecord: "",
            queryString: "",
            filterBy: "",
            operator: "",
            fieldValue: "",
            exportResult: {},
            expRelRecords: false
        });
        this.queryForms.push(query);
        this.addFilterBy();
        var obj = {
            fields: [],
            queryString: "",
            columns: [],
            exportResult: []
        };
        this.exportObj[this.queryForms.length - 1] = obj;
    };
    ExportComponent.prototype.deletequery = function (i) {
        this.queryForms.removeAt(i);
        delete this.exportObj[i];
    };
    ExportComponent.prototype.addFilterBy = function () {
        var filterBy = this.fb.group({
            fieldName: "",
            fieldValue: "",
            operator: ""
        });
        //this.queryForms.controls.filterBy.controls.push(filterBy);
        //this.filterByForm.push(filterBy);
    };
    //get the list of all objects to show in dropdown
    ExportComponent.prototype.getAllObjects = function () {
        var _this = this;
        this.spinnerService.show();
        var sObjMap = {};
        this.restService.getAllOrgObjects().subscribe(function (data) {
            data.sobjects.forEach(function (element) {
                sObjMap[element.name] = element.label;
                var object = {
                    value: element.name,
                    viewValue: element.name
                };
                _this.objects.push(object);
            });
            _this.sObjectsNameLabelMap = sObjMap;
            //this.getFieldsObj();
        }, function (error) { return console.log(error); }, function () { return _this.spinnerService.hide(); });
    };
    //get the list of all fields to show in dropdown
    ExportComponent.prototype.getFieldsObj = function (objectName) {
        var _this = this;
        this.spinnerService.show();
        var that = this;
        this.restService.getFieldsOfObject(objectName).subscribe(function (data) {
            _this.fields = [];
            _this.creatableFields = [];
            var fields = [];
            data.fields.forEach(function (element) {
                if (element.createable)
                    _this.creatableFields.push(element.name);
                fields.push({ value: element.name, viewValue: element.label });
            });
            that.exportObj[_this.queryIndex].fields = fields;
            var rln = {};
            data.childRelationships.forEach(function (element) {
                var obj = {};
                var nameLableMap = _this.sObjectsNameLabelMap;
                if (element.relationshipName != null) {
                    var viewVal = nameLableMap[element.childSObject];
                    obj = {
                        value: element.relationshipName,
                        viewValue: viewVal //element.childSObject
                    };
                    _this.childRlnMapping.push(obj);
                }
            });
            sessionStorage.setItem("creatableFields", JSON.stringify(_this.creatableFields));
            sessionStorage.setItem("childRlnMapping", JSON.stringify(_this.childRlnMapping));
            console.log("aman3", JSON.parse(JSON.stringify(_this.childRlnMapping)));
        }, function (error) { return console.log(error); }, function () { return _this.spinnerService.hide(); });
    };
    ExportComponent.prototype.objectChangeHandler = function (event, index) {
        this.queryIndex = index.toString();
        var exportForm = this.exportForm.value.queries;
        var objectName = exportForm[index].object;
        //added by aman for fetching fields for particular objects
        if (objectName !== "Select an Object") {
            this.getFieldsObj(objectName);
        }
        var obj = {};
        obj[index] = objectName;
        sessionStorage.setItem("curObjSelected", JSON.stringify(obj));
        this.queryStringBuilder();
        //this.queryString = `SELECT * FROM ${exportForm[index].object}`;
    };
    ExportComponent.prototype.querySOQL = function (index) {
        var _this = this;
        this.queryIndex = index;
        var retrievedData;
        var exportForm = this.exportFormValue[this.queryIndex];
        this.spinnerService.show();
        this.restService.soql_query(exportForm.queryString).subscribe(function (data) {
            retrievedData = data.body;
            var sessionExportResults = JSON.parse(sessionStorage.getItem("exportResults"));
            if (!sessionExportResults)
                sessionExportResults = {};
            sessionExportResults[index] = data.body;
            sessionStorage.setItem("exportResults", JSON.stringify(sessionExportResults));
            _this.updateResultsTable(JSON.parse(retrievedData));
        }, function (error) { return console.log(error); }, function () { return _this.spinnerService.hide(); });
    };
    ExportComponent.prototype.updateResultsTable = function (data) {
        this.show_result = true;
        var index = this.queryIndex;
        var exportForm = this.exportForm.value.queries;
        var sSelect = "SELECT", sFrom = "FROM";
        var queryString = exportForm[index].queryString;
        var columns = exportForm[index].field;
        if (queryString) {
            var aMatch = queryString.match(new RegExp(sSelect + "(.*)" + sFrom));
            if (aMatch != null) {
                columns = aMatch[1].trim().split(", ");
            }
        }
        this.exportObj[this.queryIndex].columns = columns;
        this.exportObj[this.queryIndex].exportResult = data.records;
        this.columns = exportForm[index].field;
        this.resultsFields = data.records;
    };
    ExportComponent.prototype.downloadButtonPush = function () {
        var csvData = this.convertToCSV(this.columns, this.resultsFields);
        var blob = new Blob([csvData], { type: "text/csv" });
        var url = window.URL.createObjectURL(blob);
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, "example");
        }
        else {
            var a = document.createElement("a");
            a.href = url;
            a.download = "ETPHoldReview.csv";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        window.URL.revokeObjectURL(url);
    };
    ExportComponent.prototype.convertToCSV = function (columnRecord, resultData) {
        var finalData = [];
        columnRecord.forEach(function (j) {
            finalData.push(j);
        });
        resultData.forEach(function (i) {
            columnRecord.forEach(function (j) {
                finalData.push(i[j]);
            });
        });
        //finalData.push(resultData);
        console.log("export1 " + resultData);
        console.log("export " + finalData);
        var array = typeof finalData != "object" ? JSON.parse(finalData) : finalData;
        var str = "";
        // var row = "";
        // for (var index in finalData) {
        //     //Now convert each value to string and comma-separated
        //     row += index + ',';
        // }
        // row = row.slice(0, -1);
        // //append Label row with line break
        // str += row + '\r\n';
        // for (var i = 0; i < array.length; i++) {
        //     var line = '';
        //     for (var index in array[i]) {
        //         if (line != '') line += ','
        //         line += array[i][index];
        //     }
        //     str += line + '\r\n';
        // }
        console.log("columnRecord" + columnRecord.length);
        for (var i = 0; i < array.length; i++) {
            if ((i + 1) % columnRecord.length == 0)
                str += '"' + array[i] + '"' + "\r\n";
            else
                str += '"' + array[i] + '"' + ",";
        }
        console.log(str);
        return str;
    };
    ExportComponent.prototype.openDialog = function (_a) {
        var description = _a.description;
        sessionStorage.setItem("curQueryIndex", this.queryIndex);
        this.dialog.open(_export_to_org_export_to_org_component__WEBPACK_IMPORTED_MODULE_7__["ExportToOrgComponent"], {
            data: { description: description }
        });
    };
    ExportComponent.prototype.viewRelatedRecord = function (index) {
        /*this.queryIndex = index.toString();
        let exportForm = this.exportForm.value.queries;
        let nameOfObject = exportForm[index].object;
    
        let id = this.selectedRecord["Id"];
        let relationName = this.childRlnMapping[nameOfObject];
        var relNames = Object.values("");*/
        /*this.restService.getChildData(nameOfObject, id, "Contacts").subscribe(
          data => {
            console.log("childData record", JSON.parse(JSON.stringify(data)));
            this.dialog.open(ViewRelatedRecord, {
              data: {}
            });
          },
          error => console.log(error)
        );*/
        var id = this.selectedRecord["Id"];
        var exportForm = this.exportForm.value.queries;
        var nameOfObject = exportForm[index].object;
        if (nameOfObject) {
            this.dialog.open(ViewRelatedRecord, {
                data: {
                    recId: id,
                    objectName: nameOfObject
                }
            });
        }
    };
    ExportComponent.prototype.exportRelatedRecord = function (index) {
        //let id = this.selectedRecord["Id"];
        var exportForm = this.exportForm.value.queries;
        var nameOfObject = exportForm[index].object;
        var queryResult = this.exportObj[index].exportResult;
        if (nameOfObject) {
        }
        this.dialog.open(ExportRelatedRecord, {
            data: {
                recId: "id",
                objectName: nameOfObject,
                queryResult: queryResult
            }
        });
    };
    ExportComponent.prototype.queryStringBuilder = function () {
        var exportForm = this.exportFormValue[this.queryIndex];
        var object = exportForm.object;
        var field = exportForm.field;
        var sortBy = exportForm.sortBy;
        var maxRecord = exportForm.maxRecord;
        var sortDir = exportForm.sortDir;
        var nulls = exportForm.null;
        var filterBy = exportForm.filterBy;
        var operator = exportForm.operator;
        var fieldValue = exportForm.fieldValue;
        var queryString = "";
        if (object.length > 0) {
            queryString = "SELECT * FROM " + object;
        }
        if (field.length > 0) {
            queryString = "SELECT " + field.join(", ") + " FROM " + object;
        }
        if (filterBy && operator && fieldValue) {
            queryString = queryString + " WHERE " + filterBy + " " + operator + " '" + fieldValue + "'";
        }
        if (sortBy.length > 0) {
            queryString = queryString + " ORDER BY " + sortBy;
        }
        if (sortDir.length > 0) {
            queryString = queryString + " " + sortDir;
        }
        if (nulls.length > 0) {
            queryString = queryString + " " + nulls;
        }
        if (maxRecord.length > 0) {
            queryString = queryString + " LIMIT " + maxRecord;
        }
        if (exportForm.queryString.length > 0 && queryString !== exportForm.queryString) {
            exportForm.queryString = exportForm.queryString.replace(/\s+/g, ' ').trim();
            queryString = exportForm.queryString;
        }
        this.queryString = queryString;
        if (!this.exportObj[this.queryIndex])
            this.exportObj[this.queryIndex].queryString = "";
        this.exportObj[this.queryIndex].queryString = queryString;
        this.exportFormValue[this.queryIndex].queryString = queryString;
    };
    ExportComponent.prototype.byPassAPI = function () {
        var sObjMap = {};
        var sDelLater = sessionStorage.getItem("delLater");
        if (!sDelLater) {
            this.getAllObjects();
            return false;
        }
        console.log("don't come until here for the first time.");
        var oDelLater = JSON.parse(sDelLater);
        this.objects = oDelLater.objects;
        this.sObjectsNameLabelMap = oDelLater.sObjectsNameLabelMap;
    };
    ExportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-export",
            template: __webpack_require__(/*! ./export.component.html */ "./src/app/components/export/export.component.html"),
            styles: [__webpack_require__(/*! ./export.component.css */ "./src/app/components/export/export.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"]])
    ], ExportComponent);
    return ExportComponent;
}());

var ViewRelatedRecord = /** @class */ (function () {
    function ViewRelatedRecord(dialogConfRef, fb, restService, dialog, snackBar, spinnerService, data) {
        this.dialogConfRef = dialogConfRef;
        this.restService = restService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.spinnerService = spinnerService;
        this.data = data;
        this.childRecords = [];
        this.recordId = '';
        this.childRecResults = [];
        this.title = '';
        this.objectName = '';
        this.recordForm = fb.group({
            bottom: 0,
            fixed: false,
            top: 60,
            results: {}
        });
        this.recordId = data.recId;
        this.objectName = data.objectName;
        this.title = data.objectName + " - Related Records";
    }
    ViewRelatedRecord.prototype.ngOnInit = function () {
        var childRecords = [];
        childRecords = JSON.parse(sessionStorage.getItem("childRlnMapping"));
        this.childRecords = childRecords;
        console.log("Loaded succesfully", this.childRecords);
    };
    ViewRelatedRecord.prototype.onNoClick = function () {
        this.dialogConfRef.close();
    };
    ViewRelatedRecord.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 2000,
        });
    };
    ViewRelatedRecord.prototype.onChildRecSelect = function (child) {
        var _this = this;
        var curIndex = sessionStorage.getItem("curQueryIndex");
        var curObjSelected = JSON.parse(sessionStorage.getItem("curObjSelected"));
        var nameOfObject = curObjSelected[curIndex];
        var results = this.recordForm.value.results;
        var that = this;
        if (child.value == null) {
            this.openSnackBar("Please use a different record");
            return false;
        }
        console.log("getChildData", this.objectName, this.recordId, child);
        this.childRecResults = [];
        if (results[child.value]) {
            this.childRecResults = results[child.value];
        }
        else {
            this.spinnerService.show();
            this.restService.getChildData(this.objectName, this.recordId, child.value).subscribe(function (data) {
                if (!results[child.value])
                    results[child.value] = [];
                console.log("data", data);
                if (data.done) {
                    data.records.forEach(function (rec) {
                        var obj = {
                            name: rec.Name || 'N/A',
                            createdDate: new Date(rec.CreatedDate).toLocaleDateString("en-US"),
                            LastModifiedDate: new Date(rec.LastModifiedDate).toLocaleDateString("en-US"),
                        };
                        results[child.value].push(obj);
                        that.childRecResults.push(obj);
                    });
                }
                else
                    that.openSnackBar("Something went wrong");
                console.log("childData record", results);
            }, function (error) { return console.log(error); }, function () { return _this.spinnerService.hide(); });
        }
    };
    ViewRelatedRecord = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "view-related-record",
            template: __webpack_require__(/*! ./viewRelatedRecord.html */ "./src/app/components/export/viewRelatedRecord.html")
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"], Object])
    ], ViewRelatedRecord);
    return ViewRelatedRecord;
}());

var ExportRelatedRecord = /** @class */ (function () {
    function ExportRelatedRecord(dialogConfRef, fb, restService, dialog, snackBar, spinnerService, data) {
        var _this = this;
        this.dialogConfRef = dialogConfRef;
        this.restService = restService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.spinnerService = spinnerService;
        this.data = data;
        this.title = '';
        this.objectName = '';
        this.recordId = "";
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        this.childRecCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.selChildRecords = [];
        this.childRecords = [];
        this.recordIds = [];
        this.queryResult = [];
        this.recordForm = fb.group({
            bottom: 0,
            fixed: false,
            top: 60,
            results: {}
        });
        this.recordId = data.recId;
        this.objectName = data.objectName;
        this.title = data.objectName + " - Related Records";
        data.queryResult.map(function (qr) {
            _this.recordIds.push(qr.Id);
        });
        console.log("this.queryResult", data.queryResult);
        this.filteredChildRec = this.childRecCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (record) { return record ? _this._filter(record) : _this.childRecords.slice(); }));
    }
    ExportRelatedRecord.prototype.ngOnInit = function () {
        //TODO: Optimize below code
        var childRecords = [];
        childRecords = JSON.parse(sessionStorage.getItem("childRlnMapping"));
        var childRecArr = [];
        childRecords.forEach(function (cr) {
            childRecArr.push(cr.viewValue);
        });
        this.childRecords = childRecArr;
        /*let refIdMapping = JSON.parse(sessionStorage.getItem("refIdMapping"));
        let that = this;
        refIdMapping.forEach(function(cri) {
          that.recordIds.push(cri.referenceId);
        });*/
    };
    ExportRelatedRecord.prototype.onChildRecSelect = function () {
    };
    ExportRelatedRecord.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 2000,
        });
    };
    ExportRelatedRecord.prototype.add = function (event) {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our fruit
            if ((value || '').trim()) {
                this.selChildRecords.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.childRecCtrl.setValue(null);
        }
    };
    ExportRelatedRecord.prototype.remove = function (record) {
        var index = this.selChildRecords.indexOf(record);
        console.log("this.selChildRecords", this.selChildRecords);
        console.log("Does it reaches here?", index, record);
        if (index >= 0) {
            this.selChildRecords.splice(index, 1);
        }
    };
    ExportRelatedRecord.prototype.selected = function (event) {
        if (this.selChildRecords.length < 5)
            this.selChildRecords.push(event.option.viewValue);
        else
            this.openSnackBar("Please select a maximum of 5 child records!");
        this.childRecInput.nativeElement.value = '';
        this.childRecCtrl.setValue(null);
    };
    ExportRelatedRecord.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.childRecords.filter(function (cr) {
            cr.toLowerCase().indexOf(filterValue) === 0;
        });
    };
    ExportRelatedRecord.prototype.onNoClick = function () {
        this.dialogConfRef.close();
    };
    ExportRelatedRecord.prototype.onYesClick = function () {
        var _this = this;
        var childRlnMapping = JSON.parse(sessionStorage.getItem("childRlnMapping"));
        var objNameMap = {};
        if (this.selChildRecords.length < 1) {
            this.openSnackBar("Please select atleast one child record.");
            return false;
        }
        if (this.objectName.length < 1) {
            this.openSnackBar("Please select a parent object.");
            return false;
        }
        if (this.recordIds.length < 1) {
            this.openSnackBar("Please export parents records first.");
            return false;
        }
        childRlnMapping.map(function (crm) {
            if (_this.selChildRecords.indexOf(crm.viewValue) > -1) {
                objNameMap[crm.viewValue] = crm.value;
            }
        });
        console.log("child records push", this.objectName, objNameMap, this.recordIds);
        this.child_record_transfer(this.objectName, objNameMap, this.recordIds);
    };
    ExportRelatedRecord.prototype.child_record_transfer = function (parent_object, objectNames, record_ids) {
        var _this = this;
        var result_map = this.get_response_map();
        for (var object in objectNames) {
            //Get Object Information
            this.restService.getFieldsOfObject(object).subscribe(function (data) {
                var creatableFields = [];
                var referenceFields = {};
                //let fields = [];
                data.fields.forEach(function (element) {
                    if (element.createable)
                        creatableFields.push(element.name);
                    if (element.createable && element.type == 'reference')
                        referenceFields[element.name] = '';
                    /*fields.push({
                      value: element.name,
                      viewValue: element.label
                    });*/
                });
                var _loop_1 = function () {
                    //Get Child Records
                    console.log("records ids", record_ids[i], record_ids);
                    var recordId = record_ids[i];
                    _this.restService.getChildData(parent_object, recordId, objectNames[object]).subscribe(function (data) {
                        if (data.done) {
                            _this.transfer_data(object, _this.formatData(creatableFields, data.records, recordId, result_map[recordId.substring(3)], referenceFields));
                        }
                        else
                            _this.openSnackBar("Something went wrong");
                    }, function (error) { return console.log(error); }, function () { return _this.spinnerService.hide(); });
                };
                // that.exportObj[this.queryIndex].fields = fields;
                for (var i = 0; i < record_ids.length; i++) {
                    _loop_1();
                }
            }, function (error) { return console.log(error); }, function () { return _this.spinnerService.hide(); });
        }
    };
    ExportRelatedRecord.prototype.formatData = function (creatableFields, records, record_id, replacement_id, referenceFields) {
        var _this = this;
        var recordArr = [];
        records.forEach(function (rec) {
            var recordObj = rec;
            var objKeys = Object.keys(recordObj);
            var uniquekeyArr = _this.compareArr(creatableFields, objKeys);
            var refId = recordObj.Id.substring(3);
            recordObj.attributes["referenceId"] = refId;
            objKeys.forEach(function (ele) {
                if (creatableFields.indexOf(ele) == -1 && ele != "attributes")
                    delete recordObj[ele];
                if (recordObj[ele] == record_id) {
                    recordObj[ele] = replacement_id;
                }
                else if (referenceFields.hasOwnProperty(ele)) {
                    delete recordObj[ele];
                }
            });
            delete recordObj.attributes.url;
            recordArr.push(recordObj);
        });
        return recordArr;
    };
    ExportRelatedRecord.prototype.compareArr = function (arr1, arr2) {
        var finalArr = [];
        arr1.forEach(function (e1) {
            return arr2.forEach(function (e2) {
                if (e1 === e2) {
                    finalArr.push(e1);
                }
            });
        });
        return finalArr;
    };
    ExportRelatedRecord.prototype.transfer_data = function (objectName, recordData) {
        var _this = this;
        this.spinnerService.show();
        console.log("request object", objectName, recordData);
        var reqData = {
            records: recordData
        };
        var reqDataString = JSON.stringify(reqData)
            .split("null")
            .join('""');
        var that = this;
        this.restService.orgtoOrgTransfer(objectName, reqDataString).subscribe(function (data) {
            console.log("records confirmation data", data.results);
            /*sessionStorage.setItem(
              "refIdMapping",
              JSON.stringify(data.results)
            );*/
            that.openSnackBar(objectName + "Records exported to destination org.");
        }, function (error) {
            console.log(error);
            that.openSnackBar("Something went wrong! Please try again.");
        }, function () {
            _this.spinnerService.hide();
            _this.onNoClick();
        });
    };
    ExportRelatedRecord.prototype.get_response_map = function () {
        var response_map = {};
        var resposne = JSON.parse(sessionStorage.getItem("refIdMapping"));
        for (var i = 0; i < resposne.length; i++) {
            response_map[resposne[i].referenceId] = resposne[i].id;
        }
        return response_map;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chips'),
        __metadata("design:type", Object)
    ], ExportRelatedRecord.prototype, "chips", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('childRecInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ExportRelatedRecord.prototype, "childRecInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"])
    ], ExportRelatedRecord.prototype, "matAutocomplete", void 0);
    ExportRelatedRecord = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "export-related-record",
            template: __webpack_require__(/*! ./exportRelatedRecord.html */ "./src/app/components/export/exportRelatedRecord.html"),
            styles: [__webpack_require__(/*! ./export.component.css */ "./src/app/components/export/export.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"], Object])
    ], ExportRelatedRecord);
    return ExportRelatedRecord;
}());



/***/ }),

/***/ "./src/app/components/export/exportRelatedRecord.html":
/*!************************************************************!*\
  !*** ./src/app/components/export/exportRelatedRecord.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row expRelRecord\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">{{ title }}</h4>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <p class=\"sub-header\">Please select a maximum of 5 child records</p>\r\n                    <mat-divider></mat-divider>\r\n                </div>\r\n          <div class=\"col-md-12 chips-container\">\r\n                <mat-form-field class=\"example-chip-list\">\r\n                        <mat-chip-list #chipList aria-label=\"Child record selection\">\r\n                          <mat-chip\r\n                            *ngFor=\"let record of selChildRecords\"\r\n                            [selectable]=\"selectable\"\r\n                            [removable]=\"removable\"\r\n                            (removed)=\"remove(record)\">\r\n                            {{record}}\r\n                            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                          </mat-chip>\r\n                          <input\r\n                            placeholder=\"Child records\"\r\n                            #childRecInput\r\n                            [formControl]=\"childRecCtrl\"\r\n                            [matAutocomplete]=\"auto\"\r\n                            [matChipInputFor]=\"chipList\"\r\n                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                            [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                            (matChipInputTokenEnd)=\"add($event)\">\r\n                        </mat-chip-list>\r\n                        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n                          <mat-option *ngFor=\"let record of filteredChildRec | async\" [value]=\"record\">\r\n                            {{record}}\r\n                          </mat-option>\r\n                        </mat-autocomplete>\r\n                      </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 btn_wrapper\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-normal pull-right\"\r\n              (click)=\"onNoClick()\"\r\n            >\r\n              Close\r\n            </button>\r\n            <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-primary pull-right\"\r\n                  (click)=\"onYesClick()\"\r\n                >\r\n                  Export\r\n                </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/export/viewRelatedRecord.html":
/*!**********************************************************!*\
  !*** ./src/app/components/export/viewRelatedRecord.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card view-related-rec\">\r\n      <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">{{title}}</h4>\r\n      </div>\r\n      <div class=\"card-body\">\r\n          <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <div class=\"list-group\" id=\"list-tab\" role=\"tablist\" style=\"max-height: 400px;overflow-y: scroll;\">\r\n                    <a  *ngFor=\"let rec of childRecords\" class=\"list-group-item list-group-item-action\" id=\"{{rec.value}}-list\" data-toggle=\"list\" href=\"#{{rec.value}}\" role=\"tab\" (click)=\"onChildRecSelect(rec)\">{{rec.value}}</a>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"col-8\">\r\n                <div class=\"tab-content\" id=\"nav-tabContent\" >\r\n                  <div class=\"tab-pane fade \" *ngFor=\"let rec of childRecords\" id=\"{{rec.value}}\" role=\"tabpanel\" >\r\n                      <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th scope=\"col\">Name</th>\r\n                              <th scope=\"col\">Created Date</th>\r\n                              <th scope=\"col\">Last Modified Date</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let res of childRecResults\">\r\n                              <td>{{res.name}}</td>\r\n                              <td>{{res.createdDate}}</td>\r\n                              <td>{{res.LastModifiedDate}}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 center\">\r\n                    <button type=\"button\" class=\"btn btn-normal pull-right\" (click)=\"onNoClick()\">Close</button>\r\n\r\n                </div>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/insert-component/insert-component.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/insert-component/insert-component.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n.width-30per{\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnNlcnQtY29tcG9uZW50L2luc2VydC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zZXJ0LWNvbXBvbmVudC9pbnNlcnQtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ud2lkdGgtMzBwZXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/insert-component/insert-component.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/insert-component/insert-component.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">Insert</h4>\r\n          \r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> -->\r\n          <!-- Step 1 Starts-->\r\n          <section [ngClass]=\"section == 'STEP_1' ? 'show' : 'hide'\"> \r\n              <p class=\"card-category\">Select an object and a CSV or ZIP file containing records to insert, or choose to insert a single record. Zipped requests must contain a CSV or XML-formatted manifest called request.txt, which may reference included binary files.</p>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"bmd-label-floating\" for=\"object\">Object Type</label>\r\n                      <select class=\"form-control\" id=\"object\" >\r\n                        <option *ngFor=\"let item of objects; let i = index\">{{item.viewValue}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-check\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked=\"\"> Single Radio\r\n                        <span class=\"circle\">\r\n                          <span class=\"check\"></span>\r\n                        </span>\r\n                      </label>\r\n    \r\n                    </div>\r\n                    <div class=\"form-check\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked=\"\"> From file\r\n                        <span class=\"circle\">\r\n                          <span class=\"check\"></span>\r\n                        </span>\r\n                      </label>\r\n                      <label class=\"form-check-label\">\r\n                          <input class=\"form-check-input\" type=\"file\" name=\"exampleFile\" >                          \r\n                        </label>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"handleNext()\">Next</button>                    \r\n                    </div>\r\n                </div>\r\n              \r\n                <div class=\"clearfix\"></div>\r\n              <!-- </form> -->\r\n          </section>\r\n           <!-- Step 1 Ends-->\r\n               <!-- Step 2 Starts-->\r\n          <section [ngClass]=\"section == 'STEP_2' ? 'show' : 'hide'\">\r\n              <p class=\"card-category\">\r\n                  Provide values for the Account fields below:\r\n              </p>  \r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead class=\"text-primary\">\r\n                    <tr>\r\n                      <th>Field</th>\r\n                      <th>Value</th>\r\n                      <th>Smart Lookup</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of fields; let i = index\">\r\n                        <td>{{item.viewValue}}</td>\r\n                        <td class=\"width-30per\"><input type=\"text\" class=\"form-control\" value=\"{{item.fieldValue}}\"></td>\r\n                        <td><select class=\"form-control\" id=\"object\" >\r\n                            <option value=\"1\">Value 1</option>\r\n                          </select></td>\r\n                    </tr>                   \r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"handlConfirm()\">Next</button>                    \r\n                  </div>\r\n              </div>\r\n          </section>\r\n                <!-- Step 2 Ends-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/insert-component/insert-component.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/insert-component/insert-component.component.ts ***!
  \***************************************************************************/
/*! exports provided: InsertComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertComponentComponent", function() { return InsertComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rest/rest.service */ "./src/app/rest/rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InsertComponentComponent = /** @class */ (function () {
    function InsertComponentComponent(fb, restService, dialog, spinnerService) {
        this.fb = fb;
        this.restService = restService;
        this.dialog = dialog;
        this.spinnerService = spinnerService;
        this.resultsFields = [];
        this.sObjectsNameLabelMap = {};
        this.objects = [{ value: "", viewValue: "Select an Object" }];
        /*
          objects: Objects[] = [
            {value: '', viewValue: 'Select an Object'},
            {value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation'},
            {value: 'Account', viewValue: 'Account'},
            {value: 'AccountBrand', viewValue: 'AccountBrand'},
            {value: 'AccountBrandShare', viewValue: 'AccountBrandShare'}
          ];*/
        this.fields = [
            { value: 'count()', viewValue: 'count()', fieldValue: '' },
            { value: 'AccountNumber', viewValue: 'AccountNumber', fieldValue: '' },
            { value: 'AccountSource', viewValue: 'AccountSource', fieldValue: '' },
            { value: 'AccountType__c', viewValue: 'AccountType__c', fieldValue: '' },
            { value: 'Account__ID', viewValue: 'ID', fieldValue: '' },
            { value: 'Name', viewValue: 'Name', fieldValue: '' },
            { value: 'Home Phone', viewValue: 'HomePhone', fieldValue: '' },
            { value: 'Cellphone', viewValue: 'Cellphone', fieldValue: '' },
            { value: 'City', viewValue: 'City', fieldValue: '' },
        ];
        this.section = 'STEP_1';
    }
    InsertComponentComponent.prototype.ngOnInit = function () {
        debugger;
        this.getAllObjects();
        debugger;
        this.setClickedRow = function (index) {
            this.selectedRow = index;
            this.selectedRecord = this.resultsFields[index];
            console.log("this.resultsFields[index]", this.resultsFields[index]);
        };
    };
    InsertComponentComponent.prototype.handleNext = function () {
        this.section = 'STEP_2';
    };
    InsertComponentComponent.prototype.handlConfirm = function () {
        this.section = 'STEP_3';
    };
    //get the list of all objects to show in dropdown
    InsertComponentComponent.prototype.getAllObjects = function () {
        var _this = this;
        this.spinnerService.show();
        var sObjMap = {};
        this.restService.getAllOrgObjects().subscribe(function (data) {
            data.sobjects.forEach(function (element) {
                sObjMap[element.name] = element.label;
                var object = {
                    value: element.name,
                    viewValue: element.name
                };
                _this.objects.push(object);
            });
            _this.sObjectsNameLabelMap = sObjMap;
            //this.getFieldsObj();
        }, function (error) { return console.log(error); }, function () { return _this.spinnerService.hide(); });
        console.log('this.objects');
        console.log(this.objects);
    };
    //get the list of all fields to show in dropdown
    InsertComponentComponent.prototype.getFieldsObj = function (objectName) {
        var _this = this;
        this.spinnerService.show();
        var that = this;
        this.restService.getFieldsOfObject(objectName).subscribe(function (data) {
            _this.fields = [];
            _this.creatableFields = [];
            var fields = [];
            data.fields.forEach(function (element) {
                if (element.createable)
                    _this.creatableFields.push(element.name);
                fields.push({ value: element.name, viewValue: element.label });
            });
            that.exportObj[_this.queryIndex].fields = fields;
            var rln = {};
            data.childRelationships.forEach(function (element) {
                var obj = {};
                var nameLableMap = _this.sObjectsNameLabelMap;
                if (element.relationshipName != null) {
                    var viewVal = nameLableMap[element.childSObject];
                    obj = {
                        value: element.relationshipName,
                        viewValue: viewVal //element.childSObject
                    };
                    _this.childRlnMapping.push(obj);
                }
            });
            sessionStorage.setItem("creatableFields", JSON.stringify(_this.creatableFields));
            sessionStorage.setItem("childRlnMapping", JSON.stringify(_this.childRlnMapping));
            console.log("aman3", JSON.parse(JSON.stringify(_this.childRlnMapping)));
        }, function (error) { return console.log(error); }, function () { return _this.spinnerService.hide(); });
    };
    InsertComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insert-component',
            template: __webpack_require__(/*! ./insert-component.component.html */ "./src/app/components/insert-component/insert-component.component.html"),
            styles: [__webpack_require__(/*! ./insert-component.component.css */ "./src/app/components/insert-component/insert-component.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"]])
    ], InsertComponentComponent);
    return InsertComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select.form-control {\r\n    -webkit-appearance: menulist;\r\n       -moz-appearance: menulist;\r\n            appearance: menulist;\r\n}\r\nselect:invalid { color: #AAAAAA; }\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.login-container .submit-login-btn {\r\n    justify-content: flex-end;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQXFCO09BQXJCLDBCQUFxQjtZQUFyQixxQkFBcUI7Q0FDeEI7QUFDRCxpQkFBaUIsZUFBZSxFQUFFO0FBRWxDO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgICBhcHBlYXJhbmNlOiBtZW51bGlzdDtcclxufVxyXG5zZWxlY3Q6aW52YWxpZCB7IGNvbG9yOiAjQUFBQUFBOyB9XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAuc3VibWl0LWxvZ2luLWJ0biB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\r\n<div class=\"col-md-6\">\r\n      <div class=\"card \">\r\n        <div class=\"card-header card-header-rose card-header-icon\">\r\n          <div class=\"card-icon\">\r\n            <i class=\"material-icons\">contacts</i>\r\n          </div>\r\n          <h4 class=\"card-title\">Please Login to continue.</h4>\r\n        </div>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"card-body \">\r\n            <!--\r\n            <div class=\"form-group bmd-form-group\">\r\n                <!- -<label for=\"exampleEmail\" class=\"bmd-label-floating\">Email Address</label>- ->\r\n                <select class=\"form-control\" formControlName=\"api\" data-style=\"select-with-transition\" title=\"API Version\" data-size=\"7\" >\r\n                    <option disabled selected hidden> Api Version </option>\r\n                    <option value=\"44\">44 </option>\r\n                    <option value=\"43\">43</option>\r\n                    <option value=\"42\">42</option>\r\n                  </select>\r\n            </div>\r\n          <div class=\"form-group bmd-form-group\">\r\n                \r\n                <select class=\"form-control\" formControlName=\"env\" data-style=\"select-with-transition\" title=\"Environment\" data-size=\"7\" >\r\n                    <option disabled selected hidden> Environment</option>\r\n                    <option value=\"production\">Production </option>\r\n                    <option value=\"sandbox\">Sandbox</option>\r\n                  </select>\r\n            </div>-->\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Environment\" formControlName=\"env\" >\r\n                        <mat-option disabled selected hidden>Environment</mat-option>\r\n                        <mat-option value=\"production\">Production </mat-option>\r\n                        <mat-option value=\"sandbox\">Sandbox</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Email Address\" formControlName=\"email\" required>\r\n                    </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" required>\r\n                    </mat-form-field>\r\n              </div>\r\n            </div>\r\n            \r\n          \r\n            \r\n           \r\n           <!-- <div class=\"form-group bmd-form-group\">\r\n              <label for=\"exampleEmail\" class=\"bmd-label-floating\">Email Address</label>\r\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\" required>\r\n            </div>\r\n            <div class=\"form-group bmd-form-group\">\r\n              <label for=\"examplePass\" class=\"bmd-label-floating\">Password</label>\r\n              <input type=\"password\" class=\"form-control\"  formControlName=\"password\" required=\"true\">\r\n            </div>-->\r\n            \r\n          \r\n        </div>\r\n        <div class=\"card-footer submit-login-btn\">\r\n          <button type=\"submit\" class=\"btn btn-fill btn-rose \">Submit</button>\r\n        </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { RestService } from '../../rest.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(
    //private rest: RestService,
    fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            env: ['Environment', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            api: ['Api Version', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        //if (this.form.valid) {
        //this.email = this.form.value.email;
        /*this.rest.login(this.form.value.email,this.form.value.password, this.form.value.env, this.form.value.api).subscribe((result) => {
            //this.router.navigate(['/product-details/'+result._id]);
            console.log(result);
          }, (err) => {
            console.log(err);
          });*/
        console.log(this.form.value);
        this.authService.login(this.form.value);
        console.log("submitting check if this is the one");
        //}
        this.formSubmitAttempt = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/org-to-org/org-to-org.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/org-to-org/org-to-org.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-icon{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.big-icon i{\r\n    font-size: 100px;\r\n}\r\n\r\n.center{\r\n    text-align: center;\r\n}\r\n\r\n.confirmText{\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.modal-content{\r\n    background-color: transparent;\r\n    border: none;\r\n    box-shadow: unset;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmctdG8tb3JnL29yZy10by1vcmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7O0FBQ0Q7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JnLXRvLW9yZy9vcmctdG8tb3JnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnLWljb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmlnLWljb24gaXtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29uZmlybVRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/org-to-org/org-to-org.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/org-to-org/org-to-org.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">\r\n          <span *ngIf=\"!isConfirmModalOpen\">\r\n              Org To Org Transfer\r\n          </span>\r\n          <span *ngIf=\"isConfirmModalOpen\">\r\n             Confirm\r\n          </span>\r\n          </h4>\r\n      </div>\r\n      <div *ngIf=\"!isConfirmModalOpen; else confirmModal\">\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"loginToOrg()\">\r\n              <div class=\"card-body\">\r\n                <!--<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">-->\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                            <h3>Source:</h3>\r\n                          </div>\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"form-group bmd-form-group\">\r\n                            <label class=\"\">URL</label>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              [value]=\"[this.source.srcBaseUrl]\"\r\n                              disabled=\"true\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"form-group bmd-form-group\">\r\n                            <label class=\"\">Username</label>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              [value]=\"[this.source.srcUsername]\"\r\n                              disabled=\"true\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-2 big-icon\">\r\n                    <span ><i class=\"material-icons\">arrow_right_alt</i></span>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    \r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                          <h3>Destination:</h3>\r\n                        </div>\r\n                      <div class=\"col-md-10\">\r\n                        <div class=\"form-group bmd-form-group\">\r\n                            <label class=\"\">Environment</label>\r\n                            <select class=\"form-control\" formControlName=\"env\" data-style=\"select-with-transition\" title=\"Environment\" data-size=\"7\" >                        \r\n                                <option value=\"production\">Production </option>\r\n                                <option value=\"sandbox\">Sandbox</option>\r\n                              </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-10\">\r\n                        <div class=\"form-group bmd-form-group\">\r\n                          <label class=\"\">Username</label>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            formControlName=\"email\"\r\n                            required\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-10\">\r\n                          <div class=\"form-group bmd-form-group\">\r\n                            <label class=\"\">Password</label>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"form-control\"\r\n                              formControlName=\"password\"\r\n                              required\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 center\">\r\n                            <button type=\"submit\" class=\"btn btn-primary \">Login</button>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!--</form>-->\r\n              </div>\r\n            </form>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #confirmModal>\r\n    <div class=\"card-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <span>Records:</span>\r\n          <span>{{source.record}}</span>\r\n        </div>\r\n        <div class=\"col-md-12 center confirmText\">\r\n          <span>Do you want to procced?</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12 center\">\r\n              <button type=\"button\" class=\"btn btn-normal pull-left\" (click)=\"closeModal()\" >No</button>  \r\n              <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"closeModal()\">Yes</button>   \r\n          </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/org-to-org/org-to-org.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/org-to-org/org-to-org.component.ts ***!
  \***************************************************************/
/*! exports provided: OrgToOrgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgToOrgComponent", function() { return OrgToOrgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/rest.service */ "./src/app/rest/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrgToOrgComponent = /** @class */ (function () {
    function OrgToOrgComponent(fb, authService, rest) {
        this.fb = fb;
        this.authService = authService;
        this.rest = rest;
        this.source = {};
        this.isConfirmModalOpen = false;
        $('#exportToOrgModal').on('hidden.bs.modal', function (e) {
            this.isConfirmModalOpen = false;
        });
    }
    OrgToOrgComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            env: ['Environment', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.getSourceDetails();
    };
    OrgToOrgComponent.prototype.getSourceDetails = function () {
        var selected = sessionStorage.getItem("selected");
        var sourceObj = JSON.parse(sessionStorage.getItem(selected));
        this.source = {
            srcBaseUrl: sourceObj.baseURL,
            srcUsername: sourceObj.userName
        };
        console.log("this.this.source", this.source);
    };
    OrgToOrgComponent.prototype.loginToOrg = function () {
        var _this = this;
        var formData = this.form.value;
        if (formData.email !== '' && formData.password !== '') {
            this.rest.login(formData).subscribe(function (result) {
                console.log("result", result);
                _this.source['record'] = 20;
                _this.isConfirmModalOpen = true;
            }, function (err) {
                console.log(err);
            });
        }
    };
    OrgToOrgComponent.prototype.closeModal = function () {
        this.isConfirmModalOpen = false;
        $('#exportToOrgModal').modal('hide');
    };
    OrgToOrgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-org-to-org',
            template: __webpack_require__(/*! ./org-to-org.component.html */ "./src/app/components/org-to-org/org-to-org.component.html"),
            styles: [__webpack_require__(/*! ./org-to-org.component.css */ "./src/app/components/org-to-org/org-to-org.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _rest_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])
    ], OrgToOrgComponent);
    return OrgToOrgComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenavbar/sidenavbar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/sidenavbar/sidenavbar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link.selected{\r\n    background-color: #ab47bc;\r\n    color: white;\r\n}\r\n.sidebar .nav li>a.selected:hover, .sidebar .nav li>a.selected:focus, .sidebar .nav li>a.selected{\r\n    background-color: #ab47bc;\r\n    color: white;\r\n}\r\n.textTransform p{\r\n    text-transform: initial;\r\n}\r\n.sidebar .logo .simple-text{\r\n    font-weight: bold;\r\n    text-transform: initial;\r\n    font-size: 30px;\r\n}\r\n.nav-item{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2YmFyL3NpZGVuYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2YmFyL3NpZGVuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluay5zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYjQ3YmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBsaT5hLnNlbGVjdGVkOmhvdmVyLCAuc2lkZWJhciAubmF2IGxpPmEuc2VsZWN0ZWQ6Zm9jdXMsIC5zaWRlYmFyIC5uYXYgbGk+YS5zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYjQ3YmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRleHRUcmFuc2Zvcm0gcHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvIC5zaW1wbGUtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLm5hdi1pdGVte1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidenavbar/sidenavbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/sidenavbar/sidenavbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\r\n  <!--\r\n        Tip 1: You can change the color of the sidebar using: data-color=\"purple | azure | green | orange | danger\"\r\n\r\n        Tip 2: you can also add an image using data-image tag\r\n             -->\r\n  <div class=\"logo\">\r\n    <a href=\"javascript: void(0)\" class=\"simple-text logo-normal\">\r\n      ForceLoader\r\n    </a>\r\n  </div>\r\n  <div class=\"sidebar-wrapper ps-container ps-theme-default\">\r\n    <ul class=\"nav\">\r\n      <li class=\"nav-item \" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n          <i class=\"material-icons\">dashboard</i>\r\n          <p>Dashboard</p>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/user-profile']\">\r\n          <i class=\"material-icons\">person</i>\r\n          <p>User Profile</p>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"isHidden = !isHidden\">\r\n        <a class=\"nav-link\" data-toggle=\"collapse\">\r\n          <i class=\"material-icons\">library_books</i>\r\n          <p>Data Manipulations </p>\r\n        </a>\r\n        <div class=\"collapse show\" id=\"mapsExamples\" [hidden]=\"isHidden\">\r\n          <ul class=\"nav\">\r\n            <li class=\"nav-item\" *ngFor=\"let query of queries\" (click)=\"onSelectLink(query)\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"[query.url]\">\r\n                <span class=\"sidebar-mini\">{{query.shortName}}</span>\r\n                <span class=\"sidebar-normal\">{{query.name}}</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sidenavbar/sidenavbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/sidenavbar/sidenavbar.component.ts ***!
  \***************************************************************/
/*! exports provided: SidenavbarComponent, Query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavbarComponent", function() { return SidenavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavbarComponent = /** @class */ (function () {
    function SidenavbarComponent() {
        this.queries = [
            { id: 1, name: 'Export', shortName: 'EX', url: '/export', class: 'nav-item' },
            { id: 2, name: 'Insert', shortName: 'IN', url: '/insert', class: 'nav-item' },
            { id: 3, name: 'Upsert', shortName: 'UP', url: '/upsert', class: 'nav-item' },
            { id: 4, name: 'Delete', shortName: 'DE', url: '/delete-query', class: 'nav-item' }
        ];
        this.isHidden = false;
        this.panelOpenState = false;
    }
    SidenavbarComponent.prototype.ngOnInit = function () {
    };
    SidenavbarComponent.prototype.onSelectLink = function (query) {
        this.selectedQuery = query;
        this.panelOpenState = true;
    };
    SidenavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenavbar',
            template: __webpack_require__(/*! ./sidenavbar.component.html */ "./src/app/components/sidenavbar/sidenavbar.component.html"),
            styles: [__webpack_require__(/*! ./sidenavbar.component.css */ "./src/app/components/sidenavbar/sidenavbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavbarComponent);
    return SidenavbarComponent;
}());

var Query = /** @class */ (function () {
    function Query() {
    }
    return Query;
}());



/***/ }),

/***/ "./src/app/components/soql-query/soql-query.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/soql-query/soql-query.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mar-btm-8{\r\n    margin-bottom: 8px;\r\n}\r\n.multiple-fields{\r\n    min-height: 150px;\r\n}\r\ninput.form-control{\r\n    height: calc(2.4375rem + 2px);\r\n}\r\n.hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n.confirmButtonClass{\r\n    color: #fff;\r\n    background-color: #9c27b0;\r\n    border-color: #9c27b0;\r\n    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\r\n}\r\n.swal2-popup .swal2-styled.swal2-confirm {\r\n    border: 0;\r\n    border-radius: .25em;\r\n    background: initial;\r\n    background-color: #9c27b0;\r\n    color: #fff;\r\n    font-size: 1.0625em;\r\n}\r\n.cardFooter{\r\n    width: 100%;\r\n}\r\n.res-title{\r\n    padding: 15px;\r\n    color: white;\r\n}\r\n.result-section{\r\n    margin-top: 15px;\r\n    padding: 15px;\r\n    border: 1px solid #e5e5e5;\r\n}\r\n.res-header{\r\n    background-color: #9c27b0;\r\n}\r\n.table tr.active td {\r\n    background-color: rgba(0,0,0,.075);\r\n    color: #212529;\r\n  }\r\n#exportToOrgModal .modal-content{\r\n    background-color: transparent;\r\n    border: none;\r\n    box-shadow: unset;\r\n}\r\n.margin-left-10{\r\n    margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3FsLXF1ZXJ5L3NvcWwtcXVlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLCtIQUErSDtDQUNsSTtBQUNEO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0dBQ2hCO0FBRUg7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb3FsLXF1ZXJ5L3NvcWwtcXVlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXItYnRtLTh7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLm11bHRpcGxlLWZpZWxkc3tcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG59XHJcbmlucHV0LmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogY2FsYygyLjQzNzVyZW0gKyAycHgpO1xyXG59XHJcbi5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvd3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jb25maXJtQnV0dG9uQ2xhc3N7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YzI3YjA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDE1NiwgMzksIDE3NiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDE1NiwgMzksIDE3NiwgMC4xMik7XHJcbn1cclxuLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcclxuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMDYyNWVtO1xyXG59XHJcbi5jYXJkRm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZXMtdGl0bGV7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yZXN1bHQtc2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxufVxyXG4ucmVzLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XHJcbn1cclxuXHJcbi50YWJsZSB0ci5hY3RpdmUgdGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDc1KTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gIH1cclxuXHJcbiNleHBvcnRUb09yZ01vZGFsIC5tb2RhbC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4ubWFyZ2luLWxlZnQtMTB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/soql-query/soql-query.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/soql-query/soql-query.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-accordion\r\n  [title]=\"['Export']\"\r\n  [desc]=\"\"\r\n  *ngFor=\"let query of queryForm.get('queryArr').controls; let i = index\"\r\n>\r\n  <div class=\"cardBody\">\r\n    <section>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bmd-label-floating\" for=\"object\">Object</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"object\"\r\n              (change)=\"objectChangeHandler($event)\"\r\n            >\r\n              <option\r\n                *ngFor=\"let item of objects; index as i\"\r\n                [ngValue]=\"objects[i]\"\r\n                >{{item}}</option\r\n              >\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bmd-label-floating\" for=\"fields\">Fields</label>\r\n            <select\r\n              class=\"form-control multiple-fields custom-select\"\r\n              id=\"fields\"\r\n              multiple\r\n              (change)=\"fieldsChangeHandler($event.target.options)\"\r\n            >\r\n              <option *ngFor=\"let item of fields; let i = index\" [value]=\"item.value\">{{\r\n                item.viewValue\r\n              }}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n          <div class=\"row align-items-end\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"sortByFields\"\r\n                  >Sorts results by</label\r\n                >\r\n                <select class=\"form-control\" id=\"sortByFields\">\r\n                  <option *ngFor=\"let item of sortBy; let i = index\">{{\r\n                    item.viewValue\r\n                  }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"sortOrder\">Sort</label>\r\n                <select class=\"form-control\" id=\"sortOrder\">\r\n                  <option>A to Z</option>\r\n                  <option>Z to A</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"nullPosition\">Null</label>\r\n                <select class=\"form-control\" id=\"nullPosition\">\r\n                  <option *ngFor=\"let item of nulls; let i = index\">{{\r\n                    item.viewValue\r\n                  }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"maxRecords\"\r\n                  >Max Records</label\r\n                >\r\n                <input type=\"text\" class=\"form-control\" id=\"maxRecords\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row align-items-end\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"filterByFields\"\r\n                  >Filter results by</label\r\n                >\r\n                <select class=\"form-control\" id=\"filterByFields\">\r\n                  <option *ngFor=\"let item of filterBy; let i = index\">{{\r\n                    item.viewValue\r\n                  }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"operator\">Operator</label>\r\n                <select class=\"form-control\" id=\"operator\">\r\n                  <option *ngFor=\"let item of operators; let i = index\">{{\r\n                    item.viewValue\r\n                  }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"bmd-label-floating\" for=\"fieldValue\"\r\n                  >Field Value</label\r\n                >\r\n                <input type=\"text\" class=\"form-control\" id=\"fieldValue\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label class=\"bmd-label-floating\" for=\"queryEditor\"\r\n              >Enter or modify a SOQL query below:</label\r\n            >\r\n            <textarea class=\"form-control\" id=\"queryEditor\" rows=\"3\">\r\n              {{ query_string }}</textarea\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <button\r\n            type=\"button\"\r\n            (click)=\"querySOQL()\"\r\n            class=\"btn btn-primary pull-left\"\r\n          >\r\n            Query\r\n          </button>\r\n          \r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </section>\r\n    <section\r\n    class=\"result-section\"\r\n    [ngClass]=\"show_result == true ? 'show' : 'hide'\"\r\n    >\r\n    <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"res-header\">\r\n          <h4 class=\"res-title\">Results</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"res-body\">\r\n              <div class=\"table-responsive\">\r\n                  <table class=\"table table-hover\">\r\n                    <thead class=\"text-primary\">\r\n                      <tr>\r\n                        <th *ngFor=\"let item of columns\">\r\n                          {{item}}\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        \r\n                      <tr  *ngFor=\"let result of resultsFields; let rInd = index\" (click)=\"setClickedRow(rInd)\" [class.active]=\"rInd == selectedRow\">                      \r\n                        <td *ngFor=\"let column of columns\">{{result[column]}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <button type=\"button\" (click)=\"downloadButtonPush()\" class=\"btn btn-primary pull-left\">\r\n                  Export to CSV\r\n                </button>\r\n                <!-- data-toggle=\"modal\" data-target=\"#exportToOrgModal\" -->\r\n                <button type=\"button\" class=\"btn btn-normal pull-left margin-left-10\" (click)=\"openDialog('desc')\">\r\n                    Export to Org\r\n                  </button>\r\n              <button\r\n                type=\"button\"\r\n                (click)=\"viewRelatedRecord()\"\r\n                class=\"btn btn-primary pull-right\"\r\n              >\r\n                View Related Record\r\n              </button>\r\n            </div>\r\n          </div>\r\n    </section>\r\n  </div>\r\n  <div class=\"cardFooter\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"addAnotherQuery()\"\r\n          class=\"btn btn-success pull-left\"\r\n        >\r\n        <i class=\"material-icons\">add</i>\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"removeQuery(i)\"\r\n          class=\"btn btn-danger pull-left\"\r\n        >\r\n        <i class=\"material-icons\">remove</i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary pull-right\">\r\n          Export to CSV\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-accordion>\r\n\r\n\r\n\r\n<!--\r\n  <div class=\"swal2-container swal2-center swal2-fade swal2-shown\" style=\"overflow-y: auto;\"\r\n  [ngClass]=\"show_DetailModal == true ? 'show' : 'hide'\">\r\n      <div aria-labelledby=\"swal2-title\" aria-describedby=\"swal2-content\" class=\"swal2-popup swal2-modal swal2-show\" tabindex=\"-1\" role=\"dialog\" aria-live=\"assertive\" aria-modal=\"true\" style=\"display: flex;\">\r\n        <div class=\"swal2-header\">\r\n            <h2 class=\"swal2-title\" id=\"swal2-title\">Detail Record</h2>\r\n            </div>\r\n        <div class=\"swal2-content\"></div>\r\n        <div class=\"swal2-actions\" style=\"display: flex;\">\r\n            <button type=\"button\" (click)=\"toggleModal()\" class=\"swal2-confirm btn btn-info\" aria-label=\"\">Close</button>\r\n        </div>\r\n        <div class=\"swal2-footer\">\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/components/soql-query/soql-query.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/soql-query/soql-query.component.ts ***!
  \***************************************************************/
/*! exports provided: SoqlQueryComponent, ViewRelatedRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoqlQueryComponent", function() { return SoqlQueryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRelatedRecord", function() { return ViewRelatedRecord; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rest/rest.service */ "./src/app/rest/rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _export_to_org_export_to_org_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../export-to-org/export-to-org.component */ "./src/app/components/export-to-org/export-to-org.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {MatSelect, MatFormField, MatOption} from '@angular/material';



/*@NgModule({
  imports: [MatFormField, MatSelect, MatOption],
  exports: [MatFormField, MatSelect, MatOption],
})*/
var SoqlQueryComponent = /** @class */ (function () {
    function SoqlQueryComponent(fb, restService, dialog) {
        this.fb = fb;
        this.restService = restService;
        this.dialog = dialog;
        this.listOfAllObjects = [];
        this.soql_query = "SELECT Id FROM Account";
        this.show_result = false;
        this.result = [];
        this.columns = [];
        this.resultsFields = [];
        this.show_DetailModal = false;
        this.query_string = "";
        this.query_object = {};
        this.objects = [
            'Select an Object',
        ];
        this.nulls = [
            { value: "nulls-first", viewValue: "Nulls First" },
            { value: "nulls-last", viewValue: "Nulls Last" }
        ];
        this.operators = [
            { value: "=", viewValue: "=" },
            { value: "!=", viewValue: "!=" }
        ];
        this.fields = [];
        this.sortBy = [];
        this.filterBy = [];
        this.queryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fields: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.getAllObjects();
        this.setClickedRow = function (index) {
            this.selectedRow = index;
            this.selectedRecord = this.resultsFields[index];
            console.log("this.resultsFields[index]", this.resultsFields[index]);
        };
    }
    SoqlQueryComponent.prototype.ngOnInit = function () {
        this.queryForm = this.fb.group({
            customerName: "",
            email: "",
            queryArr: this.fb.array([this.createQuery()])
        });
        var data = '{"totalSize":10,"done":true,"records":[{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSggAAG"},"Id":"00128000006XSggAAG","Type":"Customer - Channel","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSghAAG"},"Id":"00128000006XSghAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgiAAG"},"Id":"00128000006XSgiAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgjAAG"},"Id":"00128000006XSgjAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgkAAG"},"Id":"00128000006XSgkAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgnAAG"},"Id":"00128000006XSgnAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgoAAG"},"Id":"00128000006XSgoAAG","Type":"Customer - Channel","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgpAAG"},"Id":"00128000006XSgpAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgqAAG"},"Id":"00128000006XSgqAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000008j0IxAAI"},"Id":"00128000008j0IxAAI","Type":null,"CreatedDate":"2015-10-16T09:17:40.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"}]}';
        this.query_object["fields"] = "Id, Type, CreatedDate, LastModifiedDate";
        this.updateResultsTable(JSON.parse(data));
    };
    SoqlQueryComponent.prototype.querySOQL = function () {
        var _this = this;
        var retrievedData;
        var queryString = this.query_string + ' limit 10';
        console.log("queryString", queryString);
        this.restService.soql_query(queryString).subscribe(function (data) {
            retrievedData = data.body;
            console.log('aman', JSON.parse(JSON.stringify(retrievedData)));
            _this.updateResultsTable(JSON.parse(retrievedData));
        }, function (error) { return console.log(error); });
    };
    SoqlQueryComponent.prototype.updateResultsTable = function (data) {
        this.show_result = true;
        var columns = this.query_object["fields"].split(", ");
        var records = data.records;
        this.columns = columns;
        this.resultsFields = records;
        console.log("columns" + this.columns);
        console.log("records" + JSON.parse(JSON.stringify(data)));
        records.forEach(function (rec) {
            // console.log("rec"+ rec.Id);   
            // columns.forEach(col => {
            //   if(availableKeys.indexOf(col)> -1){
            //     console.log("col", col, rec[col]);
            //   }
            // });
        });
    };
    //get the list of all objects to show in dropdown
    SoqlQueryComponent.prototype.getAllObjects = function () {
        var _this = this;
        this.restService.getAllOrgObjects().subscribe(function (data) {
            data.sobjects.forEach(function (element) {
                _this.objects.push(element.name);
            });
            console.log('aman1', JSON.parse(JSON.stringify(_this.objects)));
            //this.getFieldsObj();
        }, function (error) { return console.log(error); });
    };
    SoqlQueryComponent.prototype.getFieldsObj = function (objectName) {
        var _this = this;
        this.restService.getFieldsOfObject(objectName).subscribe(function (data) {
            _this.fields = [];
            data.fields.forEach(function (element) {
                _this.fields.push({ value: element.name, viewValue: element.label });
            });
            var rln = {};
            data.childRelationships.forEach(function (element) {
                if (!rln[element.childSObject])
                    rln[element.childSObject] = "";
                rln[element.childSObject] = element.relationshipName;
            });
            _this.childRlnMapping = rln;
            console.log("rln", rln);
            _this.filterBy = _this.fields;
            _this.sortBy = _this.fields;
            console.log('aman3', JSON.parse(JSON.stringify(data)));
        }, function (error) { return console.log(error); });
    };
    SoqlQueryComponent.prototype.toggleModal = function () {
        //this.show_DetailModal =  !this.show_DetailModal;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: (this.query_object["object"].length > 0) ? this.query_object["object"] + " - Related Record" : 'Related Record',
            confirmButtonText: "Close",
            confirmButtonClass: "confirmButtonClass"
        });
    };
    SoqlQueryComponent.prototype.objectChangeHandler = function (event) {
        console.log("event.target.value", event.target.value);
        //added by aman for fetching fields for particular objects
        if (event.target.value !== 'Select an Object') {
            this.getFieldsObj(event.target.value);
        }
        this.query_object["object"] = '';
        if (event.target.value !== 'Select an Object') {
            this.query_string = "SELECT * FROM " + event.target.value;
            this.query_object["object"] = event.target.value;
        }
    };
    SoqlQueryComponent.prototype.fieldsChangeHandler = function (options) {
        var selectedOptionsArr = Array.apply(null, options).filter(function (option) { return option.selected; }).map(function (option) { return option.value; });
        this.query_object["fields"] = selectedOptionsArr.join(", ");
        console.log("event.target.value", this.query_object["fields"]);
        this.query_string = "SELECT " + this.query_object["fields"] + " FROM " + this.query_object["object"];
        /*this.query_object["fields"] = event.target.value;*/
    };
    SoqlQueryComponent.prototype.createQuery = function () {
        return this.fb.group({
            name: "",
            description: "",
            price: ""
        });
    };
    SoqlQueryComponent.prototype.addAnotherQuery = function () {
        this.queryArr = this.queryForm.get("queryArr");
        this.queryArr.push(this.createQuery());
    };
    SoqlQueryComponent.prototype.removeQuery = function (index) {
        this.queryArr = this.queryForm.get("queryArr");
        if (this.queryArr.length > 1)
            this.queryArr.removeAt(index);
    };
    ////converting to csv 
    SoqlQueryComponent.prototype.downloadButtonPush = function () {
        var csvData = this.convertToCSV(this.columns, this.resultsFields);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, "example");
        }
        else {
            var a = document.createElement("a");
            a.href = url;
            a.download = 'ETPHoldReview.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        window.URL.revokeObjectURL(url);
    };
    SoqlQueryComponent.prototype.convertToCSV = function (columnRecord, resultData) {
        var finalData = [];
        columnRecord.forEach(function (j) {
            finalData.push(j);
        });
        resultData.forEach(function (i) {
            columnRecord.forEach(function (j) {
                finalData.push(i[j]);
            });
        });
        //finalData.push(resultData);
        console.log("export1 " + resultData);
        console.log("export " + finalData);
        var array = typeof finalData != 'object' ? JSON.parse(finalData) : finalData;
        var str = '';
        // var row = "";
        // for (var index in finalData) {
        //     //Now convert each value to string and comma-separated
        //     row += index + ',';
        // }
        // row = row.slice(0, -1);
        // //append Label row with line break
        // str += row + '\r\n';
        // for (var i = 0; i < array.length; i++) {
        //     var line = '';
        //     for (var index in array[i]) {
        //         if (line != '') line += ','
        //         line += array[i][index];
        //     }
        //     str += line + '\r\n';
        // }
        console.log("columnRecord" + columnRecord.length);
        for (var i = 0; i < array.length; i++) {
            if ((i + 1) % (columnRecord.length) == 0)
                str += '"' + array[i] + '"' + '\r\n';
            else
                str += '"' + array[i] + '"' + ',';
        }
        console.log(str);
        return str;
    };
    SoqlQueryComponent.prototype.viewRelatedRecord = function () {
        var _this = this;
        //(nameOfObject: any, id: any, relationName: any  
        var nameOfObject = this.query_object["object"];
        var id = this.selectedRecord['Id'];
        var relationName = this.childRlnMapping[nameOfObject];
        this.restService.getChildData(nameOfObject, id, relationName).subscribe(function (data) {
            console.log('childData record', JSON.parse(JSON.stringify(data)));
            _this.dialog.open(ViewRelatedRecord, {
                data: {}
            });
        }, function (error) { return console.log(error); });
    };
    SoqlQueryComponent.prototype.openDialog = function (_a) {
        var description = _a.description;
        this.dialog.open(_export_to_org_export_to_org_component__WEBPACK_IMPORTED_MODULE_5__["ExportToOrgComponent"], {
            data: { description: description }
        });
    };
    SoqlQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-soql-query",
            template: __webpack_require__(/*! ./soql-query.component.html */ "./src/app/components/soql-query/soql-query.component.html"),
            styles: [__webpack_require__(/*! ./soql-query.component.css */ "./src/app/components/soql-query/soql-query.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], SoqlQueryComponent);
    return SoqlQueryComponent;
}());

var ViewRelatedRecord = /** @class */ (function () {
    function ViewRelatedRecord(dialogConfRef) {
        this.dialogConfRef = dialogConfRef;
    }
    ViewRelatedRecord.prototype.onNoClick = function () {
        this.dialogConfRef.close();
    };
    ViewRelatedRecord = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'view-related-record',
            template: __webpack_require__(/*! ./viewRelatedRecord.html */ "./src/app/components/soql-query/viewRelatedRecord.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ViewRelatedRecord);
    return ViewRelatedRecord;
}());



/***/ }),

/***/ "./src/app/components/soql-query/viewRelatedRecord.html":
/*!**************************************************************!*\
  !*** ./src/app/components/soql-query/viewRelatedRecord.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-primary\">\r\n        <h4 class=\"card-title\">Related Records</h4>\r\n      </div>\r\n      <app-accordion\r\n            title=\"Individual Details\"\r\n            [desc]=\"\"            \r\n          >\r\n      <div class=\"cardBody\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead class=\"text-primary\">\r\n              <tr>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Created Date</th>\r\n                <th>Last Modified Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody></tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      </app-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/upsert-component/upsert-component.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/upsert-component/upsert-component.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide{\r\n    display: none;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n.width-30per{\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cHNlcnQtY29tcG9uZW50L3Vwc2VydC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBzZXJ0LWNvbXBvbmVudC91cHNlcnQtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ud2lkdGgtMzBwZXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/upsert-component/upsert-component.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/upsert-component/upsert-component.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">Upsert</h4>\r\n          \r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> -->\r\n          <!-- Step 1 Starts-->\r\n          <section [ngClass]=\"section == 'STEP_1' ? 'show' : 'hide'\"> \r\n              <p class=\"card-category\">Select an object and a CSV or ZIP file containing records to insert, or choose to insert a single record. Zipped requests must contain a CSV or XML-formatted manifest called request.txt, which may reference included binary files.</p>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"bmd-label-floating\" for=\"object\">Object Type</label>\r\n                      <select class=\"form-control\" id=\"object\" >\r\n                        <option *ngFor=\"let item of objects; let i = index\">{{item.viewValue}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-check\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked=\"\"> Single Radio\r\n                        <span class=\"circle\">\r\n                          <span class=\"check\"></span>\r\n                        </span>\r\n                      </label>\r\n    \r\n                    </div>\r\n                    <div class=\"form-check\">\r\n                      <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked=\"\"> From file\r\n                        <span class=\"circle\">\r\n                          <span class=\"check\"></span>\r\n                        </span>\r\n                      </label>\r\n    \r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"handleNext()\">Next</button>                    \r\n                    </div>\r\n                </div>\r\n              \r\n                <div class=\"clearfix\"></div>\r\n              <!-- </form> -->\r\n          </section>\r\n           <!-- Step 1 Ends-->\r\n               <!-- Step 2 Starts-->\r\n          <section [ngClass]=\"section == 'STEP_2' ? 'show' : 'hide'\">\r\n              <p class=\"card-category\">\r\n                  Provide values for the Account fields below:\r\n              </p>  \r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead class=\"text-primary\">\r\n                    <tr>\r\n                      <th>Field</th>\r\n                      <th>Value</th>\r\n                      <th>Smart Lookup</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of fields; let i = index\">\r\n                        <td>{{item.viewValue}}</td>\r\n                        <td class=\"width-30per\"><input type=\"text\" class=\"form-control\" value=\"{{item.fieldValue}}\"></td>\r\n                        <td></td>\r\n                    </tr>                   \r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"handlConfirm()\">Next</button>                    \r\n                  </div>\r\n              </div>\r\n          </section>\r\n                <!-- Step 2 Ends-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/upsert-component/upsert-component.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/upsert-component/upsert-component.component.ts ***!
  \***************************************************************************/
/*! exports provided: UpsertComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertComponentComponent", function() { return UpsertComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpsertComponentComponent = /** @class */ (function () {
    function UpsertComponentComponent() {
        this.objects = [
            { value: '', viewValue: 'Select an Object' },
            { value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation' },
            { value: 'Account', viewValue: 'Account' },
            { value: 'AccountBrand', viewValue: 'AccountBrand' },
            { value: 'AccountBrandShare', viewValue: 'AccountBrandShare' }
        ];
        this.fields = [
            { value: 'count()', viewValue: 'count()', fieldValue: '' },
            { value: 'AccountNumber', viewValue: 'AccountNumber', fieldValue: '' },
            { value: 'AccountSource', viewValue: 'AccountSource', fieldValue: '' },
            { value: 'AccountType__c', viewValue: 'AccountType__c', fieldValue: '' },
            { value: 'Account__ID', viewValue: 'ID', fieldValue: '' },
            { value: 'Name', viewValue: 'Name', fieldValue: '' },
            { value: 'Home Phone', viewValue: 'HomePhone', fieldValue: '' },
            { value: 'Cellphone', viewValue: 'Cellphone', fieldValue: '' },
            { value: 'City', viewValue: 'City', fieldValue: '' },
        ];
        this.section = 'STEP_1';
    }
    UpsertComponentComponent.prototype.ngOnInit = function () {
    };
    UpsertComponentComponent.prototype.handleNext = function () {
        this.section = 'STEP_2';
    };
    UpsertComponentComponent.prototype.handlConfirm = function () {
        this.section = 'STEP_3';
    };
    UpsertComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upsert-component',
            template: __webpack_require__(/*! ./upsert-component.component.html */ "./src/app/components/upsert-component/upsert-component.component.html"),
            styles: [__webpack_require__(/*! ./upsert-component.component.css */ "./src/app/components/upsert-component/upsert-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpsertComponentComponent);
    return UpsertComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-avatar{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.user-avatar img{\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItYXZhdGFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi51c2VyLWF2YXRhciBpbWd7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n          <h4 class=\"card-title\">User Profile</h4>        \r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!--<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">-->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"user-avatar\">\r\n                  <img class=\"img\" src=\"../../assets/img/avatar.png\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">Name</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.name}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">Organization Name</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.orgName}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                   <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">Email</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.email}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">User Name</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.username}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>\r\n                 </div>\r\n                 <div class=\"row\">\r\n                   <div class=\"col-md-6\">\r\n                     <div class=\"form-group bmd-form-group\">\r\n                       <label class=\"\">Password expired</label>\r\n                       <input type=\"text\" class=\"form-control\" value=\"{{userData.passwordExp}}\" disabled=\"\">\r\n                     </div>\r\n                    </div>             \r\n                 </div>\r\n            </div>\r\n          </div>\r\n           \r\n          \r\n          <!--</form>-->\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        this.userData = {};
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.updateProfile();
    };
    UserProfileComponent.prototype.updateProfile = function () {
        var envSelectec = sessionStorage.getItem('selected');
        var session = JSON.parse(sessionStorage.getItem(envSelectec));
        this.userData = {
            name: session.userFullName,
            email: session.userEmail,
            orgName: session.organizationName,
            username: session.userName
        };
        this.userData['passwordExp'] = (session.passwordExpired == 'true') ? 'Yes' : 'No';
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-panel>.content{\r\n    margin-top: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFuZWw+LmNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenavbar></app-sidenavbar>\r\n\r\n<div class=\"main-panel\">\r\n      <!-- Navbar -->\r\n     <!-- <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"navbar-wrapper\">\r\n            <a class=\"navbar-brand\" href=\"#pablo\"></a>\r\n          </div>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n          </button>-->\r\n          <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\r\n              <div class=\"container-fluid\">\r\n          <div class=\"collapse navbar-collapse justify-content-end\">\r\n           <!-- <form class=\"navbar-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"input-group no-border\">\r\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                  <i class=\"material-icons\">search</i>\r\n                  <div class=\"ripple-container\"></div>\r\n                </button>\r\n              </div>\r\n            </form>-->\r\n            <ul class=\"navbar-nav\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                  <i class=\"material-icons\">dashboard</i>\r\n                  <p class=\"d-lg-none d-md-block\">\r\n                    Stats\r\n                  </p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"material-icons\">notifications</i>\r\n                  <span class=\"notification\">5</span>\r\n                  <p class=\"d-lg-none d-md-block\">\r\n                    Some Actions\r\n                  </p>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#pablo\">\r\n                  <i class=\"material-icons\">person</i>\r\n                  <p class=\"d-lg-none d-md-block\">\r\n                    Account\r\n                  </p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n      <!-- End Navbar -->\r\n      <div class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n          \r\n        </div>\r\n      </div>\r\n      <footer class=\"footer\">\r\n        <div class=\"container-fluid\">\r\n          <nav class=\"float-left\">\r\n            \r\n          </nav>\r\n          \r\n        </div>\r\n      </footer>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent() {
    }
    HomeLayoutComponent.prototype.ngOnInit = function () {
    };
    HomeLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-layout',
            template: __webpack_require__(/*! ./home-layout.component.html */ "./src/app/layouts/home-layout/home-layout.component.html"),
            styles: [__webpack_require__(/*! ./home-layout.component.css */ "./src/app/layouts/home-layout/home-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/login-layout/login-layout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/login-layout/login-layout.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-panel {\r\n    float: none;\r\n    width: 100%;\r\n}\r\n\r\n.content {\r\n    margin-top: 0;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9sb2dpbi1sYXlvdXQvbG9naW4tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFDRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2xvZ2luLWxheW91dC9sb2dpbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhbmVsIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layouts/login-layout/login-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/login-layout/login-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-panel\">\r\n\r\n  <div class=\"content\">\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n\r\n    </div>\r\n  </div>\r\n  <!--<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n      <nav class=\"float-left\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"https://www.creative-tim.com\">\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://creative-tim.com/presentation\">\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://blog.creative-tim.com\">\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              help\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n\r\n    </div>\r\n  </footer>-->\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/login-layout/login-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/login-layout/login-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-layout',
            template: __webpack_require__(/*! ./login-layout.component.html */ "./src/app/layouts/login-layout/login-layout.component.html"),
            styles: [__webpack_require__(/*! ./login-layout.component.css */ "./src/app/layouts/login-layout/login-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/rest/rest.service.ts":
/*!**************************************!*\
  !*** ./src/app/rest/rest.service.ts ***!
  \**************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = 'http://localhost:8080/';
var login_endpoint = 'login_request';
var soql_endpoint = 'soql_request';
var getAllObjects_endpoint = 'describe_all';
var getFields_endpoint = 'describe_obj';
var orgToOrg_endpoint = 'upload_records';
var getChildRecords_endpoint = 'child_records';
var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.login = function (user) {
        var headerOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'username': user.email,
                'password': user.password,
                'version': '44.0',
                'orgtype': user.env.toUpperCase(),
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": '*'
            })
        };
        return this.http.post(endpoint + login_endpoint, '', headerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return console.log('Login Successful'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addProduct')));
    };
    RestService.prototype.soql_query = function (query) {
        var sessionData = JSON.parse(sessionStorage.getItem('env1'));
        console.log(sessionData.baseURL);
        var headerOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'baseURL': sessionData.baseURL,
                'version': '44.0',
                'sessionId': sessionData.sessionId,
                'query': query,
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": '*'
            })
        };
        return this.http.post(endpoint + soql_endpoint, '', headerOptions);
    };
    RestService.prototype.getAllOrgObjects = function () {
        var sessionData = JSON.parse(sessionStorage.getItem('env1'));
        console.log(sessionData.baseURL);
        var headerOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'baseURL': sessionData.baseURL,
                'version': '44.0',
                'sessionId': sessionData.sessionId,
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": '*'
            })
        };
        return this.http.post(endpoint + getAllObjects_endpoint, '', headerOptions);
    };
    //get details of field from Objects 
    RestService.prototype.getFieldsOfObject = function (objectName) {
        var sessionData = JSON.parse(sessionStorage.getItem('env1'));
        console.log(sessionData.baseURL);
        var headerOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'baseURL': sessionData.baseURL,
                'version': '44.0',
                'sessionId': sessionData.sessionId,
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": '*'
            }),
            params: { 'objectName': objectName }
        };
        return this.http.post(endpoint + getFields_endpoint, '', headerOptions);
    };
    // upload or org to org objects.
    RestService.prototype.orgtoOrgTransfer = function (nameOfObject, data) {
        var sessionData = JSON.parse(sessionStorage.getItem('env2'));
        console.log("baseURL", sessionData.baseURL, data);
        var headerOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'baseURL': sessionData.baseURL,
                'version': '44.0',
                'sessionId': sessionData.sessionId,
                'objectName': nameOfObject,
                'dataBody': data,
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": '*'
            })
        };
        return this.http.post(endpoint + orgToOrg_endpoint, '', headerOptions);
    };
    // child records .
    RestService.prototype.getChildData = function (nameOfObject, id, relationName) {
        var sessionData = JSON.parse(sessionStorage.getItem('env1'));
        console.log(sessionData.baseURL);
        var headerOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'baseURL': sessionData.baseURL,
                'version': '44.0',
                'sessionId': sessionData.sessionId,
                'objectName': nameOfObject,
                'recordIds': id,
                'relationShipName': relationName,
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": '*'
            })
        };
        return this.http.post(endpoint + getChildRecords_endpoint, '', headerOptions);
    };
    RestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for env consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordion.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointerClass{\r\n    cursor: pointer;\r\n}\r\n.material-icons{\r\n    font-weight: bold;\r\n    font-size: 36px;\r\n    margin-right: 20px;\r\n}\r\n.card-header {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyQ2xhc3N7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hdGVyaWFsLWljb25ze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/accordion/accordion.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"query-section\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary pointerClass\" (click)=\"isHidden = !isHidden\">\r\n            <i class=\"material-icons\">{{isHidden ? 'add' : 'remove'}}</i>\r\n            <div>\r\n                <h4 class=\"card-title\">{{title}}</h4>\r\n                <p class=\"card-category\">{{desc}}</p>\r\n            </div>             \r\n            \r\n          </div>\r\n          <div class=\"card-body\" [hidden]=\"isHidden\">\r\n            <ng-content select=\".cardBody\"></ng-content>\r\n          </div>\r\n          <div class=\"card-footer\" [hidden]=\"!isHidden\">\r\n              <ng-content select=\".cardFooter\"></ng-content>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  "

/***/ }),

/***/ "./src/app/shared/accordion/accordion.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.component.ts ***!
  \*********************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this.isHidden = false;
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "desc", void 0);
    AccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/shared/accordion/accordion.component.html"),
            styles: [__webpack_require__(/*! ./accordion.component.css */ "./src/app/shared/accordion/accordion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionComponent);
    return AccordionComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rajpaul\Desktop\ProjectData\ASHUTOSH\DataLoadEngine-SpringBootUi\src\main\springbot-angularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map