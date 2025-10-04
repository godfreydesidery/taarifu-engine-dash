"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_districts_district-form_district-form_component_ts"],{

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

/***/ 874:
/*!*****************************************************************************!*\
  !*** ./src/app/features/districts/district-form/district-form.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DistrictFormComponent: () => (/* binding */ DistrictFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_district_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/district.service */ 3446);
/* harmony import */ var _core_services_region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/region.service */ 5996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);









function DistrictFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " District name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DistrictFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " District name must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DistrictFormComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", region_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](region_r1.name);
  }
}
function DistrictFormComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Region is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DistrictFormComponent_span_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 50);
  }
}
class DistrictFormComponent {
  constructor(fb, districtService, regionService, router, route, toastService) {
    this.fb = fb;
    this.districtService = districtService;
    this.regionService = regionService;
    this.router = router;
    this.route = route;
    this.toastService = toastService;
    this.isEditMode = false;
    this.isLoading = false;
    this.districtId = null;
    this.regions = [];
    this.districtForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(100)]],
      regionId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      headquarters: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(100)]],
      population: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      areaSqKm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      latitude: [null],
      longitude: [null],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(500)]],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.districtId = this.route.snapshot.paramMap.get('uid');
    this.isEditMode = !!this.districtId;
    this.loadRegions();
    if (this.isEditMode && this.districtId) {
      this.loadDistrict(this.districtId);
    }
  }
  loadRegions() {
    this.regionService.getActiveRegions(0, 1000).subscribe({
      next: response => {
        this.regions = response.data || [];
      },
      error: error => {
        console.error('Error loading regions:', error);
        this.regions = [];
      }
    });
  }
  loadDistrict(uid) {
    this.isLoading = true;
    this.districtService.getDistrictByUid(uid).subscribe({
      next: response => {
        this.isLoading = false;
        if (response.status) {
          const district = response.data;
          this.districtForm.patchValue({
            name: district.name,
            regionId: district.regionId,
            headquarters: district.headquarters,
            population: district.population,
            areaSqKm: district.areaSqKm,
            latitude: district.latitude,
            longitude: district.longitude,
            description: district.description,
            isActive: district.isActive
          });
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error loading district:', error);
        this.toastService.error('Error Loading District', error.error?.message || error.message || 'Unknown error');
        this.goBack();
      }
    });
  }
  onSubmit() {
    if (this.districtForm.valid) {
      this.isLoading = true;
      const formData = this.districtForm.value;
      if (this.isEditMode && this.districtId) {
        const updateRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          description: formData.description,
          isActive: formData.isActive
        };
        this.districtService.updateDistrict(this.districtId, updateRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('District Updated', 'District updated successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error updating district:', error);
            this.toastService.error('Error Updating District', 'Failed to update district');
          }
        });
      } else {
        const createRequest = {
          name: formData.name,
          regionId: formData.regionId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          description: formData.description,
          isActive: formData.isActive
        };
        this.districtService.createDistrict(createRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('District Created', 'District created successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error creating district:', error);
            this.toastService.error('Error Creating District', 'Failed to create district');
          }
        });
      }
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.districtForm.controls).forEach(key => {
      const control = this.districtForm.get(key);
      control?.markAsTouched();
    });
  }
  goBack() {
    this.router.navigate(['/districts']);
  }
  static {
    this.ɵfac = function DistrictFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DistrictFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_district_service__WEBPACK_IMPORTED_MODULE_0__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_region_service__WEBPACK_IMPORTED_MODULE_1__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DistrictFormComponent,
      selectors: [["app-district-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 130,
      vars: 14,
      consts: [[1, "container-fluid"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-1"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "bi", "bi-building", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "mb-3"], ["for", "name", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter district name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "regionId", 1, "form-label"], ["id", "regionId", "formControlName", "regionId", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "headquarters", 1, "form-label"], ["type", "text", "id", "headquarters", "formControlName", "headquarters", "placeholder", "Enter headquarters", 1, "form-control"], [1, "form-label"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "isActive", "formControlName", "isActive", 1, "form-check-input"], ["for", "isActive", 1, "form-check-label"], ["for", "population", 1, "form-label"], ["type", "number", "id", "population", "formControlName", "population", "min", "0", "placeholder", "Enter population", 1, "form-control"], ["for", "areaSqKm", 1, "form-label"], ["type", "number", "id", "areaSqKm", "formControlName", "areaSqKm", "min", "0", "step", "0.01", "placeholder", "Enter area in square kilometers", 1, "form-control"], ["for", "latitude", 1, "form-label"], ["type", "number", "id", "latitude", "formControlName", "latitude", "step", "0.000001", "placeholder", "Enter latitude", 1, "form-control"], ["for", "longitude", 1, "form-label"], ["type", "number", "id", "longitude", "formControlName", "longitude", "step", "0.000001", "placeholder", "Enter longitude", 1, "form-control"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter district description", 1, "form-control"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], [1, "col-lg-4"], [1, "bi", "bi-info-circle", "me-2"], [1, "list-unstyled", "small", "text-muted"], [1, "mt-3"], [1, "invalid-feedback"], [3, "value"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function DistrictFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DistrictFormComponent_Template_button_click_7_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Back ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " District Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function DistrictFormComponent_Template_form_ngSubmit_18_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6)(20, "div", 14)(21, "div", 15)(22, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "District Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, DistrictFormComponent_div_27_Template, 2, 0, "div", 19)(28, DistrictFormComponent_div_28_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Region ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "select", 21)(36, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Select a region");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, DistrictFormComponent_option_38_Template, 2, 2, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, DistrictFormComponent_div_39_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 6)(41, "div", 14)(42, "div", 15)(43, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Headquarters");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 14)(47, "div", 15)(48, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Active ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 6)(55, "div", 14)(56, "div", 15)(57, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 14)(61, "div", 15)(62, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 6)(66, "div", 14)(67, "div", 15)(68, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Latitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 14)(72, "div", 15)(73, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Longitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 15)(77, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "textarea", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 40)(81, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DistrictFormComponent_Template_button_click_81_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, DistrictFormComponent_span_84_Template, 1, 0, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 44)(87, "div", 8)(88, "div", 9)(89, "h6", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " Help & Guidelines ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 12)(93, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Required Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "ul", 46)(96, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "\u2022 District Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "\u2022 Region");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "\u2022 Headquarters");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "\u2022 Commissioner");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "h6", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Optional Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "ul", 46)(107, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "\u2022 Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "\u2022 Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "\u2022 Coordinates (Latitude/Longitude)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "\u2022 Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "h6", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Tips");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "ul", 46)(118, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "\u2022 Select the correct region first");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "\u2022 Use official district names");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "\u2022 Headquarters should be the main town");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "\u2022 Use precise coordinates for mapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "\u2022 Population should be current estimates");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "\u2022 Keep descriptions concise and informative");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_8_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit District" : "Create District");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isEditMode ? "Update district information" : "Add a new district to the system");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.districtForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx.districtForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.districtForm.get("name")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.districtForm.get("name")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.districtForm.get("name")) == null ? null : tmp_5_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.districtForm.get("regionId")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.districtForm.get("regionId")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.regions);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.districtForm.get("regionId")) == null ? null : tmp_8_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.districtForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Saving..." : ctx.isEditMode ? "Update District" : "Create District", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGlzdHJpY3RzL2Rpc3RyaWN0LWZvcm0vZGlzdHJpY3QtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0VBQ0EsbURBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7QUFBTiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICB9XG5cbiAgICAuZm9ybS1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgfVxuXG4gICAgLnRleHQtZGFuZ2VyIHtcbiAgICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_districts_district-form_district-form_component_ts.js.map