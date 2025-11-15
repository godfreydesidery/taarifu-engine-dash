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
        <div class="sidebar-header">
          <div class="sidebar-brand">
            <i class="bi bi-pen-fill"></i>
            <span class="brand-text" *ngIf="!isCollapsed || isHovered">Taarifu</span>
          </div>
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
      top: 0;
      left: 0;
      width: 280px;
      height: 100vh;
      background: var(--obus-gradient-primary);
      color: var(--obus-pure-white);
      border-right: none;
      transition: width var(--obus-duration-normal) var(--obus-ease-in-out);
      overflow-x: hidden;
      overflow-y: auto;
      box-shadow: var(--obus-shadow-2xl);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      backdrop-filter: blur(10px);
      margin: 0;
      padding: 0;
    }

    .sidebar.collapsed {
      width: 72px;
    }

    .sidebar-content {
      padding: var(--obus-space-2) 0;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .sidebar-header {
      padding: 0.5rem var(--obus-space-3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      background: transparent;
      margin: 0;
      position: relative;
      top: 0;
    }

    .sidebar-brand {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--obus-space-2);
    }

    .sidebar-brand i {
      font-size: var(--obus-text-h3);
      color: var(--obus-pure-white);
    }

    .brand-text {
      font-weight: var(--obus-font-extrabold);
      color: var(--obus-pure-white);
      font-family: var(--obus-font-primary);
    }

    .sidebar-nav {
      flex: 1;
      padding: 0 0.5rem;
    }

    .sidebar .nav-link {
      display: flex;
      align-items: center;
      padding: var(--obus-space-3) var(--obus-space-4);
      margin: var(--obus-space-1) var(--obus-space-2);
      border-radius: var(--obus-radius-md);
      font-weight: var(--obus-font-medium);
      color: rgba(255, 255, 255, 0.95);
      text-decoration: none;
      transition: all var(--obus-duration-normal) var(--obus-ease-out);
      white-space: nowrap;
      font-family: var(--obus-font-primary);
      position: relative;
      width: calc(100% - var(--obus-space-4));
    }

    .sidebar .nav-link::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 70%;
      background: var(--obus-pure-white);
      border-radius: 0 var(--obus-radius-sm) var(--obus-radius-sm) 0;
      transition: width var(--obus-duration-normal) var(--obus-ease-out);
    }

    .sidebar .nav-link i {
      font-size: var(--obus-text-base);
      width: 20px;
      text-align: center;
      margin-right: var(--obus-space-3);
      color: rgba(255, 255, 255, 0.9);
      transition: all var(--obus-duration-fast) var(--obus-ease-out);
    }

    .sidebar.collapsed .nav-link i {
      margin-right: 0;
    }

    .sidebar .nav-link:hover {
      color: var(--obus-pure-white);
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(4px);
    }

    .sidebar .nav-link:hover::before {
      width: 3px;
    }

    .sidebar .nav-link:hover i {
      color: var(--obus-pure-white);
      transform: scale(1.1);
    }

    .sidebar .nav-link.active {
      color: var(--obus-pure-white);
      background: var(--obus-gradient-accent);
      box-shadow: var(--obus-shadow-md);
    }

    .sidebar .nav-link.active::before {
      width: 4px;
      height: 80%;
      background: var(--obus-pure-white);
    }

    .sidebar .nav-link.active:hover {
      background: var(--obus-ocean-blue);
      transform: none;
    }

    .sidebar hr {
      border-color: rgba(255, 255, 255, 0.1);
      margin: var(--obus-space-4) 0;
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
      background: rgba(255, 255, 255, 0.1);
      color: var(--obus-pure-white);
    }

    .submenu {
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--obus-duration-normal) var(--obus-ease-out), opacity var(--obus-duration-normal) var(--obus-ease-out);
      background: rgba(0, 0, 0, 0.2);
      border-radius: var(--obus-radius-md);
      margin: var(--obus-space-2) var(--obus-space-2) 0 var(--obus-space-2);
      opacity: 0;
      display: flex;
      flex-direction: column;
      backdrop-filter: blur(5px);
    }

    .submenu.show {
      max-height: 1000px;
      opacity: 1;
      padding: var(--obus-space-2) 0;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
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
      padding: var(--obus-space-3);
      margin: var(--obus-space-1) var(--obus-space-2);
      border-radius: var(--obus-radius-md);
      font-weight: var(--obus-font-medium);
      color: rgba(255, 255, 255, 0.95);
      text-decoration: none;
      transition: all var(--obus-duration-normal) var(--obus-ease-out);
      width: calc(100% - var(--obus-space-4));
    }

    .collapsed-link:hover {
      color: var(--obus-pure-white);
      background: rgba(255, 255, 255, 0.1);
      transform: none;
    }

    .collapsed-link.active {
      color: var(--obus-pure-white);
      background: var(--obus-gradient-accent);
      box-shadow: var(--obus-shadow-md);
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
      padding: var(--obus-space-2) var(--obus-space-4) var(--obus-space-2) var(--obus-space-8) !important;
      font-size: var(--obus-text-small);
      color: rgba(255, 255, 255, 0.85);
      margin: var(--obus-space-1) 0;
      display: flex;
      align-items: center;
      width: 100%;
      border-radius: var(--obus-radius-sm);
      position: relative;
      font-family: var(--obus-font-primary);
    }

    .submenu-link::before {
      content: '';
      position: absolute;
      left: var(--obus-space-4);
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transition: all var(--obus-duration-fast) var(--obus-ease-out);
    }

    .submenu-link:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--obus-pure-white);
      transform: translateX(4px);
    }

    .submenu-link:hover::before {
      width: 6px;
      height: 6px;
      background: var(--obus-pure-white);
    }

    .submenu-link.active {
      background: var(--obus-gradient-accent);
      color: var(--obus-pure-white);
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
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
        width: 280px;
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
        width: 280px;
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
