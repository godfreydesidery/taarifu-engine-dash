import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { AdminUserService } from '../../core/services/admin-user.service';
import { ToastService } from '../../core/services/toast.service';
import { Router } from '@angular/router';
import { User } from '../../core/models/auth.model';
import { ChangeAdminUserPasswordRequest } from '../../core/models/admin-user.model';

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
                              [class.bg-warning]="currentUser.passwordStrength === 'MEDIUM'" 
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
                    [class.is-invalid]="changePasswordForm.get('newPassword')?.invalid && changePasswordForm.get('newPassword')?.touched"
                    placeholder="Enter new password">
                  <div *ngIf="changePasswordForm.get('newPassword')?.invalid && changePasswordForm.get('newPassword')?.touched" class="invalid-feedback">
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['required']">New password is required</div>
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['minlength']">Password must be at least 12 characters</div>
                    <div *ngIf="changePasswordForm.get('newPassword')?.errors?.['pattern']">Password must contain uppercase, lowercase, numbers, and special characters</div>
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
export class ProfileComponent implements OnInit {
  changePasswordForm: FormGroup;
  currentUser: User | null = null;
  isChangingPassword = false;

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
