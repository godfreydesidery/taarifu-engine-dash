import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <nav class="sidebar" [class.collapsed]="isCollapsed" [class.mobile-show]="!isCollapsed" (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">
      <div class="sidebar-content">
        <div class="sidebar-header text-center mb-4">
          <div class="sidebar-brand">
            <i class="bi bi-geo-alt-fill text-primary"></i>
            <span class="brand-text" *ngIf="!isCollapsed || isHovered">Taarifu</span>
          </div>
          <small class="text-muted" *ngIf="!isCollapsed || isHovered">Administration</small>
        </div>
        
        <div class="sidebar-nav">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" routerLink="/dashboard" routerLinkActive="active" [title]="isCollapsed && !isHovered ? 'Dashboard' : ''">
                <i class="bi bi-speedometer2"></i>
                <span *ngIf="!isCollapsed || isHovered">Dashboard</span>
              </a>
            </li>
            
            <!-- Locations Menu with Nested Items -->
            <li class="nav-item" *ngIf="!isCollapsed || isHovered">
              <a class="nav-link nav-link-parent" href="#" (click)="toggleLocations($event)" [class.expanded]="shouldShowSubmenu">
                <i class="bi bi-geo-alt-fill"></i>
                <span>Locations</span>
                <i class="bi bi-chevron-down ms-auto chevron-icon" [class.rotated]="shouldShowSubmenu"></i>
              </a>
              <ul class="nav flex-column submenu" [class.show]="shouldShowSubmenu">
                <li class="nav-item">
                  <a class="nav-link submenu-link" routerLink="/regions" routerLinkActive="active">
                    <i class="bi bi-geo-alt"></i>
                    <span>Regions</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link submenu-link" routerLink="/districts" routerLinkActive="active">
                    <i class="bi bi-building"></i>
                    <span>Districts</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link submenu-link" routerLink="/wards" routerLinkActive="active">
                    <i class="bi bi-house"></i>
                    <span>Wards</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link submenu-link" routerLink="/villages" routerLinkActive="active">
                    <i class="bi bi-house-door"></i>
                    <span>Villages</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link submenu-link" routerLink="/hamlets" routerLinkActive="active">
                    <i class="bi bi-house-door-fill"></i>
                    <span>Hamlets</span>
                  </a>
                </li>
                <li class="nav-item">
                  <hr class="submenu-separator">
                </li>
                <li class="nav-item">
                  <a class="nav-link submenu-link" routerLink="/constituencies" routerLinkActive="active">
                    <i class="bi bi-flag-fill"></i>
                    <span>Constituencies</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link submenu-link" routerLink="/areas" routerLinkActive="active">
                    <i class="bi bi-layers"></i>
                    <span>Areas</span>
                  </a>
                </li>
              </ul>
            </li>
            
            <!-- Parliaments -->
            <li class="nav-item" *ngIf="!isCollapsed || isHovered">
              <a class="nav-link" routerLink="/parliaments" routerLinkActive="active">
                <i class="bi bi-building"></i>
                <span>Parliaments</span>
              </a>
            </li>
            
            <!-- Political Parties -->
            <li class="nav-item" *ngIf="!isCollapsed || isHovered">
              <a class="nav-link" routerLink="/political-parties" routerLinkActive="active">
                <i class="bi bi-flag"></i>
                <span>Political Parties</span>
              </a>
            </li>
            
            <!-- Admin Users -->
            <li class="nav-item" *ngIf="!isCollapsed || isHovered">
              <a class="nav-link" routerLink="/admin-users" routerLinkActive="active">
                <i class="bi bi-person-gear"></i>
                <span>Admin Users</span>
              </a>
            </li>
            
            <!-- Collapsed view - show individual items -->
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/regions" routerLinkActive="active" title="Regions" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-geo-alt"></i>
              </a>
            </li>
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/districts" routerLinkActive="active" title="Districts" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-building"></i>
              </a>
            </li>
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/wards" routerLinkActive="active" title="Wards" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-house"></i>
              </a>
            </li>
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/villages" routerLinkActive="active" title="Villages" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-house-door"></i>
              </a>
            </li>
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/hamlets" routerLinkActive="active" title="Hamlets" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-house-door-fill"></i>
              </a>
            </li>
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/constituencies" routerLinkActive="active" title="Constituencies" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-flag-fill"></i>
              </a>
            </li>
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/areas" routerLinkActive="active" title="Areas" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-layers"></i>
              </a>
            </li>
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/parliaments" routerLinkActive="active" title="Parliaments" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-building"></i>
              </a>
            </li>
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/political-parties" routerLinkActive="active" title="Political Parties" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-flag"></i>
              </a>
            </li>
            <li class="nav-item collapsed-item" *ngIf="isCollapsed && !isHovered">
              <a class="nav-link collapsed-link" routerLink="/admin-users" routerLinkActive="active" title="Admin Users" (click)="preventSubmenuBehavior($event)">
                <i class="bi bi-person-gear"></i>
              </a>
            </li>
          </ul>
          
          <hr class="my-3" *ngIf="!isCollapsed">
          
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#" (click)="logout()" [title]="isCollapsed ? 'Logout' : ''">
                <i class="bi bi-box-arrow-right"></i>
                <span *ngIf="!isCollapsed">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .sidebar {
      position: fixed;
      top: 56px;
      bottom: 0;
      left: 0;
      z-index: 100;
      width: 250px;
      background-color: #f8f9fa;
      border-right: 1px solid #dee2e6;
      transition: width 0.3s ease;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .sidebar.collapsed {
      width: 60px;
    }

    .sidebar-content {
      padding: 1rem 0;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .sidebar-header {
      padding: 0 1rem;
      border-bottom: 1px solid #dee2e6;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }

    .sidebar-brand {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .sidebar-brand i {
      font-size: 1.5rem;
    }

    .brand-text {
      font-weight: 600;
      color: #007bff;
    }

    .sidebar-nav {
      flex: 1;
      padding: 0 0.5rem;
    }

    .sidebar .nav-link {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      margin: 0.25rem 0;
      border-radius: 8px;
      font-weight: 500;
      color: #495057;
      text-decoration: none;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    .sidebar .nav-link i {
      font-size: 1.1rem;
      width: 20px;
      text-align: center;
      margin-right: 0.75rem;
    }

    .sidebar.collapsed .nav-link i {
      margin-right: 0;
    }

    .sidebar .nav-link:hover {
      color: #007bff;
      background-color: #e7f1ff;
      transform: translateX(2px);
    }

    .sidebar .nav-link.active {
      color: #fff;
      background-color: #007bff;
      box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
    }

    .sidebar .nav-link.active:hover {
      background-color: #0056b3;
      transform: none;
    }

    .sidebar hr {
      border-color: #dee2e6;
      margin: 1rem 0;
    }

    /* Nested Menu Styles */
    .nav-link-parent {
      position: relative;
    }

    .nav-link-parent .chevron-icon {
      transition: transform 0.3s ease;
      font-size: 0.8rem;
      margin-left: auto;
    }

    .nav-link-parent .chevron-icon.rotated {
      transform: rotate(180deg);
    }

    .nav-link-parent.expanded {
      background-color: #e7f1ff;
      color: #007bff;
    }

    .submenu {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, opacity 0.3s ease;
      background-color: #f8f9fa;
      border-radius: 8px;
      margin: 0.25rem 0;
      opacity: 0;
      display: flex;
      flex-direction: column;
    }

    .submenu.show {
      max-height: none;
      opacity: 1;
    }

    /* Submenu is always visible when expanded */

    /* Ensure collapsed view items don't have submenu behavior */
    .sidebar.collapsed .nav-item {
      position: relative;
    }

    .sidebar.collapsed .nav-item::after {
      display: none !important;
    }

    .sidebar.collapsed .nav-link {
      position: relative;
      z-index: 1;
    }

    /* Prevent any hover effects that might show submenus */
    .sidebar.collapsed .nav-link:hover::after {
      display: none !important;
    }

    /* Specific styles for collapsed view items */
    .collapsed-item {
      position: relative;
    }

    .collapsed-link {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      margin: 0.25rem 0;
      border-radius: 8px;
      font-weight: 500;
      color: #495057;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .collapsed-link:hover {
      color: #007bff;
      background-color: #e7f1ff;
      transform: none; /* Prevent any transform effects */
    }

    .collapsed-link.active {
      color: #fff;
      background-color: #007bff;
      box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
    }

    .collapsed-link i {
      font-size: 1.1rem;
      width: 20px;
      text-align: center;
    }

    /* Ensure collapsed items never show submenus */
    .collapsed-item .submenu {
      display: none !important;
    }

    .collapsed-item:hover .submenu {
      display: none !important;
    }

    /* All elements are always visible */

    .submenu-link {
      padding: 0.5rem 1rem 0.5rem 2.5rem !important;
      font-size: 0.9rem;
      color: #6c757d;
      margin: 0.1rem 0;
      display: flex;
      align-items: center;
      width: 100%;
    }

    .submenu-link:hover {
      background-color: #e9ecef;
      color: #007bff;
    }

    .submenu-link.active {
      background-color: #007bff;
      color: #fff;
    }

    .submenu-link i {
      font-size: 0.9rem;
      width: 16px;
      margin-right: 0.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .submenu-separator {
      margin: 0.5rem 1rem;
      border: none;
      border-top: 1px solid #e9ecef;
      opacity: 0.6;
    }

    .submenu .nav-item {
      display: block;
      width: 100%;
    }

    .submenu-separator {
      margin: 0.5rem 1rem;
      border: none;
      border-top: 1px solid #dee2e6;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        top: 56px;
        left: 0;
        height: calc(100vh - 56px);
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
        width: 250px;
      }

      .sidebar.mobile-show {
        transform: translateX(0);
      }

      .sidebar.collapsed {
        transform: translateX(-100%);
      }
    }

    @media (min-width: 769px) {
      .sidebar.mobile-show {
        transform: none;
      }

      /* Hover behavior for desktop - expand sidebar width */
      .sidebar.collapsed:hover {
        width: 250px;
        z-index: 1001;
      }

      .sidebar.collapsed:hover .sidebar-content {
        opacity: 1;
      }
    }
  `]
})
export class SidenavComponent implements OnChanges {
  @Input() isCollapsed = false;
  locationsExpanded = false;
  isHovered = false;

  ngOnChanges(changes: SimpleChanges) {
    // No special handling when sidebar collapses - keep everything as is
    if (changes['isCollapsed']) {
      console.log('Sidebar collapsed state changed:', changes['isCollapsed'].currentValue);
    }
  }

  get shouldShowSubmenu(): boolean {
    // Show submenu if it's expanded AND (sidebar is not collapsed OR sidebar is hovered)
    return this.locationsExpanded && (!this.isCollapsed || this.isHovered);
  }


  toggleLocations(event: Event): boolean {
    event.preventDefault();
    event.stopPropagation();
    // Allow toggling if sidebar is not collapsed OR if sidebar is hovered
    if (!this.isCollapsed || this.isHovered) {
      this.locationsExpanded = !this.locationsExpanded;
      console.log('Locations expanded:', this.locationsExpanded);
      return true;
    }
    return false;
  }

  // Method to prevent any submenu behavior when collapsed
  preventSubmenuBehavior(event: Event): boolean {
    if (this.isCollapsed) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
    return true;
  }

  onMouseEnter() {
    this.isHovered = true;
    console.log('Sidebar hovered - isCollapsed:', this.isCollapsed, 'isHovered:', this.isHovered);
  }

  onMouseLeave() {
    this.isHovered = false;
    console.log('Sidebar hover ended');
  }

  logout() {
    console.log('Logout clicked');
    // Implement logout logic here
  }
}
