import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../../core/services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container position-fixed top-50 start-50 translate-middle" style="z-index: 1055;">
      <div 
        *ngFor="let toast of toasts" 
        class="toast show" 
        role="alert" 
        aria-live="assertive" 
        aria-atomic="true"
        [class]="getToastClass(toast.type)"
        [attr.data-toast-id]="toast.id">
        <div class="toast-header">
          <i [class]="getIconClass(toast.type)" class="me-2"></i>
          <strong class="me-auto">{{ toast.title }}</strong>
          <small class="text-muted">{{ getTimeAgo() }}</small>
          <button 
            *ngIf="toast.dismissible !== false"
            type="button" 
            class="btn-close btn-close-custom" 
            aria-label="Close"
            (click)="removeToast(toast.id)"
            title="Dismiss">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="toast-body">
          {{ toast.message }}
        </div>
        <div class="toast-progress" *ngIf="toast.duration && toast.duration > 0 && toast.dismissible !== false">
          <div class="progress-bar" [style.animation-duration]="toast.duration + 'ms'"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      pointer-events: none;
    }

    .toast {
      min-width: 350px;
      max-width: 500px;
      margin-bottom: 0.5rem;
      pointer-events: auto;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      border-radius: 12px;
      border: none;
      animation: slideInFromTop 0.3s ease-out;
    }

    @keyframes slideInFromTop {
      from {
        opacity: 0;
        transform: translateY(-50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }

    .toast-success {
      border-left: 4px solid #28a745;
    }

    .toast-error {
      border-left: 4px solid #dc3545;
    }

    .toast-warning {
      border-left: 4px solid #ffc107;
    }

    .toast-info {
      border-left: 4px solid #17a2b8;
    }

    .toast-header {
      background-color: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
    }

    .toast-success .toast-header {
      background-color: #d4edda;
      color: #155724;
    }

    .toast-error .toast-header {
      background-color: #f8d7da;
      color: #721c24;
    }

    .toast-warning .toast-header {
      background-color: #fff3cd;
      color: #856404;
    }

    .toast-info .toast-header {
      background-color: #d1ecf1;
      color: #0c5460;
    }

    .toast-body {
      background-color: #ffffff;
    }

    .toast-success .toast-body {
      background-color: #d4edda;
      color: #155724;
    }

    .toast-error .toast-body {
      background-color: #f8d7da;
      color: #721c24;
    }

    .toast-warning .toast-body {
      background-color: #fff3cd;
      color: #856404;
    }

    .toast-info .toast-body {
      background-color: #d1ecf1;
      color: #0c5460;
    }

    .btn-close-custom {
      background: none;
      border: none;
      font-size: 1rem;
      font-weight: bold;
      opacity: 0.7;
      padding: 0.25rem;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .btn-close-custom:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }

    .btn-close-custom:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }

    .toast-progress {
      height: 3px;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 0 0 12px 12px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      width: 100%;
      animation: progressBar linear;
      transform-origin: left;
    }

    @keyframes progressBar {
      from {
        transform: scaleX(1);
      }
      to {
        transform: scaleX(0);
      }
    }
  `]
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.subscription = this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getToastClass(type: Toast['type']): string {
    return `toast-${type}`;
  }

  getIconClass(type: Toast['type']): string {
    switch (type) {
      case 'success':
        return 'bi bi-check-circle-fill text-success';
      case 'error':
        return 'bi bi-x-circle-fill text-danger';
      case 'warning':
        return 'bi bi-exclamation-triangle-fill text-warning';
      case 'info':
        return 'bi bi-info-circle-fill text-info';
      default:
        return 'bi bi-info-circle-fill text-info';
    }
  }

  getTimeAgo(): string {
    return 'now';
  }

  removeToast(id: string): void {
    // Find the toast element and add fade-out animation
    const toastElement = document.querySelector(`[data-toast-id="${id}"]`) as HTMLElement;
    if (toastElement) {
      toastElement.style.animation = 'fadeOut 0.3s ease-in forwards';
      setTimeout(() => {
        this.toastService.removeToast(id);
      }, 300);
    } else {
      this.toastService.removeToast(id);
    }
  }
}
