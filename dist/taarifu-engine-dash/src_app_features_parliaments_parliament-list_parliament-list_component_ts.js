"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_parliaments_parliament-list_parliament-list_component_ts"],{

/***/ 9399:
/*!*************************************************!*\
  !*** ./src/app/core/models/parliament.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParliamentHelper: () => (/* binding */ ParliamentHelper)
/* harmony export */ });
// Helper functions for Parliament
class ParliamentHelper {
  static getStatusBadgeClass(parliament) {
    if (parliament.isCurrent) {
      return 'bg-primary';
    } else if (parliament.inSession) {
      return 'bg-success';
    } else if (parliament.hasEnded) {
      return 'bg-secondary';
    } else if (parliament.hasStarted) {
      return 'bg-warning';
    } else {
      return 'bg-info';
    }
  }
  static getStatusText(parliament) {
    if (parliament.isCurrent) {
      return 'Current';
    } else if (parliament.inSession) {
      return 'In Session';
    } else if (parliament.hasEnded) {
      return 'Ended';
    } else if (parliament.hasStarted) {
      return 'Active';
    } else {
      return 'Upcoming';
    }
  }
  static getDurationText(parliament) {
    if (parliament.durationInYears) {
      return `${parliament.durationInYears} year${parliament.durationInYears > 1 ? 's' : ''}`;
    }
    return 'N/A';
  }
  static isDateInPast(dateString) {
    return new Date(dateString) < new Date();
  }
  static isDateInFuture(dateString) {
    return new Date(dateString) > new Date();
  }
  static formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  static getDateRangeText(parliament) {
    const startDate = this.formatDate(parliament.startDate);
    const endDate = this.formatDate(parliament.endDate);
    return `${startDate} - ${endDate}`;
  }
}

/***/ }),

/***/ 5423:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ToastService {
  constructor() {
    this.toastsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.toasts$ = this.toastsSubject.asObservable();
  }
  showToast(type, title, message, duration = 3000, dismissible = true) {
    const toast = {
      id: this.generateId(),
      type,
      title,
      message,
      duration,
      dismissible
    };
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);
    // Auto remove toast after duration
    if (duration > 0) {
      setTimeout(() => {
        this.removeToast(toast.id);
      }, duration);
    }
  }
  success(title, message, duration, dismissible) {
    this.showToast('success', title, message, duration, dismissible);
  }
  error(title, message, duration, dismissible) {
    this.showToast('error', title, message, duration, dismissible);
  }
  warning(title, message, duration, dismissible) {
    this.showToast('warning', title, message, duration, dismissible);
  }
  info(title, message, duration, dismissible) {
    this.showToast('info', title, message, duration, dismissible);
  }
  removeToast(id) {
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next(currentToasts.filter(toast => toast.id !== id));
  }
  clearAll() {
    this.toastsSubject.next([]);
  }
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  static {
    this.ɵfac = function ToastService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToastService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1181:
/*!***********************************************************************************!*\
  !*** ./src/app/features/parliaments/parliament-list/parliament-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParliamentListComponent: () => (/* binding */ ParliamentListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_models_parliament_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/models/parliament.model */ 9399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_parliament_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/parliament.service */ 4571);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);











const _c0 = a0 => ["/parliaments/edit", a0];
function ParliamentListComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Loading parliaments...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ParliamentListComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No Parliaments Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "No parliaments match your search criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ParliamentListComponent_div_68_tr_21_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParliamentListComponent_div_68_tr_21_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const parliament_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.setCurrentParliament(parliament_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ParliamentListComponent_div_68_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td")(5, "div")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "div")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td")(19, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td")(22, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td")(25, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td")(28, "div", 58)(29, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ParliamentListComponent_div_68_tr_21_button_31_Template, 2, 0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParliamentListComponent_div_68_tr_21_Template_button_click_32_listener() {
      const parliament_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteParliament(parliament_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const parliament_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](parliament_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](parliament_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](parliament_r5.description || "No description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.ParliamentHelper.formatDate(parliament_r5.startDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("to ", ctx_r1.ParliamentHelper.formatDate(parliament_r5.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.ParliamentHelper.getDurationText(parliament_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.ParliamentHelper.getStatusBadgeClass(parliament_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.ParliamentHelper.getStatusText(parliament_r5), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-success", parliament_r5.inSession)("bg-secondary", !parliament_r5.inSession);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", parliament_r5.inSession ? "In Session" : "Not in Session", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, parliament_r5.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !parliament_r5.isCurrent);
  }
}
function ParliamentListComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48)(1, "table", 49)(2, "thead", 50)(3, "tr")(4, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParliamentListComponent_div_68_Template_th_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSort("code", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParliamentListComponent_div_68_Template_th_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSort("name", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Date Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ParliamentListComponent_div_68_tr_21_Template, 34, 17, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bi-arrow-up", ctx_r1.sortBy === "code" && ctx_r1.sortDir === "asc")("bi-arrow-down", ctx_r1.sortBy === "code" && ctx_r1.sortDir === "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bi-arrow-up", ctx_r1.sortBy === "name" && ctx_r1.sortDir === "asc")("bi-arrow-down", ctx_r1.sortBy === "name" && ctx_r1.sortDir === "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.parliaments);
  }
}
function ParliamentListComponent_div_69_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 68)(1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParliamentListComponent_div_69_li_8_Template_button_click_1_listener() {
      const page_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange(page_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", page_r8 === ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r8 + 1);
  }
}
function ParliamentListComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nav")(4, "ul", 67)(5, "li", 68)(6, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParliamentListComponent_div_69_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ParliamentListComponent_div_69_li_8_Template, 3, 3, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 68)(10, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParliamentListComponent_div_69_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Showing ", ctx_r1.currentPage * ctx_r1.pageSize + 1, " to ", ctx_r1.Math.min((ctx_r1.currentPage + 1) * ctx_r1.pageSize, ctx_r1.totalElements), " of ", ctx_r1.totalElements, " parliaments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.getPageNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages - 1);
  }
}
class ParliamentListComponent {
  constructor(parliamentService, toastService, authService) {
    this.parliamentService = parliamentService;
    this.toastService = toastService;
    this.authService = authService;
    this.parliaments = [];
    this.isLoading = false;
    this.currentPage = 0;
    this.pageSize = 20;
    this.totalPages = 0;
    this.totalElements = 0;
    this.searchTerm = '';
    this.statusFilter = '';
    this.sortBy = 'startDate';
    this.sortDir = 'desc';
    // Expose helper class to template
    this.ParliamentHelper = _core_models_parliament_model__WEBPACK_IMPORTED_MODULE_0__.ParliamentHelper;
    this.Math = Math;
  }
  ngOnInit() {
    this.loadParliaments();
  }
  loadParliaments() {
    this.isLoading = true;
    let request;
    console.log('Loading parliaments with searchTerm:', this.searchTerm, 'statusFilter:', this.statusFilter);
    if (this.searchTerm && this.searchTerm.trim()) {
      console.log('Using searchParliaments with term:', this.searchTerm.trim());
      request = this.parliamentService.searchParliaments(this.searchTerm.trim(), this.currentPage, this.pageSize, this.sortBy, this.sortDir);
    } else if (this.statusFilter) {
      console.log('Using getActiveParliaments');
      request = this.parliamentService.getActiveParliaments(this.currentPage, this.pageSize, this.sortBy, this.sortDir);
    } else {
      console.log('Using getAllParliaments');
      request = this.parliamentService.getAllParliaments(this.currentPage, this.pageSize, this.sortBy, this.sortDir);
    }
    request.subscribe({
      next: response => {
        this.isLoading = false;
        if (response.status) {
          this.parliaments = response.data;
          this.totalPages = response.totalPages;
          this.totalElements = response.totalElements;
        } else {
          this.toastService.error('Error', 'Failed to load parliaments');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error loading parliaments:', error);
        this.toastService.error('Error', 'Failed to load parliaments. Please try again.');
      }
    });
  }
  onSearch() {
    console.log('Search triggered with term:', this.searchTerm);
    this.currentPage = 0;
    this.loadParliaments();
  }
  onClearSearch() {
    this.searchTerm = '';
    this.statusFilter = '';
    this.currentPage = 0;
    this.loadParliaments();
  }
  onStatusChange() {
    this.currentPage = 0;
    this.loadParliaments();
  }
  onSortChange() {
    this.currentPage = 0;
    this.loadParliaments();
  }
  onSort(field, event) {
    event.preventDefault();
    if (this.sortBy === field) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = field;
      this.sortDir = 'asc';
    }
    this.currentPage = 0;
    this.loadParliaments();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadParliaments();
  }
  onPageSizeChange() {
    this.currentPage = 0;
    this.loadParliaments();
  }
  getPageNumbers() {
    const pages = [];
    const start = Math.max(0, this.currentPage - 2);
    const end = Math.min(this.totalPages - 1, this.currentPage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  setCurrentParliament(parliament) {
    if (confirm(`Are you sure you want to set "${parliament.name}" as the current parliament?`)) {
      this.parliamentService.setCurrentParliamentByUid(parliament.uid).subscribe({
        next: response => {
          if (response.status) {
            this.toastService.success('Success', 'Parliament set as current successfully');
            this.loadParliaments();
          } else {
            this.toastService.error('Error', 'Failed to set parliament as current');
          }
        },
        error: error => {
          console.error('Error setting current parliament:', error);
          this.toastService.error('Error', 'Failed to set parliament as current. Please try again.');
        }
      });
    }
  }
  deleteParliament(parliament) {
    if (confirm(`Are you sure you want to delete "${parliament.name}"? This action cannot be undone.`)) {
      this.parliamentService.deleteParliamentByUid(parliament.uid).subscribe({
        next: response => {
          if (response.status) {
            this.toastService.success('Success', 'Parliament deleted successfully');
            this.loadParliaments();
          } else {
            this.toastService.error('Error', 'Failed to delete parliament');
          }
        },
        error: error => {
          console.error('Error deleting parliament:', error);
          this.toastService.error('Error', 'Failed to delete parliament. Please try again.');
        }
      });
    }
  }
  static {
    this.ɵfac = function ParliamentListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ParliamentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_parliament_service__WEBPACK_IMPORTED_MODULE_1__.ParliamentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ParliamentListComponent,
      selectors: [["app-parliament-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 70,
      vars: 14,
      consts: [[1, "container-fluid"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-4"], ["for", "searchTerm", 1, "form-label"], ["type", "text", "id", "searchTerm", "placeholder", "Search by name, code or description...", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "col-md-3"], ["for", "statusFilter", 1, "form-label"], ["id", "statusFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "current"], ["value", "active"], ["value", "inSession"], ["value", "ended"], ["value", "upcoming"], ["for", "sortBy", 1, "form-label"], ["id", "sortBy", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "startDate"], ["value", "endDate"], ["value", "name"], ["value", "code"], ["value", "createdAt"], [1, "col-md-2", "d-flex", "align-items-end"], ["type", "button", 1, "btn", "btn-primary", "me-2", 3, "click", "disabled"], [1, "bi", "bi-search", "me-1"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-x-circle", "me-1"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "bi", "bi-building", "me-2"], [1, "d-flex", "align-items-center", "gap-2"], ["routerLink", "/parliaments/create", 1, "btn", "btn-primary", "btn-sm"], [1, "bi", "bi-plus", "me-1"], [1, "text-muted", "me-2"], [1, "form-select", "form-select-sm", "w-auto", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["class", "text-center py-4", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-4", 4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "bi", "bi-building", "display-1", "text-muted"], [1, "mt-3"], [1, "text-muted"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], [1, "sortable", 3, "click"], [1, "bi"], [4, "ngFor", "ngForOf"], [1, "badge", "bg-primary"], [1, "badge", "bg-info"], [1, "badge", 3, "ngClass"], [1, "badge"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["type", "button", "title", "Edit parliament", 1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "bi", "bi-pencil"], ["type", "button", "class", "btn btn-outline-success", "title", "Set as current", 3, "click", 4, "ngIf"], ["type", "button", "title", "Delete parliament", 1, "btn", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], ["type", "button", "title", "Set as current", 1, "btn", "btn-outline-success", 3, "click"], [1, "bi", "bi-star"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-4"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-right"], [1, "page-link", 3, "click"]],
      template: function ParliamentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Search Parliaments");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ParliamentListComponent_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function ParliamentListComponent_Template_input_keyup_enter_7_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Filter by Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ParliamentListComponent_Template_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.statusFilter, $event) || (ctx.statusFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ParliamentListComponent_Template_select_change_11_listener() {
            return ctx.onStatusChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "All Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Current");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "In Session");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Ended");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Upcoming");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 7)(25, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Sort By");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ParliamentListComponent_Template_select_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.sortBy, $event) || (ctx.sortBy = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ParliamentListComponent_Template_select_change_27_listener() {
            return ctx.onSortChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Start Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "End Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Created Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 23)(39, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParliamentListComponent_Template_button_click_39_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ParliamentListComponent_Template_button_click_42_listener() {
            return ctx.onClearSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Clear ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 28)(46, "div", 29)(47, "h5", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " All Parliaments ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 32)(51, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " New Parliament ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Page Size:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "select", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ParliamentListComponent_Template_select_ngModelChange_56_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.pageSize, $event) || (ctx.pageSize = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ParliamentListComponent_Template_select_change_56_listener() {
            return ctx.onPageSizeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "20");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "100");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, ParliamentListComponent_div_66_Template, 6, 0, "div", 38)(67, ParliamentListComponent_div_67_Template, 6, 0, "div", 38)(68, ParliamentListComponent_div_68_Template, 22, 9, "div", 39)(69, ParliamentListComponent_div_69_Template, 12, 10, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.statusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.sortBy);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.parliaments.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.parliaments.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.totalPages > 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
      styles: [".sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.sortable[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n.table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.8rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcGFybGlhbWVudHMvcGFybGlhbWVudC1saXN0L3BhcmxpYW1lbnQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUFOOztBQUVJO0VBQ0UseUJBQUE7QUFDTjs7QUFDSTtFQUNFLGtCQUFBO0FBRU47O0FBQUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUdOOztBQURJO0VBQ0Usa0JBQUE7QUFJTiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5zb3J0YWJsZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG4gICAgLnNvcnRhYmxlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgfVxuICAgIC50YWJsZSB0aC5zb3J0YWJsZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC50YWJsZSB0aC5zb3J0YWJsZSBpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgICAuYmFkZ2Uge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_parliaments_parliament-list_parliament-list_component_ts.js.map