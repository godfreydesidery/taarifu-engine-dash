import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WardService } from '../../../core/services/ward.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Ward } from '../../../core/models/ward.model';

@Component({
  selector: 'app-ward-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  template: `
    <div class="ward-list-container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">Wards Management</h1>
          <p class="text-muted">Manage all wards in the system</p>
        </div>
        <a routerLink="/wards/create" class="btn btn-primary">
          <i class="bi bi-plus-circle me-1"></i>
          Add New Ward
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
                  placeholder="Search wards..." 
                  [(ngModel)]="searchTerm" 
                  (keyup.enter)="onSearch()">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wards Table -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">
            <i class="bi bi-house me-2"></i>
            All Wards
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
            <p class="mt-2">Loading wards...</p>
          </div>

          <div *ngIf="!isLoading && wards.length === 0" class="text-center py-5">
            <i class="bi bi-house text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No wards found</h4>
            <p class="text-muted">Start by creating your first ward.</p>
            <a routerLink="/wards/create" class="btn btn-primary">
              <i class="bi bi-plus-circle me-1"></i>
              Add Ward
            </a>
          </div>

          <div *ngIf="!isLoading && wards.length > 0" class="table-responsive">
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
                  <th>Headquarters</th>
                  <th>District</th>
                  <th>Region</th>
                  <th>Population</th>
                  <th>Area (km²)</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let ward of wards">
                  <td>
                    <span class="badge bg-primary">{{ ward.code }}</span>
                  </td>
                  <td>
                    <div>
                      <strong>{{ ward.name }}</strong>
                      <br>
                      <small class="text-muted">{{ ward.executiveOfficer }}</small>
                    </div>
                  </td>
                  <td>{{ ward.headquarters }}</td>
                  <td>
                    <span class="badge bg-warning text-dark">{{ ward.districtName }}</span>
                  </td>
                  <td>
                    <span class="badge bg-success">{{ ward.regionName }}</span>
                  </td>
                  <td>{{ ward.population | number }}</td>
                  <td>{{ ward.areaSqKm | number:'1.1-1' }}</td>
                  <td>
                    <span class="badge" [class.bg-success]="ward.isActive" [class.bg-danger]="!ward.isActive">
                      {{ ward.isActive ? 'Active' : 'Inactive' }}
                    </span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <a [routerLink]="['/wards/edit', ward.uid]" class="btn btn-outline-primary" title="Edit">
                        <i class="bi bi-pencil"></i>
                      </a>
                      <button class="btn btn-outline-danger" (click)="onDelete(ward)" title="Delete">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Pagination -->
        <div *ngIf="!isLoading && totalPages > 1" class="card-footer">
          <nav aria-label="Wards pagination">
            <ul class="pagination pagination-sm justify-content-center mb-0">
              <li class="page-item" [class.disabled]="currentPage === 0">
                <a class="page-link" href="#" (click)="onPageChange(currentPage - 1, $event)">Previous</a>
              </li>
              
              <li *ngFor="let page of getPageNumbers()" class="page-item" [class.active]="page === currentPage">
                <a class="page-link" href="#" (click)="onPageChange(page, $event)">{{ page + 1 }}</a>
              </li>
              
              <li class="page-item" [class.disabled]="currentPage === totalPages - 1">
                <a class="page-link" href="#" (click)="onPageChange(currentPage + 1, $event)">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ward-list-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .table th {
      border-top: none;
      font-weight: 600;
      color: #495057;
    }

    .table td {
      vertical-align: middle;
    }

    .badge {
      font-size: 0.75rem;
    }

    .btn-group-sm .btn {
      padding: 0.25rem 0.5rem;
    }

    .pagination {
      margin-bottom: 0;
    }

    .card {
      border: none;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    }

    .card-header {
      background-color: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
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
export class WardListComponent implements OnInit {
  wards: Ward[] = [];
  
  // Search properties
  searchTerm = '';
  
  // Pagination properties
  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  totalPages = 0;
  
  // Sorting properties
  sortBy = 'name';
  sortDir: 'asc' | 'desc' = 'asc';
  
  // Loading state
  isLoading = false;

  constructor(
    private wardService: WardService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('WardListComponent initialized');
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
    
    this.loadWards();
  }

  loadWards() {
    this.isLoading = true;
    
    const observable = this.searchTerm 
      ? this.wardService.searchWards(this.searchTerm, this.currentPage, this.pageSize, this.sortBy, this.sortDir)
      : this.wardService.getAllWards(this.currentPage, this.pageSize, this.sortBy, this.sortDir);

    observable.subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Wards API Response:', response);
        this.wards = response.data || [];
        this.totalElements = response.totalElements || 0;
        this.totalPages = response.totalPages || 0;
        console.log('Loaded wards:', this.wards.length);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading wards:', error);
        console.error('Error status:', error.status);
        console.error('Error details:', error.error);
        
        if (error.status === 403) {
          console.error('403 Forbidden - Authentication/Authorization issue');
          console.error('Current token:', this.authService.getToken());
          alert('Access denied. Please log in again.');
          this.authService.logout();
          this.router.navigate(['/login']);
        } else if (error.status === 401) {
          console.error('401 Unauthorized - Token expired or invalid');
          alert('Session expired. Please log in again.');
          this.authService.logout();
          this.router.navigate(['/login']);
        } else {
          alert(`Error loading wards: ${error.error?.message || error.message || 'Unknown error'}`);
        }
      }
    });
  }

  onSearch() {
    this.currentPage = 0;
    this.loadWards();
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
    this.loadWards();
  }

  onPageChange(page: number, event: Event) {
    event.preventDefault();
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadWards();
    }
  }

  onPageSizeChange() {
    this.currentPage = 0;
    this.loadWards();
  }

  onDelete(ward: Ward) {
    if (confirm(`Are you sure you want to delete the ward "${ward.name}"?`)) {
      this.wardService.deleteWard(ward.uid).subscribe({
        next: (response) => {
          if (response.status) {
            alert('Ward deleted successfully!');
            this.loadWards();
          }
        },
        error: (error) => {
          console.error('Error deleting ward:', error);
          alert(`Error deleting ward: ${error.error?.message || error.message || 'Unknown error'}`);
        }
      });
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
}
