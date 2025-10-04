import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { District } from '../../../core/models/district.model';
import { DistrictService } from '../../../core/services/district.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-district-list',
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
          <h1 class="h3 mb-1">Districts</h1>
          <p class="text-muted">Manage Tanzania districts</p>
        </div>
        <a routerLink="/districts/create" class="btn btn-primary">
          <i class="bi bi-plus-circle me-1"></i>
          Add District
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
                  placeholder="Search districts..." 
                  [(ngModel)]="searchTerm" 
                  (keyup.enter)="onSearch()">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Districts Table -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">
            <i class="bi bi-building me-2"></i>
            All Districts
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
            <p class="mt-2">Loading districts...</p>
          </div>

          <div *ngIf="!isLoading && districts.length === 0" class="text-center py-5">
            <i class="bi bi-building text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No districts found</h4>
            <p class="text-muted">Start by creating your first district.</p>
            <a routerLink="/districts/create" class="btn btn-primary">
              <i class="bi bi-plus-circle me-1"></i>
              Add District
            </a>
          </div>

          <div *ngIf="!isLoading && districts.length > 0" class="table-responsive">
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
                  <th>Region</th>
                  <th>Headquarters</th>
                  <th>Population</th>
                  <th>Area (km²)</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let district of districts">
                  <td>
                    <span class="badge bg-primary">{{ district.code }}</span>
                  </td>
                  <td>
                    <strong>{{ district.name }}</strong>
                  </td>
                  <td>
                    <span class="badge bg-success">{{ district.regionName }}</span>
                  </td>
                  <td>{{ district.headquarters }}</td>
                  <td>{{ district.population | number }}</td>
                  <td>{{ district.areaSqKm | number:'1.2-2' }}</td>
                  <td>
                    <span class="badge" [class.bg-success]="district.isActive" [class.bg-secondary]="!district.isActive">
                      {{ district.isActive ? 'Active' : 'Inactive' }}
                    </span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <button type="button" class="btn btn-outline-primary" (click)="editDistrict(district)">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-outline-warning" (click)="toggleStatus(district)">
                        <i class="bi" [class.bi-pause]="district.isActive" [class.bi-play]="!district.isActive"></i>
                      </button>
                      <button type="button" class="btn btn-outline-danger" (click)="deleteDistrict(district)">
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
export class DistrictListComponent implements OnInit {
  districts: District[] = [];
  searchTerm = '';
  isLoading = false;
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;
  totalElements = 0;
  sortBy: string = 'name';
  sortDir: 'asc' | 'desc' = 'asc';

  constructor(
    private districtService: DistrictService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    console.log('DistrictListComponent initialized');
    
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
    
    this.loadDistricts();
  }

  loadDistricts() {
    this.isLoading = true;
    
    const observable = this.searchTerm 
      ? this.districtService.searchDistricts(this.searchTerm, this.currentPage, this.pageSize, this.sortBy, this.sortDir)
      : this.districtService.getAllDistricts(this.currentPage, this.pageSize, this.sortBy, this.sortDir);

    observable.subscribe({
      next: (response) => {
        this.isLoading = false;
        this.districts = response.data || [];
        this.totalElements = response.totalElements || 0;
        this.totalPages = response.totalPages || 0;
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading districts:', error);
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
          this.toastService.error('Error Loading Districts', error.error?.message || error.message || 'Unknown error occurred');
        }
      }
    });
  }

  onSearch() {
    this.currentPage = 0;
    this.loadDistricts();
  }

  onPageSizeChange() {
    this.currentPage = 0;
    this.loadDistricts();
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
    this.loadDistricts();
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadDistricts();
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

  editDistrict(district: District) {
    window.location.href = `/districts/edit/${district.uid}`;
  }

  toggleStatus(district: District) {
    this.districtService.toggleDistrictStatus(district.uid).subscribe({
      next: (response) => {
        if (response.success) {
          this.toastService.success('District Updated', `District ${response.data.isActive ? 'activated' : 'deactivated'} successfully`);
          this.loadDistricts();
        }
      },
      error: (error) => {
        console.error('Error toggling district status:', error);
        this.toastService.error('Error Updating District', 'Failed to update district status');
      }
    });
  }

  deleteDistrict(district: District) {
    if (confirm(`Are you sure you want to delete district "${district.name}"?`)) {
      this.districtService.deleteDistrict(district.uid).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.success('District Deleted', 'District deleted successfully');
            this.loadDistricts();
          }
        },
        error: (error) => {
          console.error('Error deleting district:', error);
          this.toastService.error('Error Deleting District', 'Failed to delete district');
        }
      });
    }
  }
}
