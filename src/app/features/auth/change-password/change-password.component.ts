import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { AdminUserService } from '../../../core/services/admin-user.service';
import { ToastService } from '../../../core/services/toast.service';
import { Router } from '@angular/router';
import { ToastComponent } from '../../../shared/components/toast/toast.component';
import { User } from '../../../core/models/auth.model';
import { ChangeAdminUserPasswordRequest, PasswordStrength, ValidatePasswordRequest, PasswordValidationData } from '../../../core/models/admin-user.model';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastComponent
  ],
  template: `
    <div class="password-change-container">
      <div class="container-fluid h-100">
        <div class="row justify-content-center align-items-center min-vh-100">
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-lg border-0 password-change-card">
              <div class="card-header bg-primary text-white text-center py-4">
                <div class="mb-3">
                  <i class="bi bi-shield-exclamation display-4 text-white"></i>
                </div>
                <h3 class="mb-2 fw-bold">Password Change Required</h3>
                <p class="mb-0 opacity-75">You must change your password before continuing</p>
              </div>
            
            <div class="card-body p-4">
              <!-- User Information -->
              <div class="alert alert-info d-flex align-items-center mb-4" *ngIf="currentUser">
                <i class="bi bi-person-circle me-3 fs-4"></i>
                <div>
                  <strong>{{ currentUser.username }}</strong><br>
                  <small class="text-muted">{{ currentUser.email }}</small>
                </div>
              </div>

              <!-- Password Change Form -->
              <form [formGroup]="changePasswordForm" (ngSubmit)="onChangePasswordSubmit()">
                <!-- Current Password -->
                <div class="mb-3">
                  <label for="currentPassword" class="form-label">
                    <i class="bi bi-lock me-2"></i>Current Password
                  </label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="bi bi-key"></i>
                    </span>
                    <input 
                      type="password" 
                      class="form-control" 
                      id="currentPassword"
                      formControlName="currentPassword" 
                      placeholder="Enter your current password"
                      [class.is-invalid]="changePasswordForm.get('currentPassword')?.invalid && changePasswordForm.get('currentPassword')?.touched">
                  </div>
                  <div *ngIf="changePasswordForm.get('currentPassword')?.invalid && changePasswordForm.get('currentPassword')?.touched" class="invalid-feedback d-block">
                    <div *ngIf="changePasswordForm.get('currentPassword')?.errors?.['required']">Current password is required</div>
                  </div>
                </div>

                <!-- New Password -->
                <div class="mb-3">
                  <label for="newPassword" class="form-label">
                    <i class="bi bi-lock-fill me-2"></i>New Password
                  </label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="bi bi-key-fill"></i>
                    </span>
                    <input 
                      type="password" 
                      class="form-control" 
                      id="newPassword"
                      formControlName="newPassword" 
                      placeholder="Enter your new password"
                      [class.is-invalid]="(changePasswordForm.get('newPassword')?.invalid && changePasswordForm.get('newPassword')?.touched) || (passwordValidation && !isPasswordValid())"
                      [class.is-valid]="passwordValidation && isPasswordValid()">
                  </div>
                  
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
                  <div *ngIf="changePasswordForm.get('newPassword')?.invalid && changePasswordForm.get('newPassword')?.touched" class="invalid-feedback d-block">
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['required']">New password is required</div>
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['minlength']">Password must be at least 12 characters</div>
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['pattern']">Password must contain uppercase, lowercase, numbers, and special characters</div>
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['apiValidation']">Password does not meet admin password requirements</div>
                  </div>
                  <div class="form-text">
                    <i class="bi bi-info-circle me-1"></i>
                    Password must be at least 12 characters with uppercase, lowercase, numbers, and special characters
                  </div>
                </div>

                <!-- Confirm New Password -->
                <div class="mb-4">
                  <label for="confirmNewPassword" class="form-label">
                    <i class="bi bi-lock-fill me-2"></i>Confirm New Password
                  </label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="bi bi-check-circle"></i>
                    </span>
                    <input 
                      type="password" 
                      class="form-control" 
                      id="confirmNewPassword"
                      formControlName="confirmNewPassword" 
                      placeholder="Confirm your new password"
                      [class.is-invalid]="changePasswordForm.get('confirmNewPassword')?.invalid && changePasswordForm.get('confirmNewPassword')?.touched">
                  </div>
                  <div *ngIf="changePasswordForm.get('confirmNewPassword')?.invalid && changePasswordForm.get('confirmNewPassword')?.touched" class="invalid-feedback d-block">
                    <div *ngIf="changePasswordForm.get('confirmNewPassword')?.errors?.['required']">Please confirm your new password</div>
                    <div *ngIf="changePasswordForm.get('confirmNewPassword')?.errors?.['mismatch']">Passwords do not match</div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="d-grid gap-2 mb-3">
                  <button 
                    type="submit" 
                    class="btn btn-primary btn-lg"
                    [disabled]="changePasswordForm.invalid || isChangingPassword">
                    <span *ngIf="isChangingPassword" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    <i *ngIf="!isChangingPassword" class="bi bi-shield-check me-2"></i>
                    {{ isChangingPassword ? 'Changing Password...' : 'Change Password & Continue' }}
                  </button>
                </div>

                <!-- Logout Button -->
                <div class="text-center">
                  <button 
                    type="button" 
                    class="btn btn-outline-secondary"
                    (click)="logout()"
                    [disabled]="isChangingPassword">
                    <i class="bi bi-box-arrow-right me-2"></i>
                    Logout & Use Different Account
                  </button>
                </div>
              </form>
            </div>
            
            <div class="card-footer bg-light text-center py-3">
              <small class="text-muted">
                <i class="bi bi-info-circle me-1"></i>
                This is a mandatory security requirement. You cannot access the system until you change your password.
              </small>
              <br>
              <small class="text-muted">
                <i class="bi bi-question-circle me-1"></i>
                Can't remember your current password? You can logout and use a different account or contact your administrator.
              </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Toast Notifications -->
      <app-toast></app-toast>
    </div>
  `,
  styles: [`
    .password-change-container {
      background-color: #f8f9fa;
      min-height: 100vh;
      padding: 2rem 0;
    }
    
    .password-change-card {
      border-radius: 15px;
      overflow: hidden;
    }
    
    .card-header {
      border-radius: 15px 15px 0 0 !important;
      border: none;
    }
    
    .btn-lg {
      padding: 12px 24px;
      font-size: 1.1rem;
      border-radius: 8px;
      font-weight: 600;
    }
    
    .form-control {
      border-radius: 8px;
      padding: 12px 16px;
    }
    
    .input-group-text {
      border-radius: 8px 0 0 8px;
    }
    
    .invalid-feedback {
      display: block !important;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    
    .alert-info {
      border-radius: 8px;
    }
    
    .card-footer {
      border-radius: 0 0 15px 15px !important;
      border: none;
    }

    .badge {
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
    
    @media (max-width: 768px) {
      .password-change-container {
        padding: 1rem 0;
      }
      
      .display-4 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
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
      confirmNewPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  private strongPasswordValidator(control: any) {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(value);

    const valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;
    return valid ? null : { pattern: true };
  }

  private passwordMatchValidator(group: FormGroup) {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmNewPassword')?.value;
    
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      group.get('confirmNewPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
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
    
    const changePasswordRequest: ChangeAdminUserPasswordRequest = {
      currentPassword: formValue.currentPassword,
      newPassword: formValue.newPassword,
      confirmPassword: formValue.confirmNewPassword
    };

    this.adminUserService.changeAdminUserPassword(this.currentUser.uid, changePasswordRequest).subscribe({
      next: (response: any) => {
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
      error: (error: any) => {
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

  logout() {
    if (confirm('Are you sure you want to logout? You will need to login again.')) {
      this.authService.logout();
      this.toastService.info('Logged Out', 'You have been logged out successfully.');
      this.router.navigate(['/login']);
    }
  }
}
