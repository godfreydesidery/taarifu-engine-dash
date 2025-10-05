"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_shared_components_layout_layout_component_ts"],{

/***/ 1765:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class FooterComponent {
  constructor() {
    this.currentYear = new Date().getFullYear();
  }
  openHelp() {
    console.log('Open help');
    // Implement help functionality
  }
  openSupport() {
    console.log('Open support');
    // Implement support functionality
  }
  openAbout() {
    console.log('Open about');
    // Implement about functionality
  }
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 1,
      consts: [[1, "footer", "bg-light", "border-top"], [1, "container-fluid"], [1, "row", "align-items-center", "py-3"], [1, "col-md-6"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-geo-alt-fill", "text-primary", "me-2"], [1, "text-muted"], [1, "col-md-6", "text-md-end"], [1, "d-flex", "justify-content-md-end", "justify-content-start", "align-items-center"], [1, "text-muted", "me-3"], [1, "d-flex"], ["href", "#", "title", "Help", 1, "text-muted", "me-3", 3, "click"], [1, "bi", "bi-question-circle"], ["href", "#", "title", "Support", 1, "text-muted", "me-3", 3, "click"], [1, "bi", "bi-headset"], ["href", "#", "title", "About", 1, "text-muted", 3, "click"], [1, "bi", "bi-info-circle"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Version 1.0.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener() {
            return ctx.openHelp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_15_listener() {
            return ctx.openSupport();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_17_listener() {
            return ctx.openAbout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.currentYear, " Taarifu Engine Dashboard. All rights reserved. ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: [".footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background-color: #f8f9fa !important;\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #007bff !important;\n}\n\n.footer[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .footer[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]:first-child {\n    margin-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7QUFBTjs7QUFHSTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtBQUFOOztBQUdJO0VBQ0U7SUFDRSxrQkFBQTtFQUFOO0VBR0k7SUFDRSxtQkFBQTtFQUROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuZm9vdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5mb290ZXIgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgLmZvb3RlciBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmZvb3RlciAuYmkge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuZm9vdGVyIC5yb3cge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5mb290ZXIgLmNvbC1tZC02OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9381:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);






class HeaderComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.currentUser = this.authService.getCurrentUser();
  }
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  viewProfile(event) {
    event.preventDefault();
    console.log('View profile clicked - navigating to /profile');
    console.log('Current route:', this.router.url);
    this.router.navigate(['/profile']).then(success => {
      console.log('Navigation to profile:', success ? 'successful' : 'failed');
      console.log('New route after navigation:', this.router.url);
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }
  viewSettings() {
    console.log('View settings');
    // TODO: Implement settings view
  }
  logout() {
    console.log('Logging out user...');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      outputs: {
        toggleSidebar: "toggleSidebar"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 34,
      vars: 1,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", 2, "background-color", "#1a1a2e"], [1, "container-fluid"], ["type", "button", 1, "btn", "btn-outline-light", "me-2", 3, "click"], [1, "bi", "bi-list"], ["routerLink", "/dashboard", 1, "navbar-brand", "fw-bold"], [1, "bi", "bi-geo-alt-fill", "me-2"], [1, "d-none", "d-sm-inline"], [1, "d-sm-none"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "d-flex", "align-items-center"], [1, "bi", "bi-person-circle", "me-2"], [1, "d-none", "d-md-inline"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-person", "me-2"], [1, "bi", "bi-gear", "me-2"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-2"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
            return ctx.onToggleSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Taarifu Engine Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Taarifu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 16)(20, "li")(21, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_21_listener($event) {
            return ctx.viewProfile($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Profile ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li")(25, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_25_listener() {
            return ctx.viewSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Settings ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "hr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_31_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Logout ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.currentUser == null ? null : ctx.currentUser.username) || "Admin User");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".navbar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 1030;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  transition: color 0.3s ease;\n  color: #e8e8e8 !important;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #ffffff !important;\n}\n\n.btn-outline-light[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n  color: #e8e8e8;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #e8e8e8 !important;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #ffffff !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  background-color: #ffffff;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  transition: background-color 0.2s ease;\n  color: #495057;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n.dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: #f8d7da;\n  color: #721c24 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSx3RUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FBQU47O0FBR0k7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0FBQU47O0FBR0k7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7QUFBTjs7QUFHSTtFQUNFLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0k7RUFDRSx5QkFBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7QUFBTjs7QUFHSTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBTjs7QUFHSTtFQUNFLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0k7RUFDRSx5QkFBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUFOIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLm5hdmJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWExYTJlIDAlLCAjMTYyMTNlIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgIHotaW5kZXg6IDEwMzA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIH1cblxuICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xuICAgICAgY29sb3I6ICNlOGU4ZTggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJ0bi1vdXRsaW5lLWxpZ2h0IHtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgY29sb3I6ICNlOGU4ZTg7XG4gICAgfVxuXG4gICAgLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgLm5hdi1saW5rIHtcbiAgICAgIGNvbG9yOiAjZThlOGU4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm5hdi1saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICB9XG5cbiAgICAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1pdGVtLnRleHQtZGFuZ2VyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgICBjb2xvcjogIzcyMWMyNCAhaW1wb3J0YW50O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7487:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 9381);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidenav/sidenav.component */ 977);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 1765);
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toast/toast.component */ 6029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







class LayoutComponent {
  constructor() {
    this.sidebarCollapsed = false;
    this.isMobile = false;
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.sidebarCollapsed = true;
    }
  }
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  closeSidebar() {
    if (this.isMobile) {
      this.sidebarCollapsed = true;
    }
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 5,
      consts: [[1, "app-layout"], [3, "toggleSidebar"], [1, "main-wrapper"], [3, "isCollapsed"], [1, "main-content"], [1, "content-wrapper"], [1, "mobile-overlay", 3, "click"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("toggleSidebar", function LayoutComponent_Template_app_header_toggleSidebar_1_listener() {
            return ctx.toggleSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-sidenav", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "main", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_8_listener() {
            return ctx.closeSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isCollapsed", ctx.sidebarCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sidebar-collapsed", ctx.sidebarCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("show", !ctx.sidebarCollapsed && ctx.isMobile);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _toast_toast_component__WEBPACK_IMPORTED_MODULE_3__.ToastComponent],
      styles: [".app-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  margin-top: 56px; \n\n}\n\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 250px; \n\n  min-height: calc(100vh - 56px);\n  display: flex;\n  flex-direction: column;\n  transition: margin-left 0.3s ease;\n  background-color: #f8f9fa;\n}\n\n.main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 60px; \n\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n  background-color: #fff;\n  margin: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  min-height: calc(100vh - 200px);\n}\n\n.mobile-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 56px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  display: none;\n}\n\n.mobile-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  display: block;\n}\n\n@media (min-width: 769px) {\n  .mobile-overlay[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n\n@media (max-width: 768px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    padding: 1rem;\n    border-radius: 0;\n    box-shadow: none;\n  }\n}\n\n\n@media (max-width: 992px) and (min-width: 769px) {\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n\n\n@media (min-width: 1200px) {\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQSxFQUFBLGtCQUFBO0FBQU47O0FBR0k7RUFDRSxPQUFBO0VBQ0Esa0JBQUEsRUFBQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQUFOOztBQUdJO0VBQ0UsaUJBQUEsRUFBQSw0QkFBQTtBQUFOOztBQUdJO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0JBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQU47O0FBR0k7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0k7RUFDRTtJQUNFLHdCQUFBO0VBQU47QUFDRjtBQUdJLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLGNBQUE7RUFETjtFQUlJO0lBQ0UsY0FBQTtFQUZOO0VBS0k7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFITjtBQUNGO0FBTUksc0JBQUE7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQUpOO0FBQ0Y7QUFPSSxrQkFBQTtBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBTE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5hcHAtbGF5b3V0IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLm1haW4td3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICAgIG1hcmdpbi10b3A6IDU2cHg7IC8qIEhlYWRlciBoZWlnaHQgKi9cbiAgICB9XG5cbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW4tbGVmdDogMjUwcHg7IC8qIFNpZGViYXIgd2lkdGggKi9cbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4zcyBlYXNlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICB9XG5cbiAgICAubWFpbi1jb250ZW50LnNpZGViYXItY29sbGFwc2VkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2MHB4OyAvKiBDb2xsYXBzZWQgc2lkZWJhciB3aWR0aCAqL1xuICAgIH1cblxuICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG4gICAgfVxuXG4gICAgLm1vYmlsZS1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogNTZweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubW9iaWxlLW92ZXJsYXkuc2hvdyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgLm1vYmlsZS1vdmVybGF5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1vYmlsZSBSZXNwb25zaXZlICovXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLWNvbnRlbnQuc2lkZWJhci1jb2xsYXBzZWQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFRhYmxldCBSZXNwb25zaXZlICovXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogTGFyZ2Ugc2NyZWVucyAqL1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAyLjVyZW07XG4gICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 977:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavComponent: () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





function SidenavComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Taarifu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SidenavComponent_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Administration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SidenavComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SidenavComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_13_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleLocations($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Locations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 23)(7, "li", 9)(8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Regions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9)(13, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Districts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9)(18, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Wards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9)(23, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Villages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 9)(28, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hamlets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 9)(35, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Constituencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 9)(40, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Areas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx_r1.shouldShowSubmenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rotated", ctx_r1.shouldShowSubmenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r1.shouldShowSubmenu);
  }
}
function SidenavComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Parliaments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function SidenavComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Political Parties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function SidenavComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function SidenavComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_17_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_18_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_19_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_20_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_21_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_li_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_22_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_23_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_li_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_24_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_li_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_25_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_li_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44)(1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_li_26_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.preventSubmenuBehavior($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_hr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 55);
  }
}
function SidenavComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class SidenavComponent {
  constructor() {
    this.isCollapsed = false;
    this.locationsExpanded = false;
    this.isHovered = false;
  }
  ngOnChanges(changes) {
    // No special handling when sidebar collapses - keep everything as is
    if (changes['isCollapsed']) {
      console.log('Sidebar collapsed state changed:', changes['isCollapsed'].currentValue);
    }
  }
  get shouldShowSubmenu() {
    // Show submenu if it's expanded AND (sidebar is not collapsed OR sidebar is hovered)
    return this.locationsExpanded && (!this.isCollapsed || this.isHovered);
  }
  toggleLocations(event) {
    event.preventDefault();
    event.stopPropagation();
    // Allow toggling if sidebar is not collapsed OR if sidebar is hovered
    if (!this.isCollapsed || this.isHovered) {
      this.locationsExpanded = !this.locationsExpanded;
      console.log('Locations expanded:', this.locationsExpanded);
      return true;
    }
    return false;
  }
  // Method to prevent any submenu behavior when collapsed
  preventSubmenuBehavior(event) {
    if (this.isCollapsed) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
    return true;
  }
  onMouseEnter() {
    this.isHovered = true;
    console.log('Sidebar hovered - isCollapsed:', this.isCollapsed, 'isHovered:', this.isHovered);
  }
  onMouseLeave() {
    this.isHovered = false;
    console.log('Sidebar hover ended');
  }
  logout() {
    console.log('Logout clicked');
    // Implement logout logic here
  }
  static {
    this.ɵfac = function SidenavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SidenavComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidenavComponent,
      selectors: [["app-sidenav"]],
      inputs: {
        isCollapsed: "isCollapsed"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 33,
      vars: 25,
      consts: [[1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "sidebar-content"], [1, "sidebar-header", "text-center", "mb-4"], [1, "sidebar-brand"], [1, "bi", "bi-geo-alt-fill", "text-primary"], ["class", "brand-text", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "sidebar-nav"], [1, "nav", "flex-column"], [1, "nav-item"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", 3, "title"], [1, "bi", "bi-speedometer2"], [4, "ngIf"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item collapsed-item", 4, "ngIf"], ["class", "my-3", 4, "ngIf"], ["href", "#", 1, "nav-link", 3, "click", "title"], [1, "bi", "bi-box-arrow-right"], [1, "brand-text"], [1, "text-muted"], ["href", "#", 1, "nav-link", "nav-link-parent", 3, "click"], [1, "bi", "bi-geo-alt-fill"], [1, "bi", "bi-chevron-down", "ms-auto", "chevron-icon"], [1, "nav", "flex-column", "submenu"], ["routerLink", "/regions", "routerLinkActive", "active", 1, "nav-link", "submenu-link"], [1, "bi", "bi-geo-alt"], ["routerLink", "/districts", "routerLinkActive", "active", 1, "nav-link", "submenu-link"], [1, "bi", "bi-building"], ["routerLink", "/wards", "routerLinkActive", "active", 1, "nav-link", "submenu-link"], [1, "bi", "bi-house"], ["routerLink", "/villages", "routerLinkActive", "active", 1, "nav-link", "submenu-link"], [1, "bi", "bi-house-door"], ["routerLink", "/hamlets", "routerLinkActive", "active", 1, "nav-link", "submenu-link"], [1, "bi", "bi-house-door-fill"], [1, "submenu-separator"], ["routerLink", "/constituencies", "routerLinkActive", "active", 1, "nav-link", "submenu-link"], [1, "bi", "bi-flag-fill"], ["routerLink", "/areas", "routerLinkActive", "active", 1, "nav-link", "submenu-link"], [1, "bi", "bi-layers"], ["routerLink", "/parliaments", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/political-parties", "routerLinkActive", "active", 1, "nav-link"], [1, "bi", "bi-flag"], ["routerLink", "/admin-users", "routerLinkActive", "active", 1, "nav-link"], [1, "bi", "bi-person-gear"], [1, "nav-item", "collapsed-item"], ["routerLink", "/regions", "routerLinkActive", "active", "title", "Regions", 1, "nav-link", "collapsed-link", 3, "click"], ["routerLink", "/districts", "routerLinkActive", "active", "title", "Districts", 1, "nav-link", "collapsed-link", 3, "click"], ["routerLink", "/wards", "routerLinkActive", "active", "title", "Wards", 1, "nav-link", "collapsed-link", 3, "click"], ["routerLink", "/villages", "routerLinkActive", "active", "title", "Villages", 1, "nav-link", "collapsed-link", 3, "click"], ["routerLink", "/hamlets", "routerLinkActive", "active", "title", "Hamlets", 1, "nav-link", "collapsed-link", 3, "click"], ["routerLink", "/constituencies", "routerLinkActive", "active", "title", "Constituencies", 1, "nav-link", "collapsed-link", 3, "click"], ["routerLink", "/areas", "routerLinkActive", "active", "title", "Areas", 1, "nav-link", "collapsed-link", 3, "click"], ["routerLink", "/parliaments", "routerLinkActive", "active", "title", "Parliaments", 1, "nav-link", "collapsed-link", 3, "click"], ["routerLink", "/political-parties", "routerLinkActive", "active", "title", "Political Parties", 1, "nav-link", "collapsed-link", 3, "click"], ["routerLink", "/admin-users", "routerLinkActive", "active", "title", "Admin Users", 1, "nav-link", "collapsed-link", 3, "click"], [1, "my-3"]],
      template: function SidenavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SidenavComponent_Template_nav_mouseenter_0_listener() {
            return ctx.onMouseEnter();
          })("mouseleave", function SidenavComponent_Template_nav_mouseleave_0_listener() {
            return ctx.onMouseLeave();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavComponent_span_5_Template, 2, 0, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_small_6_Template, 2, 0, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidenavComponent_span_12_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SidenavComponent_li_13_Template, 44, 6, "li", 13)(14, SidenavComponent_li_14_Template, 5, 0, "li", 13)(15, SidenavComponent_li_15_Template, 5, 0, "li", 13)(16, SidenavComponent_li_16_Template, 5, 0, "li", 13)(17, SidenavComponent_li_17_Template, 3, 0, "li", 14)(18, SidenavComponent_li_18_Template, 3, 0, "li", 14)(19, SidenavComponent_li_19_Template, 3, 0, "li", 14)(20, SidenavComponent_li_20_Template, 3, 0, "li", 14)(21, SidenavComponent_li_21_Template, 3, 0, "li", 14)(22, SidenavComponent_li_22_Template, 3, 0, "li", 14)(23, SidenavComponent_li_23_Template, 3, 0, "li", 14)(24, SidenavComponent_li_24_Template, 3, 0, "li", 14)(25, SidenavComponent_li_25_Template, 3, 0, "li", 14)(26, SidenavComponent_li_26_Template, 3, 0, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SidenavComponent_hr_27_Template, 1, 0, "hr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 8)(29, "li", 9)(30, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_30_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SidenavComponent_span_32_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", ctx.isCollapsed)("mobile-show", !ctx.isCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed || ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed || ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.isCollapsed && !ctx.isHovered ? "Dashboard" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed || ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed || ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed || ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed || ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed || ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed && !ctx.isHovered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.isCollapsed ? "Logout" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  width: 250px;\n  background-color: #f8f9fa;\n  border-right: 1px solid #dee2e6;\n  transition: width 0.3s ease;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.sidebar-content[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  border-bottom: 1px solid #dee2e6;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n}\n\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.sidebar-brand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #007bff;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 0.5rem;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  margin: 0.25rem 0;\n  border-radius: 8px;\n  font-weight: 500;\n  color: #495057;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 20px;\n  text-align: center;\n  margin-right: 0.75rem;\n}\n\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n  background-color: #e7f1ff;\n  transform: translateX(2px);\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n  transform: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n  margin: 1rem 0;\n}\n\n\n\n.nav-link-parent[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nav-link-parent[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  font-size: 0.8rem;\n  margin-left: auto;\n}\n\n.nav-link-parent[_ngcontent-%COMP%]   .chevron-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.nav-link-parent.expanded[_ngcontent-%COMP%] {\n  background-color: #e7f1ff;\n  color: #007bff;\n}\n\n.submenu[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease, opacity 0.3s ease;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  margin: 0.25rem 0;\n  opacity: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.submenu.show[_ngcontent-%COMP%] {\n  max-height: none;\n  opacity: 1;\n}\n\n\n\n\n\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n\n\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::after {\n  display: none !important;\n}\n\n\n\n.collapsed-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.collapsed-link[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem;\n  margin: 0.25rem 0;\n  border-radius: 8px;\n  font-weight: 500;\n  color: #495057;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n\n.collapsed-link[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n  background-color: #e7f1ff;\n  transform: none; \n\n}\n\n.collapsed-link.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);\n}\n\n.collapsed-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 20px;\n  text-align: center;\n}\n\n\n\n.collapsed-item[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.collapsed-item[_ngcontent-%COMP%]:hover   .submenu[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n\n\n.submenu-link[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem 0.5rem 2.5rem !important;\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin: 0.1rem 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.submenu-link[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n  color: #007bff;\n}\n\n.submenu-link.active[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n}\n\n.submenu-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 16px;\n  margin-right: 0.5rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.submenu-separator[_ngcontent-%COMP%] {\n  margin: 0.5rem 1rem;\n  border: none;\n  border-top: 1px solid #e9ecef;\n  opacity: 0.6;\n}\n\n.submenu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.submenu-separator[_ngcontent-%COMP%] {\n  margin: 0.5rem 1rem;\n  border: none;\n  border-top: 1px solid #dee2e6;\n  opacity: 0.5;\n}\n\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 56px;\n    left: 0;\n    height: calc(100vh - 56px);\n    z-index: 1000;\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n    width: 250px;\n  }\n  .sidebar.mobile-show[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n}\n@media (min-width: 769px) {\n  .sidebar.mobile-show[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  \n\n  .sidebar.collapsed[_ngcontent-%COMP%]:hover {\n    width: 250px;\n    z-index: 1001;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%]:hover   .sidebar-content[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFHSTtFQUNFLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGlCQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFBTjs7QUFHSTtFQUNFLE9BQUE7RUFDQSxpQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0FBQU47O0FBR0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUdJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0ksdUJBQUE7QUFDQTtFQUNFLGtCQUFBO0FBQU47O0FBR0k7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0FBQU47O0FBR0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBQU47O0FBR0ksNENBQUE7QUFFQSw0REFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFETjs7QUFJSTtFQUNFLHdCQUFBO0FBRE47O0FBSUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFETjs7QUFJSSx1REFBQTtBQUNBO0VBQ0Usd0JBQUE7QUFETjs7QUFJSSw2Q0FBQTtBQUNBO0VBQ0Usa0JBQUE7QUFETjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUROOztBQUlJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQSxFQUFBLGtDQUFBO0FBRE47O0FBSUk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtBQUROOztBQUlJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFETjs7QUFJSSwrQ0FBQTtBQUNBO0VBQ0Usd0JBQUE7QUFETjs7QUFJSTtFQUNFLHdCQUFBO0FBRE47O0FBSUksb0NBQUE7QUFFQTtFQUNFLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRk47O0FBS0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFGTjs7QUFLSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUZOOztBQUtJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGTjs7QUFLSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUZOOztBQUtJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFGTjs7QUFLSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUZOOztBQUtJO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EseUNBQUE7SUFDQSxZQUFBO0VBRk47RUFLSTtJQUNFLHdCQUFBO0VBSE47RUFNSTtJQUNFLDRCQUFBO0VBSk47QUFDRjtBQU9JO0VBQ0U7SUFDRSxlQUFBO0VBTE47RUFRSSxzREFBQTtFQUNBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFOTjtFQVNJO0lBQ0UsVUFBQTtFQVBOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuc2lkZWJhciB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDU2cHg7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogMTAwO1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cblxuICAgIC5zaWRlYmFyLmNvbGxhcHNlZCB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG5cbiAgICAuc2lkZWJhci1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5zaWRlYmFyLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAuc2lkZWJhci1icmFuZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLnNpZGViYXItYnJhbmQgaSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG5cbiAgICAuYnJhbmQtdGV4dCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgfVxuXG4gICAgLnNpZGViYXItbmF2IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICB9XG5cbiAgICAuc2lkZWJhciAubmF2LWxpbmsge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICBtYXJnaW46IDAuMjVyZW0gMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC5zaWRlYmFyIC5uYXYtbGluayBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG4gICAgfVxuXG4gICAgLnNpZGViYXIuY29sbGFwc2VkIC5uYXYtbGluayBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2lkZWJhciAubmF2LWxpbms6aG92ZXIge1xuICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmMWZmO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgfVxuXG4gICAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAxMjMsIDI1NSwgMC4zKTtcbiAgICB9XG5cbiAgICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuXG4gICAgLnNpZGViYXIgaHIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgfVxuXG4gICAgLyogTmVzdGVkIE1lbnUgU3R5bGVzICovXG4gICAgLm5hdi1saW5rLXBhcmVudCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLm5hdi1saW5rLXBhcmVudCAuY2hldnJvbi1pY29uIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC5uYXYtbGluay1wYXJlbnQgLmNoZXZyb24taWNvbi5yb3RhdGVkIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLm5hdi1saW5rLXBhcmVudC5leHBhbmRlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmMWZmO1xuICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgfVxuXG4gICAgLnN1Ym1lbnUge1xuICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLnN1Ym1lbnUuc2hvdyB7XG4gICAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAvKiBTdWJtZW51IGlzIGFsd2F5cyB2aXNpYmxlIHdoZW4gZXhwYW5kZWQgKi9cblxuICAgIC8qIEVuc3VyZSBjb2xsYXBzZWQgdmlldyBpdGVtcyBkb24ndCBoYXZlIHN1Ym1lbnUgYmVoYXZpb3IgKi9cbiAgICAuc2lkZWJhci5jb2xsYXBzZWQgLm5hdi1pdGVtIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuc2lkZWJhci5jb2xsYXBzZWQgLm5hdi1pdGVtOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNpZGViYXIuY29sbGFwc2VkIC5uYXYtbGluayB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC8qIFByZXZlbnQgYW55IGhvdmVyIGVmZmVjdHMgdGhhdCBtaWdodCBzaG93IHN1Ym1lbnVzICovXG4gICAgLnNpZGViYXIuY29sbGFwc2VkIC5uYXYtbGluazpob3Zlcjo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC8qIFNwZWNpZmljIHN0eWxlcyBmb3IgY29sbGFwc2VkIHZpZXcgaXRlbXMgKi9cbiAgICAuY29sbGFwc2VkLWl0ZW0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5jb2xsYXBzZWQtbGluayB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICBtYXJnaW46IDAuMjVyZW0gMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgLmNvbGxhcHNlZC1saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjFmZjtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTsgLyogUHJldmVudCBhbnkgdHJhbnNmb3JtIGVmZmVjdHMgKi9cbiAgICB9XG5cbiAgICAuY29sbGFwc2VkLWxpbmsuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xuICAgIH1cblxuICAgIC5jb2xsYXBzZWQtbGluayBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyogRW5zdXJlIGNvbGxhcHNlZCBpdGVtcyBuZXZlciBzaG93IHN1Ym1lbnVzICovXG4gICAgLmNvbGxhcHNlZC1pdGVtIC5zdWJtZW51IHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29sbGFwc2VkLWl0ZW06aG92ZXIgLnN1Ym1lbnUge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC8qIEFsbCBlbGVtZW50cyBhcmUgYWx3YXlzIHZpc2libGUgKi9cblxuICAgIC5zdWJtZW51LWxpbmsge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDIuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgIG1hcmdpbjogMC4xcmVtIDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5zdWJtZW51LWxpbms6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgIH1cblxuICAgIC5zdWJtZW51LWxpbmsuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuc3VibWVudS1saW5rIGkge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnN1Ym1lbnUtc2VwYXJhdG9yIHtcbiAgICAgIG1hcmdpbjogMC41cmVtIDFyZW07XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG5cbiAgICAuc3VibWVudSAubmF2LWl0ZW0ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuc3VibWVudS1zZXBhcmF0b3Ige1xuICAgICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLnNpZGViYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogNTZweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5zaWRlYmFyLm1vYmlsZS1zaG93IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgfVxuXG4gICAgICAuc2lkZWJhci5jb2xsYXBzZWQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgLnNpZGViYXIubW9iaWxlLXNob3cge1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC8qIEhvdmVyIGJlaGF2aW9yIGZvciBkZXNrdG9wIC0gZXhwYW5kIHNpZGViYXIgd2lkdGggKi9cbiAgICAgIC5zaWRlYmFyLmNvbGxhcHNlZDpob3ZlciB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgei1pbmRleDogMTAwMTtcbiAgICAgIH1cblxuICAgICAgLnNpZGViYXIuY29sbGFwc2VkOmhvdmVyIC5zaWRlYmFyLWNvbnRlbnQge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_shared_components_layout_layout_component_ts.js.map