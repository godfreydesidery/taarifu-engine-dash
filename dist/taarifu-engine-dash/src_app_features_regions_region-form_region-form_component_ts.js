"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_regions_region-form_region-form_component_ts"],{

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

/***/ 5427:
/*!***********************************************************************!*\
  !*** ./src/app/features/regions/region-form/region-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegionFormComponent: () => (/* binding */ RegionFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_region_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/region.service */ 5996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);








function RegionFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Region name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegionFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Region name must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegionFormComponent_span_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 47);
  }
}
class RegionFormComponent {
  constructor(fb, regionService, router, route, toastService) {
    this.fb = fb;
    this.regionService = regionService;
    this.router = router;
    this.route = route;
    this.toastService = toastService;
    this.isEditMode = false;
    this.isLoading = false;
    this.regionId = null;
    this.regionForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
      capital: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
      population: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
      areaSqKm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
      latitude: [null],
      longitude: [null],
      commissioner: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(500)]],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.regionId = this.route.snapshot.paramMap.get('uid');
    this.isEditMode = !!this.regionId;
    if (this.isEditMode && this.regionId) {
      this.loadRegion(this.regionId);
    }
  }
  loadRegion(uid) {
    this.isLoading = true;
    console.log('Loading region with UID:', uid);
    this.regionService.getRegionByUid(uid).subscribe({
      next: response => {
        this.isLoading = false;
        console.log('Region API Response:', response);
        if (response.status) {
          const region = response.data;
          console.log('Region data:', region);
          this.regionForm.patchValue({
            name: region.name,
            capital: region.capital,
            population: region.population,
            areaSqKm: region.areaSqKm,
            latitude: region.latitude,
            longitude: region.longitude,
            commissioner: region.commissioner,
            description: region.description,
            isActive: region.isActive
          });
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error loading region:', error);
        console.error('Error status:', error.status);
        console.error('Error details:', error.error);
        this.toastService.error('Error Loading Region', error.error?.message || error.message || 'Unknown error');
        this.goBack();
      }
    });
  }
  onSubmit() {
    if (this.regionForm.valid) {
      this.isLoading = true;
      const formData = this.regionForm.value;
      if (this.isEditMode && this.regionId) {
        const updateRequest = {
          name: formData.name,
          capital: formData.capital,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          commissioner: formData.commissioner,
          description: formData.description,
          isActive: formData.isActive
        };
        this.regionService.updateRegion(this.regionId, updateRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('Region Updated', 'Region updated successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error updating region:', error);
            this.toastService.error('Error Updating Region', 'Failed to update region');
          }
        });
      } else {
        const createRequest = {
          name: formData.name,
          capital: formData.capital,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          commissioner: formData.commissioner,
          description: formData.description,
          isActive: formData.isActive
        };
        this.regionService.createRegion(createRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('Region Created', 'Region created successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error creating region:', error);
            this.toastService.error('Error Creating Region', 'Failed to create region');
          }
        });
      }
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.regionForm.controls).forEach(key => {
      const control = this.regionForm.get(key);
      control?.markAsTouched();
    });
  }
  goBack() {
    this.router.navigate(['/regions']);
  }
  static {
    this.ɵfac = function RegionFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_region_service__WEBPACK_IMPORTED_MODULE_0__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegionFormComponent,
      selectors: [["app-region-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 120,
      vars: 10,
      consts: [[1, "container-fluid"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-1"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "bi", "bi-geo-alt-fill", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "mb-3"], ["for", "name", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter region name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "capital", 1, "form-label"], ["type", "text", "id", "capital", "formControlName", "capital", "placeholder", "Enter capital city", 1, "form-control"], ["for", "population", 1, "form-label"], ["type", "number", "id", "population", "formControlName", "population", "min", "0", "placeholder", "Enter population", 1, "form-control"], ["for", "areaSqKm", 1, "form-label"], ["type", "number", "id", "areaSqKm", "formControlName", "areaSqKm", "min", "0", "step", "0.01", "placeholder", "Enter area in square kilometers", 1, "form-control"], ["for", "latitude", 1, "form-label"], ["type", "number", "id", "latitude", "formControlName", "latitude", "step", "0.000001", "placeholder", "Enter latitude", 1, "form-control"], ["for", "longitude", 1, "form-label"], ["type", "number", "id", "longitude", "formControlName", "longitude", "step", "0.000001", "placeholder", "Enter longitude", 1, "form-control"], ["for", "commissioner", 1, "form-label"], ["type", "text", "id", "commissioner", "formControlName", "commissioner", "placeholder", "Enter commissioner name", 1, "form-control"], [1, "form-label"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "isActive", "formControlName", "isActive", 1, "form-check-input"], ["for", "isActive", 1, "form-check-label"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter region description", 1, "form-control"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], [1, "col-lg-4"], [1, "bi", "bi-info-circle", "me-2"], [1, "list-unstyled", "small", "text-muted"], [1, "mt-3"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function RegionFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegionFormComponent_Template_button_click_7_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Back ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Region Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegionFormComponent_Template_form_ngSubmit_18_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6)(20, "div", 14)(21, "div", 15)(22, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Region Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RegionFormComponent_div_27_Template, 2, 0, "div", 19)(28, RegionFormComponent_div_28_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Capital");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 6)(35, "div", 14)(36, "div", 15)(37, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14)(41, "div", 15)(42, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 6)(46, "div", 14)(47, "div", 15)(48, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Latitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 14)(52, "div", 15)(53, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Longitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 6)(57, "div", 14)(58, "div", 15)(59, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Regional Commissioner");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 14)(63, "div", 15)(64, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Active ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 15)(71, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "textarea", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 38)(75, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegionFormComponent_Template_button_click_75_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, RegionFormComponent_span_78_Template, 1, 0, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 42)(81, "div", 8)(82, "div", 9)(83, "h6", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " Help & Guidelines ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 12)(87, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Required Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "ul", 44)(90, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "\u2022 Region Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "\u2022 Capital");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "\u2022 Commissioner");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h6", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Optional Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "ul", 44)(99, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "\u2022 Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "\u2022 Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "\u2022 Coordinates (Latitude/Longitude)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "\u2022 Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h6", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Tips");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "ul", 44)(110, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "\u2022 Use official region names");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "\u2022 Capital should be the main city");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "\u2022 Use precise coordinates for mapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "\u2022 Population should be current estimates");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "\u2022 Keep descriptions concise and informative");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Region" : "Create Region");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isEditMode ? "Update region information" : "Add a new region to the system");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.regionForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx.regionForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.regionForm.get("name")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.regionForm.get("name")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.regionForm.get("name")) == null ? null : tmp_5_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.regionForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Saving..." : ctx.isEditMode ? "Update Region" : "Create Region", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n\n\n\n@media (max-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n  }\n  .row[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .col-md-6[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n    margin-bottom: 1rem;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    font-size: 16px; \n\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n  .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 576px) {\n  .col-md-6[_ngcontent-%COMP%] {\n    padding: 0 0.25rem;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .form-label[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 0.5rem 0.75rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVnaW9ucy9yZWdpb24tZm9ybS9yZWdpb24tZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0VBQ0EsbURBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7QUFBTjs7QUFHSSw2QkFBQTtBQUNBO0VBQ0U7SUFDRSxpQkFBQTtFQUFOO0VBR0k7SUFDRSxTQUFBO0VBRE47RUFJSTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUFGTjtFQUtJO0lBQ0UsYUFBQTtFQUhOO0VBTUk7SUFDRSxlQUFBLEVBQUEseUJBQUE7RUFKTjtFQU9JO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0VBTE47RUFRSTtJQUNFLGdCQUFBO0VBTk47QUFDRjtBQVNJO0VBQ0U7SUFDRSxrQkFBQTtFQVBOO0VBVUk7SUFDRSxnQkFBQTtFQVJOO0VBV0k7SUFDRSxpQkFBQTtFQVROO0VBWUk7SUFDRSxlQUFBO0lBQ0EsdUJBQUE7RUFWTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgICB9XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIH1cblxuICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICB9XG5cbiAgICAudGV4dC1kYW5nZXIge1xuICAgICAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAvKiBNb2JpbGUgUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLmNvbC1tZC02IHtcbiAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyAvKiBQcmV2ZW50cyB6b29tIG9uIGlPUyAqL1xuICAgICAgfVxuXG4gICAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgIC5jb2wtbWQtNiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_regions_region-form_region-form_component_ts.js.map