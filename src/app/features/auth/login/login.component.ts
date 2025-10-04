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
          </form>
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
  hidePassword = true;
  isLoading = false;

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
            this.router.navigate(['/dashboard']);
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
}
