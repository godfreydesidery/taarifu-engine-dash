"use strict";
(self["webpackChunktaarifu_engine_dash"] = self["webpackChunktaarifu_engine_dash"] || []).push([["src_app_features_auth_change-password_change-password_component_ts"],{

/***/ 6981:
/*!****************************************************************************!*\
  !*** ./src/app/features/auth/change-password/change-password.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/toast/toast.component */ 6029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_admin_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/admin-user.service */ 3565);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);











function ChangePasswordComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentUser.email);
  }
}
function ChangePasswordComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Current password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChangePasswordComponent_div_23_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.changePasswordForm.get("currentPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
function ChangePasswordComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "New password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password must be at least 12 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_32_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password must contain uppercase, lowercase, numbers, and special characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChangePasswordComponent_div_32_div_1_Template, 2, 0, "div", 43)(2, ChangePasswordComponent_div_32_div_2_Template, 2, 0, "div", 43)(3, ChangePasswordComponent_div_32_div_3_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.changePasswordForm.get("newPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.changePasswordForm.get("newPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.changePasswordForm.get("newPassword")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function ChangePasswordComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Please confirm your new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChangePasswordComponent_div_44_div_1_Template, 2, 0, "div", 43)(2, ChangePasswordComponent_div_44_div_2_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["mismatch"]);
  }
}
function ChangePasswordComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 44);
  }
}
function ChangePasswordComponent_i_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 45);
  }
}
class ChangePasswordComponent {
  constructor(fb, authService, adminUserService, toastService, router) {
    this.fb = fb;
    this.authService = authService;
    this.adminUserService = adminUserService;
    this.toastService = toastService;
    this.router = router;
    this.currentUser = null;
    this.isChangingPassword = false;
    this.changePasswordForm = this.createChangePasswordForm();
  }
  ngOnInit() {
    // Get current user information
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser) {
      console.error('No current user found');
      this.toastService.error('Error', 'User information not available');
      return;
    }
    // Check if password change is actually required
    if (!this.currentUser.requirePasswordChange) {
      console.log('Password change not required, redirecting to dashboard');
      // Redirect to dashboard if password change is not required
      window.location.href = '/dashboard';
      return;
    }
    console.log('Password change required for user:', this.currentUser.username);
  }
  createChangePasswordForm() {
    return this.fb.group({
      currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(12), this.strongPasswordValidator]],
      confirmNewPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  strongPasswordValidator(control) {
    const value = control.value;
    if (!value) return null;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(value);
    const valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;
    return valid ? null : {
      pattern: true
    };
  }
  passwordMatchValidator(group) {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmNewPassword')?.value;
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      group.get('confirmNewPassword')?.setErrors({
        mismatch: true
      });
      return {
        mismatch: true
      };
    } else {
      group.get('confirmNewPassword')?.setErrors(null);
      return null;
    }
  }
  onChangePasswordSubmit() {
    if (this.changePasswordForm.invalid || !this.currentUser) {
      this.markFormGroupTouched();
      return;
    }
    this.isChangingPassword = true;
    const formValue = this.changePasswordForm.value;
    const changePasswordRequest = {
      currentPassword: formValue.currentPassword,
      newPassword: formValue.newPassword,
      confirmPassword: formValue.confirmNewPassword
    };
    this.adminUserService.changeAdminUserPassword(this.currentUser.uid, changePasswordRequest).subscribe({
      next: response => {
        this.isChangingPassword = false;
        if (response.status) {
          this.toastService.success('Password Changed Successfully', 'Your password has been changed successfully. Please log in again with your new password.');
          // Logout user and redirect to login page for security
          setTimeout(() => {
            this.authService.logout();
            this.router.navigate(['/login']);
          }, 2000);
        }
      },
      error: error => {
        this.isChangingPassword = false;
        console.error('Error changing password:', error);
        console.error('Error structure:', JSON.stringify(error, null, 2));
        // Display specific error message from API
        // Try different possible paths for the error message
        let errorMessage = 'Failed to change password. Please try again.';
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.error?.data) {
          errorMessage = error.error.data;
        } else if (error.message) {
          errorMessage = error.message;
        }
        console.log('Displaying error toast with message:', errorMessage);
        this.toastService.error('Password Change Failed', errorMessage);
      }
    });
  }
  markFormGroupTouched() {
    Object.keys(this.changePasswordForm.controls).forEach(key => {
      const control = this.changePasswordForm.get(key);
      control?.markAsTouched();
    });
  }
  logout() {
    if (confirm('Are you sure you want to logout? You will need to login again.')) {
      this.authService.logout();
      this.toastService.info('Logged Out', 'You have been logged out successfully.');
      this.router.navigate(['/login']);
    }
  }
  static {
    this.ɵfac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_admin_user_service__WEBPACK_IMPORTED_MODULE_2__.AdminUserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 63,
      vars: 16,
      consts: [[1, "password-change-container"], [1, "container-fluid", "h-100"], [1, "row", "justify-content-center", "align-items-center", "min-vh-100"], [1, "col-12", "col-sm-10", "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "shadow-lg", "border-0", "password-change-card"], [1, "card-header", "bg-primary", "text-white", "text-center", "py-4"], [1, "mb-3"], [1, "bi", "bi-shield-exclamation", "display-4", "text-white"], [1, "mb-2", "fw-bold"], [1, "mb-0", "opacity-75"], [1, "card-body", "p-4"], ["class", "alert alert-info d-flex align-items-center mb-4", 4, "ngIf"], [3, "ngSubmit", "formGroup"], ["for", "currentPassword", 1, "form-label"], [1, "bi", "bi-lock", "me-2"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-key"], ["type", "password", "id", "currentPassword", "formControlName", "currentPassword", "placeholder", "Enter your current password", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "newPassword", 1, "form-label"], [1, "bi", "bi-lock-fill", "me-2"], [1, "bi", "bi-key-fill"], ["type", "password", "id", "newPassword", "formControlName", "newPassword", "placeholder", "Enter your new password", 1, "form-control"], [1, "form-text"], [1, "bi", "bi-info-circle", "me-1"], [1, "mb-4"], ["for", "confirmNewPassword", 1, "form-label"], [1, "bi", "bi-check-circle"], ["type", "password", "id", "confirmNewPassword", "formControlName", "confirmNewPassword", "placeholder", "Confirm your new password", 1, "form-control"], [1, "d-grid", "gap-2", "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["class", "bi bi-shield-check me-2", 4, "ngIf"], [1, "text-center"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-box-arrow-right", "me-2"], [1, "card-footer", "bg-light", "text-center", "py-3"], [1, "text-muted"], [1, "bi", "bi-question-circle", "me-1"], [1, "alert", "alert-info", "d-flex", "align-items-center", "mb-4"], [1, "bi", "bi-person-circle", "me-3", "fs-4"], [1, "invalid-feedback", "d-block"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-shield-check", "me-2"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Password Change Required");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "You must change your password before continuing");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ChangePasswordComponent_div_13_Template, 8, 2, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "form", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_14_listener() {
            return ctx.onChangePasswordSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 6)(16, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Current Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 15)(20, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ChangePasswordComponent_div_23_Template, 2, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 6)(25, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "New Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 15)(29, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ChangePasswordComponent_div_32_Template, 4, 3, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Password must be at least 12 characters with uppercase, lowercase, numbers, and special characters ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 26)(37, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Confirm New Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 15)(41, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, ChangePasswordComponent_div_44_Template, 3, 2, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 30)(46, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ChangePasswordComponent_span_47_Template, 1, 0, "span", 32)(48, ChangePasswordComponent_i_48_Template, 1, 0, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 34)(51, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_51_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " Logout & Use Different Account ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 37)(55, "small", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " This is a mandatory security requirement. You cannot access the system until you change your password. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "small", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " Can't remember your current password? You can logout and use a different account or contact your administrator. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "app-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_2_0 = ctx.changePasswordForm.get("currentPassword")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.changePasswordForm.get("currentPassword")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.changePasswordForm.get("currentPassword")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.changePasswordForm.get("currentPassword")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx.changePasswordForm.get("newPassword")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.changePasswordForm.get("newPassword")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.changePasswordForm.get("newPassword")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.changePasswordForm.get("newPassword")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.changePasswordForm.invalid || ctx.isChangingPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChangingPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isChangingPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isChangingPassword ? "Changing Password..." : "Change Password & Continue", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isChangingPassword);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_0__.ToastComponent],
      styles: [".password-change-container[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  min-height: 100vh;\n  padding: 2rem 0;\n}\n\n.password-change-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 0 0 !important;\n  border: none;\n}\n\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-size: 1.1rem;\n  border-radius: 8px;\n  font-weight: 600;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 12px 16px;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-radius: 8px 0 0 8px;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block !important;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n.alert-info[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  border-radius: 0 0 15px 15px !important;\n  border: none;\n}\n\n@media (max-width: 768px) {\n  .password-change-container[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  .display-4[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBQU47O0FBR0k7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7QUFBTjs7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQU47O0FBR0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQU47O0FBR0k7RUFDRSwwQkFBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxrQkFBQTtBQUFOOztBQUdJO0VBQ0UsdUNBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRTtJQUNFLGVBQUE7RUFBTjtFQUdJO0lBQ0UsaUJBQUE7RUFETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnBhc3N3b3JkLWNoYW5nZS1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgIH1cbiAgICBcbiAgICAucGFzc3dvcmQtY2hhbmdlLWNhcmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIFxuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5idG4tbGcge1xuICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XG4gICAgfVxuICAgIFxuICAgIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICB9XG4gICAgXG4gICAgLmFsZXJ0LWluZm8ge1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC1mb290ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5wYXNzd29yZC1jaGFuZ2UtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuZGlzcGxheS00IHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_auth_change-password_change-password_component_ts.js.map