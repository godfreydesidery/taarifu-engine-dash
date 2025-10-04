"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_wards_ward-form_ward-form_component_ts"],{

/***/ 8146:
/*!*****************************************************************!*\
  !*** ./src/app/features/wards/ward-form/ward-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WardFormComponent: () => (/* binding */ WardFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_ward_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/ward.service */ 4486);
/* harmony import */ var _core_services_district_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/district.service */ 3446);
/* harmony import */ var _core_services_region_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/region.service */ 5996);










function WardFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ward name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ward name must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Headquarters is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Headquarters must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 40);
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
function WardFormComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Region is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const district_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", district_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](district_r2.name);
  }
}
function WardFormComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " District is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Population must be a positive number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Area must be a positive number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Latitude must be between -90 and 90 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Longitude must be between -180 and 180 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Executive officer name must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Description must not exceed 500 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WardFormComponent_span_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 55);
  }
}
function WardFormComponent_i_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 56);
  }
}
class WardFormComponent {
  constructor(fb, wardService, districtService, regionService, route, router) {
    this.fb = fb;
    this.wardService = wardService;
    this.districtService = districtService;
    this.regionService = regionService;
    this.route = route;
    this.router = router;
    this.isEditMode = false;
    this.isLoading = false;
    this.wardId = null;
    this.regions = [];
    this.districts = [];
    this.filteredDistricts = [];
    this.wardForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(100)]],
      headquarters: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(100)]],
      regionId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      districtId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      population: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      areaSqKm: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      latitude: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(-90), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(90)]],
      longitude: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(-180), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(180)]],
      executiveOfficer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(100)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(500)]],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.loadRegions();
    this.loadDistricts();
    // Check if we're in edit mode
    this.wardId = this.route.snapshot.paramMap.get('uid');
    if (this.wardId) {
      this.isEditMode = true;
      this.loadWard(this.wardId);
    }
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
    console.log('Loading districts...');
    this.districtService.getAllDistricts(0, 1000).subscribe({
      next: response => {
        this.districts = response.data || [];
        this.filteredDistricts = this.districts;
        console.log('Loaded districts:', this.districts);
        console.log('Sample district structure:', this.districts[0]);
      },
      error: error => {
        console.error('Error loading districts:', error);
      }
    });
  }
  loadWard(uid) {
    this.isLoading = true;
    console.log('Loading ward with UID:', uid);
    this.wardService.getWardByUid(uid).subscribe({
      next: response => {
        this.isLoading = false;
        console.log('Ward API Response:', response);
        if (response.status) {
          const ward = response.data;
          console.log('Ward data:', ward);
          this.wardForm.patchValue({
            name: ward.name,
            headquarters: ward.headquarters,
            regionId: ward.regionId,
            districtId: ward.districtId,
            population: ward.population,
            areaSqKm: ward.areaSqKm,
            latitude: ward.latitude,
            longitude: ward.longitude,
            executiveOfficer: ward.executiveOfficer,
            description: ward.description,
            isActive: ward.isActive
          });
          // Filter districts based on selected region
          this.onRegionChange();
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error loading ward:', error);
        console.error('Error status:', error.status);
        console.error('Error details:', error.error);
        alert(`Error loading ward: ${error.error?.message || error.message || 'Unknown error'}`);
        this.goBack();
      }
    });
  }
  onRegionChange() {
    const selectedRegionId = this.wardForm.get('regionId')?.value;
    console.log('Region changed to:', selectedRegionId);
    if (selectedRegionId) {
      // Find the selected region to get its UID
      const selectedRegion = this.regions.find(r => r.id === Number(selectedRegionId));
      console.log('Selected region:', selectedRegion);
      if (selectedRegion) {
        // Load districts for this specific region using the API
        this.districtService.getDistrictsByRegionUid(selectedRegion.uid, 0, 1000).subscribe({
          next: response => {
            this.filteredDistricts = response.data || [];
            console.log('Loaded districts for region', selectedRegion.name, ':', this.filteredDistricts);
            // Reset district selection if current selection is not in filtered list
            const currentDistrictId = this.wardForm.get('districtId')?.value;
            if (currentDistrictId && !this.filteredDistricts.find(d => d.id === currentDistrictId)) {
              this.wardForm.patchValue({
                districtId: null
              });
            }
          },
          error: error => {
            console.error('Error loading districts for region:', error);
            this.filteredDistricts = [];
          }
        });
      }
    } else {
      // No region selected, show all districts
      this.filteredDistricts = this.districts;
      console.log('No region selected, showing all districts:', this.filteredDistricts);
    }
  }
  onSubmit() {
    if (this.wardForm.valid) {
      this.isLoading = true;
      const formData = this.wardForm.value;
      if (this.isEditMode && this.wardId) {
        // Update existing ward
        const updateRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          districtId: formData.districtId,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };
        this.wardService.updateWard(this.wardId, updateRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              alert('Ward updated successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error updating ward:', error);
            alert(`Error updating ward: ${error.error?.message || error.message || 'Unknown error'}`);
          }
        });
      } else {
        // Create new ward
        const createRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          districtId: formData.districtId,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };
        this.wardService.createWard(createRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              alert('Ward created successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error creating ward:', error);
            alert(`Error creating ward: ${error.error?.message || error.message || 'Unknown error'}`);
          }
        });
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.wardForm.controls).forEach(key => {
        this.wardForm.get(key)?.markAsTouched();
      });
    }
  }
  goBack() {
    this.router.navigate(['/wards']);
  }
  static {
    this.ɵfac = function WardFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WardFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_ward_service__WEBPACK_IMPORTED_MODULE_0__.WardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_district_service__WEBPACK_IMPORTED_MODULE_1__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_region_service__WEBPACK_IMPORTED_MODULE_2__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: WardFormComponent,
      selectors: [["app-ward-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 144,
      vars: 43,
      consts: [[1, "ward-form-container"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-1"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "bi", "bi-house", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], ["for", "name", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter ward name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "headquarters", 1, "form-label"], ["type", "text", "id", "headquarters", "formControlName", "headquarters", "placeholder", "Enter headquarters", 1, "form-control"], ["for", "regionId", 1, "form-label"], ["id", "regionId", "formControlName", "regionId", 1, "form-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "districtId", 1, "form-label"], ["id", "districtId", "formControlName", "districtId", 1, "form-select"], ["for", "population", 1, "form-label"], ["type", "number", "id", "population", "formControlName", "population", "placeholder", "Enter population", "min", "0", 1, "form-control"], ["for", "areaSqKm", 1, "form-label"], ["type", "number", "id", "areaSqKm", "formControlName", "areaSqKm", "placeholder", "Enter area in square kilometers", "min", "0", "step", "0.1", 1, "form-control"], ["for", "latitude", 1, "form-label"], ["type", "number", "id", "latitude", "formControlName", "latitude", "placeholder", "Enter latitude", "step", "0.000001", 1, "form-control"], ["for", "longitude", 1, "form-label"], ["type", "number", "id", "longitude", "formControlName", "longitude", "placeholder", "Enter longitude", "step", "0.000001", 1, "form-control"], ["for", "executiveOfficer", 1, "form-label"], ["type", "text", "id", "executiveOfficer", "formControlName", "executiveOfficer", "placeholder", "Enter executive officer name", 1, "form-control"], ["for", "isActive", 1, "form-label"], ["id", "isActive", "formControlName", "isActive", 1, "form-select"], [3, "value"], [1, "col-12"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter ward description", 1, "form-control"], [1, "row", "mt-4"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["class", "bi bi-check-circle me-1", 4, "ngIf"], [1, "bi", "bi-x-circle", "me-1"], [1, "col-lg-4"], [1, "bi", "bi-info-circle", "me-2"], [1, "list-unstyled", "small", "text-muted"], [1, "mt-3"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle", "me-1"]],
      template: function WardFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WardFormComponent_Template_button_click_7_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Back to Wards ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Ward Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function WardFormComponent_Template_form_ngSubmit_18_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Ward Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, WardFormComponent_div_26_Template, 2, 0, "div", 19)(27, WardFormComponent_div_27_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15)(29, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Headquarters ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, WardFormComponent_div_34_Template, 2, 0, "div", 19)(35, WardFormComponent_div_35_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 15)(37, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Region ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "select", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function WardFormComponent_Template_select_change_41_listener() {
            return ctx.onRegionChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Select a region");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, WardFormComponent_option_44_Template, 2, 2, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, WardFormComponent_div_45_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 15)(47, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "District ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "select", 27)(52, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Select a district");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, WardFormComponent_option_54_Template, 2, 2, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, WardFormComponent_div_55_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 15)(57, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, WardFormComponent_div_60_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 15)(62, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, WardFormComponent_div_65_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 15)(67, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Latitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, WardFormComponent_div_70_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 15)(72, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Longitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, WardFormComponent_div_75_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 15)(77, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Executive Officer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, WardFormComponent_div_80_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 15)(82, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "select", 39)(85, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 41)(90, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "textarea", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, WardFormComponent_div_93_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 44)(95, "div", 41)(96, "div", 45)(97, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, WardFormComponent_span_98_Template, 1, 0, "span", 47)(99, WardFormComponent_i_99_Template, 1, 0, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WardFormComponent_Template_button_click_101_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 50)(105, "div", 8)(106, "div", 9)(107, "h6", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, " Help & Guidelines ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 12)(111, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Required Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "ul", 52)(114, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "\u2022 Ward Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "\u2022 Headquarters");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "\u2022 Region");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "\u2022 District");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "h6", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Optional Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "ul", 52)(125, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "\u2022 Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "\u2022 Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "\u2022 Coordinates");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "\u2022 Executive Officer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "\u2022 Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "h6", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Tips");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "ul", 52)(138, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "\u2022 Select region first to filter districts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "\u2022 Use precise coordinates for mapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "\u2022 Keep descriptions concise and informative");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_11_0;
          let tmp_12_0;
          let tmp_14_0;
          let tmp_15_0;
          let tmp_16_0;
          let tmp_17_0;
          let tmp_18_0;
          let tmp_19_0;
          let tmp_20_0;
          let tmp_21_0;
          let tmp_22_0;
          let tmp_23_0;
          let tmp_24_0;
          let tmp_27_0;
          let tmp_28_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Ward" : "Create New Ward");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isEditMode ? "Update ward information" : "Add a new ward to the system");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.wardForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx.wardForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.wardForm.get("name")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.wardForm.get("name")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.wardForm.get("name")) == null ? null : tmp_5_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.wardForm.get("headquarters")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.wardForm.get("headquarters")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.wardForm.get("headquarters")) == null ? null : tmp_7_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.wardForm.get("headquarters")) == null ? null : tmp_8_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_9_0 = ctx.wardForm.get("regionId")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.wardForm.get("regionId")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.regions);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.wardForm.get("regionId")) == null ? null : tmp_11_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_12_0 = ctx.wardForm.get("districtId")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.wardForm.get("districtId")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredDistricts);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.wardForm.get("districtId")) == null ? null : tmp_14_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_15_0 = ctx.wardForm.get("population")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.wardForm.get("population")) == null ? null : tmp_15_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx.wardForm.get("population")) == null ? null : tmp_16_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_17_0 = ctx.wardForm.get("areaSqKm")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx.wardForm.get("areaSqKm")) == null ? null : tmp_17_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx.wardForm.get("areaSqKm")) == null ? null : tmp_18_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_19_0 = ctx.wardForm.get("latitude")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx.wardForm.get("latitude")) == null ? null : tmp_19_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_20_0 = ctx.wardForm.get("latitude")) == null ? null : tmp_20_0.hasError("min")) || ((tmp_20_0 = ctx.wardForm.get("latitude")) == null ? null : tmp_20_0.hasError("max")));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_21_0 = ctx.wardForm.get("longitude")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx.wardForm.get("longitude")) == null ? null : tmp_21_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx.wardForm.get("longitude")) == null ? null : tmp_22_0.hasError("min")) || ((tmp_22_0 = ctx.wardForm.get("longitude")) == null ? null : tmp_22_0.hasError("max")));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_23_0 = ctx.wardForm.get("executiveOfficer")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx.wardForm.get("executiveOfficer")) == null ? null : tmp_23_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_24_0 = ctx.wardForm.get("executiveOfficer")) == null ? null : tmp_24_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ((tmp_27_0 = ctx.wardForm.get("description")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx.wardForm.get("description")) == null ? null : tmp_27_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_28_0 = ctx.wardForm.get("description")) == null ? null : tmp_28_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.wardForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update Ward" : "Create Ward", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: [".ward-form-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvd2FyZHMvd2FyZC1mb3JtL3dhcmQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0VBQ0EsbURBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0FBQU47O0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFOIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLndhcmQtZm9ybS1jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICB9XG5cbiAgICAuZm9ybS1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgfVxuXG4gICAgLnRleHQtZGFuZ2VyIHtcbiAgICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5zcGlubmVyLWJvcmRlci1zbSB7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_wards_ward-form_ward-form_component_ts.js.map