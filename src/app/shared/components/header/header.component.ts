import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #1a1a2e;">
      <div class="container-fluid">
        <button class="btn btn-outline-light me-2" type="button" (click)="onToggleSidebar()">
          <i class="bi bi-list"></i>
        </button>
        <a class="navbar-brand fw-bold" routerLink="/dashboard">
          <i class="bi bi-geo-alt-fill me-2"></i>
          <span class="d-none d-sm-inline">Taarifu Engine Dashboard</span>
          <span class="d-sm-none">Taarifu</span>
        </a>
        
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ms-auto">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-circle me-2"></i>
                <span class="d-none d-md-inline">{{ currentUser?.username || 'Admin User' }}</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#" (click)="viewProfile($event)">
                  <i class="bi bi-person me-2"></i>Profile
                </a></li>
                <li><a class="dropdown-item" href="#" (click)="viewSettings()">
                  <i class="bi bi-gear me-2"></i>Settings
                </a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" (click)="logout()">
                  <i class="bi bi-box-arrow-right me-2"></i>Logout
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%) !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      z-index: 1030;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .navbar-brand {
      font-size: 1.25rem;
      transition: color 0.3s ease;
      color: #e8e8e8 !important;
    }

    .navbar-brand:hover {
      color: #ffffff !important;
    }

    .btn-outline-light {
      border-color: rgba(255, 255, 255, 0.3);
      color: #e8e8e8;
    }

    .btn-outline-light:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
      color: #ffffff;
    }

    .nav-link {
      color: #e8e8e8 !important;
    }

    .nav-link:hover {
      color: #ffffff !important;
    }

    .dropdown-menu {
      border: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      background-color: #ffffff;
    }

    .dropdown-item {
      padding: 0.5rem 1rem;
      transition: background-color 0.2s ease;
      color: #495057;
    }

    .dropdown-item:hover {
      background-color: #f8f9fa;
    }

    .dropdown-item.text-danger:hover {
      background-color: #f8d7da;
      color: #721c24 !important;
    }
  `]
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  currentUser = this.authService.getCurrentUser();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  viewProfile(event: Event) {
    event.preventDefault();
    console.log('View profile clicked - navigating to /profile');
    console.log('Current route:', this.router.url);
    
    this.router.navigate(['/profile']).then(success => {
      console.log('Navigation to profile:', success ? 'successful' : 'failed');
      console.log('New route after navigation:', this.router.url);
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  viewSettings() {
    console.log('View settings');
    // TODO: Implement settings view
  }

  logout() {
    console.log('Logging out user...');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
