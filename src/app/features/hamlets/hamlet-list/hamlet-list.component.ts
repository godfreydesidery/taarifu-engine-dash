import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HamletService } from '../../../core/services/hamlet.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { Hamlet } from '../../../core/models/hamlet.model';

@Component({
  selector: 'app-hamlet-list',
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
          <h1 class="h3 mb-1">Hamlets</h1>
          <p class="text-muted">Manage Tanzania hamlets</p>
        </div>
        <a routerLink="/hamlets/create" class="btn btn-primary">
          <i class="bi bi-plus-circle me-1"></i>
          Add New Hamlet
        </a>
      </div>

      <!-- Search Section -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Search hamlets..." 
                  [(ngModel)]="searchTerm" 
                  (input)="onSearch()">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hamlets Table -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">
            <i class="bi bi-house-door-fill me-2"></i>
            All Hamlets
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
            <p class="mt-2">Loading hamlets...</p>
          </div>

          <div *ngIf="!isLoading && hamlets.length === 0" class="text-center py-5">
            <i class="bi bi-house-door-fill text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No hamlets found</h4>
            <p class="text-muted">Start by creating your first hamlet.</p>
            <a routerLink="/hamlets/create" class="btn btn-primary">
              <i class="bi bi-plus-circle me-1"></i>
              Add Hamlet
            </a>
          </div>

          <div *ngIf="!isLoading && hamlets.length > 0" class="table-responsive">
            <table class="table table-hover">
              <thead class="table-light">
                <tr>
                  <th (click)="onSort('code', $event)" class="sortable">
                    Code
                    <i class="bi" [class.bi-arrow-up]="sortBy === 'code' && sortDir === 'asc'" [class.bi-arrow-down]="sortBy === 'code' && sortDir === 'desc'"></i>
                  </th>
                  <th (click)="onSort('name', $event)" class="sortable">
                    Name
                    <i class="bi" [class.bi-arrow-up]="sortBy === 'name' && sortDir === 'asc'" [class.bi-arrow-down]="sortBy === 'name' && sortDir === 'desc'"></i>
                  </th>
                  <th>Village</th>
                  <th>Ward</th>
                  <th>District</th>
                  <th>Region</th>
                  <th>Headquarters</th>
                  <th>Population</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let hamlet of hamlets">
                  <td>
                    <span class="badge bg-primary">{{ hamlet.code }}</span>
                  </td>
                  <td>
                    <strong>{{ hamlet.name }}</strong>
                  </td>
                  <td>
                    <span class="badge bg-info">{{ hamlet.villageName }}</span>
                  </td>
                  <td>
                    <span class="badge bg-secondary">{{ hamlet.wardName }}</span>
                  </td>
                  <td>
                    <span class="badge bg-warning text-dark">{{ hamlet.districtName }}</span>
                  </td>
                  <td>
                    <span class="badge bg-success">{{ hamlet.regionName }}</span>
                  </td>
                  <td>{{ hamlet.headquarters }}</td>
                  <td>{{ hamlet.population | number }}</td>
                  <td>
                    <span class="badge" [class.bg-success]="hamlet.isActive" [class.bg-secondary]="!hamlet.isActive">
                      {{ hamlet.isActive ? 'Active' : 'Inactive' }}
                    </span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <button type="button" class="btn btn-outline-primary" (click)="editHamlet(hamlet)">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-outline-warning" (click)="toggleStatus(hamlet)">
                        <i class="bi" [class.bi-pause]="hamlet.isActive" [class.bi-play]="!hamlet.isActive"></i>
                      </button>
                      <button type="button" class="btn btn-outline-danger" (click)="deleteHamlet(hamlet)">
                        <i class="bi bi-trash"></i>
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
  `]
})
export class HamletListComponent implements OnInit {
  hamlets: Hamlet[] = [];
  
  searchTerm = '';
  
  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  totalPages = 0;
  sortBy: string = 'name';
  sortDir: 'asc' | 'desc' = 'asc';
  
  isLoading = false;

  constructor(
    private hamletService: HamletService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    console.log('HamletListComponent initialized');
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
    
    this.loadHamlets();
  }

  loadHamlets() {
    this.isLoading = true;
    
    const observable = this.searchTerm 
      ? this.hamletService.searchHamlets(this.searchTerm, this.currentPage, this.pageSize, this.sortBy, this.sortDir)
      : this.hamletService.getAllHamlets(this.currentPage, this.pageSize, this.sortBy, this.sortDir);

    observable.subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Hamlets API Response:', response);
        this.hamlets = response.data || [];
        this.totalElements = response.totalElements || 0;
        this.totalPages = response.totalPages || 0;
        console.log('Loaded hamlets:', this.hamlets.length);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading hamlets:', error);
        console.error('Error status:', error.status);
        console.error('Error details:', error.error);
        
        if (error.status === 403) {
          console.error('403 Forbidden - Authentication/Authorization issue');
          console.error('Current token:', this.authService.getToken());
          this.toastService.error('Access Denied', 'Please log in again.');
          this.authService.logout();
          this.router.navigate(['/login']);
        } else if (error.status === 401) {
          console.error('401 Unauthorized - Token expired or invalid');
          this.toastService.error('Session Expired', 'Please log in again.');
          this.authService.logout();
          this.router.navigate(['/login']);
        } else {
          this.toastService.error('Error Loading Hamlets', error.error?.message || error.message || 'Unknown error occurred');
        }
      }
    });
  }

  onSearch() {
    this.currentPage = 0;
    this.loadHamlets();
  }

  onPageSizeChange() {
    this.currentPage = 0;
    this.loadHamlets();
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
    this.loadHamlets();
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadHamlets();
  }

  getPageNumbers(): number[] {
    const pageNumbers = [];
    for (let i = 0; i < this.totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  editHamlet(hamlet: Hamlet) {
    this.router.navigate(['/hamlets/edit', hamlet.uid]);
  }

  toggleStatus(hamlet: Hamlet) {
    this.hamletService.toggleHamletStatus(hamlet.uid).subscribe({
      next: (response) => {
        if (response.status) {
          this.toastService.success('Hamlet Updated', `Hamlet ${response.data.isActive ? 'activated' : 'deactivated'} successfully`);
          this.loadHamlets();
        }
      },
      error: (error) => {
        console.error('Error toggling hamlet status:', error);
        this.toastService.error('Error Updating Hamlet', 'Failed to update hamlet status');
      }
    });
  }

  deleteHamlet(hamlet: Hamlet) {
    if (confirm(`Are you sure you want to delete hamlet "${hamlet.name}"?`)) {
      this.hamletService.deleteHamlet(hamlet.uid).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Hamlet Deleted', 'Hamlet deleted successfully');
            this.loadHamlets();
          }
        },
        error: (error) => {
          console.error('Error deleting hamlet:', error);
          this.toastService.error('Error Deleting Hamlet', 'Failed to delete hamlet');
        }
      });
    }
  }
}
