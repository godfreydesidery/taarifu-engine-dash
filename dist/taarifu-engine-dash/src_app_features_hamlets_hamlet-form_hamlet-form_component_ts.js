"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_hamlets_hamlet-form_hamlet-form_component_ts"],{

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

/***/ 297:
/*!***********************************************************************!*\
  !*** ./src/app/features/hamlets/hamlet-form/hamlet-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HamletFormComponent: () => (/* binding */ HamletFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_hamlet_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/hamlet.service */ 891);
/* harmony import */ var _core_services_region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/region.service */ 5996);
/* harmony import */ var _core_services_district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/district.service */ 3446);
/* harmony import */ var _core_services_ward_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/ward.service */ 4486);
/* harmony import */ var _core_services_village_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/village.service */ 3832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);












function HamletFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Hamlet name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HamletFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Hamlet name must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HamletFormComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", region_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](region_r1.name);
  }
}
function HamletFormComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Region is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HamletFormComponent_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const district_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", district_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](district_r2.name);
  }
}
function HamletFormComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " District is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HamletFormComponent_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ward_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ward_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ward_r3.name);
  }
}
function HamletFormComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ward is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HamletFormComponent_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const village_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", village_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](village_r4.name);
  }
}
function HamletFormComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Village is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HamletFormComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Headquarters is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HamletFormComponent_span_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 58);
  }
}
class HamletFormComponent {
  constructor(fb, hamletService, regionService, districtService, wardService, villageService, router, route, toastService) {
    this.fb = fb;
    this.hamletService = hamletService;
    this.regionService = regionService;
    this.districtService = districtService;
    this.wardService = wardService;
    this.villageService = villageService;
    this.router = router;
    this.route = route;
    this.toastService = toastService;
    this.isEditMode = false;
    this.hamletId = null;
    this.isLoading = false;
    this.regions = [];
    this.districts = [];
    this.wards = [];
    this.villages = [];
    this.filteredDistricts = [];
    this.filteredWards = [];
    this.filteredVillages = [];
    this.hamletForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(100)]],
      regionId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      districtId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      wardId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      villageId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      headquarters: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(100)]],
      population: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0)]],
      areaSqKm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0)]],
      latitude: [null],
      longitude: [null],
      executiveOfficer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(100)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(500)]],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.loadRegions();
    this.loadDistricts();
    this.loadWards();
    this.loadVillages();
    this.route.paramMap.subscribe(params => {
      this.hamletId = params.get('uid');
      if (this.hamletId) {
        this.isEditMode = true;
        this.loadHamlet(this.hamletId);
      }
    });
  }
  loadRegions() {
    this.regionService.getAllRegions(0, 1000).subscribe({
      next: response => {
        this.regions = response.data || [];
      },
      error: error => {
        console.error('Error loading regions:', error);
      }
    });
  }
  loadDistricts() {
    this.districtService.getAllDistricts(0, 1000).subscribe({
      next: response => {
        this.districts = response.data || [];
        this.filteredDistricts = this.districts;
      },
      error: error => {
        console.error('Error loading districts:', error);
      }
    });
  }
  loadWards() {
    this.wardService.getAllWards(0, 1000).subscribe({
      next: response => {
        this.wards = response.data || [];
        this.filteredWards = this.wards;
      },
      error: error => {
        console.error('Error loading wards:', error);
      }
    });
  }
  loadVillages() {
    this.villageService.getAllVillages(0, 1000).subscribe({
      next: response => {
        this.villages = response.data || [];
        this.filteredVillages = this.villages;
      },
      error: error => {
        console.error('Error loading villages:', error);
      }
    });
  }
  loadHamlet(uid) {
    this.isLoading = true;
    this.hamletService.getHamletByUid(uid).subscribe({
      next: response => {
        this.isLoading = false;
        if (response.status) {
          const hamlet = response.data;
          this.hamletForm.patchValue({
            name: hamlet.name,
            regionId: hamlet.regionId,
            districtId: hamlet.districtId,
            wardId: hamlet.wardId,
            villageId: hamlet.villageId,
            headquarters: hamlet.headquarters,
            population: hamlet.population,
            areaSqKm: hamlet.areaSqKm,
            latitude: hamlet.latitude,
            longitude: hamlet.longitude,
            executiveOfficer: hamlet.executiveOfficer,
            description: hamlet.description,
            isActive: hamlet.isActive
          });
          // Filter cascading dropdowns based on selected values
          this.onRegionChange();
          this.onDistrictChange();
          this.onWardChange();
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error loading hamlet:', error);
        this.toastService.error('Error Loading Hamlet', error.error?.message || error.message || 'Unknown error');
        this.goBack();
      }
    });
  }
  onRegionChange() {
    const selectedRegionId = this.hamletForm.get('regionId')?.value;
    if (selectedRegionId) {
      const selectedRegion = this.regions.find(r => r.id === Number(selectedRegionId));
      if (selectedRegion) {
        this.districtService.getDistrictsByRegionUid(selectedRegion.uid, 0, 1000).subscribe({
          next: response => {
            this.filteredDistricts = response.data || [];
            // Reset district selection if current selection is not in filtered list
            const currentDistrictId = this.hamletForm.get('districtId')?.value;
            if (currentDistrictId && !this.filteredDistricts.find(d => d.id === currentDistrictId)) {
              this.hamletForm.patchValue({
                districtId: null
              });
              this.onDistrictChange();
            }
          },
          error: error => {
            console.error('Error loading districts for region:', error);
            this.filteredDistricts = [];
          }
        });
      }
    } else {
      this.filteredDistricts = this.districts;
      this.hamletForm.patchValue({
        districtId: null
      });
      this.onDistrictChange();
    }
  }
  onDistrictChange() {
    const selectedDistrictId = this.hamletForm.get('districtId')?.value;
    if (selectedDistrictId) {
      const selectedDistrict = this.districts.find(d => d.id === Number(selectedDistrictId));
      if (selectedDistrict) {
        this.wardService.getWardsByDistrictUid(selectedDistrict.uid, 0, 1000).subscribe({
          next: response => {
            this.filteredWards = response.data || [];
            // Reset ward selection if current selection is not in filtered list
            const currentWardId = this.hamletForm.get('wardId')?.value;
            if (currentWardId && !this.filteredWards.find(w => w.id === currentWardId)) {
              this.hamletForm.patchValue({
                wardId: null
              });
              this.onWardChange();
            }
          },
          error: error => {
            console.error('Error loading wards for district:', error);
            this.filteredWards = [];
          }
        });
      }
    } else {
      this.filteredWards = this.wards;
      this.hamletForm.patchValue({
        wardId: null
      });
      this.onWardChange();
    }
  }
  onWardChange() {
    const selectedWardId = this.hamletForm.get('wardId')?.value;
    if (selectedWardId) {
      const selectedWard = this.wards.find(w => w.id === Number(selectedWardId));
      if (selectedWard) {
        this.villageService.getVillagesByWardUid(selectedWard.uid, 0, 1000).subscribe({
          next: response => {
            this.filteredVillages = response.data || [];
            // Reset village selection if current selection is not in filtered list
            const currentVillageId = this.hamletForm.get('villageId')?.value;
            if (currentVillageId && !this.filteredVillages.find(v => v.id === currentVillageId)) {
              this.hamletForm.patchValue({
                villageId: null
              });
            }
          },
          error: error => {
            console.error('Error loading villages for ward:', error);
            this.filteredVillages = [];
          }
        });
      }
    } else {
      this.filteredVillages = this.villages;
      this.hamletForm.patchValue({
        villageId: null
      });
    }
  }
  onSubmit() {
    if (this.hamletForm.valid) {
      this.isLoading = true;
      const formData = this.hamletForm.value;
      if (this.isEditMode && this.hamletId) {
        const updateRequest = {
          name: formData.name,
          villageId: formData.villageId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };
        this.hamletService.updateHamlet(this.hamletId, updateRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('Hamlet Updated', 'Hamlet updated successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error updating hamlet:', error);
            this.toastService.error('Error Updating Hamlet', error.error?.message || error.message || 'Unknown error');
          }
        });
      } else {
        const createRequest = {
          name: formData.name,
          villageId: formData.villageId,
          headquarters: formData.headquarters,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };
        this.hamletService.createHamlet(createRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              this.toastService.success('Hamlet Created', 'Hamlet created successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error creating hamlet:', error);
            this.toastService.error('Error Creating Hamlet', error.error?.message || error.message || 'Unknown error');
          }
        });
      }
    }
  }
  goBack() {
    this.router.navigate(['/hamlets']);
  }
  static {
    this.ɵfac = function HamletFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HamletFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_hamlet_service__WEBPACK_IMPORTED_MODULE_0__.HamletService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_region_service__WEBPACK_IMPORTED_MODULE_1__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_district_service__WEBPACK_IMPORTED_MODULE_2__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_ward_service__WEBPACK_IMPORTED_MODULE_3__.WardService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_village_service__WEBPACK_IMPORTED_MODULE_4__.VillageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: HamletFormComponent,
      selectors: [["app-hamlet-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 179,
      vars: 29,
      consts: [[1, "container-fluid"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-1"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "bi", "bi-house-door-fill", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "mb-3"], ["for", "name", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter hamlet name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "regionId", 1, "form-label"], ["id", "regionId", "formControlName", "regionId", 1, "form-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "districtId", 1, "form-label"], ["id", "districtId", "formControlName", "districtId", 1, "form-select", 3, "change"], ["for", "wardId", 1, "form-label"], ["id", "wardId", "formControlName", "wardId", 1, "form-select", 3, "change"], ["for", "villageId", 1, "form-label"], ["id", "villageId", "formControlName", "villageId", 1, "form-select"], ["for", "headquarters", 1, "form-label"], ["type", "text", "id", "headquarters", "formControlName", "headquarters", "placeholder", "Enter headquarters", 1, "form-control"], ["for", "population", 1, "form-label"], ["type", "number", "id", "population", "formControlName", "population", "min", "0", "placeholder", "Enter population", 1, "form-control"], ["for", "areaSqKm", 1, "form-label"], ["type", "number", "id", "areaSqKm", "formControlName", "areaSqKm", "min", "0", "step", "0.01", "placeholder", "Enter area in square kilometers", 1, "form-control"], ["for", "latitude", 1, "form-label"], ["type", "number", "id", "latitude", "formControlName", "latitude", "step", "0.000001", "placeholder", "Enter latitude", 1, "form-control"], ["for", "longitude", 1, "form-label"], ["type", "number", "id", "longitude", "formControlName", "longitude", "step", "0.000001", "placeholder", "Enter longitude", 1, "form-control"], ["for", "executiveOfficer", 1, "form-label"], ["type", "text", "id", "executiveOfficer", "formControlName", "executiveOfficer", "placeholder", "Enter executive officer name", 1, "form-control"], [1, "form-label"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "isActive", "formControlName", "isActive", 1, "form-check-input"], ["for", "isActive", 1, "form-check-label"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter hamlet description", 1, "form-control"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], [1, "col-lg-4"], [1, "bi", "bi-info-circle", "me-2"], [1, "list-unstyled", "small", "text-muted"], [1, "mt-3"], [1, "invalid-feedback"], [3, "value"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function HamletFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HamletFormComponent_Template_button_click_7_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Back ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Hamlet Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12)(18, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function HamletFormComponent_Template_form_ngSubmit_18_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 6)(20, "div", 14)(21, "div", 15)(22, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Hamlet Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, HamletFormComponent_div_27_Template, 2, 0, "div", 19)(28, HamletFormComponent_div_28_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Region ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "select", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function HamletFormComponent_Template_select_change_35_listener() {
            return ctx.onRegionChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Select a region");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, HamletFormComponent_option_38_Template, 2, 2, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, HamletFormComponent_div_39_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 6)(41, "div", 14)(42, "div", 15)(43, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "District ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function HamletFormComponent_Template_select_change_47_listener() {
            return ctx.onDistrictChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Select a district");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, HamletFormComponent_option_50_Template, 2, 2, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, HamletFormComponent_div_51_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 14)(53, "div", 15)(54, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Ward ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function HamletFormComponent_Template_select_change_58_listener() {
            return ctx.onWardChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Select a ward");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, HamletFormComponent_option_61_Template, 2, 2, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, HamletFormComponent_div_62_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 6)(64, "div", 14)(65, "div", 15)(66, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Village ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "select", 29)(71, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Select a village");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, HamletFormComponent_option_73_Template, 2, 2, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, HamletFormComponent_div_74_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 14)(76, "div", 15)(77, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Headquarters ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, HamletFormComponent_div_82_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 6)(84, "div", 14)(85, "div", 15)(86, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 14)(90, "div", 15)(91, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 6)(95, "div", 14)(96, "div", 15)(97, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Latitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](99, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 14)(101, "div", 15)(102, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Longitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](104, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 6)(106, "div", 14)(107, "div", 15)(108, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Executive Officer");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](110, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 14)(112, "div", 15)(113, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, " Active ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "div", 15)(120, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](122, "textarea", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 48)(124, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HamletFormComponent_Template_button_click_124_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](127, HamletFormComponent_span_127_Template, 1, 0, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "div", 52)(130, "div", 8)(131, "div", 9)(132, "h6", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](133, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, " Help & Guidelines ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 12)(136, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "Required Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "ul", 54)(139, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "\u2022 Hamlet Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "\u2022 Region");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "\u2022 District");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, "\u2022 Ward");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "\u2022 Village");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150, "\u2022 Headquarters");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "h6", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "Optional Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "ul", 54)(154, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, "\u2022 Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](157, "\u2022 Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, "\u2022 Coordinates (Latitude/Longitude)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](161, "\u2022 Executive Officer");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](163, "\u2022 Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "h6", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "Tips");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "ul", 54)(167, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168, "\u2022 Select location hierarchy in order");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](170, "\u2022 Use official hamlet names");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](172, "\u2022 Headquarters should be the main settlement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174, "\u2022 Use precise coordinates for mapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](176, "\u2022 Population should be current estimates");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](178, "\u2022 Keep descriptions concise and informative");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
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
          let tmp_14_0;
          let tmp_15_0;
          let tmp_17_0;
          let tmp_18_0;
          let tmp_19_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Hamlet" : "Create Hamlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.isEditMode ? "Update hamlet information" : "Add a new hamlet to the system");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.hamletForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx.hamletForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.hamletForm.get("name")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.hamletForm.get("name")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.hamletForm.get("name")) == null ? null : tmp_5_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.hamletForm.get("regionId")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.hamletForm.get("regionId")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.regions);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.hamletForm.get("regionId")) == null ? null : tmp_8_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_9_0 = ctx.hamletForm.get("districtId")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.hamletForm.get("districtId")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filteredDistricts);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.hamletForm.get("districtId")) == null ? null : tmp_11_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_12_0 = ctx.hamletForm.get("wardId")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.hamletForm.get("wardId")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filteredWards);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.hamletForm.get("wardId")) == null ? null : tmp_14_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_15_0 = ctx.hamletForm.get("villageId")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.hamletForm.get("villageId")) == null ? null : tmp_15_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filteredVillages);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx.hamletForm.get("villageId")) == null ? null : tmp_17_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ((tmp_18_0 = ctx.hamletForm.get("headquarters")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.hamletForm.get("headquarters")) == null ? null : tmp_18_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx.hamletForm.get("headquarters")) == null ? null : tmp_19_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.hamletForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Saving..." : ctx.isEditMode ? "Update Hamlet" : "Create Hamlet", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaGFtbGV0cy9oYW1sZXQtZm9ybS9oYW1sZXQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0VBQ0EsbURBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7QUFBTiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICB9XG5cbiAgICAuZm9ybS1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgfVxuXG4gICAgLnRleHQtZGFuZ2VyIHtcbiAgICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_hamlets_hamlet-form_hamlet-form_component_ts.js.map