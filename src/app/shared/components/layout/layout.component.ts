import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FooterComponent } from '../footer/footer.component';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ToastComponent
  ],
  template: `
    <div class="app-layout">
      <!-- Header -->
      <app-header (toggleSidebar)="toggleSidebar()"></app-header>
      
      <!-- Main Content Area -->
      <div class="main-wrapper">
        <!-- Sidebar -->
        <app-sidenav [isCollapsed]="sidebarCollapsed"></app-sidenav>
        
        <!-- Content Area -->
        <main class="main-content" [class.sidebar-collapsed]="sidebarCollapsed">
          <div class="content-wrapper">
            <router-outlet></router-outlet>
          </div>
          
          <!-- Footer -->
          <app-footer></app-footer>
        </main>
      </div>
      
      <!-- Mobile Overlay -->
      <div class="mobile-overlay" 
           [class.show]="!sidebarCollapsed && isMobile" 
           (click)="closeSidebar()"></div>
      
      <!-- Toast Notifications -->
      <app-toast></app-toast>
    </div>
  `,
  styles: [`
    .app-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-wrapper {
      display: flex;
      flex: 1;
      margin-top: 56px; /* Header height */
    }

    .main-content {
      flex: 1;
      margin-left: 250px; /* Sidebar width */
      min-height: calc(100vh - 56px);
      display: flex;
      flex-direction: column;
      transition: margin-left 0.3s ease;
      background-color: #f8f9fa;
    }

    .main-content.sidebar-collapsed {
      margin-left: 60px; /* Collapsed sidebar width */
    }

    .content-wrapper {
      flex: 1;
      padding: 2rem;
      background-color: #fff;
      margin: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      min-height: calc(100vh - 200px);
    }

    .mobile-overlay {
      position: fixed;
      top: 56px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      display: none;
    }

    .mobile-overlay.show {
      opacity: 1;
      visibility: visible;
      display: block;
    }

    @media (min-width: 769px) {
      .mobile-overlay {
        display: none !important;
      }
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .main-content {
        margin-left: 0;
      }

      .main-content.sidebar-collapsed {
        margin-left: 0;
      }

      .content-wrapper {
        margin: 0.5rem;
        padding: 1rem;
        border-radius: 0;
        box-shadow: none;
      }
    }

    /* Tablet Responsive */
    @media (max-width: 992px) and (min-width: 769px) {
      .content-wrapper {
        padding: 1.5rem;
      }
    }

    /* Large screens */
    @media (min-width: 1200px) {
      .content-wrapper {
        padding: 2.5rem;
      }
    }
  `]
})
export class LayoutComponent {
  sidebarCollapsed = false;
  isMobile = false;

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.sidebarCollapsed = true;
    }
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  closeSidebar() {
    if (this.isMobile) {
      this.sidebarCollapsed = true;
    }
  }
}
