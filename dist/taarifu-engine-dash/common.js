"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["common"],{

/***/ 7845:
/*!***********************************************!*\
  !*** ./src/app/core/services/area.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaService: () => (/* binding */ AreaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class AreaService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api/admin/v1';
  }
  getAllAreas(page = 0, size = 20, sortBy = 'code', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/areas`, {
      params
    });
  }
  getAreaByUid(uid) {
    return this.http.get(`${this.API_URL}/areas/uid/${uid}`);
  }
  getAreaByCode(code) {
    return this.http.get(`${this.API_URL}/areas/code/${code}`);
  }
  getAreasByType(areaType, page = 0, size = 20, sortBy = 'code', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/areas/type/${areaType}`, {
      params
    });
  }
  searchAreas(searchTerm, page = 0, size = 20, sortBy = 'code', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('searchTerm', searchTerm).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/areas/search`, {
      params
    });
  }
  searchAreasByType(areaType, searchTerm, page = 0, size = 20, sortBy = 'code', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('searchTerm', searchTerm).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/areas/type/${areaType}/search`, {
      params
    });
  }
  getAreaStats() {
    return this.http.get(`${this.API_URL}/areas/stats`);
  }
  getAreaByTypeAndId(areaType, areaId) {
    return this.http.get(`${this.API_URL}/areas/type/${areaType}/area/${areaId}`);
  }
  static {
    this.ɵfac = function AreaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AreaService,
      factory: AreaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9118:
/*!*******************************************************!*\
  !*** ./src/app/core/services/constituency.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConstituencyService: () => (/* binding */ ConstituencyService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class ConstituencyService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api/admin/v1';
  }
  getAllConstituencies(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/constituencies`, {
      params
    });
  }
  searchConstituencies(query, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('q', query).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/constituencies/search`, {
      params
    });
  }
  getConstituencyByUid(uid) {
    return this.http.get(`${this.API_URL}/constituencies/uid/${uid}`);
  }
  createConstituency(request) {
    return this.http.post(`${this.API_URL}/constituencies`, request);
  }
  updateConstituency(uid, request) {
    return this.http.put(`${this.API_URL}/constituencies/uid/${uid}`, request);
  }
  deleteConstituency(uid) {
    return this.http.delete(`${this.API_URL}/constituencies/uid/${uid}`);
  }
  getConstituencyStats() {
    return this.http.get(`${this.API_URL}/constituencies/stats`);
  }
  getConstituenciesByRegionUid(regionUid, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/constituencies/region/uid/${regionUid}`, {
      params
    });
  }
  getConstituenciesByDistrictUid(districtUid, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/constituencies/district/uid/${districtUid}`, {
      params
    });
  }
  getActiveConstituencies(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/constituencies/active`, {
      params
    });
  }
  getConstituenciesByStatus(isActive, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/constituencies/status/${isActive}`, {
      params
    });
  }
  toggleConstituencyStatus(uid) {
    return this.http.patch(`${this.API_URL}/constituencies/uid/${uid}/toggle-status`, {});
  }
  static {
    this.ɵfac = function ConstituencyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConstituencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ConstituencyService,
      factory: ConstituencyService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3446:
/*!***************************************************!*\
  !*** ./src/app/core/services/district.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DistrictService: () => (/* binding */ DistrictService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class DistrictService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api';
  }
  createDistrict(request) {
    return this.http.post(`${this.API_URL}/admin/v1/districts`, request);
  }
  updateDistrict(uid, request) {
    return this.http.put(`${this.API_URL}/admin/v1/districts/uid/${uid}`, request);
  }
  getDistrictByUid(uid) {
    return this.http.get(`${this.API_URL}/admin/v1/districts/uid/${uid}`);
  }
  getDistrictByCode(code) {
    return this.http.get(`${this.API_URL}/admin/v1/districts/code/${code}`);
  }
  getAllDistricts(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/admin/v1/districts`, {
      params
    });
  }
  getActiveDistricts(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/admin/v1/districts/active`, {
      params
    });
  }
  searchDistricts(query, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('q', query).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/admin/v1/districts/search`, {
      params
    });
  }
  getDistrictsByStatus(isActive, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/admin/v1/districts/status/${isActive}`, {
      params
    });
  }
  getDistrictsByRegionUid(regionUid, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/admin/v1/districts/region/uid/${regionUid}`, {
      params
    });
  }
  toggleDistrictStatus(uid) {
    return this.http.patch(`${this.API_URL}/admin/v1/districts/uid/${uid}/toggle-status`, {});
  }
  deleteDistrict(uid) {
    return this.http.delete(`${this.API_URL}/admin/v1/districts/uid/${uid}`);
  }
  getDistrictStats() {
    return this.http.get(`${this.API_URL}/admin/v1/districts/stats`);
  }
  static {
    this.ɵfac = function DistrictService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DistrictService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DistrictService,
      factory: DistrictService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 891:
/*!*************************************************!*\
  !*** ./src/app/core/services/hamlet.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HamletService: () => (/* binding */ HamletService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class HamletService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api/admin/v1';
  }
  getAllHamlets(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/hamlets`, {
      params
    });
  }
  searchHamlets(query, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('q', query).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/hamlets/search`, {
      params
    });
  }
  getHamletByUid(uid) {
    return this.http.get(`${this.API_URL}/hamlets/uid/${uid}`);
  }
  createHamlet(request) {
    return this.http.post(`${this.API_URL}/hamlets`, request);
  }
  updateHamlet(uid, request) {
    return this.http.put(`${this.API_URL}/hamlets/uid/${uid}`, request);
  }
  deleteHamlet(uid) {
    return this.http.delete(`${this.API_URL}/hamlets/uid/${uid}`);
  }
  getHamletStats() {
    return this.http.get(`${this.API_URL}/hamlets/stats`);
  }
  getHamletsByVillageUid(villageUid, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/hamlets/village/uid/${villageUid}`, {
      params
    });
  }
  getActiveHamlets(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/hamlets/active`, {
      params
    });
  }
  getHamletsByStatus(isActive, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/hamlets/status/${isActive}`, {
      params
    });
  }
  toggleHamletStatus(uid) {
    return this.http.patch(`${this.API_URL}/hamlets/uid/${uid}/toggle-status`, {});
  }
  static {
    this.ɵfac = function HamletService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HamletService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HamletService,
      factory: HamletService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4571:
/*!*****************************************************!*\
  !*** ./src/app/core/services/parliament.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParliamentService: () => (/* binding */ ParliamentService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class ParliamentService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api/admin/v1';
  }
  getAllParliaments(page = 0, size = 20, sortBy = 'startDate', sortDir = 'desc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/parliaments`, {
      params
    });
  }
  getParliamentById(id) {
    return this.http.get(`${this.API_URL}/parliaments/${id}`);
  }
  getParliamentByUid(uid) {
    return this.http.get(`${this.API_URL}/parliaments/uid/${uid}`);
  }
  getParliamentByCode(code) {
    return this.http.get(`${this.API_URL}/parliaments/code/${code}`);
  }
  getCurrentParliament() {
    return this.http.get(`${this.API_URL}/parliaments/current`);
  }
  getActiveParliaments(page = 0, size = 20, sortBy = 'startDate', sortDir = 'desc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/parliaments/active`, {
      params
    });
  }
  searchParliaments(searchTerm, page = 0, size = 20, sortBy = 'startDate', sortDir = 'desc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('searchTerm', searchTerm).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/parliaments/search`, {
      params
    });
  }
  createParliament(request) {
    return this.http.post(`${this.API_URL}/parliaments`, request);
  }
  updateParliament(id, request) {
    return this.http.put(`${this.API_URL}/parliaments/${id}`, request);
  }
  updateParliamentByUid(uid, request) {
    return this.http.put(`${this.API_URL}/parliaments/uid/${uid}`, request);
  }
  setCurrentParliament(id) {
    return this.http.put(`${this.API_URL}/parliaments/${id}/set-current`, {});
  }
  setCurrentParliamentByUid(uid) {
    return this.http.put(`${this.API_URL}/parliaments/uid/${uid}/set-current`, {});
  }
  deleteParliament(id) {
    return this.http.delete(`${this.API_URL}/parliaments/${id}`);
  }
  deleteParliamentByUid(uid) {
    return this.http.delete(`${this.API_URL}/parliaments/uid/${uid}`);
  }
  getParliamentStats() {
    return this.http.get(`${this.API_URL}/parliaments/stats`);
  }
  static {
    this.ɵfac = function ParliamentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ParliamentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ParliamentService,
      factory: ParliamentService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9934:
/*!**********************************************************!*\
  !*** ./src/app/core/services/political-party.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PoliticalPartyService: () => (/* binding */ PoliticalPartyService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class PoliticalPartyService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api/admin/v1';
  }
  getAllPoliticalParties(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/political-parties`, {
      params
    });
  }
  getPoliticalPartyById(id) {
    return this.http.get(`${this.API_URL}/political-parties/${id}`);
  }
  getPoliticalPartyByUid(uid) {
    return this.http.get(`${this.API_URL}/political-parties/uid/${uid}`);
  }
  getPoliticalPartyByCode(code) {
    return this.http.get(`${this.API_URL}/political-parties/code/${code}`);
  }
  getPoliticalPartyByName(name) {
    return this.http.get(`${this.API_URL}/political-parties/name/${name}`);
  }
  getPoliticalPartyByAbbreviation(abbreviation) {
    return this.http.get(`${this.API_URL}/political-parties/abbreviation/${abbreviation}`);
  }
  getActivePoliticalParties(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/political-parties/active`, {
      params
    });
  }
  getRegisteredPoliticalParties(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/political-parties/registered`, {
      params
    });
  }
  getOperationalPoliticalParties(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/political-parties/operational`, {
      params
    });
  }
  searchPoliticalParties(searchTerm, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('q', searchTerm).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/political-parties/search`, {
      params
    });
  }
  getPoliticalPartiesByFoundingYear(year, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/political-parties/founding-year/${year}`, {
      params
    });
  }
  getPoliticalPartiesByIdeology(ideology, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('ideology', ideology).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/political-parties/ideology`, {
      params
    });
  }
  createPoliticalParty(request) {
    return this.http.post(`${this.API_URL}/political-parties`, request);
  }
  updatePoliticalParty(id, request) {
    return this.http.put(`${this.API_URL}/political-parties/${id}`, request);
  }
  updatePoliticalPartyByUid(uid, request) {
    return this.http.put(`${this.API_URL}/political-parties/uid/${uid}`, request);
  }
  deletePoliticalParty(id) {
    return this.http.delete(`${this.API_URL}/political-parties/${id}`);
  }
  deletePoliticalPartyByUid(uid) {
    return this.http.delete(`${this.API_URL}/political-parties/uid/${uid}`);
  }
  activatePoliticalParty(id) {
    return this.http.patch(`${this.API_URL}/political-parties/${id}/activate`, {});
  }
  deactivatePoliticalParty(id) {
    return this.http.patch(`${this.API_URL}/political-parties/${id}/deactivate`, {});
  }
  registerPoliticalParty(id) {
    return this.http.patch(`${this.API_URL}/political-parties/${id}/register`, {});
  }
  deregisterPoliticalParty(id) {
    return this.http.patch(`${this.API_URL}/political-parties/${id}/deregister`, {});
  }
  getPoliticalPartyStats() {
    return this.http.get(`${this.API_URL}/political-parties/stats`);
  }
  static {
    this.ɵfac = function PoliticalPartyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PoliticalPartyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PoliticalPartyService,
      factory: PoliticalPartyService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5996:
/*!*************************************************!*\
  !*** ./src/app/core/services/region.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegionService: () => (/* binding */ RegionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class RegionService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api';
  }
  createRegion(request) {
    return this.http.post(`${this.API_URL}/admin/v1/regions`, request);
  }
  updateRegion(uid, request) {
    return this.http.put(`${this.API_URL}/admin/v1/regions/uid/${uid}`, request);
  }
  getRegionByUid(uid) {
    return this.http.get(`${this.API_URL}/admin/v1/regions/uid/${uid}`);
  }
  getRegionByCode(code) {
    return this.http.get(`${this.API_URL}/admin/v1/regions/code/${code}`);
  }
  getAllRegions(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/admin/v1/regions`, {
      params
    });
  }
  getActiveRegions(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/admin/v1/regions/active`, {
      params
    });
  }
  searchRegions(query, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('q', query).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/admin/v1/regions/search`, {
      params
    });
  }
  getRegionsByStatus(isActive, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/admin/v1/regions/status/${isActive}`, {
      params
    });
  }
  toggleRegionStatus(uid) {
    return this.http.patch(`${this.API_URL}/admin/v1/regions/uid/${uid}/toggle-status`, {});
  }
  deleteRegion(uid) {
    return this.http.delete(`${this.API_URL}/admin/v1/regions/uid/${uid}`);
  }
  getRegionStats() {
    return this.http.get(`${this.API_URL}/admin/v1/regions/stats`);
  }
  static {
    this.ɵfac = function RegionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RegionService,
      factory: RegionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3832:
/*!**************************************************!*\
  !*** ./src/app/core/services/village.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VillageService: () => (/* binding */ VillageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class VillageService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api/admin/v1';
  }
  // Get all villages with pagination
  getAllVillages(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/villages`, {
      params
    });
  }
  // Search villages
  searchVillages(query, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('q', query).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/villages/search`, {
      params
    });
  }
  // Get village by UID
  getVillageByUid(uid) {
    return this.http.get(`${this.API_URL}/villages/uid/${uid}`);
  }
  // Create new village
  createVillage(village) {
    return this.http.post(`${this.API_URL}/villages`, village);
  }
  // Update village by UID
  updateVillage(uid, village) {
    return this.http.put(`${this.API_URL}/villages/uid/${uid}`, village);
  }
  // Delete village by UID
  deleteVillage(uid) {
    return this.http.delete(`${this.API_URL}/villages/uid/${uid}`);
  }
  // Get village statistics
  getVillageStats() {
    return this.http.get(`${this.API_URL}/villages/stats`);
  }
  // Get villages by ward UID
  getVillagesByWardUid(wardUid, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/villages/ward/uid/${wardUid}`, {
      params
    });
  }
  // Get active villages
  getActiveVillages(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/villages/active`, {
      params
    });
  }
  // Get villages by status
  getVillagesByStatus(isActive, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/villages/status/${isActive}`, {
      params
    });
  }
  // Toggle village status
  toggleVillageStatus(uid) {
    return this.http.patch(`${this.API_URL}/villages/uid/${uid}/toggle-status`, {});
  }
  static {
    this.ɵfac = function VillageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VillageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VillageService,
      factory: VillageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4486:
/*!***********************************************!*\
  !*** ./src/app/core/services/ward.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WardService: () => (/* binding */ WardService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class WardService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:8080/api/admin/v1';
  }
  // Get all wards with pagination
  getAllWards(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/wards`, {
      params
    });
  }
  // Search wards
  searchWards(query, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('q', query).set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/wards/search`, {
      params
    });
  }
  // Get ward by UID
  getWardByUid(uid) {
    return this.http.get(`${this.API_URL}/wards/uid/${uid}`);
  }
  // Create new ward
  createWard(ward) {
    return this.http.post(`${this.API_URL}/wards`, ward);
  }
  // Update ward by UID
  updateWard(uid, ward) {
    return this.http.put(`${this.API_URL}/wards/uid/${uid}`, ward);
  }
  // Delete ward by UID
  deleteWard(uid) {
    return this.http.delete(`${this.API_URL}/wards/uid/${uid}`);
  }
  // Get ward statistics
  getWardStats() {
    return this.http.get(`${this.API_URL}/wards/stats`);
  }
  // Get wards by district UID
  getWardsByDistrictUid(districtUid, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/wards/district/uid/${districtUid}`, {
      params
    });
  }
  // Get active wards
  getActiveWards(page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/wards/active`, {
      params
    });
  }
  // Get wards by status
  getWardsByStatus(isActive, page = 0, size = 10, sortBy = 'name', sortDir = 'asc') {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get(`${this.API_URL}/wards/status/${isActive}`, {
      params
    });
  }
  // Toggle ward status
  toggleWardStatus(uid) {
    return this.http.patch(`${this.API_URL}/wards/uid/${uid}/toggle-status`, {});
  }
  static {
    this.ɵfac = function WardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: WardService,
      factory: WardService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map