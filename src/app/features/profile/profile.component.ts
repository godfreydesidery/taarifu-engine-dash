import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { AdminUserService } from '../../core/services/admin-user.service';
import { ToastService } from '../../core/services/toast.service';
import { Router } from '@angular/router';
import { User } from '../../core/models/auth.model';
import { ChangeAdminUserPasswordRequest, PasswordStrength, ValidatePasswordRequest, PasswordValidationData } from '../../core/models/admin-user.model';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">User Profile</h1>
          <p class="text-muted">Manage your account settings and preferences</p>
        </div>
      </div>

      <div class="row">
        <!-- Profile Information -->
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-person-circle me-2"></i>
                Profile Information
              </h5>
            </div>
            <div class="card-body">
              <div *ngIf="currentUser" class="row">
                <div class="col-md-3 text-center">
                  <div class="profile-avatar mb-3">
                    <div class="avatar-lg bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto">
                      {{ currentUser.username.charAt(0).toUpperCase() }}
                    </div>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Username</label>
                      <div class="form-control-plaintext">{{ currentUser.username }}</div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Email</label>
                      <div class="form-control-plaintext">{{ currentUser.email }}</div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">User Type</label>
                      <div class="form-control-plaintext">
                        <span class="badge bg-info">{{ currentUser.userType }}</span>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Status</label>
                      <div class="form-control-plaintext">
                        <span class="badge" 
                              [class.bg-success]="currentUser.status === 'ACTIVE'" 
                              [class.bg-warning]="currentUser.status === 'INACTIVE'" 
                              [class.bg-danger]="currentUser.status === 'SUSPENDED'">
                          {{ currentUser.status }}
                        </span>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Password Strength</label>
                      <div class="form-control-plaintext">
                        <span class="badge" 
                              [class.bg-success]="currentUser.passwordStrength === 'STRONG'" 
                              [class.bg-info]="currentUser.passwordStrength === 'GOOD'"
                              [class.bg-warning]="currentUser.passwordStrength === 'FAIR'" 
                              [class.bg-danger]="currentUser.passwordStrength === 'WEAK'">
                          {{ currentUser.passwordStrength }}
                        </span>
                        <span *ngIf="currentUser.requirePasswordChange" class="badge bg-warning ms-2" title="Password change required">
                          <i class="bi bi-exclamation-triangle"></i>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Last Login</label>
                      <div class="form-control-plaintext">
                        {{ currentUser.lastLoginAt ? (currentUser.lastLoginAt | date:'short') : 'Never' }}
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Member Since</label>
                      <div class="form-control-plaintext">{{ currentUser.createdAt | date:'short' }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Change Password -->
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-key me-2"></i>
                Change Password
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="changePasswordForm" (ngSubmit)="onChangePasswordSubmit()">
                <div class="mb-3">
                  <label for="currentPassword" class="form-label">Current Password</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="currentPassword"
                    formControlName="currentPassword"
                    [class.is-invalid]="changePasswordForm.get('currentPassword')?.invalid && changePasswordForm.get('currentPassword')?.touched"
                    placeholder="Enter current password">
                  <div *ngIf="changePasswordForm.get('currentPassword')?.invalid && changePasswordForm.get('currentPassword')?.touched" class="invalid-feedback">
                    <div *ngIf="changePasswordForm.get('currentPassword')?.errors?.['required']">Current password is required</div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="newPassword" class="form-label">New Password</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="newPassword"
                    formControlName="newPassword"
                    [class.is-invalid]="(changePasswordForm.get('newPassword')?.invalid && changePasswordForm.get('newPassword')?.touched) || (passwordValidation && !isPasswordValid())"
                    [class.is-valid]="passwordValidation && isPasswordValid()"
                    placeholder="Enter new password">
                  
                  <!-- Loading indicator -->
                  <div *ngIf="isValidatingPassword" class="form-text">
                    <span class="spinner-border spinner-border-sm me-1" role="status"></span>
                    Validating password...
                  </div>
                  
                  <!-- Password strength indicator -->
                  <div *ngIf="passwordValidation && !isValidatingPassword" class="mt-2">
                    <div class="d-flex align-items-center mb-2">
                      <span class="badge me-2" 
                            [style.background-color]="getPasswordStrengthColor()"
                            [style.color]="'white'">
                        {{ passwordValidation.strength }}
                      </span>
                      <span *ngIf="isPasswordValid()" class="text-success">
                        <i class="bi bi-check-circle me-1"></i>Password meets requirements
                      </span>
                      <span *ngIf="!isPasswordValid()" class="text-danger">
                        <i class="bi bi-x-circle me-1"></i>Password must be STRONG for admin accounts
                      </span>
                    </div>
                    
                    <!-- Password requirement messages -->
                    <div *ngIf="passwordValidation.messages && passwordValidation.messages.length > 0" class="mt-2">
                      <small class="text-muted d-block mb-1">Requirements:</small>
                      <ul class="list-unstyled mb-0" style="font-size: 0.875rem;">
                        <li *ngFor="let message of passwordValidation.messages" 
                            [class.text-danger]="!isPasswordValid()"
                            [class.text-success]="isPasswordValid()">
                          <i class="bi me-1" 
                             [class.bi-x-circle]="!isPasswordValid()" 
                             [class.bi-check-circle]="isPasswordValid()"
                             [class.text-danger]="!isPasswordValid()"
                             [class.text-success]="isPasswordValid()"></i>
                          {{ message }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <!-- Form validation errors -->
                  <div *ngIf="changePasswordForm.get('newPassword')?.invalid && changePasswordForm.get('newPassword')?.touched" class="invalid-feedback">
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['required']">New password is required</div>
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['minlength']">Password must be at least 12 characters</div>
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['pattern']">Password must contain uppercase, lowercase, numbers, and special characters</div>
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['apiValidation']">Password does not meet admin password requirements</div>
                  </div>
                  <div class="form-text">Minimum 12 characters with uppercase, lowercase, numbers, and special characters</div>
                </div>

                <div class="mb-3">
                  <label for="confirmNewPassword" class="form-label">Confirm New Password</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="confirmNewPassword"
                    formControlName="confirmNewPassword"
                    [class.is-invalid]="changePasswordForm.get('confirmNewPassword')?.invalid && changePasswordForm.get('confirmNewPassword')?.touched"
                    placeholder="Confirm new password">
                  <div *ngIf="changePasswordForm.get('confirmNewPassword')?.invalid && changePasswordForm.get('confirmNewPassword')?.touched" class="invalid-feedback">
                    <div *ngIf="changePasswordForm.get('confirmNewPassword')?.errors?.['required']">Please confirm your new password</div>
                    <div *ngIf="changePasswordForm.get('confirmNewPassword')?.errors?.['mismatch']">Passwords do not match</div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  class="btn btn-primary w-100" 
                  [disabled]="changePasswordForm.invalid || isChangingPassword">
                  <span *ngIf="isChangingPassword" class="spinner-border spinner-border-sm me-2" role="status"></span>
                  <i *ngIf="!isChangingPassword" class="bi bi-key me-1"></i>
                  {{ isChangingPassword ? 'Changing...' : 'Change Password' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container-fluid {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .profile-avatar .avatar-lg {
      width: 100px;
      height: 100px;
      font-size: 2.5rem;
      font-weight: 600;
    }

    .form-control-plaintext {
      padding: 0.375rem 0;
      margin-bottom: 0;
      line-height: 1.5;
      color: #495057;
      background-color: transparent;
      border: solid transparent;
      border-width: 1px 0;
    }

    .badge {
      font-size: 0.875em;
      font-weight: 600;
      padding: 0.35em 0.65em;
    }

    .list-unstyled li {
      margin-bottom: 0.25rem;
    }

    .spinner-border-sm {
      width: 1rem;
      height: 1rem;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .container-fluid {
        padding: 0 0.5rem;
      }

      .profile-avatar {
        margin-bottom: 1rem !important;
      }

      .profile-avatar .avatar-lg {
        width: 80px;
        height: 80px;
        font-size: 2rem;
      }
    }
  `]
})
export class ProfileComponent implements OnInit, OnDestroy {
  changePasswordForm: FormGroup;
  currentUser: User | null = null;
  isChangingPassword = false;

  // Password validation properties
  passwordValidation: PasswordValidationData | null = null;
  isValidatingPassword = false;
  private passwordValidationSubscription?: Subscription;
  
  // Password strength colors
  passwordStrengthColors: { [key in PasswordStrength]: string } = {
    WEAK: '#DC2626',
    FAIR: '#F59E0B',
    GOOD: '#10B981',
    STRONG: '#059669'
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private adminUserService: AdminUserService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.changePasswordForm = this.createChangePasswordForm();
  }

  ngOnInit() {
    console.log('ProfileComponent initialized - Profile page loaded successfully!');
    
    // Get current user information
    this.currentUser = this.authService.getCurrentUser();
    console.log('Current user:', this.currentUser);
    
    if (!this.currentUser) {
      console.error('No current user found');
      this.toastService.error('Error', 'User information not available');
      return;
    }
    
    console.log('Profile component loaded with user:', this.currentUser.username);

    // Set up API-based password validation
    const newPasswordControl = this.changePasswordForm.get('newPassword');
    if (newPasswordControl) {
      this.passwordValidationSubscription = newPasswordControl.valueChanges.pipe(
        debounceTime(500), // Wait 500ms after user stops typing
        distinctUntilChanged(), // Only validate if value changed
        switchMap((password: string) => {
          if (!password || password.trim() === '') {
            this.passwordValidation = null;
            this.isValidatingPassword = false;
            return of(null);
          }
          
          this.isValidatingPassword = true;
          const request: ValidatePasswordRequest = {
            password: password,
            isAdminPassword: true
          };
          
          return this.adminUserService.validatePassword(request).pipe(
            catchError((error) => {
              console.error('Password validation error:', error);
              this.isValidatingPassword = false;
              return of(null);
            })
          );
        })
      ).subscribe((response) => {
        this.isValidatingPassword = false;
        if (response && response.success) {
          this.passwordValidation = response.data;
          
          // Update form control validity - admin passwords must be STRONG
          if (this.passwordValidation.strength !== PasswordStrength.STRONG || !this.passwordValidation.isValid) {
            newPasswordControl.setErrors({ 
              ...newPasswordControl.errors,
              apiValidation: true 
            });
          } else {
            // Remove apiValidation error if present
            const errors = { ...newPasswordControl.errors };
            delete errors['apiValidation'];
            newPasswordControl.setErrors(Object.keys(errors).length > 0 ? errors : null);
          }
        } else {
          this.passwordValidation = null;
        }
      });
    }
  }

  ngOnDestroy() {
    // Clean up subscription to prevent memory leaks
    if (this.passwordValidationSubscription) {
      this.passwordValidationSubscription.unsubscribe();
    }
  }

  // Helper method to get password strength color
  getPasswordStrengthColor(): string {
    if (!this.passwordValidation) return '';
    return this.passwordStrengthColors[this.passwordValidation.strength] || '';
  }

  // Helper method to check if password is valid
  isPasswordValid(): boolean {
    return this.passwordValidation?.isValid === true && 
           this.passwordValidation?.strength === PasswordStrength.STRONG;
  }

  private createChangePasswordForm(): FormGroup {
    return this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [
        Validators.required,
        Validators.minLength(12),
        this.strongPasswordValidator
      ]],
      confirmNewPassword: ['', [
        Validators.required,
        this.passwordMatchValidator
      ]]
    });
  }

  private strongPasswordValidator(control: any) {
    if (!control.value) return null;
    
    const password = control.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar) {
      return null;
    } else {
      return { pattern: true };
    }
  }

  private passwordMatchValidator(control: any) {
    if (!control.value) return null;
    
    const newPassword = control.parent?.get('newPassword')?.value;
    const confirmPassword = control.value;
    
    if (newPassword === confirmPassword) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  onChangePasswordSubmit() {
    if (this.changePasswordForm.invalid || !this.currentUser) {
      this.markFormGroupTouched();
      return;
    }

    this.isChangingPassword = true;

    const formValue = this.changePasswordForm.value;
    const changePasswordRequest: ChangeAdminUserPasswordRequest = {
      currentPassword: formValue.currentPassword,
      newPassword: formValue.newPassword,
      confirmPassword: formValue.confirmNewPassword
    };

    this.adminUserService.changeAdminUserPassword(this.currentUser.uid, changePasswordRequest).subscribe({
      next: (response) => {
        this.isChangingPassword = false;
        if (response.status) {
          this.toastService.success('Password Changed Successfully', 'Your password has been changed successfully. Please log in again with your new password.');
          this.changePasswordForm.reset();
          
          // Logout user and redirect to login page for security
          setTimeout(() => {
            this.authService.logout();
            this.router.navigate(['/login']);
          }, 2000);
        }
      },
        error: (error) => {
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

  private markFormGroupTouched() {
    Object.keys(this.changePasswordForm.controls).forEach(key => {
      const control = this.changePasswordForm.get(key);
      control?.markAsTouched();
    });
  }
}
