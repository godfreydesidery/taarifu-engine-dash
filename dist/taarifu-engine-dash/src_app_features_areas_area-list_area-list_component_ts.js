"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_areas_area-list_area-list_component_ts"],{

/***/ 5161:
/*!*******************************************!*\
  !*** ./src/app/core/models/area.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaType: () => (/* binding */ AreaType),
/* harmony export */   AreaTypeHelper: () => (/* binding */ AreaTypeHelper)
/* harmony export */ });
var AreaType;
(function (AreaType) {
  AreaType["REGION"] = "REGION";
  AreaType["DISTRICT"] = "DISTRICT";
  AreaType["WARD"] = "WARD";
  AreaType["VILLAGE"] = "VILLAGE";
  AreaType["HAMLET"] = "HAMLET";
  AreaType["CONSTITUENCY"] = "CONSTITUENCY";
})(AreaType || (AreaType = {}));
// Helper functions for AreaType
class AreaTypeHelper {
  static getDisplayName(areaType) {
    switch (areaType) {
      case AreaType.REGION:
        return 'Region';
      case AreaType.DISTRICT:
        return 'District';
      case AreaType.WARD:
        return 'Ward';
      case AreaType.VILLAGE:
        return 'Village';
      case AreaType.HAMLET:
        return 'Hamlet';
      case AreaType.CONSTITUENCY:
        return 'Constituency';
      default:
        return 'Unknown';
    }
  }
  static getDescription(areaType) {
    switch (areaType) {
      case AreaType.REGION:
        return 'Top level administrative division in Tanzania';
      case AreaType.DISTRICT:
        return 'Second level administrative division under region';
      case AreaType.WARD:
        return 'Third level administrative division under district';
      case AreaType.VILLAGE:
        return 'Fourth level administrative division under ward';
      case AreaType.HAMLET:
        return 'Fifth level administrative division under village';
      case AreaType.CONSTITUENCY:
        return 'Political/parliamentary division for elections';
      default:
        return 'Unknown area type';
    }
  }
  static getColorCode(areaType) {
    switch (areaType) {
      case AreaType.REGION:
        return '#1E40AF';
      case AreaType.DISTRICT:
        return '#059669';
      case AreaType.WARD:
        return '#DC2626';
      case AreaType.VILLAGE:
        return '#7C3AED';
      case AreaType.HAMLET:
        return '#EA580C';
      case AreaType.CONSTITUENCY:
        return '#0891B2';
      default:
        return '#6B7280';
    }
  }
  static getLevel(areaType) {
    switch (areaType) {
      case AreaType.REGION:
        return 1;
      case AreaType.DISTRICT:
      case AreaType.CONSTITUENCY:
        return 2;
      case AreaType.WARD:
        return 3;
      case AreaType.VILLAGE:
        return 4;
      case AreaType.HAMLET:
        return 5;
      default:
        return 0;
    }
  }
  static isAdministrative(areaType) {
    return areaType !== AreaType.CONSTITUENCY;
  }
  static isPolitical(areaType) {
    return areaType === AreaType.CONSTITUENCY;
  }
  static getParentType(areaType) {
    switch (areaType) {
      case AreaType.REGION:
        return null;
      case AreaType.DISTRICT:
      case AreaType.CONSTITUENCY:
        return AreaType.REGION;
      case AreaType.WARD:
        return AreaType.DISTRICT;
      case AreaType.VILLAGE:
        return AreaType.WARD;
      case AreaType.HAMLET:
        return AreaType.VILLAGE;
      default:
        return null;
    }
  }
  static getChildTypes(areaType) {
    switch (areaType) {
      case AreaType.REGION:
        return [AreaType.DISTRICT, AreaType.CONSTITUENCY];
      case AreaType.DISTRICT:
        return [AreaType.WARD];
      case AreaType.WARD:
        return [AreaType.VILLAGE];
      case AreaType.VILLAGE:
        return [AreaType.HAMLET];
      case AreaType.HAMLET:
      case AreaType.CONSTITUENCY:
        return [];
      default:
        return [];
    }
  }
  static getAllTypes() {
    return [AreaType.REGION, AreaType.DISTRICT, AreaType.WARD, AreaType.VILLAGE, AreaType.HAMLET, AreaType.CONSTITUENCY];
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

/***/ 3683:
/*!*****************************************************************!*\
  !*** ./src/app/features/areas/area-list/area-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaListComponent: () => (/* binding */ AreaListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_models_area_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/models/area.model */ 5161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_area_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/area.service */ 7845);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);










function AreaListComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", type_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.AreaTypeHelper.getDisplayName(type_r1));
  }
}
function AreaListComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Loading areas...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AreaListComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No Areas Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "No areas match your search criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AreaListComponent_div_52_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td")(15, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const area_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r1.AreaTypeHelper.getColorCode(area_r4.areaType))("color", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getAreaTypeIcon(area_r4.areaType));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.AreaTypeHelper.getDisplayName(area_r4.areaType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.AreaTypeHelper.getLevel(area_r4.areaType));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-success", ctx_r1.AreaTypeHelper.isAdministrative(area_r4.areaType))("bg-warning", ctx_r1.AreaTypeHelper.isPolitical(area_r4.areaType));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.AreaTypeHelper.isAdministrative(area_r4.areaType) ? "Administrative" : "Political", " ");
  }
}
function AreaListComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40)(1, "table", 41)(2, "thead", 42)(3, "tr")(4, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_div_52_Template_th_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSort("code", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_div_52_Template_th_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSort("name", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_div_52_Template_th_click_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSort("areaType", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AreaListComponent_div_52_tr_18_Template, 17, 14, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bi-arrow-up", ctx_r1.sortBy === "code" && ctx_r1.sortDir === "asc")("bi-arrow-down", ctx_r1.sortBy === "code" && ctx_r1.sortDir === "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bi-arrow-up", ctx_r1.sortBy === "name" && ctx_r1.sortDir === "asc")("bi-arrow-down", ctx_r1.sortBy === "name" && ctx_r1.sortDir === "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bi-arrow-up", ctx_r1.sortBy === "areaType" && ctx_r1.sortDir === "asc")("bi-arrow-down", ctx_r1.sortBy === "areaType" && ctx_r1.sortDir === "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.areas);
  }
}
function AreaListComponent_div_53_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 52)(1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_div_53_li_8_Template_button_click_1_listener() {
      const page_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange(page_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", page_r7 === ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r7 + 1);
  }
}
function AreaListComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nav")(4, "ul", 51)(5, "li", 52)(6, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_div_53_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AreaListComponent_div_53_li_8_Template, 3, 3, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 52)(10, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_div_53_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Showing ", ctx_r1.currentPage * ctx_r1.pageSize + 1, " to ", ctx_r1.Math.min((ctx_r1.currentPage + 1) * ctx_r1.pageSize, ctx_r1.totalElements), " of ", ctx_r1.totalElements, " areas ");
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
class AreaListComponent {
  constructor(areaService, toastService, authService) {
    this.areaService = areaService;
    this.toastService = toastService;
    this.authService = authService;
    this.areas = [];
    this.areaTypes = _core_models_area_model__WEBPACK_IMPORTED_MODULE_0__.AreaTypeHelper.getAllTypes();
    this.isLoading = false;
    this.currentPage = 0;
    this.pageSize = 20;
    this.totalPages = 0;
    this.totalElements = 0;
    this.searchTerm = '';
    this.selectedAreaType = '';
    this.sortBy = 'code';
    this.sortDir = 'asc';
    // Expose helper class to template
    this.AreaTypeHelper = _core_models_area_model__WEBPACK_IMPORTED_MODULE_0__.AreaTypeHelper;
    this.Math = Math;
  }
  ngOnInit() {
    this.loadAreas();
  }
  loadAreas() {
    this.isLoading = true;
    let request;
    console.log('Loading areas with searchTerm:', this.searchTerm, 'selectedAreaType:', this.selectedAreaType);
    if (this.searchTerm && this.searchTerm.trim()) {
      if (this.selectedAreaType) {
        console.log('Using searchAreasByType with type:', this.selectedAreaType, 'term:', this.searchTerm.trim());
        request = this.areaService.searchAreasByType(this.selectedAreaType, this.searchTerm.trim(), this.currentPage, this.pageSize, this.sortBy, this.sortDir);
      } else {
        console.log('Using searchAreas with term:', this.searchTerm.trim());
        request = this.areaService.searchAreas(this.searchTerm.trim(), this.currentPage, this.pageSize, this.sortBy, this.sortDir);
      }
    } else if (this.selectedAreaType) {
      console.log('Using getAreasByType with type:', this.selectedAreaType);
      request = this.areaService.getAreasByType(this.selectedAreaType, this.currentPage, this.pageSize, this.sortBy, this.sortDir);
    } else {
      console.log('Using getAllAreas');
      request = this.areaService.getAllAreas(this.currentPage, this.pageSize, this.sortBy, this.sortDir);
    }
    request.subscribe({
      next: response => {
        this.isLoading = false;
        if (response.status) {
          this.areas = response.data;
          this.totalPages = response.totalPages;
          this.totalElements = response.totalElements;
        } else {
          this.toastService.error('Error', 'Failed to load areas');
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error loading areas:', error);
        this.toastService.error('Error', 'Failed to load areas. Please try again.');
      }
    });
  }
  onSearch() {
    console.log('Search triggered with term:', this.searchTerm);
    this.currentPage = 0;
    this.loadAreas();
  }
  onClearSearch() {
    this.searchTerm = '';
    this.selectedAreaType = '';
    this.currentPage = 0;
    this.loadAreas();
  }
  onAreaTypeChange() {
    this.currentPage = 0;
    this.loadAreas();
  }
  onSortChange() {
    this.currentPage = 0;
    this.loadAreas();
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
    this.loadAreas();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadAreas();
  }
  onPageSizeChange() {
    this.currentPage = 0;
    this.loadAreas();
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
  getAreaTypeIcon(areaType) {
    switch (areaType) {
      case _core_models_area_model__WEBPACK_IMPORTED_MODULE_0__.AreaType.REGION:
        return 'bi-geo-alt-fill';
      case _core_models_area_model__WEBPACK_IMPORTED_MODULE_0__.AreaType.DISTRICT:
        return 'bi-building';
      case _core_models_area_model__WEBPACK_IMPORTED_MODULE_0__.AreaType.WARD:
        return 'bi-house';
      case _core_models_area_model__WEBPACK_IMPORTED_MODULE_0__.AreaType.VILLAGE:
        return 'bi-house-door';
      case _core_models_area_model__WEBPACK_IMPORTED_MODULE_0__.AreaType.HAMLET:
        return 'bi-house-door-fill';
      case _core_models_area_model__WEBPACK_IMPORTED_MODULE_0__.AreaType.CONSTITUENCY:
        return 'bi-flag-fill';
      default:
        return 'bi-question-circle';
    }
  }
  static {
    this.ɵfac = function AreaListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AreaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_area_service__WEBPACK_IMPORTED_MODULE_1__.AreaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AreaListComponent,
      selectors: [["app-area-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 54,
      vars: 15,
      consts: [[1, "container-fluid"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-4"], ["for", "searchTerm", 1, "form-label"], ["type", "text", "id", "searchTerm", "placeholder", "Search by name, code or area type...", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "col-md-3"], ["for", "areaTypeFilter", 1, "form-label"], ["id", "areaTypeFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "sortBy", 1, "form-label"], ["id", "sortBy", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "code"], ["value", "areaType"], ["value", "areaId"], [1, "col-md-2", "d-flex", "align-items-end"], ["type", "button", 1, "btn", "btn-primary", "me-2", 3, "click", "disabled"], [1, "bi", "bi-search", "me-1"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-x-circle", "me-1"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "bi", "bi-geo-alt", "me-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted", "me-2"], [1, "form-select", "form-select-sm", "w-auto", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["class", "text-center py-4", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-4", 4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [1, "bi", "bi-inbox", "display-1", "text-muted"], [1, "mt-3"], [1, "text-muted"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], [1, "sortable", 3, "click"], [1, "bi"], [4, "ngFor", "ngForOf"], [1, "badge", "bg-primary"], [1, "badge"], [1, "bi", 2, "margin-right", "4px", 3, "ngClass"], [1, "badge", "bg-info"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-4"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-right"], [1, "page-link", 3, "click"]],
      template: function AreaListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Search Areas");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AreaListComponent_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function AreaListComponent_Template_input_keyup_enter_7_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Filter by Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AreaListComponent_Template_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedAreaType, $event) || (ctx.selectedAreaType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AreaListComponent_Template_select_change_11_listener() {
            return ctx.onAreaTypeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "All Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AreaListComponent_option_14_Template, 2, 2, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7)(16, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Sort By");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AreaListComponent_Template_select_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.sortBy, $event) || (ctx.sortBy = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AreaListComponent_Template_select_change_18_listener() {
            return ctx.onSortChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Area ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 17)(26, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_Template_button_click_26_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaListComponent_Template_button_click_29_listener() {
            return ctx.onClearSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Clear ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 22)(33, "div", 23)(34, "h5", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " All Areas ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 26)(38, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Page Size:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "select", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AreaListComponent_Template_select_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.pageSize, $event) || (ctx.pageSize = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AreaListComponent_Template_select_change_40_listener() {
            return ctx.onPageSizeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "20");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "100");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, AreaListComponent_div_50_Template, 6, 0, "div", 30)(51, AreaListComponent_div_51_Template, 6, 0, "div", 30)(52, AreaListComponent_div_52_Template, 19, 13, "div", 31)(53, AreaListComponent_div_53_Template, 12, 10, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedAreaType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.areaTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.sortBy);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.areas.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.areas.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.totalPages > 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
      styles: [".sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.sortable[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n.table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.8rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\ncode[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXJlYXMvYXJlYS1saXN0L2FyZWEtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUFOOztBQUVJO0VBQ0UseUJBQUE7QUFDTjs7QUFDSTtFQUNFLGtCQUFBO0FBRU47O0FBQUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUdOOztBQURJO0VBQ0Usa0JBQUE7QUFJTjs7QUFGSTtFQUNFLGlCQUFBO0FBS04iLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuc29ydGFibGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuICAgIC5zb3J0YWJsZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIH1cbiAgICAudGFibGUgdGguc29ydGFibGUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAudGFibGUgdGguc29ydGFibGUgaSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogOHB4O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gICAgLmJhZGdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICB9XG4gICAgY29kZSB7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_areas_area-list_area-list_component_ts.js.map