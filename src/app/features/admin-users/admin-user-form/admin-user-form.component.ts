import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminUserResponse, CreateAdminUserRequest, UpdateAdminUserRequest } from '../../../core/models/admin-user.model';
import { AdminUserService } from '../../../core/services/admin-user.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-admin-user-form',
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
          <h1 class="h3 mb-1">{{ isEditMode ? 'Edit Admin User' : 'Create Admin User' }}</h1>
          <p class="text-muted">{{ isEditMode ? 'Update admin user information' : 'Create a new system administrator account' }}</p>
        </div>
        <a routerLink="/admin-users" class="btn btn-outline-secondary">
          <i class="bi bi-arrow-left me-1"></i>
          Back to Admin Users
        </a>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-person-gear me-2"></i>
                {{ isEditMode ? 'Edit Admin User' : 'Create Admin User' }}
              </h5>
            </div>
            <div class="card-body">
              <form [formGroup]="adminUserForm" (ngSubmit)="onSubmit()">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="username" class="form-label">Username <span class="text-danger">*</span></label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="username"
                        formControlName="username"
                        [class.is-invalid]="adminUserForm.get('username')?.invalid && adminUserForm.get('username')?.touched"
                        placeholder="Enter username">
                      <div *ngIf="adminUserForm.get('username')?.invalid && adminUserForm.get('username')?.touched" class="invalid-feedback">
                        <div *ngIf="adminUserForm.get('username')?.errors?.['required']">Username is required</div>
                        <div *ngIf="adminUserForm.get('username')?.errors?.['minlength']">Username must be at least 3 characters</div>
                        <div *ngIf="adminUserForm.get('username')?.errors?.['maxlength']">Username must not exceed 50 characters</div>
                        <div *ngIf="adminUserForm.get('username')?.errors?.['pattern']">Username can only contain letters, numbers, and underscores</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="email" class="form-label">Email Address <span class="text-danger">*</span></label>
                      <input 
                        type="email" 
                        class="form-control" 
                        id="email"
                        formControlName="email"
                        [class.is-invalid]="adminUserForm.get('email')?.invalid && adminUserForm.get('email')?.touched"
                        placeholder="Enter email address">
                      <div *ngIf="adminUserForm.get('email')?.invalid && adminUserForm.get('email')?.touched" class="invalid-feedback">
                        <div *ngIf="adminUserForm.get('email')?.errors?.['required']">Email is required</div>
                        <div *ngIf="adminUserForm.get('email')?.errors?.['email']">Please enter a valid email address</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Password fields only shown in edit mode -->
                <div class="row" *ngIf="isEditMode">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="password" class="form-label">
                        New Password
                        <small class="text-muted">(Leave blank to keep current password)</small>
                      </label>
                      <input 
                        type="password" 
                        class="form-control" 
                        id="password"
                        formControlName="password"
                        [class.is-invalid]="adminUserForm.get('password')?.invalid && adminUserForm.get('password')?.touched"
                        placeholder="Enter new password">
                      <div *ngIf="adminUserForm.get('password')?.invalid && adminUserForm.get('password')?.touched" class="invalid-feedback">
                        <div *ngIf="adminUserForm.get('password')?.errors?.['minlength']">Password must be at least 12 characters</div>
                        <div *ngIf="adminUserForm.get('password')?.errors?.['pattern']">Password must contain uppercase, lowercase, numbers, and special characters</div>
                      </div>
                      <div class="form-text">
                        Leave password field empty to keep the current password unchanged.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="confirmPassword" class="form-label">Confirm New Password</label>
                      <input 
                        type="password" 
                        class="form-control" 
                        id="confirmPassword"
                        formControlName="confirmPassword"
                        [class.is-invalid]="adminUserForm.get('confirmPassword')?.invalid && adminUserForm.get('confirmPassword')?.touched"
                        placeholder="Confirm new password">
                      <div *ngIf="adminUserForm.get('confirmPassword')?.invalid && adminUserForm.get('confirmPassword')?.touched" class="invalid-feedback">
                        <div *ngIf="adminUserForm.get('confirmPassword')?.errors?.['mismatch']">Passwords do not match</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Info message for create mode -->
                <div class="row" *ngIf="!isEditMode">
                  <div class="col-12">
                    <div class="alert alert-info">
                      <i class="bi bi-info-circle me-2"></i>
                      <strong>Password Information:</strong> A secure password will be automatically generated for the new admin user and sent to their email address.
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="status" class="form-label">Status</label>
                      <select class="form-select" id="status" formControlName="status">
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                        <option value="SUSPENDED">Suspended</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Admin User Info (Edit Mode Only) -->
                <div *ngIf="isEditMode && currentAdminUser" class="row">
                  <div class="col-12">
                    <hr>
                    <h6 class="text-muted mb-3">Account Information</h6>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label class="form-label">User Type</label>
                          <input type="text" class="form-control" [value]="currentAdminUser.userType" readonly>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label class="form-label">Password Strength</label>
                          <input type="text" class="form-control" [value]="currentAdminUser.passwordStrength" readonly>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="mb-3">
                          <label class="form-label">Last Login</label>
                          <input type="text" class="form-control" 
                                 [value]="currentAdminUser.lastLoginAt ? (currentAdminUser.lastLoginAt | date:'short') : 'Never'" readonly>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Created At</label>
                          <input type="text" class="form-control" [value]="currentAdminUser.createdAt | date:'short'" readonly>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Updated At</label>
                          <input type="text" class="form-control" [value]="currentAdminUser.updatedAt | date:'short'" readonly>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-end gap-2">
                  <a routerLink="/admin-users" class="btn btn-outline-secondary">Cancel</a>
                  <button type="submit" class="btn btn-primary" [disabled]="adminUserForm.invalid || isSubmitting">
                    <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    <i *ngIf="!isSubmitting" class="bi" [class.bi-check-circle]="!isEditMode" [class.bi-pencil]="isEditMode" me-1></i>
                    {{ isSubmitting ? 'Saving...' : (isEditMode ? 'Update Admin User' : 'Create Admin User') }}
                  </button>
                </div>
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

    .form-label {
      font-weight: 600;
      color: #495057;
    }

    .form-control:focus,
    .form-select:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    .btn-primary {
      background-color: #007bff;
      border-color: #007bff;
    }

    .btn-primary:hover {
      background-color: #0056b3;
      border-color: #004085;
    }

    .text-danger {
      color: #dc3545 !important;
    }

    .text-muted {
      color: #6c757d !important;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .container-fluid {
        padding: 0 0.5rem;
      }

      .card-body {
        padding: 1rem;
      }

      .d-flex.justify-content-end.gap-2 {
        flex-direction: column;
        gap: 0.5rem !important;
      }

      .d-flex.justify-content-end.gap-2 .btn {
        width: 100%;
      }
    }
  `]
})
export class AdminUserFormComponent implements OnInit {
  adminUserForm: FormGroup;
  isEditMode = false;
  isSubmitting = false;
  currentAdminUser: AdminUserResponse | null = null;
  adminUserUid: string | null = null;

  constructor(
    private fb: FormBuilder,
    private adminUserService: AdminUserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.adminUserForm = this.createForm();
  }

  ngOnInit() {
    console.log('AdminUserFormComponent initialized');
    
    // Check if we're in edit mode
    this.adminUserUid = this.route.snapshot.paramMap.get('uid');
    this.isEditMode = !!this.adminUserUid;

    if (this.isEditMode) {
      // For edit mode, set up password validation
      this.adminUserForm.get('password')?.setValidators([
        Validators.minLength(12),
        this.strongPasswordValidator
      ]);
      this.adminUserForm.get('confirmPassword')?.setValidators([
        this.passwordMatchValidator
      ]);
      this.adminUserForm.get('password')?.updateValueAndValidity();
      this.adminUserForm.get('confirmPassword')?.updateValueAndValidity();
      
      this.loadAdminUser();
    } else {
      // For create mode, no password fields are needed - password will be auto-generated
      // Remove password and confirmPassword from form for create mode
      this.adminUserForm.removeControl('password');
      this.adminUserForm.removeControl('confirmPassword');
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern(/^[a-zA-Z0-9_]+$/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        // Password validators will be set conditionally in ngOnInit
      ]],
      confirmPassword: ['', [
        // Confirm password validators will be set conditionally in ngOnInit
      ]],
      status: ['ACTIVE']
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
    
    const password = control.parent?.get('password')?.value;
    const confirmPassword = control.value;
    
    if (password === confirmPassword) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  loadAdminUser() {
    if (!this.adminUserUid) return;

    this.adminUserService.getAdminUserByUid(this.adminUserUid).subscribe({
      next: (response) => {
        if (response.status) {
          this.currentAdminUser = response.data;
          this.populateForm();
        }
      },
      error: (error) => {
        console.error('Error loading admin user:', error);
        this.toastService.error('Error Loading Admin User', 'Failed to load admin user details');
        this.router.navigate(['/admin-users']);
      }
    });
  }

  populateForm() {
    if (!this.currentAdminUser) return;

    this.adminUserForm.patchValue({
      username: this.currentAdminUser.username,
      email: this.currentAdminUser.email,
      status: this.currentAdminUser.status
      // Password fields are left empty for edit mode
    });
  }

  onSubmit() {
    if (this.adminUserForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isSubmitting = true;

    if (this.isEditMode) {
      this.updateAdminUser();
    } else {
      this.createAdminUser();
    }
  }

  private createAdminUser() {
    const formValue = this.adminUserForm.value;
    const createRequest: CreateAdminUserRequest = {
      username: formValue.username,
      email: formValue.email,
      status: formValue.status
    };

    this.adminUserService.createAdminUser(createRequest).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.status) {
          this.toastService.success('Admin User Created', `Admin user ${formValue.username} has been created successfully. A secure password has been generated and sent to their email address.`);
          this.router.navigate(['/admin-users']);
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Error creating admin user:', error);
        this.toastService.error('Error Creating Admin User', error.error?.message || 'Failed to create admin user');
      }
    });
  }

  private updateAdminUser() {
    if (!this.adminUserUid) return;

    const formValue = this.adminUserForm.value;
    const updateRequest: UpdateAdminUserRequest = {
      username: formValue.username,
      email: formValue.email,
      status: formValue.status
    };

    // Only include password if it's provided
    if (formValue.password && formValue.password.trim() !== '') {
      updateRequest.password = formValue.password;
    }

    this.adminUserService.updateAdminUser(this.adminUserUid, updateRequest).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.status) {
          this.toastService.success('Admin User Updated', `Admin user ${formValue.username} has been updated successfully`);
          this.router.navigate(['/admin-users']);
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Error updating admin user:', error);
        this.toastService.error('Error Updating Admin User', error.error?.message || 'Failed to update admin user');
      }
    });
  }

  private markFormGroupTouched() {
    Object.keys(this.adminUserForm.controls).forEach(key => {
      const control = this.adminUserForm.get(key);
      control?.markAsTouched();
    });
  }
}
