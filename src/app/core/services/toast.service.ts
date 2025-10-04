import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastsSubject.asObservable();

  private showToast(type: Toast['type'], title: string, message: string, duration: number = 3000, dismissible: boolean = true): void {
    const toast: Toast = {
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

  success(title: string, message: string, duration?: number, dismissible?: boolean): void {
    this.showToast('success', title, message, duration, dismissible);
  }

  error(title: string, message: string, duration?: number, dismissible?: boolean): void {
    this.showToast('error', title, message, duration, dismissible);
  }

  warning(title: string, message: string, duration?: number, dismissible?: boolean): void {
    this.showToast('warning', title, message, duration, dismissible);
  }

  info(title: string, message: string, duration?: number, dismissible?: boolean): void {
    this.showToast('info', title, message, duration, dismissible);
  }

  removeToast(id: string): void {
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next(currentToasts.filter(toast => toast.id !== id));
  }

  clearAll(): void {
    this.toastsSubject.next([]);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
