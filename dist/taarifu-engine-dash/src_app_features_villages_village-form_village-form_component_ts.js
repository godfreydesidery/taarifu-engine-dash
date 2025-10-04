"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_villages_village-form_village-form_component_ts"],{

/***/ 1590:
/*!**************************************************************************!*\
  !*** ./src/app/features/villages/village-form/village-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VillageFormComponent: () => (/* binding */ VillageFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_village_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/village.service */ 3832);
/* harmony import */ var _core_services_ward_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/ward.service */ 4486);
/* harmony import */ var _core_services_district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/district.service */ 3446);
/* harmony import */ var _core_services_region_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/region.service */ 5996);











function VillageFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Village name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Village name must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Headquarters is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Headquarters must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 43);
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
function VillageFormComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Region is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 43);
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
function VillageFormComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " District is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ward_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ward_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ward_r3.name);
  }
}
function VillageFormComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ward is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Population must be a positive number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Area must be a positive number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Latitude must be between -90 and 90 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Longitude must be between -180 and 180 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Executive officer name must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Description must not exceed 500 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VillageFormComponent_span_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 58);
  }
}
function VillageFormComponent_i_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 59);
  }
}
class VillageFormComponent {
  constructor(fb, villageService, wardService, districtService, regionService, route, router) {
    this.fb = fb;
    this.villageService = villageService;
    this.wardService = wardService;
    this.districtService = districtService;
    this.regionService = regionService;
    this.route = route;
    this.router = router;
    this.isEditMode = false;
    this.isLoading = false;
    this.villageId = null;
    this.regions = [];
    this.districts = [];
    this.wards = [];
    this.filteredDistricts = [];
    this.filteredWards = [];
    this.villageForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)]],
      headquarters: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)]],
      regionId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      districtId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      wardId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      population: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)]],
      areaSqKm: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)]],
      latitude: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(-90), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(90)]],
      longitude: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(-180), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(180)]],
      executiveOfficer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(500)]],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.loadRegions();
    this.loadDistricts();
    this.loadWards();
    // Check if we're in edit mode
    this.villageId = this.route.snapshot.paramMap.get('uid');
    if (this.villageId) {
      this.isEditMode = true;
      this.loadVillage(this.villageId);
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
  loadWards() {
    console.log('Loading wards...');
    this.wardService.getAllWards(0, 1000).subscribe({
      next: response => {
        this.wards = response.data || [];
        this.filteredWards = this.wards;
        console.log('Loaded wards:', this.wards);
        console.log('Sample ward structure:', this.wards[0]);
      },
      error: error => {
        console.error('Error loading wards:', error);
      }
    });
  }
  loadVillage(uid) {
    this.isLoading = true;
    console.log('Loading village with UID:', uid);
    this.villageService.getVillageByUid(uid).subscribe({
      next: response => {
        this.isLoading = false;
        console.log('Village API Response:', response);
        if (response.status) {
          const village = response.data;
          console.log('Village data:', village);
          this.villageForm.patchValue({
            name: village.name,
            headquarters: village.headquarters,
            regionId: village.regionId,
            districtId: village.districtId,
            wardId: village.wardId,
            population: village.population,
            areaSqKm: village.areaSqKm,
            latitude: village.latitude,
            longitude: village.longitude,
            executiveOfficer: village.executiveOfficer,
            description: village.description,
            isActive: village.isActive
          });
          // Filter districts and wards based on selected values
          this.onRegionChange();
          this.onDistrictChange();
        }
      },
      error: error => {
        this.isLoading = false;
        console.error('Error loading village:', error);
        console.error('Error status:', error.status);
        console.error('Error details:', error.error);
        alert(`Error loading village: ${error.error?.message || error.message || 'Unknown error'}`);
        this.goBack();
      }
    });
  }
  onRegionChange() {
    const selectedRegionId = this.villageForm.get('regionId')?.value;
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
            // Reset district and ward selections if current selections are not in filtered lists
            const currentDistrictId = this.villageForm.get('districtId')?.value;
            if (currentDistrictId && !this.filteredDistricts.find(d => d.id === currentDistrictId)) {
              this.villageForm.patchValue({
                districtId: null,
                wardId: null
              });
            }
            // Update wards based on new district selection
            this.onDistrictChange();
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
  onDistrictChange() {
    const selectedDistrictId = this.villageForm.get('districtId')?.value;
    console.log('District changed to:', selectedDistrictId);
    if (selectedDistrictId) {
      // Find the selected district to get its UID
      const selectedDistrict = this.filteredDistricts.find(d => d.id === Number(selectedDistrictId));
      console.log('Selected district:', selectedDistrict);
      if (selectedDistrict) {
        // Load wards for this specific district using the API
        this.wardService.getWardsByDistrictUid(selectedDistrict.uid, 0, 1000).subscribe({
          next: response => {
            this.filteredWards = response.data || [];
            console.log('Loaded wards for district', selectedDistrict.name, ':', this.filteredWards);
            // Reset ward selection if current selection is not in filtered list
            const currentWardId = this.villageForm.get('wardId')?.value;
            if (currentWardId && !this.filteredWards.find(w => w.id === currentWardId)) {
              this.villageForm.patchValue({
                wardId: null
              });
            }
          },
          error: error => {
            console.error('Error loading wards for district:', error);
            this.filteredWards = [];
          }
        });
      }
    } else {
      // No district selected, show all wards
      this.filteredWards = this.wards;
      console.log('No district selected, showing all wards:', this.filteredWards);
    }
  }
  onSubmit() {
    if (this.villageForm.valid) {
      this.isLoading = true;
      const formData = this.villageForm.value;
      if (this.isEditMode && this.villageId) {
        // Update existing village
        const updateRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          wardId: formData.wardId,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };
        this.villageService.updateVillage(this.villageId, updateRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              alert('Village updated successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error updating village:', error);
            alert(`Error updating village: ${error.error?.message || error.message || 'Unknown error'}`);
          }
        });
      } else {
        // Create new village
        const createRequest = {
          name: formData.name,
          headquarters: formData.headquarters,
          wardId: formData.wardId,
          population: formData.population,
          areaSqKm: formData.areaSqKm,
          latitude: formData.latitude,
          longitude: formData.longitude,
          executiveOfficer: formData.executiveOfficer,
          description: formData.description,
          isActive: formData.isActive
        };
        this.villageService.createVillage(createRequest).subscribe({
          next: response => {
            this.isLoading = false;
            if (response.status) {
              alert('Village created successfully!');
              this.goBack();
            }
          },
          error: error => {
            this.isLoading = false;
            console.error('Error creating village:', error);
            alert(`Error creating village: ${error.error?.message || error.message || 'Unknown error'}`);
          }
        });
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.villageForm.controls).forEach(key => {
        this.villageForm.get(key)?.markAsTouched();
      });
    }
  }
  goBack() {
    this.router.navigate(['/villages']);
  }
  static {
    this.ɵfac = function VillageFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VillageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_village_service__WEBPACK_IMPORTED_MODULE_0__.VillageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_ward_service__WEBPACK_IMPORTED_MODULE_1__.WardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_district_service__WEBPACK_IMPORTED_MODULE_2__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_region_service__WEBPACK_IMPORTED_MODULE_3__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: VillageFormComponent,
      selectors: [["app-village-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 158,
      vars: 47,
      consts: [[1, "village-form-container"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-1"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "bi", "bi-house-door", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], ["for", "name", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter village name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "headquarters", 1, "form-label"], ["type", "text", "id", "headquarters", "formControlName", "headquarters", "placeholder", "Enter headquarters", 1, "form-control"], [1, "col-md-4"], ["for", "regionId", 1, "form-label"], ["id", "regionId", "formControlName", "regionId", 1, "form-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "districtId", 1, "form-label"], ["id", "districtId", "formControlName", "districtId", 1, "form-select", 3, "change"], ["for", "wardId", 1, "form-label"], ["id", "wardId", "formControlName", "wardId", 1, "form-select"], ["for", "population", 1, "form-label"], ["type", "number", "id", "population", "formControlName", "population", "placeholder", "Enter population", "min", "0", 1, "form-control"], ["for", "areaSqKm", 1, "form-label"], ["type", "number", "id", "areaSqKm", "formControlName", "areaSqKm", "placeholder", "Enter area in square kilometers", "min", "0", "step", "0.1", 1, "form-control"], ["for", "latitude", 1, "form-label"], ["type", "number", "id", "latitude", "formControlName", "latitude", "placeholder", "Enter latitude", "step", "0.000001", 1, "form-control"], ["for", "longitude", 1, "form-label"], ["type", "number", "id", "longitude", "formControlName", "longitude", "placeholder", "Enter longitude", "step", "0.000001", 1, "form-control"], ["for", "executiveOfficer", 1, "form-label"], ["type", "text", "id", "executiveOfficer", "formControlName", "executiveOfficer", "placeholder", "Enter executive officer name", 1, "form-control"], ["for", "isActive", 1, "form-label"], ["id", "isActive", "formControlName", "isActive", 1, "form-select"], [3, "value"], [1, "col-12"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter village description", 1, "form-control"], [1, "row", "mt-4"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["class", "bi bi-check-circle me-1", 4, "ngIf"], [1, "bi", "bi-x-circle", "me-1"], [1, "col-lg-4"], [1, "bi", "bi-info-circle", "me-2"], [1, "list-unstyled", "small", "text-muted"], [1, "mt-3"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle", "me-1"]],
      template: function VillageFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VillageFormComponent_Template_button_click_7_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Back to Villages ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Village Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12)(18, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function VillageFormComponent_Template_form_ngSubmit_18_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Village Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, VillageFormComponent_div_26_Template, 2, 0, "div", 19)(27, VillageFormComponent_div_27_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 15)(29, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Headquarters ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, VillageFormComponent_div_34_Template, 2, 0, "div", 19)(35, VillageFormComponent_div_35_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 22)(37, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Region ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VillageFormComponent_Template_select_change_41_listener() {
            return ctx.onRegionChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Select a region");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, VillageFormComponent_option_44_Template, 2, 2, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, VillageFormComponent_div_45_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 22)(47, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "District ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "select", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VillageFormComponent_Template_select_change_51_listener() {
            return ctx.onDistrictChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Select a district");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, VillageFormComponent_option_54_Template, 2, 2, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, VillageFormComponent_div_55_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 22)(57, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Ward ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "select", 30)(62, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Select a ward");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, VillageFormComponent_option_64_Template, 2, 2, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, VillageFormComponent_div_65_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 15)(67, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, VillageFormComponent_div_70_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 15)(72, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, VillageFormComponent_div_75_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 15)(77, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Latitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, VillageFormComponent_div_80_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 15)(82, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Longitude");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, VillageFormComponent_div_85_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 15)(87, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Executive Officer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, VillageFormComponent_div_90_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 15)(92, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "select", 42)(95, "option", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "option", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 44)(100, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "textarea", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](103, VillageFormComponent_div_103_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 47)(105, "div", 44)(106, "div", 48)(107, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, VillageFormComponent_span_108_Template, 1, 0, "span", 50)(109, VillageFormComponent_i_109_Template, 1, 0, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VillageFormComponent_Template_button_click_111_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 53)(115, "div", 8)(116, "div", 9)(117, "h6", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](118, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, " Help & Guidelines ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 12)(121, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Required Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "ul", 55)(124, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "\u2022 Village Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "\u2022 Headquarters");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "\u2022 Region");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "\u2022 District");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "\u2022 Ward");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "h6", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "Optional Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "ul", 55)(137, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "\u2022 Population");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "\u2022 Area (km\u00B2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "\u2022 Coordinates");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "\u2022 Executive Officer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "\u2022 Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "h6", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Tips");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "ul", 55)(150, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "\u2022 Select region first to filter districts");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "\u2022 Select district to filter wards");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "\u2022 Use precise coordinates for mapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "\u2022 Keep descriptions concise and informative");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
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
          let tmp_17_0;
          let tmp_18_0;
          let tmp_19_0;
          let tmp_20_0;
          let tmp_21_0;
          let tmp_22_0;
          let tmp_23_0;
          let tmp_24_0;
          let tmp_25_0;
          let tmp_26_0;
          let tmp_27_0;
          let tmp_30_0;
          let tmp_31_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Village" : "Create New Village");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isEditMode ? "Update village information" : "Add a new village to the system");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.villageForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx.villageForm.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.villageForm.get("name")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.villageForm.get("name")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.villageForm.get("name")) == null ? null : tmp_5_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.villageForm.get("headquarters")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.villageForm.get("headquarters")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.villageForm.get("headquarters")) == null ? null : tmp_7_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.villageForm.get("headquarters")) == null ? null : tmp_8_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_9_0 = ctx.villageForm.get("regionId")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.villageForm.get("regionId")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.regions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.villageForm.get("regionId")) == null ? null : tmp_11_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_12_0 = ctx.villageForm.get("districtId")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.villageForm.get("districtId")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredDistricts);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.villageForm.get("districtId")) == null ? null : tmp_14_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_15_0 = ctx.villageForm.get("wardId")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.villageForm.get("wardId")) == null ? null : tmp_15_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredWards);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx.villageForm.get("wardId")) == null ? null : tmp_17_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_18_0 = ctx.villageForm.get("population")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.villageForm.get("population")) == null ? null : tmp_18_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx.villageForm.get("population")) == null ? null : tmp_19_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_20_0 = ctx.villageForm.get("areaSqKm")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx.villageForm.get("areaSqKm")) == null ? null : tmp_20_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx.villageForm.get("areaSqKm")) == null ? null : tmp_21_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_22_0 = ctx.villageForm.get("latitude")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx.villageForm.get("latitude")) == null ? null : tmp_22_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_23_0 = ctx.villageForm.get("latitude")) == null ? null : tmp_23_0.hasError("min")) || ((tmp_23_0 = ctx.villageForm.get("latitude")) == null ? null : tmp_23_0.hasError("max")));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_24_0 = ctx.villageForm.get("longitude")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx.villageForm.get("longitude")) == null ? null : tmp_24_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_25_0 = ctx.villageForm.get("longitude")) == null ? null : tmp_25_0.hasError("min")) || ((tmp_25_0 = ctx.villageForm.get("longitude")) == null ? null : tmp_25_0.hasError("max")));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_26_0 = ctx.villageForm.get("executiveOfficer")) == null ? null : tmp_26_0.invalid) && ((tmp_26_0 = ctx.villageForm.get("executiveOfficer")) == null ? null : tmp_26_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_27_0 = ctx.villageForm.get("executiveOfficer")) == null ? null : tmp_27_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_30_0 = ctx.villageForm.get("description")) == null ? null : tmp_30_0.invalid) && ((tmp_30_0 = ctx.villageForm.get("description")) == null ? null : tmp_30_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_31_0 = ctx.villageForm.get("description")) == null ? null : tmp_31_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.villageForm.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update Village" : "Create Village", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
      styles: [".village-form-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdmlsbGFnZXMvdmlsbGFnZS1mb3JtL3ZpbGxhZ2UtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0VBQ0EsbURBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0FBQU47O0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFOIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnZpbGxhZ2UtZm9ybS1jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICB9XG5cbiAgICAuZm9ybS1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgfVxuXG4gICAgLnRleHQtZGFuZ2VyIHtcbiAgICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5zcGlubmVyLWJvcmRlci1zbSB7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_villages_village-form_village-form_component_ts.js.map