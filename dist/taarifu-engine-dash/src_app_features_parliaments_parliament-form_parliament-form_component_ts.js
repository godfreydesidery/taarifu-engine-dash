"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_parliaments_parliament-form_parliament-form_component_ts"],{

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

/***/ 601:
/*!***********************************************************************************!*\
  !*** ./src/app/features/parliaments/parliament-form/parliament-form.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParliamentFormComponent: () => (/* binding */ ParliamentFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_parliament_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/parliament.service */ 4571);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);









function ParliamentFormComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Parliament name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ParliamentFormComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Parliament name must be at least 2 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ParliamentFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Parliament name must not exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ParliamentFormComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description must not exceed 1000 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ParliamentFormComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Start date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ParliamentFormComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " End date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ParliamentFormComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " End date must be after start date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ParliamentFormComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 43);
  }
}
function ParliamentFormComponent_i_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 44);
  }
}
class ParliamentFormComponent {
  constructor(fb, parliamentService, toastService, router, route) {
    this.fb = fb;
    this.parliamentService = parliamentService;
    this.toastService = toastService;
    this.router = router;
    this.route = route;
    this.isEditMode = false;
    this.isSubmitting = false;
    this.parliamentId = null;
    this.parliamentForm = this.createForm();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parliamentId = params['uid'];
      if (this.parliamentId) {
        this.isEditMode = true;
        this.loadParliament();
      }
    });
  }
  createForm() {
    return this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(1000)]],
      startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      isActive: [true],
      isCurrent: [false]
    }, {
      validators: this.dateRangeValidator
    });
  }
  dateRangeValidator(form) {
    const startDate = form.get('startDate')?.value;
    const endDate = form.get('endDate')?.value;
    if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
      return {
        dateRange: true
      };
    }
    return null;
  }
  loadParliament() {
    if (!this.parliamentId) return;
    this.parliamentService.getParliamentByUid(this.parliamentId).subscribe({
      next: response => {
        if (response.status) {
          const parliament = response.data;
          this.parliamentForm.patchValue({
            name: parliament.name,
            description: parliament.description,
            startDate: parliament.startDate.split('T')[0],
            // Convert to date format
            endDate: parliament.endDate.split('T')[0],
            isActive: parliament.isActive,
            isCurrent: parliament.isCurrent
          });
        } else {
          this.toastService.error('Error', 'Failed to load parliament');
          this.router.navigate(['/parliaments']);
        }
      },
      error: error => {
        console.error('Error loading parliament:', error);
        this.toastService.error('Error', 'Failed to load parliament. Please try again.');
        this.router.navigate(['/parliaments']);
      }
    });
  }
  onSubmit() {
    if (this.parliamentForm.valid) {
      this.isSubmitting = true;
      const formData = this.parliamentForm.value;
      if (this.isEditMode && this.parliamentId) {
        const updateRequest = {
          name: formData.name,
          description: formData.description,
          startDate: formData.startDate,
          endDate: formData.endDate,
          isActive: formData.isActive,
          isCurrent: formData.isCurrent
        };
        this.parliamentService.updateParliamentByUid(this.parliamentId, updateRequest).subscribe({
          next: response => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Parliament updated successfully');
              this.router.navigate(['/parliaments']);
            } else {
              this.toastService.error('Error', 'Failed to update parliament');
            }
          },
          error: error => {
            this.isSubmitting = false;
            console.error('Error updating parliament:', error);
            this.toastService.error('Error', 'Failed to update parliament. Please try again.');
          }
        });
      } else {
        const createRequest = {
          name: formData.name,
          description: formData.description,
          startDate: formData.startDate,
          endDate: formData.endDate,
          isActive: formData.isActive,
          isCurrent: formData.isCurrent
        };
        this.parliamentService.createParliament(createRequest).subscribe({
          next: response => {
            this.isSubmitting = false;
            if (response.status) {
              this.toastService.success('Success', 'Parliament created successfully');
              this.router.navigate(['/parliaments']);
            } else {
              this.toastService.error('Error', 'Failed to create parliament');
            }
          },
          error: error => {
            this.isSubmitting = false;
            console.error('Error creating parliament:', error);
            this.toastService.error('Error', 'Failed to create parliament. Please try again.');
          }
        });
      }
    }
  }
  onCancel() {
    this.router.navigate(['/parliaments']);
  }
  static {
    this.ɵfac = function ParliamentFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ParliamentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_parliament_service__WEBPACK_IMPORTED_MODULE_0__.ParliamentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ParliamentFormComponent,
      selectors: [["app-parliament-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 106,
      vars: 21,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "bi", "bi-building", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], ["for", "name", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter parliament name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter parliament description", 1, "form-control"], ["for", "startDate", 1, "form-label"], ["type", "date", "id", "startDate", "formControlName", "startDate", 1, "form-control"], ["for", "endDate", 1, "form-label"], ["type", "date", "id", "endDate", "formControlName", "endDate", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "isActive", "formControlName", "isActive", 1, "form-check-input"], ["for", "isActive", 1, "form-check-label"], ["type", "checkbox", "id", "isCurrent", "formControlName", "isCurrent", 1, "form-check-input"], ["for", "isCurrent", 1, "form-check-label"], [1, "row", "mt-4"], [1, "col-12"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["class", "bi bi-check-lg me-1", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x-lg", "me-1"], [1, "col-lg-4"], [1, "bi", "bi-info-circle", "me-2"], [1, "list-unstyled"], [1, "bi", "bi-check-circle", "text-success", "me-2"], [1, "badge", "bg-primary", "me-2"], [1, "badge", "bg-success", "me-2"], [1, "badge", "bg-warning", "me-2"], [1, "badge", "bg-secondary", "me-2"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-lg", "me-1"]],
      template: function ParliamentFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ParliamentFormComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Parliament Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ParliamentFormComponent_div_17_Template, 2, 0, "div", 14)(18, ParliamentFormComponent_div_18_Template, 2, 0, "div", 14)(19, ParliamentFormComponent_div_19_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10)(21, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "textarea", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "                    ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ParliamentFormComponent_div_25_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10)(27, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Start Date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ParliamentFormComponent_div_32_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "End Date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ParliamentFormComponent_div_39_Template, 2, 0, "div", 14)(40, ParliamentFormComponent_div_40_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 10)(42, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Active Parliament ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 10)(47, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Current Parliament ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 26)(52, "div", 27)(53, "div", 28)(54, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, ParliamentFormComponent_span_55_Template, 1, 0, "span", 30)(56, ParliamentFormComponent_i_56_Template, 1, 0, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParliamentFormComponent_Template_button_click_58_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 34)(62, "div", 3)(63, "div", 4)(64, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Guidelines ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 7)(68, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Creating a Parliament");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "ul", 36)(71, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Provide a unique parliament name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Set appropriate start and end dates");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "End date must be after start date");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Only one parliament can be current at a time");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Add description for better context");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Parliament Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "ul", 36)(90, "li")(91, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Current");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Currently active parliament");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "li")(95, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " Parliament is operational");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li")(99, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Upcoming");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " Parliament not yet started");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "li")(103, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Ended");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " Parliament has concluded");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          let tmp_11_0;
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Edit Parliament" : "Create New Parliament", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.parliamentForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_2_0 = ctx.parliamentForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.parliamentForm.get("name")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.parliamentForm.get("name")) == null ? null : tmp_3_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.parliamentForm.get("name")) == null ? null : tmp_4_0.hasError("minlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.parliamentForm.get("name")) == null ? null : tmp_5_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.parliamentForm.get("description")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.parliamentForm.get("description")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.parliamentForm.get("description")) == null ? null : tmp_7_0.hasError("maxlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx.parliamentForm.get("startDate")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.parliamentForm.get("startDate")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.parliamentForm.get("startDate")) == null ? null : tmp_9_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ((tmp_10_0 = ctx.parliamentForm.get("endDate")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.parliamentForm.get("endDate")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.parliamentForm.get("endDate")) == null ? null : tmp_11_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.parliamentForm.get("endDate")) == null ? null : tmp_12_0.hasError("dateRange"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.parliamentForm.invalid || ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update Parliament" : "Create Parliament", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
      styles: [".form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcGFybGlhbWVudHMvcGFybGlhbWVudC1mb3JtL3BhcmxpYW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQU4iLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XG4gICAgICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_parliaments_parliament-form_parliament-form_component_ts.js.map