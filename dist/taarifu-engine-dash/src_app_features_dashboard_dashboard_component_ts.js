"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_dashboard_dashboard_component_ts"],{

/***/ 1626:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_region_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/region.service */ 5996);
/* harmony import */ var _core_services_district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/district.service */ 3446);
/* harmony import */ var _core_services_ward_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/ward.service */ 4486);
/* harmony import */ var _core_services_village_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/village.service */ 3832);
/* harmony import */ var _core_services_hamlet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/hamlet.service */ 891);
/* harmony import */ var _core_services_constituency_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/constituency.service */ 9118);
/* harmony import */ var _core_services_area_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/area.service */ 7845);
/* harmony import */ var _core_services_parliament_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/parliament.service */ 4571);
/* harmony import */ var _core_services_political_party_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/political-party.service */ 9934);















function DashboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 62);
  }
}
function DashboardComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.regionStats == null ? null : ctx_r0.regionStats.totalRegions) || 0);
  }
}
function DashboardComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 64);
  }
}
function DashboardComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.districtStats == null ? null : ctx_r0.districtStats.totalDistricts) || 0);
  }
}
function DashboardComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 66);
  }
}
function DashboardComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.wardStats == null ? null : ctx_r0.wardStats.totalWards) || 0);
  }
}
function DashboardComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 68);
  }
}
function DashboardComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.villageStats == null ? null : ctx_r0.villageStats.totalVillages) || 0);
  }
}
function DashboardComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 70);
  }
}
function DashboardComponent_span_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.hamletStats == null ? null : ctx_r0.hamletStats.totalHamlets) || 0);
  }
}
function DashboardComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 72);
  }
}
function DashboardComponent_span_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.constituencyStats == null ? null : ctx_r0.constituencyStats.totalConstituencies) || 0);
  }
}
function DashboardComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 74);
  }
}
function DashboardComponent_span_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.areaStats == null ? null : ctx_r0.areaStats.totalAreas) || 0);
  }
}
function DashboardComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 70);
  }
}
function DashboardComponent_span_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.parliamentStats == null ? null : ctx_r0.parliamentStats.totalParliaments) || 0);
  }
}
function DashboardComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 68);
  }
}
function DashboardComponent_span_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.politicalPartyStats == null ? null : ctx_r0.politicalPartyStats.totalParties) || 0);
  }
}
class DashboardComponent {
  constructor(authService, regionService, districtService, wardService, villageService, hamletService, constituencyService, areaService, parliamentService, politicalPartyService) {
    this.authService = authService;
    this.regionService = regionService;
    this.districtService = districtService;
    this.wardService = wardService;
    this.villageService = villageService;
    this.hamletService = hamletService;
    this.constituencyService = constituencyService;
    this.areaService = areaService;
    this.parliamentService = parliamentService;
    this.politicalPartyService = politicalPartyService;
    this.currentUser = this.authService.getCurrentUser();
    this.regionStats = null;
    this.districtStats = null;
    this.wardStats = null;
    this.villageStats = null;
    this.hamletStats = null;
    this.constituencyStats = null;
    this.areaStats = null;
    this.parliamentStats = null;
    this.politicalPartyStats = null;
    this.loadingRegions = false;
    this.loadingDistricts = false;
    this.loadingWards = false;
    this.loadingVillages = false;
    this.loadingHamlets = false;
    this.loadingConstituencies = false;
    this.loadingAreas = false;
    this.loadingParliaments = false;
    this.loadingPoliticalParties = false;
  }
  ngOnInit() {
    this.loadRegionStats();
    this.loadDistrictStats();
    this.loadWardStats();
    this.loadVillageStats();
    this.loadHamletStats();
    this.loadConstituencyStats();
    this.loadAreaStats();
    this.loadParliamentStats();
    this.loadPoliticalPartyStats();
  }
  loadRegionStats() {
    this.loadingRegions = true;
    this.regionService.getRegionStats().subscribe({
      next: response => {
        this.loadingRegions = false;
        if (response.status) {
          this.regionStats = response.data;
        }
      },
      error: error => {
        this.loadingRegions = false;
        console.error('Error loading region stats:', error);
        // Set default values if API fails
        this.regionStats = {
          totalRegions: 0,
          activeRegions: 0,
          inactiveRegions: 0
        };
      }
    });
  }
  loadDistrictStats() {
    this.loadingDistricts = true;
    this.districtService.getDistrictStats().subscribe({
      next: response => {
        this.loadingDistricts = false;
        if (response.status) {
          this.districtStats = response.data;
        }
      },
      error: error => {
        this.loadingDistricts = false;
        console.error('Error loading district stats:', error);
        // Set default values if API fails
        this.districtStats = {
          totalDistricts: 0,
          activeDistricts: 0,
          inactiveDistricts: 0
        };
      }
    });
  }
  loadWardStats() {
    this.loadingWards = true;
    this.wardService.getWardStats().subscribe({
      next: response => {
        this.loadingWards = false;
        if (response.status) {
          this.wardStats = response.data;
        }
      },
      error: error => {
        this.loadingWards = false;
        console.error('Error loading ward stats:', error);
        // Set default values if API fails
        this.wardStats = {
          totalWards: 0,
          activeWards: 0,
          inactiveWards: 0
        };
      }
    });
  }
  loadVillageStats() {
    this.loadingVillages = true;
    this.villageService.getVillageStats().subscribe({
      next: response => {
        this.loadingVillages = false;
        if (response.status) {
          this.villageStats = response.data;
        }
      },
      error: error => {
        this.loadingVillages = false;
        console.error('Error loading village stats:', error);
        // Set default values if API fails
        this.villageStats = {
          totalVillages: 0,
          activeVillages: 0,
          inactiveVillages: 0
        };
      }
    });
  }
  loadHamletStats() {
    this.loadingHamlets = true;
    this.hamletService.getHamletStats().subscribe({
      next: response => {
        this.loadingHamlets = false;
        if (response.status) {
          this.hamletStats = response.data;
        }
      },
      error: error => {
        this.loadingHamlets = false;
        console.error('Error loading hamlet stats:', error);
        // Set default values if API fails
        this.hamletStats = {
          totalHamlets: 0,
          activeHamlets: 0,
          inactiveHamlets: 0
        };
      }
    });
  }
  loadConstituencyStats() {
    this.loadingConstituencies = true;
    this.constituencyService.getConstituencyStats().subscribe({
      next: response => {
        this.loadingConstituencies = false;
        if (response.status) {
          this.constituencyStats = response.data;
        } else {
          // Set default values if API fails
          this.constituencyStats = {
            totalConstituencies: 0,
            activeConstituencies: 0,
            inactiveConstituencies: 0
          };
        }
      },
      error: error => {
        this.loadingConstituencies = false;
        console.error('Error loading constituency stats:', error);
        // Set default values if API fails
        this.constituencyStats = {
          totalConstituencies: 0,
          activeConstituencies: 0,
          inactiveConstituencies: 0
        };
      }
    });
  }
  loadAreaStats() {
    this.loadingAreas = true;
    this.areaService.getAreaStats().subscribe({
      next: response => {
        this.loadingAreas = false;
        if (response.status) {
          this.areaStats = response.data;
        } else {
          // Set default values if API fails
          this.areaStats = {
            totalAreas: 0,
            regionCount: 0,
            districtCount: 0,
            wardCount: 0,
            villageCount: 0,
            hamletCount: 0,
            constituencyCount: 0
          };
        }
      },
      error: error => {
        this.loadingAreas = false;
        console.error('Error loading area stats:', error);
        // Set default values if API fails
        this.areaStats = {
          totalAreas: 0,
          regionCount: 0,
          districtCount: 0,
          wardCount: 0,
          villageCount: 0,
          hamletCount: 0,
          constituencyCount: 0
        };
      }
    });
  }
  loadParliamentStats() {
    this.loadingParliaments = true;
    this.parliamentService.getParliamentStats().subscribe({
      next: response => {
        this.loadingParliaments = false;
        if (response.status) {
          this.parliamentStats = response.data;
        } else {
          // Set default values if API fails
          this.parliamentStats = {
            totalParliaments: 0,
            activeParliaments: 0,
            inactiveParliaments: 0,
            currentParliaments: 0,
            endedParliaments: 0,
            inSessionParliaments: 0
          };
        }
      },
      error: error => {
        this.loadingParliaments = false;
        console.error('Error loading parliament stats:', error);
        // Set default values if API fails
        this.parliamentStats = {
          totalParliaments: 0,
          activeParliaments: 0,
          inactiveParliaments: 0,
          currentParliaments: 0,
          endedParliaments: 0,
          inSessionParliaments: 0
        };
      }
    });
  }
  loadPoliticalPartyStats() {
    this.loadingPoliticalParties = true;
    this.politicalPartyService.getPoliticalPartyStats().subscribe({
      next: response => {
        this.loadingPoliticalParties = false;
        if (response.status) {
          this.politicalPartyStats = response.data;
        } else {
          // Set default values if API fails
          this.politicalPartyStats = {
            totalParties: 0,
            activeParties: 0,
            inactiveParties: 0,
            registeredParties: 0,
            unregisteredParties: 0,
            operationalParties: 0,
            partiesWithWebsite: 0,
            partiesFoundedThisYear: 0,
            averageMemberCount: 0
          };
        }
      },
      error: error => {
        this.loadingPoliticalParties = false;
        console.error('Error loading political party stats:', error);
        // Set default values if API fails
        this.politicalPartyStats = {
          totalParties: 0,
          activeParties: 0,
          inactiveParties: 0,
          registeredParties: 0,
          unregisteredParties: 0,
          operationalParties: 0,
          partiesWithWebsite: 0,
          partiesFoundedThisYear: 0,
          averageMemberCount: 0
        };
      }
    });
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_region_service__WEBPACK_IMPORTED_MODULE_1__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_district_service__WEBPACK_IMPORTED_MODULE_2__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_ward_service__WEBPACK_IMPORTED_MODULE_3__.WardService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_village_service__WEBPACK_IMPORTED_MODULE_4__.VillageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_hamlet_service__WEBPACK_IMPORTED_MODULE_5__.HamletService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_constituency_service__WEBPACK_IMPORTED_MODULE_6__.ConstituencyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_area_service__WEBPACK_IMPORTED_MODULE_7__.AreaService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_parliament_service__WEBPACK_IMPORTED_MODULE_8__.ParliamentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_political_party_service__WEBPACK_IMPORTED_MODULE_9__.PoliticalPartyService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 187,
      vars: 27,
      consts: [[1, "dashboard-container"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-1"], [1, "text-muted"], [1, "row", "g-4", "mb-4"], [1, "col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "col-12"], [1, "card", "h-100"], [1, "card-body", "text-center"], [1, "mb-3"], [1, "bi", "bi-geo-alt-fill", "text-primary", 2, "font-size", "2.5rem"], [1, "card-title"], [1, "stat-value", "mb-2"], ["class", "spinner-border spinner-border-sm text-primary", "role", "status", 4, "ngIf"], ["class", "display-4 text-primary fw-bold", 4, "ngIf"], ["routerLink", "/regions", 1, "btn", "btn-primary"], [1, "bi", "bi-arrow-right", "me-1"], [1, "bi", "bi-building", "text-success", 2, "font-size", "2.5rem"], ["class", "spinner-border spinner-border-sm text-success", "role", "status", 4, "ngIf"], ["class", "display-4 text-success fw-bold", 4, "ngIf"], ["routerLink", "/districts", 1, "btn", "btn-success"], [1, "bi", "bi-house", "text-warning", 2, "font-size", "2.5rem"], ["class", "spinner-border spinner-border-sm text-warning", "role", "status", 4, "ngIf"], ["class", "display-4 text-warning fw-bold", 4, "ngIf"], ["routerLink", "/wards", 1, "btn", "btn-warning"], [1, "bi", "bi-house-door", "text-danger", 2, "font-size", "2.5rem"], ["class", "spinner-border spinner-border-sm text-danger", "role", "status", 4, "ngIf"], ["class", "display-4 text-danger fw-bold", 4, "ngIf"], ["routerLink", "/villages", 1, "btn", "btn-danger"], [1, "bi", "bi-house-door-fill", "text-dark", 2, "font-size", "2.5rem"], ["class", "spinner-border spinner-border-sm text-dark", "role", "status", 4, "ngIf"], ["class", "display-4 text-dark fw-bold", 4, "ngIf"], ["routerLink", "/hamlets", 1, "btn", "btn-dark"], [1, "bi", "bi-flag", "text-info", 2, "font-size", "2.5rem"], ["class", "spinner-border spinner-border-sm text-info", "role", "status", 4, "ngIf"], ["class", "display-4 text-info fw-bold", 4, "ngIf"], ["routerLink", "/constituencies", 1, "btn", "btn-info"], [1, "bi", "bi-layers", "text-secondary", 2, "font-size", "2.5rem"], ["class", "spinner-border spinner-border-sm text-secondary", "role", "status", 4, "ngIf"], ["class", "display-4 text-secondary fw-bold", 4, "ngIf"], ["routerLink", "/areas", 1, "btn", "btn-secondary"], [1, "bi", "bi-building", "text-dark", 2, "font-size", "2.5rem"], ["routerLink", "/parliaments", 1, "btn", "btn-dark"], [1, "bi", "bi-flag", "text-danger", 2, "font-size", "2.5rem"], ["routerLink", "/political-parties", 1, "btn", "btn-danger"], [1, "bi", "bi-plus-circle", "text-secondary", 2, "font-size", "2.5rem"], [1, "d-grid", "gap-2"], ["routerLink", "/regions/create", 1, "btn", "btn-secondary", "btn-sm"], [1, "bi", "bi-plus", "me-1"], ["routerLink", "/districts/create", 1, "btn", "btn-outline-secondary", "btn-sm"], ["routerLink", "/wards/create", 1, "btn", "btn-outline-secondary", "btn-sm"], ["routerLink", "/villages/create", 1, "btn", "btn-outline-secondary", "btn-sm"], ["routerLink", "/hamlets/create", 1, "btn", "btn-outline-secondary", "btn-sm"], ["routerLink", "/constituencies/create", 1, "btn", "btn-outline-secondary", "btn-sm"], ["routerLink", "/parliaments/create", 1, "btn", "btn-outline-secondary", "btn-sm"], ["routerLink", "/political-parties/create", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "bi", "bi-activity", "me-2"], [1, "card-body"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "display-4", "text-primary", "fw-bold"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-success"], [1, "display-4", "text-success", "fw-bold"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-warning"], [1, "display-4", "text-warning", "fw-bold"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-danger"], [1, "display-4", "text-danger", "fw-bold"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-dark"], [1, "display-4", "text-dark", "fw-bold"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-info"], [1, "display-4", "text-info", "fw-bold"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-secondary"], [1, "display-4", "text-secondary", "fw-bold"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Total Regions");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, DashboardComponent_div_16_Template, 1, 0, "div", 12)(17, DashboardComponent_span_17_Template, 2, 1, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " View Regions ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 5)(24, "div", 6)(25, "div", 7)(26, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Total Districts");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, DashboardComponent_div_31_Template, 1, 0, "div", 17)(32, DashboardComponent_span_32_Template, 2, 1, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, " View Districts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 5)(39, "div", 6)(40, "div", 7)(41, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Total Wards");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, DashboardComponent_div_46_Template, 1, 0, "div", 21)(47, DashboardComponent_span_47_Template, 2, 1, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, " View Wards ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 5)(54, "div", 6)(55, "div", 7)(56, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Total Villages");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](61, DashboardComponent_div_61_Template, 1, 0, "div", 25)(62, DashboardComponent_span_62_Template, 2, 1, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, " View Villages ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 5)(69, "div", 6)(70, "div", 7)(71, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "Total Hamlets");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](76, DashboardComponent_div_76_Template, 1, 0, "div", 29)(77, DashboardComponent_span_77_Template, 2, 1, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, " View Hamlets ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 5)(84, "div", 6)(85, "div", 7)(86, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](87, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "Total Constituencies");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](91, DashboardComponent_div_91_Template, 1, 0, "div", 33)(92, DashboardComponent_span_92_Template, 2, 1, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](96, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, " View Constituencies ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "div", 5)(99, "div", 6)(100, "div", 7)(101, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](102, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "Total Areas");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](106, DashboardComponent_div_106_Template, 1, 0, "div", 37)(107, DashboardComponent_span_107_Template, 2, 1, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "All area types combined");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](111, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, " View Areas ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "div", 5)(114, "div", 6)(115, "div", 7)(116, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](117, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "Total Parliaments");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](121, DashboardComponent_div_121_Template, 1, 0, "div", 29)(122, DashboardComponent_span_122_Template, 2, 1, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](126, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, " View Parliaments ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "div", 5)(129, "div", 6)(130, "div", 7)(131, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](132, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, "Political Parties");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](136, DashboardComponent_div_136_Template, 1, 0, "div", 25)(137, DashboardComponent_span_137_Template, 2, 1, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "a", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](141, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, " View Parties ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "div", 5)(144, "div", 6)(145, "div", 7)(146, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](147, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, "Quick Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, "Create new entities quickly");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "div", 45)(153, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](154, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](155, " New Region ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](157, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, " New District ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "a", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](160, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161, " New Ward ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](163, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](164, " New Village ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "a", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](166, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](167, " New Hamlet ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](168, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](169, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](170, " New Constituency ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](172, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, " New Parliament ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "a", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](175, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, " New Political Party ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "div", 55)(178, "div", 56)(179, "div", 57)(180, "div", 58)(181, "h5", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](182, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](183, " Recent Activity ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "div", 61)(185, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "Activity tracking will be implemented soon...");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Welcome back, ", ctx.currentUser == null ? null : ctx.currentUser.username, "!");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingRegions);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingRegions);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.regionStats == null ? null : ctx.regionStats.activeRegions) || 0, " active regions");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingDistricts);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingDistricts);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.districtStats == null ? null : ctx.districtStats.activeDistricts) || 0, " active districts");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingWards);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingWards);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.wardStats == null ? null : ctx.wardStats.activeWards) || 0, " active wards");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingVillages);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingVillages);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.villageStats == null ? null : ctx.villageStats.activeVillages) || 0, " active villages");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingHamlets);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingHamlets);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.hamletStats == null ? null : ctx.hamletStats.activeHamlets) || 0, " active hamlets");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingConstituencies);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingConstituencies);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.constituencyStats == null ? null : ctx.constituencyStats.activeConstituencies) || 0, " active constituencies");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingAreas);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingAreas);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingParliaments);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingParliaments);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.parliamentStats == null ? null : ctx.parliamentStats.activeParliaments) || 0, " active parliaments");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingPoliticalParties);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingPoliticalParties);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.politicalPartyStats == null ? null : ctx.politicalPartyStats.activeParties) || 0, " active parties");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink],
      styles: [".dashboard-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  transition: box-shadow 0.15s ease-in-out;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n\n\n@media (max-width: 576px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stat-value[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding: 0.375rem 0.75rem;\n  }\n  .d-grid[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem;\n  }\n}\n@media (max-width: 768px) {\n  .row.g-4[_ngcontent-%COMP%] {\n    --bs-gutter-x: 1rem;\n    --bs-gutter-y: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxZQUFBO0VBQ0EsbURBQUE7RUFDQSx3Q0FBQTtBQUFOOztBQUdJO0VBQ0UsNkNBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQUFOOztBQUdJLDZCQUFBO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VBQU47RUFHSTtJQUNFLGFBQUE7RUFETjtFQUlJO0lBQ0UsaUJBQUE7RUFGTjtFQUtJO0lBQ0UsZUFBQTtFQUhOO0VBTUk7SUFDRSxtQkFBQTtJQUNBLHlCQUFBO0VBSk47RUFPSTtJQUNFLHNCQUFBO0VBTE47QUFDRjtBQVFJO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0VBTk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAuY2FyZDpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgfVxuXG4gICAgLnN0YXQtdmFsdWUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC8qIE1vYmlsZSBSZXNwb25zaXZlIFN0eWxlcyAqL1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgLmRhc2hib2FyZC1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5zdGF0LXZhbHVlIC5kaXNwbGF5LTQge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgICAgfVxuXG4gICAgICAuZC1ncmlkIC5idG4ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLnJvdy5nLTQge1xuICAgICAgICAtLWJzLWd1dHRlci14OiAxcmVtO1xuICAgICAgICAtLWJzLWd1dHRlci15OiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_component_ts.js.map