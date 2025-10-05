import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminUserResponse } from '../../../core/models/admin-user.model';
import { AdminUserService } from '../../../core/services/admin-user.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-admin-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  template: `
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">Admin Users</h1>
          <p class="text-muted">Manage system administrator accounts</p>
        </div>
        <a routerLink="/admin-users/create" class="btn btn-primary">
          <i class="bi bi-plus-circle me-1"></i>
          Add Admin User
        </a>
      </div>

      <!-- Search and Filter Section -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Search admin users..." 
                  [(ngModel)]="searchTerm" 
                  (keyup.enter)="onSearch()">
              </div>
            </div>
            <div class="col-md-3">
              <select class="form-select" [(ngModel)]="statusFilter" (change)="onStatusFilterChange()">
                <option value="">All Statuses</option>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
                <option value="SUSPENDED">Suspended</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Admin Users Table -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">
            <i class="bi bi-person-gear me-2"></i>
            All Admin Users
          </h5>
          <div class="d-flex align-items-center">
            <span class="text-muted me-2">Page Size:</span>
            <select class="form-select form-select-sm w-auto" [(ngModel)]="pageSize" (change)="onPageSizeChange()">
              <option [value]="10">10</option>
              <option [value]="25">25</option>
              <option [value]="50">50</option>
              <option [value]="100">100</option>
            </select>
          </div>
        </div>
        <div class="card-body">

          <div *ngIf="isLoading" class="text-center py-4">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading admin users...</p>
          </div>

          <div *ngIf="!isLoading && adminUsers.length === 0" class="text-center py-5">
            <i class="bi bi-person-gear text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No admin users found</h4>
            <p class="text-muted">Start by creating your first admin user.</p>
            <a routerLink="/admin-users/create" class="btn btn-primary">
              <i class="bi bi-plus-circle me-1"></i>
              Add Admin User
            </a>
          </div>

          <div *ngIf="!isLoading && adminUsers.length > 0" class="table-responsive">
            <table class="table table-hover table-striped">
              <thead class="table-light">
                <tr>
                  <th (click)="onSort('username', $event)" class="sortable">
                    Username
                    <i class="bi" [class.bi-arrow-up]="sortBy === 'username' && sortDir === 'asc'" [class.bi-arrow-down]="sortBy === 'username' && sortDir === 'desc'"></i>
                  </th>
                  <th (click)="onSort('email', $event)" class="sortable">
                    Email
                    <i class="bi" [class.bi-arrow-up]="sortBy === 'email' && sortDir === 'asc'" [class.bi-arrow-down]="sortBy === 'email' && sortDir === 'desc'"></i>
                  </th>
                  <th>User Type</th>
                  <th>Status</th>
                  <th>Password Strength</th>
                  <th>Last Login</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let adminUser of adminUsers">
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="avatar-sm bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2">
                        {{ adminUser.username.charAt(0).toUpperCase() }}
                      </div>
                      <strong>{{ adminUser.username }}</strong>
                    </div>
                  </td>
                  <td>{{ adminUser.email }}</td>
                  <td>
                    <span class="badge bg-info">{{ adminUser.userType }}</span>
                  </td>
                  <td>
                    <span class="badge" 
                          [class.bg-success]="adminUser.status === 'ACTIVE'" 
                          [class.bg-warning]="adminUser.status === 'INACTIVE'" 
                          [class.bg-danger]="adminUser.status === 'SUSPENDED'">
                      {{ adminUser.status }}
                    </span>
                  </td>
                  <td>
                    <span class="badge" 
                          [class.bg-success]="adminUser.passwordStrength === 'STRONG'" 
                          [class.bg-warning]="adminUser.passwordStrength === 'MEDIUM'" 
                          [class.bg-danger]="adminUser.passwordStrength === 'WEAK'">
                      {{ adminUser.passwordStrength }}
                    </span>
                    <span *ngIf="adminUser.requirePasswordChange" class="badge bg-warning ms-1" title="Password change required">
                      <i class="bi bi-exclamation-triangle"></i>
                    </span>
                  </td>
                  <td>
                    <span *ngIf="adminUser.lastLoginAt; else neverLoggedIn">
                      {{ adminUser.lastLoginAt | date:'short' }}
                    </span>
                    <ng-template #neverLoggedIn>
                      <span class="text-muted">Never</span>
                    </ng-template>
                  </td>
                  <td>{{ adminUser.createdAt | date:'short' }}</td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <button type="button" class="btn btn-outline-primary" (click)="editAdminUser(adminUser)" title="Edit">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-outline-success" 
                              (click)="activateAdminUser(adminUser)" 
                              [disabled]="adminUser.status === 'ACTIVE'"
                              title="Activate">
                        <i class="bi bi-check-circle"></i>
                      </button>
                      <button type="button" class="btn btn-outline-warning" 
                              (click)="deactivateAdminUser(adminUser)" 
                              [disabled]="adminUser.status === 'INACTIVE'"
                              title="Deactivate">
                        <i class="bi bi-pause-circle"></i>
                      </button>
                      <button type="button" class="btn btn-outline-danger" 
                              (click)="suspendAdminUser(adminUser)" 
                              [disabled]="adminUser.status === 'SUSPENDED'"
                              title="Suspend">
                        <i class="bi bi-ban"></i>
                      </button>
                      <button type="button" class="btn btn-outline-info" 
                              (click)="resetPassword(adminUser)" 
                              title="Reset Password">
                        <i class="bi bi-key"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <nav *ngIf="!isLoading && totalPages > 1" aria-label="Page navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item" [class.disabled]="currentPage === 0">
                <button class="page-link" (click)="goToPage(currentPage - 1)" [disabled]="currentPage === 0">Previous</button>
              </li>
              <li class="page-item" *ngFor="let page of getPageNumbers()" [class.active]="page === currentPage">
                <button class="page-link" (click)="goToPage(page)">{{ page + 1 }}</button>
              </li>
              <li class="page-item" [class.disabled]="currentPage === totalPages - 1">
                <button class="page-link" (click)="goToPage(currentPage + 1)" [disabled]="currentPage === totalPages - 1">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container-fluid {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .table th {
      border-top: none;
      font-weight: 600;
      color: #495057;
    }

    .btn-group .btn {
      border-radius: 0.25rem;
    }

    .btn-group .btn:not(:last-child) {
      margin-right: 2px;
    }

    .badge {
      font-size: 0.75em;
    }

    .sortable {
      cursor: pointer;
      user-select: none;
    }

    .sortable i {
      margin-left: 5px;
      font-size: 0.7em;
    }

    .avatar-sm {
      width: 32px;
      height: 32px;
      font-size: 0.875rem;
      font-weight: 600;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .container-fluid {
        padding: 0 0.5rem;
      }

      .card-header {
        flex-direction: column;
        align-items: flex-start !important;
        gap: 1rem;
      }

      .card-header h5 {
        margin-bottom: 0;
      }

      .table-responsive {
        border-radius: 0.375rem;
        border: 1px solid #dee2e6;
      }

      .table th,
      .table td {
        padding: 0.5rem 0.25rem;
        font-size: 0.875rem;
        white-space: nowrap;
      }

      .btn-group .btn {
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
      }

      .badge {
        font-size: 0.65em;
        padding: 0.25em 0.4em;
      }

      .avatar-sm {
        width: 24px;
        height: 24px;
        font-size: 0.75rem;
      }
    }

    @media (max-width: 576px) {
      .table th,
      .table td {
        padding: 0.375rem 0.125rem;
        font-size: 0.8rem;
      }

      .btn-group {
        flex-direction: column;
        gap: 0.25rem;
      }

      .btn-group .btn {
        width: 100%;
        margin-right: 0 !important;
      }
    }
  `]
})
export class AdminUserListComponent implements OnInit {
  adminUsers: AdminUserResponse[] = [];
  searchTerm = '';
  statusFilter = '';
  isLoading = false;
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;
  totalElements = 0;
  sortBy: string = 'createdAt';
  sortDir: 'asc' | 'desc' = 'desc';

  constructor(
    private adminUserService: AdminUserService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    console.log('AdminUserListComponent initialized');
    
    // Debug authentication
    const token = this.authService.getToken();
    const isAuthenticated = this.authService.isAuthenticated();
    const currentUser = this.authService.getCurrentUser();
    
    console.log('Auth Debug Info:');
    console.log('- Token exists:', !!token);
    console.log('- Token value:', token ? token.substring(0, 50) + '...' : 'No token');
    console.log('- Is authenticated:', isAuthenticated);
    console.log('- Current user:', currentUser);
    
    if (!isAuthenticated) {
      console.error('User not authenticated! Redirecting to login...');
      this.router.navigate(['/login']);
      return;
    }
    
    this.loadAdminUsers();
  }

  loadAdminUsers() {
    this.isLoading = true;
    
    let observable;
    
    if (this.searchTerm) {
      observable = this.adminUserService.searchAdminUsers(
        this.searchTerm, 
        this.currentPage, 
        this.pageSize, 
        this.sortBy, 
        this.sortDir
      );
    } else if (this.statusFilter) {
      observable = this.adminUserService.getAdminUsersByStatus(
        this.statusFilter as 'ACTIVE' | 'INACTIVE' | 'SUSPENDED',
        this.currentPage, 
        this.pageSize, 
        this.sortBy, 
        this.sortDir
      );
    } else {
      observable = this.adminUserService.getAllAdminUsers(
        this.currentPage, 
        this.pageSize, 
        this.sortBy, 
        this.sortDir
      );
    }

    observable.subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Admin Users API Response:', response);
        this.adminUsers = response.data || [];
        this.totalElements = response.totalElements || 0;
        this.totalPages = response.totalPages || 0;
        console.log('Loaded admin users:', this.adminUsers.length);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading admin users:', error);
        console.error('Error status:', error.status);
        console.error('Error details:', error.error);
        
        if (error.status === 403) {
          console.error('403 Forbidden - Authentication/Authorization issue');
          this.toastService.error('Access Denied', 'Please log in again.');
          this.authService.logout();
          this.router.navigate(['/login']);
        } else if (error.status === 401) {
          console.error('401 Unauthorized - Token expired or invalid');
          this.toastService.error('Session Expired', 'Please log in again.');
          this.authService.logout();
          this.router.navigate(['/login']);
        } else {
          this.toastService.error('Error Loading Admin Users', error.error?.message || error.message || 'Unknown error occurred');
        }
      }
    });
  }

  onSearch() {
    this.currentPage = 0;
    this.loadAdminUsers();
  }

  onStatusFilterChange() {
    this.currentPage = 0;
    this.loadAdminUsers();
  }

  onPageSizeChange() {
    this.currentPage = 0;
    this.loadAdminUsers();
  }

  onSort(field: string, event: Event) {
    event.preventDefault();
    
    if (this.sortBy === field) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = field;
      this.sortDir = 'asc';
    }
    this.currentPage = 0;
    this.loadAdminUsers();
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadAdminUsers();
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const start = Math.max(0, this.currentPage - 2);
    const end = Math.min(this.totalPages - 1, this.currentPage + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  editAdminUser(adminUser: AdminUserResponse) {
    this.router.navigate(['/admin-users/edit', adminUser.uid]);
  }

  activateAdminUser(adminUser: AdminUserResponse) {
    this.adminUserService.activateAdminUser(adminUser.uid).subscribe({
      next: (response) => {
        if (response.status) {
          this.toastService.success('Admin User Activated', `Admin user ${adminUser.username} has been activated successfully`);
          this.loadAdminUsers();
        }
      },
      error: (error) => {
        console.error('Error activating admin user:', error);
        this.toastService.error('Error Activating Admin User', 'Failed to activate admin user');
      }
    });
  }

  deactivateAdminUser(adminUser: AdminUserResponse) {
    this.adminUserService.deactivateAdminUser(adminUser.uid).subscribe({
      next: (response) => {
        if (response.status) {
          this.toastService.success('Admin User Deactivated', `Admin user ${adminUser.username} has been deactivated successfully`);
          this.loadAdminUsers();
        }
      },
      error: (error) => {
        console.error('Error deactivating admin user:', error);
        this.toastService.error('Error Deactivating Admin User', 'Failed to deactivate admin user');
      }
    });
  }

  suspendAdminUser(adminUser: AdminUserResponse) {
    if (confirm(`Are you sure you want to suspend admin user "${adminUser.username}"?`)) {
      this.adminUserService.suspendAdminUser(adminUser.uid).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Admin User Suspended', `Admin user ${adminUser.username} has been suspended successfully`);
            this.loadAdminUsers();
          }
        },
        error: (error) => {
          console.error('Error suspending admin user:', error);
          this.toastService.error('Error Suspending Admin User', 'Failed to suspend admin user');
        }
      });
    }
  }

  resetPassword(adminUser: AdminUserResponse) {
    if (confirm(`Are you sure you want to reset the password for admin user "${adminUser.username}"? A new secure password will be generated and sent to their email address.`)) {
      this.adminUserService.resetAdminUserPassword(adminUser.uid, {
        reason: 'Password reset initiated by administrator',
        requirePasswordChange: true,
        sendEmailNotification: true
      }).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Password Reset Successful', `A new secure password has been generated and sent to ${adminUser.email}`);
            this.loadAdminUsers();
          }
        },
        error: (error) => {
          console.error('Error resetting password:', error);
          
          // Display specific error message from API
          const errorMessage = error.error?.message || 'Failed to reset password. Please try again.';
          this.toastService.error('Password Reset Failed', errorMessage);
        }
      });
    }
  }
}
