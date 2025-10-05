"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class AppComponent {
  constructor() {
    this.title = 'taarifu-engine-dash';
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBQU4iLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 4978);
/* harmony import */ var _core_guards_password_change_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/password-change.guard */ 432);


const routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'login',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-src_app_shared_components_toast_toast_component_ts"), __webpack_require__.e("src_app_features_auth_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/login/login.component */ 461)).then(m => m.LoginComponent)
}, {
  path: 'change-password',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-src_app_shared_components_toast_toast_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_auth_change-password_change-password_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/change-password/change-password.component */ 6981)).then(m => m.ChangePasswordComponent),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard]
}, {
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_toast_toast_component_ts"), __webpack_require__.e("src_app_shared_components_layout_layout_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shared/components/layout/layout.component */ 7487)).then(m => m.LayoutComponent),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard, _core_guards_password_change_guard__WEBPACK_IMPORTED_MODULE_1__.PasswordChangeGuard],
  children: [{
    path: 'profile',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_profile_profile_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/profile/profile.component */ 366)).then(m => m.ProfileComponent)
  }, {
    path: 'dashboard',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_dashboard_dashboard_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.component */ 1626)).then(m => m.DashboardComponent)
  }, {
    path: 'regions',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_regions_region-list_region-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/regions/region-list/region-list.component */ 7340)).then(m => m.RegionListComponent)
  }, {
    path: 'regions/create',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_regions_region-form_region-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/regions/region-form/region-form.component */ 5427)).then(m => m.RegionFormComponent)
  }, {
    path: 'regions/edit/:uid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_regions_region-form_region-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/regions/region-form/region-form.component */ 5427)).then(m => m.RegionFormComponent)
  }, {
    path: 'districts',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_districts_district-list_district-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/districts/district-list/district-list.component */ 4394)).then(m => m.DistrictListComponent)
  }, {
    path: 'districts/create',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_districts_district-form_district-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/districts/district-form/district-form.component */ 874)).then(m => m.DistrictFormComponent)
  }, {
    path: 'districts/edit/:uid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_districts_district-form_district-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/districts/district-form/district-form.component */ 874)).then(m => m.DistrictFormComponent)
  }, {
    path: 'wards',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_wards_ward-list_ward-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/wards/ward-list/ward-list.component */ 3310)).then(m => m.WardListComponent)
  }, {
    path: 'wards/create',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_wards_ward-form_ward-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/wards/ward-form/ward-form.component */ 8146)).then(m => m.WardFormComponent)
  }, {
    path: 'wards/edit/:uid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_wards_ward-form_ward-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/wards/ward-form/ward-form.component */ 8146)).then(m => m.WardFormComponent)
  }, {
    path: 'villages',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_villages_village-list_village-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/villages/village-list/village-list.component */ 654)).then(m => m.VillageListComponent)
  }, {
    path: 'villages/create',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_villages_village-form_village-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/villages/village-form/village-form.component */ 1590)).then(m => m.VillageFormComponent)
  }, {
    path: 'villages/edit/:uid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_villages_village-form_village-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/villages/village-form/village-form.component */ 1590)).then(m => m.VillageFormComponent)
  }, {
    path: 'hamlets',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_hamlets_hamlet-list_hamlet-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/hamlets/hamlet-list/hamlet-list.component */ 4165)).then(m => m.HamletListComponent)
  }, {
    path: 'hamlets/create',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_hamlets_hamlet-form_hamlet-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/hamlets/hamlet-form/hamlet-form.component */ 297)).then(m => m.HamletFormComponent)
  }, {
    path: 'hamlets/edit/:uid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_hamlets_hamlet-form_hamlet-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/hamlets/hamlet-form/hamlet-form.component */ 297)).then(m => m.HamletFormComponent)
  }, {
    path: 'constituencies',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_constituencies_constituency-list_constituency-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/constituencies/constituency-list/constituency-list.component */ 3705)).then(m => m.ConstituencyListComponent)
  }, {
    path: 'constituencies/create',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_constituencies_constituency-form_constituency-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/constituencies/constituency-form/constituency-form.component */ 629)).then(m => m.ConstituencyFormComponent)
  }, {
    path: 'constituencies/edit/:uid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_constituencies_constituency-form_constituency-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/constituencies/constituency-form/constituency-form.component */ 629)).then(m => m.ConstituencyFormComponent)
  }, {
    path: 'areas',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_areas_area-list_area-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/areas/area-list/area-list.component */ 3683)).then(m => m.AreaListComponent)
  }, {
    path: 'parliaments',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_parliaments_parliament-list_parliament-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/parliaments/parliament-list/parliament-list.component */ 1181)).then(m => m.ParliamentListComponent)
  }, {
    path: 'parliaments/create',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_parliaments_parliament-form_parliament-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/parliaments/parliament-form/parliament-form.component */ 601)).then(m => m.ParliamentFormComponent)
  }, {
    path: 'parliaments/edit/:uid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_parliaments_parliament-form_parliament-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/parliaments/parliament-form/parliament-form.component */ 601)).then(m => m.ParliamentFormComponent)
  }, {
    path: 'political-parties',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_political-parties_political-party-list_political-party-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/political-parties/political-party-list/political-party-list.component */ 3)).then(m => m.PoliticalPartyListComponent)
  }, {
    path: 'political-parties/create',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_political-parties_political-party-form_political-party-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/political-parties/political-party-form/political-party-form.component */ 6407)).then(m => m.PoliticalPartyFormComponent)
  }, {
    path: 'political-parties/edit/:uid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_political-parties_political-party-form_political-party-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/political-parties/political-party-form/political-party-form.component */ 6407)).then(m => m.PoliticalPartyFormComponent)
  }, {
    path: 'admin-users',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin-users_admin-user-list_admin-user-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin-users/admin-user-list/admin-user-list.component */ 9923)).then(m => m.AdminUserListComponent)
  }, {
    path: 'admin-users/create',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin-users_admin-user-form_admin-user-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin-users/admin-user-form/admin-user-form.component */ 5547)).then(m => m.AdminUserFormComponent)
  }, {
    path: 'admin-users/edit/:uid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin-users_admin-user-form_admin-user-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin-users/admin-user-form/admin-user-form.component */ 5547)).then(m => m.AdminUserFormComponent)
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }]
}, {
  path: '**',
  redirectTo: '/dashboard'
}];

/***/ }),

/***/ 4978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);



const authGuard = (route, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};

/***/ }),

/***/ 432:
/*!******************************************************!*\
  !*** ./src/app/core/guards/password-change.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordChangeGuard: () => (/* binding */ PasswordChangeGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



/**
 * Guard that checks if the user needs to change their password
 * If requirePasswordChange is true, redirect to password change page
 */
class PasswordChangeGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.requirePasswordChange) {
      // User needs to change password, redirect to password change page
      this.router.navigate(['/change-password']);
      return false;
    }
    // User doesn't need to change password, allow access
    return true;
  }
  static {
    this.ɵfac = function PasswordChangeGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PasswordChangeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PasswordChangeGuard,
      factory: PasswordChangeGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3622:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);


const authInterceptor = (req, next) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const token = authService.getToken();
  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq);
  }
  return next(req);
};

/***/ }),

/***/ 8010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);



class AuthService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api';
    this.TOKEN_KEY = 'auth_token';
    this.USER_KEY = 'current_user';
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.loadStoredUser();
  }
  login(credentials) {
    return this.http.post(`${this.API_URL}/admin/v1/auth/login`, credentials).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      if (response.status && response.data.accessToken) {
        this.setToken(response.data.accessToken);
        this.setCurrentUser(response.data);
      }
    }));
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
  }
  isAuthenticated() {
    const token = this.getToken();
    if (!token) {
      console.log('No token found - user not authenticated');
      return false;
    }
    // Check if token is expired (basic check)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
      if (payload.exp && payload.exp < currentTime) {
        console.log('Token expired - user not authenticated');
        this.logout(); // Clear expired token
        return false;
      }
      console.log('Token valid - user authenticated');
      return true;
    } catch (error) {
      console.log('Invalid token format - user not authenticated');
      this.logout(); // Clear invalid token
      return false;
    }
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  setCurrentUser(user) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  loadStoredUser() {
    const storedUser = localStorage.getItem(this.USER_KEY);
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        this.logout();
      }
    }
  }
  // Forgot Password - Send reset link to email
  forgotPassword(email) {
    return this.http.post(`${this.API_URL}/admin/v1/auth/forgot-password`, {
      email
    });
  }
  // Reset Password - Reset password with token
  resetPassword(token, newPassword) {
    return this.http.post(`${this.API_URL}/admin/v1/auth/reset-password`, {
      token,
      newPassword
    });
  }
  // Update current user data (e.g., after password change)
  updateCurrentUser(user) {
    this.setCurrentUser(user);
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/core/interceptors/auth.interceptor */ 3622);






(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_4__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptors)([_app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.authInterceptor]))]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map