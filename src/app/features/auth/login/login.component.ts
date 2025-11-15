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
    <div class="obus-login-container">
      <!-- Animated Background Elements -->
      <div class="obus-background-pattern"></div>
      <div class="obus-background-gradient"></div>

      <!-- Login Card -->
      <div class="obus-login-card">
        <!-- Logo Area -->
        <div class="obus-login-logo">
          <div class="obus-logo-icon">
            <i class="bi bi-geo-alt-fill" style="font-size: 4rem; color: var(--obus-ocean-blue);"></i>
          </div>
          <h1 class="obus-logo-text">Taarifu Engine</h1>
        </div>

        <!-- Welcome Message -->
        <div class="obus-welcome-section">
          <h2 class="obus-welcome-title">Welcome Back</h2>
          <p class="obus-welcome-subtitle">Sign in to access your dashboard</p>
        </div>

        <!-- Login Form -->
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="obus-login-form">
          <!-- Global Error Alert -->
          <div class="obus-alert obus-alert-error" *ngIf="errorMessage">
            <svg class="obus-alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
            <div class="obus-alert-content">
              <p class="obus-alert-title">Authentication Error</p>
              <p class="obus-alert-message">{{ errorMessage }}</p>
            </div>
          </div>

          <!-- Username Field -->
          <div class="obus-form-group">
            <label for="username" class="obus-form-label">
              <svg class="obus-label-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
              Username
            </label>
            <div class="obus-input-wrapper">
              <input
                type="text"
                id="username"
                formControlName="username"
                class="obus-input"
                [class.obus-input-error]="isFieldInvalid('username')"
                [class.obus-input-success]="loginForm.get('username')?.valid && loginForm.get('username')?.touched"
                placeholder="Enter your username"
                autocomplete="username"
              />
              <div class="obus-input-icon" *ngIf="loginForm.get('username')?.valid && loginForm.get('username')?.touched">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
            <p class="obus-field-error" *ngIf="isFieldInvalid('username')">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              {{ getFieldError('username') }}
            </p>
          </div>

          <!-- Password Field -->
          <div class="obus-form-group">
            <label for="password" class="obus-form-label">
              <svg class="obus-label-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
              </svg>
              Password
            </label>
            <div class="obus-input-wrapper">
              <input
                [type]="showPassword ? 'text' : 'password'"
                id="password"
                formControlName="password"
                class="obus-input obus-input-with-action"
                [class.obus-input-error]="isFieldInvalid('password')"
                [class.obus-input-success]="loginForm.get('password')?.valid && loginForm.get('password')?.touched"
                placeholder="Enter your password"
                autocomplete="current-password"
              />
              <button
                type="button"
                class="obus-input-action"
                (click)="togglePasswordVisibility()"
                [attr.aria-label]="showPassword ? 'Hide password' : 'Show password'"
              >
                <svg *ngIf="!showPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                </svg>
                <svg *ngIf="showPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"/>
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
                </svg>
              </button>
            </div>
            <p class="obus-field-error" *ngIf="isFieldInvalid('password')">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              {{ getFieldError('password') }}
            </p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="obus-btn-primary obus-btn-lg obus-btn-block"
            [disabled]="isLoading"
            [class.obus-btn-loading]="isLoading"
          >
            <span *ngIf="!isLoading" class="obus-btn-content">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Login to Taarifu
            </span>
            <span *ngIf="isLoading" class="obus-btn-content">
              <span class="obus-spinner"></span>
              Authenticating...
            </span>
          </button>
        </form>

        <!-- Footer -->
        <div class="obus-login-footer">
          <div class="obus-footer-links">
            <a href="#" class="obus-footer-link">Privacy Policy</a>
            <span class="obus-footer-separator">•</span>
            <a href="#" class="obus-footer-link">Terms of Service</a>
            <span class="obus-footer-separator">•</span>
            <a href="#" class="obus-footer-link">Support</a>
          </div>
          <p class="obus-footer-copyright">
            &copy; {{ currentYear }} Taarifu Engine. All rights reserved.
          </p>
        </div>
      </div>
    </div>

    <!-- Toast Notifications -->
    <app-toast></app-toast>
  `,
  styles: [`
    :host {
      display: block;
      width: 100vw;
      height: 100vh;
      height: 100dvh;
      margin: 0;
      padding: 0;
      background: var(--obus-gradient-primary);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
    }

    .obus-login-container {
      height: 100vh;
      height: 100dvh;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--obus-gradient-primary);
      position: relative;
      overflow-x: hidden;
      overflow-y: hidden;
      padding: clamp(0.75rem, 2vh, var(--obus-space-6));
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }

    .obus-background-pattern {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
      background-size: 30px 30px;
      animation: backgroundScroll 30s linear infinite;
      pointer-events: none;
    }

    @keyframes backgroundScroll {
      0% { transform: translate(0, 0); }
      100% { transform: translate(30px, 30px); }
    }

    .obus-background-gradient {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 30% 50%, rgba(44, 116, 179, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 70% 50%, rgba(32, 82, 149, 0.2) 0%, transparent 50%);
      pointer-events: none;
    }

    .obus-login-card {
      background: var(--obus-pure-white);
      border-radius: var(--obus-radius-xl);
      padding: clamp(1.25rem, 4vh, var(--obus-space-12));
      width: 100%;
      max-width: 480px;
      max-height: none;
      overflow: visible;
      overflow-x: hidden;
      box-shadow: var(--obus-shadow-2xl);
      position: relative;
      z-index: 1;
      animation: slideUp var(--obus-duration-slow) var(--obus-ease-out);
      -webkit-overflow-scrolling: touch;
      margin: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(32, 82, 149, 0.2) transparent;
    }

    .obus-login-card::-webkit-scrollbar {
      width: 6px;
    }

    .obus-login-card::-webkit-scrollbar-track {
      background: transparent;
    }

    .obus-login-card::-webkit-scrollbar-thumb {
      background: rgba(32, 82, 149, 0.2);
      border-radius: var(--obus-radius-full);
      transition: background var(--obus-duration-fast);
    }

    .obus-login-card::-webkit-scrollbar-thumb:hover {
      background: rgba(32, 82, 149, 0.4);
    }

    @keyframes slideUp {
      from {
        transform: translateY(30px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .obus-login-logo {
      text-align: center;
      margin-bottom: var(--obus-space-8);
    }

    .obus-logo-icon {
      width: 80px;
      height: 80px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--obus-space-4);
      animation: logoFloat 3s ease-in-out infinite;
    }

    @keyframes logoFloat {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-8px) rotate(5deg);
      }
    }

    .obus-logo-text {
      font-size: var(--obus-text-h2);
      font-weight: var(--obus-font-bold);
      color: var(--obus-deep-blue);
      margin: 0 0 var(--obus-space-2) 0;
      line-height: var(--obus-leading-tight);
      letter-spacing: -0.02em;
    }

    .obus-welcome-section {
      text-align: center;
      margin-bottom: clamp(var(--obus-space-4), 4vh, var(--obus-space-8));
      padding-bottom: clamp(var(--obus-space-3), 3vh, var(--obus-space-6));
      border-bottom: 2px solid var(--obus-light-gray);
    }

    .obus-welcome-title {
      font-size: var(--obus-text-h3);
      font-weight: var(--obus-font-bold);
      color: var(--obus-deep-blue);
      margin: 0 0 var(--obus-space-2) 0;
      line-height: var(--obus-leading-tight);
    }

    .obus-welcome-subtitle {
      font-size: var(--obus-text-base);
      color: var(--obus-medium-gray);
      margin: 0;
      font-weight: var(--obus-font-normal);
    }

    .obus-login-form {
      display: flex;
      flex-direction: column;
      gap: clamp(var(--obus-space-3), 2.5vh, var(--obus-space-6));
    }

    .obus-form-group {
      display: flex;
      flex-direction: column;
      gap: var(--obus-space-3);
    }

    .obus-form-label {
      display: flex;
      align-items: center;
      gap: var(--obus-space-2);
      font-size: var(--obus-text-small);
      font-weight: var(--obus-font-semibold);
      color: var(--obus-dark-gray);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .obus-label-icon {
      width: 16px;
      height: 16px;
      color: var(--obus-ocean-blue);
    }

    .obus-input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .obus-input {
      width: 100%;
      padding: var(--obus-space-4);
      border: 2px solid var(--obus-light-gray);
      border-radius: var(--obus-radius-md);
      font-family: var(--obus-font-primary);
      font-size: var(--obus-text-base);
      color: var(--obus-dark-gray);
      background: var(--obus-pure-white);
      transition: all var(--obus-duration-normal) var(--obus-ease-out);
      outline: none;
    }

    .obus-input::placeholder {
      color: var(--obus-medium-gray);
    }

    .obus-input:focus {
      border-color: var(--obus-ocean-blue);
      box-shadow: 0 0 0 3px rgba(32, 82, 149, 0.1);
    }

    .obus-input:hover:not(:focus) {
      border-color: var(--obus-medium-gray);
    }

    .obus-input-error {
      border-color: var(--obus-error);
      background: rgba(239, 68, 68, 0.02);
    }

    .obus-input-error:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    .obus-input-success {
      border-color: var(--obus-success);
      padding-right: 3rem;
    }

    .obus-input-success:focus {
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }

    .obus-input-with-action {
      padding-right: 3rem;
    }

    .obus-input-icon {
      position: absolute;
      right: var(--obus-space-4);
      width: 20px;
      height: 20px;
      color: var(--obus-success);
      pointer-events: none;
      animation: checkmarkPop var(--obus-duration-normal) var(--obus-ease-bounce);
    }

    @keyframes checkmarkPop {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .obus-input-action {
      position: absolute;
      right: var(--obus-space-2);
      padding: var(--obus-space-2);
      background: transparent;
      border: none;
      color: var(--obus-medium-gray);
      cursor: pointer;
      border-radius: var(--obus-radius-sm);
      transition: all var(--obus-duration-fast) var(--obus-ease-out);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .obus-input-action svg {
      width: 20px;
      height: 20px;
    }

    .obus-input-action:hover {
      background: var(--obus-off-white);
      color: var(--obus-ocean-blue);
    }

    .obus-input-action:active {
      transform: scale(0.95);
    }

    .obus-field-error {
      display: flex;
      align-items: center;
      gap: var(--obus-space-2);
      color: var(--obus-error);
      font-size: var(--obus-text-small);
      font-weight: var(--obus-font-medium);
      margin: 0;
      animation: errorSlide var(--obus-duration-normal) var(--obus-ease-out);
    }

    .obus-field-error svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    @keyframes errorSlide {
      from {
        transform: translateX(-10px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .obus-alert {
      display: flex;
      gap: var(--obus-space-4);
      padding: var(--obus-space-4);
      border-radius: var(--obus-radius-md);
      animation: alertSlide var(--obus-duration-normal) var(--obus-ease-out);
    }

    @keyframes alertSlide {
      from {
        transform: translateY(-10px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .obus-alert-error {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.2);
    }

    .obus-alert-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      color: var(--obus-error);
    }

    .obus-alert-content {
      flex: 1;
    }

    .obus-alert-title {
      font-size: var(--obus-text-small);
      font-weight: var(--obus-font-semibold);
      color: var(--obus-error);
      margin: 0 0 var(--obus-space-1) 0;
    }

    .obus-alert-message {
      font-size: var(--obus-text-small);
      color: var(--obus-error);
      margin: 0;
      opacity: 0.9;
    }

    .obus-btn-primary {
      background: var(--obus-gradient-accent);
      color: var(--obus-pure-white);
      padding: var(--obus-space-4) var(--obus-space-6);
      border-radius: var(--obus-radius-md);
      font-family: var(--obus-font-primary);
      font-weight: var(--obus-font-semibold);
      font-size: var(--obus-text-base);
      border: none;
      box-shadow: var(--obus-shadow-md);
      transition: all var(--obus-duration-normal) var(--obus-ease-in-out);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      outline: none;
    }

    .obus-btn-primary::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
    }

    .obus-btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: var(--obus-shadow-lg);
      background: var(--obus-ocean-blue);
    }

    .obus-btn-primary:hover:not(:disabled)::before {
      width: 300px;
      height: 300px;
    }

    .obus-btn-primary:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--obus-shadow-sm);
    }

    .obus-btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .obus-btn-primary:focus-visible {
      outline: 3px solid var(--obus-ocean-blue);
      outline-offset: 2px;
    }

    .obus-btn-lg {
      padding: var(--obus-space-5) var(--obus-space-8);
      font-size: var(--obus-text-h6);
    }

    .obus-btn-block {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .obus-btn-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--obus-space-3);
      position: relative;
      z-index: 1;
    }

    .obus-btn-content svg {
      width: 20px;
      height: 20px;
    }

    .obus-btn-loading {
      pointer-events: none;
    }

    .obus-spinner {
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top-color: var(--obus-pure-white);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .obus-login-footer {
      margin-top: clamp(var(--obus-space-4), 4vh, var(--obus-space-8));
      padding-top: clamp(var(--obus-space-3), 3vh, var(--obus-space-6));
      border-top: 1px solid var(--obus-light-gray);
      text-align: center;
    }

    .obus-footer-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--obus-space-3);
      margin-bottom: var(--obus-space-4);
      flex-wrap: wrap;
    }

    .obus-footer-link {
      color: var(--obus-ocean-blue);
      font-size: var(--obus-text-small);
      font-weight: var(--obus-font-medium);
      text-decoration: none;
      transition: all var(--obus-duration-fast) var(--obus-ease-out);
      position: relative;
    }

    .obus-footer-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--obus-ocean-blue);
      transition: width var(--obus-duration-normal) var(--obus-ease-out);
    }

    .obus-footer-link:hover {
      color: var(--obus-deep-blue);
    }

    .obus-footer-link:hover::after {
      width: 100%;
    }

    .obus-footer-separator {
      color: var(--obus-light-gray);
      font-size: var(--obus-text-small);
    }

    .obus-footer-copyright {
      color: var(--obus-medium-gray);
      font-size: var(--obus-text-small);
      margin: 0;
    }

    @media (max-width: 767px) {
      .obus-login-container {
        padding: var(--obus-space-4);
        padding-top: max(var(--obus-space-4), env(safe-area-inset-top));
        padding-bottom: max(var(--obus-space-4), env(safe-area-inset-bottom));
      }

      .obus-login-card {
        padding: clamp(1rem, 4vh, var(--obus-space-8));
        max-width: 100%;
      }

      .obus-logo-icon {
        width: 64px;
        height: 64px;
      }

      .obus-logo-text {
        font-size: 1.5rem;
      }

      .obus-welcome-title {
        font-size: var(--obus-text-h4);
      }

      .obus-input {
        padding: var(--obus-space-3);
        font-size: 16px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  showPassword = false;
  currentYear = new Date().getFullYear();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const credentials = {
        usernameOrEmail: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
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
          } else {
            this.errorMessage = response.message || 'Login failed';
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Login error:', error);
          
          let errorMsg = 'An error occurred during login';
          if (error.status === 0) {
            errorMsg = 'Cannot connect to server. Please check if the backend is running.';
          } else if (error.status === 401) {
            errorMsg = 'Invalid username or password';
          } else if (error.status === 404) {
            errorMsg = 'Login endpoint not found. Please check backend configuration';
          } else if (error.status >= 500) {
            errorMsg = 'Server error. Please try again later';
          } else if (error.error?.message) {
            errorMsg = error.error.message;
          } else if (error.message) {
            errorMsg = error.message;
          }

          this.errorMessage = errorMsg;
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach((key) => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.loginForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName} is required`;
      }
      if (field.errors['minlength']) {
        return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field?.invalid && field.touched);
  }
}
