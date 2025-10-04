"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_constituencies_constituency-form_constituency-form_component_ts"],{

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

/***/ 629:
/*!******************************************************************************************!*\
  !*** ./src/app/features/constituencies/constituency-form/constituency-form.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConstituencyFormComponent: () => (/* binding */ ConstituencyFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_constituency_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/constituency.service */ 9118);
/* harmony import */ var _core_services_region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/region.service */ 5996);
/* harmony import */ var _core_services_district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/district.service */ 3446);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);











function ConstituencyFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Constituency name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ConstituencyFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Constituency name must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ConstituencyFormComponent_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", region_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](region_r1.name);
  }
}
function ConstituencyFormComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select a region ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ConstituencyFormComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const district_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", district_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](district_r2.name);
  }
}
function ConstituencyFormComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select a district ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ConstituencyFormComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Headquarters is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ConstituencyFormComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Headquarters must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ConstituencyFormComponent_span_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 53);
  }
}
function ConstituencyFormComponent_i_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 54);
  }
}
class ConstituencyFormComponent {
  constructor(fb, route, router, constituencyService, regionService, districtService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.constituencyService = constituencyService;
    this.regionService = regionService;
    this.districtService = districtService;
    this.toastService = toastService;
    this.isEditMode = false;
    this.isSubmitting = false;
    this.constituencyId = null;
    this.regions = [];
    this.districts = [];
    this.constituencyForm = this.createForm();
  }
  ngOnInit() {
    this.loadRegions();
    // Check if we're in edit mode
    this.route.params.subscribe(params => {
      if (params['uid']) {
        this.isEditMode = true;
        this.constituencyId = params['uid'];
        this.loadConstituency();
      }
    });
  }
  createForm() {
    return this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)]],
      regionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      districtId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      headquarters: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)]],
      population: [null],
      areaSqKm: [null],
      latitude: [null],
      longitude: [null],
      description: [''],
      isActive: [true]
    });
  }
  loadRegions() {
    this.regionService.getAllRegions(0, 1000).subscribe({
      next: response => {
        if (response.status) {
          this.regions = response.data;
        } else {
          this.toastService.error('Error', 'Failed to load regions');
        }
      },
      error: error => {
        console.error('Error loading regions:', error);
        this.toastService.error('Error', 'Failed to load regions. Please try again.');
      }
    });
  }
  onRegionChange() {
    const regionId = this.constituencyForm.get('regionId')?.value;
    this.constituencyForm.get('districtId')?.setValue('');
    this.districts = [];
    if (regionId) {
      // Find the selected region to get its UID
      const selectedRegion = this.regions.find(region => region.id === Number(regionId));
      if (selectedRegion) {
        this.districtService.getDistrictsByRegionUid(selectedRegion.uid, 0, 1000).subscribe({
          next: response => {
            if (response.status) {
              this.districts = response.data;
            } else {
              this.toastService.error('Error', 'Failed to load districts');
            }
          },
          error: error => {
            console.error('Error loading districts:', error);
            this.toastService.error('Error', 'Failed to load districts. Please try again.');
          }
        });
      }
    }
  }
  loadConstituency() {
    if (!this.constituencyId) return;
    this.constituencyService.getConstituencyByUid(this.constituencyId).subscribe({
      next: response => {
        if (response.status) {
          const constituency = response.data;
          this.constituencyForm.patchValue({
            name: constituency.name,
            regionId: constituency.regionId,
            districtId: constituency.districtId,
            headquarters: constituency.headquarters,
            population: constituency.population,
            areaSqKm: constituency.areaSqKm,
            latitude: constituency.latitude,
            longitude: constituency.longitude,
            description: constituency.description,
            isActive: constituency.isActive
          });
          // Load districts for the selected region
          if (constituency.regionId) {
            this.onRegionChange();
          }
        } else {
          this.toastService.error('Error', 'Failed to load constituency');
          this.router.navigate(['/constituencies']);
        }
      },
      error: error => {
        console.error('Error loading constituency:', error);
        this.toastService.error('Error', 'Failed to load constituency. Please try again.');
        this.router.navigate(['/constituencies']);
      }
    });
  }
  onSubmit() {
    if (this.constituencyForm.valid) {
      this.isSubmitting = true;
      const formData = this.constituencyForm.value;
      if (this.isEditMode && this.constituencyId) {
        const updateRequest = {
          name: formData.name,
          districtId: formData.districtId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          description: formData.description,
          isActive: formData.isActive
        };
        this.constituencyService.updateConstituency(this.constituencyId, updateRequest).subscribe({
          next: response => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Constituency updated successfully');
              this.router.navigate(['/constituencies']);
            } else {
              this.toastService.error('Error', 'Failed to update constituency');
            }
          },
          error: error => {
            this.isSubmitting = false;
            console.error('Error updating constituency:', error);
            this.toastService.error('Error', 'Failed to update constituency. Please try again.');
          }
        });
      } else {
        const createRequest = {
          name: formData.name,
          districtId: formData.districtId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          description: formData.description,
          isActive: formData.isActive
        };
        this.constituencyService.createConstituency(createRequest).subscribe({
          next: response => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Constituency created successfully');
              this.router.navigate(['/constituencies']);
            } else {
              this.toastService.error('Error', 'Failed to create constituency');
            }
          },
          error: error => {
            this.isSubmitting = false;
            console.error('Error creating constituency:', error);
            this.toastService.error('Error', 'Failed to create constituency. Please try again.');
          }
        });
      }
    } else {
      this.toastService.warning('Validation Error', 'Please fill in all required fields correctly');
      this.constituencyForm.markAllAsTouched();
    }
  }
  static {
    this.ɵfac = function ConstituencyFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConstituencyFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_constituency_service__WEBPACK_IMPORTED_MODULE_0__.ConstituencyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_region_service__WEBPACK_IMPORTED_MODULE_1__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_district_service__WEBPACK_IMPORTED_MODULE_2__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ConstituencyFormComponent,
      selectors: [["app-constituency-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 133,
      vars: 23,
      consts: [[1, "constituency-form-container"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-1"], [1, "text-muted"], ["type", "button", "routerLink", "/constituencies", 1, "btn", "btn-outline-secondary"], [1, "bi", "bi-arrow-left", "me-1"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "bi", "bi-flag", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], ["for", "name", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter constituency name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "regionId", 1, "form-label"], ["id", "regionId", "formControlName", "regionId", 1, "form-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "districtId", 1, "form-label"], ["id", "districtId", "formControlName", "districtId", 1, "form-select"], ["for", "headquarters", 1, "form-label"], ["type", "text", "id", "headquarters", "formControlName", "headquarters", "placeholder", "Enter headquarters", 1, "form-control"], ["for", "population", 1, "form-label"], ["type", "number", "id", "population", "formControlName", "population", "placeholder", "Enter population", "min", "0", 1, "form-control"], ["for", "areaSqKm", 1, "form-label"], ["type", "number", "id", "areaSqKm", "formControlName", "areaSqKm", "placeholder", "Enter area in square kilometers", "min", "0", "step", "0.01", 1, "form-control"], ["for", "latitude", 1, "form-label"], ["type", "number", "id", "latitude", "formControlName", "latitude", "placeholder", "Enter latitude", "step", "0.000001", 1, "form-control"], ["for", "longitude", 1, "form-label"], ["type", "number", "id", "longitude", "formControlName", "longitude", "placeholder", "Enter longitude", "step", "0.000001", 1, "form-control"], [1, "col-12"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter constituency description", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "isActive", "formControlName", "isActive", 1, "form-check-input"], ["for", "isActive", 1, "form-check-label"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["class", "bi bi-check-circle me-1", 4, "ngIf"], [1, "col-lg-4"], [1, "bi", "bi-info-circle", "me-2"], [1, "list-unstyled"], [1, "bi", "bi-check-circle", "text-success", "me-2"], [1, "bi", "bi-lightbulb", "text-warning", "me-2"], [1, "invalid-feedback"], [3, "value"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle", "me-1"]],
      template: function ConstituencyFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Back to List ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Constituency Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12)(18, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ConstituencyFormComponent_Template_form_ngSubmit_18_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Constituency Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ConstituencyFormComponent_div_26_Template, 2, 0, "div", 19)(27, ConstituencyFormComponent_div_27_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 15)(29, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Region ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "select", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ConstituencyFormComponent_Template_select_change_33_listener() {
            return ctx.onRegionChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Select a region");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ConstituencyFormComponent_option_36_Template, 2, 2, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ConstituencyFormComponent_div_37_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 15)(39, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "District ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "select", 25)(44, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Select a district");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, ConstituencyFormComponent_option_46_Template, 2, 2, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ConstituencyFormComponent_div_47_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 15)(49, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Headquarters ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, ConstituencyFormComponent_div_54_Template, 2, 0, "div", 19)(55, ConstituencyFormComponent_div_55_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 15)(57, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 15)(61, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 15)(65, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Latitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 15)(69, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Longitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 36)(73, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "textarea", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 36)(77, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " Active Constituency ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 36)(82, "div", 42)(83, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, ConstituencyFormComponent_span_84_Template, 1, 0, "span", 44)(85, ConstituencyFormComponent_i_85_Template, 1, 0, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 46)(90, "div", 8)(91, "div", 9)(92, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, " Guidelines ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 12)(96, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Creating a Constituency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "ul", 48)(99, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Provide a unique constituency name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Select the appropriate region");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Specify the headquarters location");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Add population and area data if available");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Include coordinates for mapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "Add the Member of Parliament name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Best Practices");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "ul", 48)(121, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Use clear, descriptive names");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](125, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Ensure headquarters is accurate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Verify region selection");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "Include relevant description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_11_0;
          let tmp_12_0;
          let tmp_13_0;
          let tmp_14_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Constituency" : "Create New Constituency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isEditMode ? "Update constituency information" : "Add a new constituency to the system");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.constituencyForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx.constituencyForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.constituencyForm.get("name")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.constituencyForm.get("name")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.constituencyForm.get("name")) == null ? null : tmp_5_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.constituencyForm.get("regionId")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.constituencyForm.get("regionId")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.regions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.constituencyForm.get("regionId")) == null ? null : tmp_8_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_9_0 = ctx.constituencyForm.get("districtId")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.constituencyForm.get("districtId")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.districts);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.constituencyForm.get("districtId")) == null ? null : tmp_11_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_12_0 = ctx.constituencyForm.get("headquarters")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.constituencyForm.get("headquarters")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx.constituencyForm.get("headquarters")) == null ? null : tmp_13_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.constituencyForm.get("headquarters")) == null ? null : tmp_14_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.constituencyForm.invalid || ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isSubmitting ? "Saving..." : ctx.isEditMode ? "Update Constituency" : "Create Constituency", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      styles: [".constituency-form-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29uc3RpdHVlbmNpZXMvY29uc3RpdHVlbmN5LWZvcm0vY29uc3RpdHVlbmN5LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUdJO0VBQ0UsWUFBQTtFQUNBLG1EQUFBO0FBQU47O0FBR0k7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7QUFBTiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb25zdGl0dWVuY3ktZm9ybS1jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICB9XG5cbiAgICAuZm9ybS1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC50ZXh0LWRhbmdlciB7XG4gICAgICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_constituencies_constituency-form_constituency-form_component_ts.js.map