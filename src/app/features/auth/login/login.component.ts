import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { ToastComponent } from '../../../shared/components/toast/toast.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastComponent
  ],
  template: `
    <div class="login-container">
      <div class="card login-card">
        <div class="card-header text-center">
          <h4 class="card-title mb-1">Taarifu Engine Login</h4>
          <small class="text-muted">Administration Portal</small>
        </div>
        
        <div class="card-body">
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-person"></i></span>
                <input 
                  type="text" 
                  class="form-control" 
                  id="username"
                  formControlName="username" 
                  autocomplete="username"
                  [class.is-invalid]="loginForm.get('username')?.invalid && loginForm.get('username')?.touched">
                <div class="invalid-feedback" *ngIf="loginForm.get('username')?.hasError('required')">
                  Username is required
                </div>
              </div>
            </div>
            
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-lock"></i></span>
                <input 
                  [type]="hidePassword ? 'password' : 'text'" 
                  class="form-control" 
                  id="password"
                  formControlName="password" 
                  autocomplete="current-password"
                  [class.is-invalid]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
                <button 
                  class="btn btn-outline-secondary" 
                  type="button" 
                  (click)="hidePassword = !hidePassword">
                  <i class="bi" [class.bi-eye]="!hidePassword" [class.bi-eye-slash]="hidePassword"></i>
                </button>
                <div class="invalid-feedback" *ngIf="loginForm.get('password')?.hasError('required')">
                  Password is required
                </div>
              </div>
            </div>
            
            <button 
              type="submit" 
              class="btn btn-primary w-100" 
              [disabled]="loginForm.invalid || isLoading">
              <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
              {{ isLoading ? 'Logging in...' : 'Login' }}
            </button>
            
            <div class="text-center mt-3">
              <button 
                type="button" 
                class="btn btn-link text-decoration-none" 
                (click)="showForgotPassword = !showForgotPassword">
                <i class="bi bi-key me-1"></i>
                Forgot Password?
              </button>
            </div>
          </form>

          <!-- Forgot Password Form -->
          <div *ngIf="showForgotPassword" class="mt-4 p-3 border rounded">
            <h6 class="mb-3">
              <i class="bi bi-key me-2"></i>
              Reset Password
            </h6>
            <form [formGroup]="forgotPasswordForm" (ngSubmit)="onForgotPasswordSubmit()">
              <div class="mb-3">
                <label for="resetEmail" class="form-label">Email Address</label>
                <div class="input-group">
                  <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="resetEmail"
                    formControlName="email" 
                    placeholder="Enter your email address"
                    [class.is-invalid]="forgotPasswordForm.get('email')?.invalid && forgotPasswordForm.get('email')?.touched">
                  <div class="invalid-feedback" *ngIf="forgotPasswordForm.get('email')?.hasError('required')">
                    Email is required
                  </div>
                  <div class="invalid-feedback" *ngIf="forgotPasswordForm.get('email')?.hasError('email')">
                    Please enter a valid email address
                  </div>
                </div>
              </div>
              
              <div class="d-flex gap-2">
                <button 
                  type="submit" 
                  class="btn btn-warning flex-fill" 
                  [disabled]="forgotPasswordForm.invalid || isResettingPassword">
                  <span *ngIf="isResettingPassword" class="spinner-border spinner-border-sm me-2" role="status"></span>
                  <i *ngIf="!isResettingPassword" class="bi bi-send me-1"></i>
                  {{ isResettingPassword ? 'Sending...' : 'Send Reset Link' }}
                </button>
                <button 
                  type="button" 
                  class="btn btn-outline-secondary" 
                  (click)="showForgotPassword = false">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Toast Notifications -->
      <app-toast></app-toast>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #e9ecef;
      padding: 1rem;
    }

    .login-card {
      width: 100%;
      max-width: 400px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 1rem;
    }

    .card-header {
      background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
      color: white;
      border-radius: 1rem 1rem 0 0 !important;
      border: none;
    }

    .card-title {
      color: white;
      font-weight: 600;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  hidePassword = true;
  isLoading = false;
  isResettingPassword = false;
  showForgotPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    
    // Clear any existing invalid tokens on login page load
    console.log('Login page loaded - clearing any existing tokens');
    this.authService.logout();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const credentials = {
        usernameOrEmail: this.loginForm.value.username,
        password: this.loginForm.value.password,
        rememberMe: false
      };
      
      this.authService.login(credentials).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.status) {
            // Check if password change is required
            const currentUser = this.authService.getCurrentUser();
            if (currentUser && currentUser.requirePasswordChange) {
              this.toastService.warning('Password Change Required', 'You must change your password before continuing.');
              this.router.navigate(['/change-password']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Login error:', error);
          
          // Show error toast notification
          this.toastService.error(
            'Login Failed',
            error.error?.message || 'Please check your credentials and try again.'
          );
        }
      });
    }
  }

  onForgotPasswordSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.isResettingPassword = true;
      const email = this.forgotPasswordForm.value.email;
      
      this.authService.forgotPassword(email).subscribe({
        next: (response) => {
          this.isResettingPassword = false;
          this.toastService.success(
            'Reset Link Sent', 
            'If an account with this email exists, a password reset link has been sent to your email address.'
          );
          this.showForgotPassword = false;
          this.forgotPasswordForm.reset();
        },
        error: (error) => {
          this.isResettingPassword = false;
          console.error('Forgot password error:', error);
          
          // Show success message regardless of error for security (don't reveal if email exists)
          // This prevents user enumeration attacks
          this.toastService.success(
            'Reset Link Sent', 
            'If an account with this email exists, a password reset link has been sent to your email address.'
          );
          this.showForgotPassword = false;
          this.forgotPasswordForm.reset();
        }
      });
    }
  }
}
