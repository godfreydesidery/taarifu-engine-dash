import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <header class="obus-header" [class.obus-header-sidebar-collapsed]="sidebarCollapsed">
      <div class="obus-header-content">
        <!-- Left Section -->
        <div class="obus-header-left">
          <button 
            class="obus-menu-toggle-btn"
            (click)="onToggleSidebar()"
            [attr.aria-label]="sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'">
            <span class="obus-menu-icon">
              <span *ngIf="sidebarCollapsed" class="obus-menu-text">☰</span>
              <span *ngIf="!sidebarCollapsed" class="obus-menu-text">✕</span>
            </span>
          </button>
        </div>
        
        <!-- Right Section -->
        <div class="obus-header-right">
          <!-- User Dropdown -->
          <div class="obus-user-dropdown" *ngIf="currentUser">
            <button 
              class="obus-user-trigger" 
              (click)="toggleUserDropdown()" 
              [class.obus-user-active]="showUserDropdown"
              aria-label="User menu">
              <div class="obus-user-avatar">
                <span class="obus-avatar-text">{{ getUserInitials() }}</span>
                <div class="obus-user-status-indicator"></div>
              </div>
              <div class="obus-user-details" *ngIf="!isMobile">
                <span class="obus-user-name">{{ (currentUser && currentUser.username) || 'User' }}</span>
                <span class="obus-user-role">{{ getDisplayRole() }}</span>
              </div>
              <span class="obus-dropdown-arrow" *ngIf="!isMobile" [innerHTML]="getIconSvg('chevron-down')"></span>
            </button>
            
            <!-- Dropdown Menu -->
            <div class="obus-dropdown-menu" [class.obus-dropdown-menu-show]="showUserDropdown">
              <div class="obus-dropdown-header">
                <div class="obus-user-avatar-large">
                  <span class="obus-avatar-text">{{ getUserInitials() }}</span>
                  <div class="obus-user-status-indicator"></div>
                </div>
                <div class="obus-user-info-large">
                  <span class="obus-user-name-large">{{ (currentUser && currentUser.username) || 'User' }}</span>
                  <span class="obus-user-email">{{ (currentUser && currentUser.email) || 'user@example.com' }}</span>
                  <span class="obus-user-role-badge">{{ getDisplayRole() }}</span>
                </div>
              </div>
              
              <div class="obus-dropdown-divider"></div>
              
              <div class="obus-dropdown-items">
                <button class="obus-dropdown-item" (click)="viewProfile($event)">
                  <span class="obus-item-icon" [innerHTML]="getIconSvg('user')"></span>
                  <span class="obus-item-text">My Profile</span>
                </button>
                
                <div class="obus-dropdown-divider"></div>
                
                <button class="obus-dropdown-item obus-logout-item" (click)="logout()">
                  <span class="obus-item-icon" [innerHTML]="getIconSvg('logout')"></span>
                  <span class="obus-item-text">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    /* ===================================
       OBUS PROFESSIONAL HEADER COMPONENT
       =================================== */

    /* Header Container */
    .obus-header {
      background: var(--obus-pure-white);
      border-bottom: 1px solid var(--obus-light-gray);
      padding: 0 1.2rem;
      height: 56px;
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      left: 280px;
      right: 0;
      z-index: 1001;
      box-shadow: var(--obus-shadow-sm);
      transition: all var(--obus-duration-normal) var(--obus-ease-in-out);
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.98);
      margin: 0;
    }

    /* Header positioning when sidebar is collapsed */
    .obus-header-sidebar-collapsed {
      left: 72px;
    }

    /* Header Content Layout */
    .obus-header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 1.2rem;
    }

    .obus-header-left {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      flex: 0 0 auto;
    }

    .obus-header-right {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      flex: 0 0 auto;
      margin-left: auto;
    }

    /* Menu Toggle Button */
    .obus-menu-toggle-btn {
      background: transparent;
      border: none;
      padding: 0.4rem;
      cursor: pointer;
      border-radius: var(--obus-radius-md);
      transition: all var(--obus-duration-fast) var(--obus-ease-out);
      display: flex !important;
      align-items: center;
      justify-content: center;
      color: var(--obus-dark-gray);
      position: relative;
      overflow: hidden;
      min-width: 32px;
      min-height: 32px;
      z-index: 10;
    }

    .obus-menu-toggle-btn::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 100%;
      height: 100%;
      background: var(--obus-ocean-blue);
      opacity: 0.1;
      border-radius: var(--obus-radius-md);
      transition: transform var(--obus-duration-fast) var(--obus-ease-out);
    }

    .obus-menu-toggle-btn:hover::before {
      transform: translate(-50%, -50%) scale(1);
    }

    .obus-menu-toggle-btn:hover {
      color: var(--obus-ocean-blue);
      background: var(--obus-off-white);
    }

    .obus-menu-toggle-btn:focus {
      outline: 2px solid var(--obus-ocean-blue);
      outline-offset: 2px;
    }

    .obus-menu-icon {
      width: 19.2px;
      height: 19.2px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--obus-dark-gray);
      font-weight: bold;
      position: relative;
    }

    .obus-menu-text {
      font-size: 14.4px;
      font-weight: bold;
      color: var(--obus-dark-gray);
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    /* User Dropdown */
    .obus-user-dropdown {
      position: relative;
    }

    .obus-user-trigger {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.4rem;
      border: none;
      background: transparent;
      cursor: pointer;
      border-radius: var(--obus-radius-lg);
      transition: all var(--obus-duration-fast) var(--obus-ease-out);
    }

    .obus-user-trigger:hover,
    .obus-user-active {
      background: linear-gradient(135deg, rgba(32, 82, 149, 0.08) 0%, rgba(44, 116, 179, 0.08) 100%);
    }

    .obus-user-avatar {
      position: relative;
      width: 33.6px;
      height: 33.6px;
      background: var(--obus-gradient-primary);
      border-radius: var(--obus-radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--obus-pure-white);
      font-weight: var(--obus-font-bold);
      font-size: 0.7rem;
      box-shadow: var(--obus-shadow-md);
      transition: all var(--obus-duration-fast) var(--obus-ease-out);
    }

    .obus-user-trigger:hover .obus-user-avatar {
      transform: scale(1.05);
      box-shadow: var(--obus-shadow-lg);
    }

    .obus-avatar-text {
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .obus-user-status-indicator {
      position: absolute;
      bottom: 1.6px;
      right: 1.6px;
      width: 9.6px;
      height: 9.6px;
      background: var(--obus-success);
      border: 1.6px solid var(--obus-pure-white);
      border-radius: var(--obus-radius-full);
      box-shadow: 0 0 0 1.6px rgba(16, 185, 129, 0.2);
    }

    .obus-user-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.6px;
    }

    .obus-user-name {
      font-weight: var(--obus-font-semibold);
      font-size: 0.7rem;
      color: var(--obus-deep-blue);
      line-height: 1.2;
    }

    .obus-user-role {
      font-size: 0.6rem;
      color: var(--obus-medium-gray);
      text-transform: uppercase;
      letter-spacing: 0.4px;
      font-weight: var(--obus-font-medium);
      line-height: 1.2;
    }

    .obus-dropdown-arrow {
      width: 12.8px;
      height: 12.8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--obus-medium-gray);
      transition: transform var(--obus-duration-fast) var(--obus-ease-out);
    }

    .obus-dropdown-arrow svg {
      width: 100%;
      height: 100%;
    }

    .obus-user-active .obus-dropdown-arrow {
      transform: rotate(180deg);
    }

    /* Dropdown Menu */
    .obus-dropdown-menu {
      position: absolute;
      top: calc(100% + 0.6rem);
      right: 0;
      background: var(--obus-pure-white);
      border: 1px solid var(--obus-light-gray);
      border-radius: var(--obus-radius-xl);
      box-shadow: var(--obus-shadow-2xl);
      min-width: 224px;
      z-index: 1002;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: all var(--obus-duration-normal) var(--obus-ease-in-out);
      overflow: hidden;
    }

    .obus-dropdown-menu-show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .obus-dropdown-header {
      padding: 2.4rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      background: var(--obus-gradient-light);
      border-bottom: 1px solid var(--obus-light-gray);
    }

    .obus-user-avatar-large {
      position: relative;
      width: 44.8px;
      height: 44.8px;
      background: var(--obus-gradient-primary);
      border-radius: var(--obus-radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--obus-pure-white);
      font-weight: var(--obus-font-bold);
      font-size: 0.9rem;
      box-shadow: var(--obus-shadow-lg);
      flex-shrink: 0;
    }

    .obus-user-info-large {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      flex: 1;
      min-width: 0;
    }

    .obus-user-name-large {
      font-weight: var(--obus-font-bold);
      font-size: 0.8rem;
      color: var(--obus-deep-blue);
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .obus-user-email {
      font-size: 0.6rem;
      color: var(--obus-medium-gray);
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .obus-user-role-badge {
      display: inline-block;
      font-size: 0.6rem;
      color: var(--obus-ocean-blue);
      background: linear-gradient(135deg, rgba(32, 82, 149, 0.1) 0%, rgba(44, 116, 179, 0.15) 100%);
      padding: 1.6px 0.4rem;
      border-radius: var(--obus-radius-sm);
      text-transform: uppercase;
      letter-spacing: 0.4px;
      font-weight: var(--obus-font-semibold);
      align-self: flex-start;
      line-height: 1.2;
    }

    .obus-dropdown-divider {
      height: 1px;
      background: var(--obus-light-gray);
      margin: 0.4rem 0;
    }

    .obus-dropdown-items {
      padding: 0.4rem;
    }

    .obus-dropdown-item {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.6rem 0.8rem;
      border: none;
      background: transparent;
      cursor: pointer;
      text-align: left;
      border-radius: var(--obus-radius-lg);
      transition: all var(--obus-duration-fast) var(--obus-ease-out);
      color: var(--obus-dark-gray);
    }

    .obus-dropdown-item:hover {
      background: linear-gradient(135deg, rgba(32, 82, 149, 0.08) 0%, rgba(44, 116, 179, 0.08) 100%);
      color: var(--obus-ocean-blue);
      transform: translateX(3.2px);
    }

    .obus-logout-item {
      color: var(--obus-error);
    }

    .obus-logout-item:hover {
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.12) 100%);
      color: var(--obus-error);
    }

    .obus-item-icon {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .obus-item-icon svg {
      width: 100%;
      height: 100%;
    }

    .obus-item-text {
      font-size: 0.7rem;
      font-weight: var(--obus-font-medium);
      flex: 1;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .obus-header {
        padding: 0 var(--obus-space-4);
        left: 0 !important;
        height: 60px;
      }
      
      .obus-header-content {
        gap: var(--obus-space-3);
      }
      
      .obus-user-details,
      .obus-dropdown-arrow {
        display: none;
      }
      
      .obus-user-avatar {
        width: 36px;
        height: 36px;
        font-size: var(--obus-text-xs);
      }

      .obus-dropdown-menu {
        right: 0;
        min-width: 240px;
      }
    }

    @media (max-width: 480px) {
      .obus-header {
        padding: 0 var(--obus-space-3);
        height: 56px;
      }
      
      .obus-dropdown-menu {
        right: -10px;
      }
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() sidebarCollapsed = false;
  @Input() isMobile = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  currentUser = this.authService.getCurrentUser();
  showUserDropdown = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Check if mobile
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.checkMobile());
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.obus-user-dropdown');
    if (!dropdown && this.showUserDropdown) {
      this.showUserDropdown = false;
    }
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  toggleUserDropdown(): void {
    this.showUserDropdown = !this.showUserDropdown;
  }

  getUserInitials(): string {
    if (this.currentUser?.username) {
      return this.currentUser.username.substring(0, 2).toUpperCase();
    }
    return 'U';
  }

  getDisplayRole(): string {
    const user = this.currentUser;
    if (!user) {
      return 'User';
    }
    
    // Check if user has role property
    const role = (user as any).role ? String((user as any).role).toUpperCase() : '';
    if (!role) {
      return 'User';
    }
    
    return String((user as any).role)
      .split('_')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  getIconSvg(iconName: string): SafeHtml {
    const icons: { [key: string]: string } = {
      'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>',
      user: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>',
      logout: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/></svg>',
    };
    return this.sanitizer.bypassSecurityTrustHtml(icons[iconName] || icons['user']);
  }

  viewProfile(event: Event): void {
    event.preventDefault();
    this.showUserDropdown = false;
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.showUserDropdown = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
