import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ConstituencyService } from '../../../core/services/constituency.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { Constituency } from '../../../core/models/constituency.model';

@Component({
  selector: 'app-constituency-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="constituency-list-container">
      <!-- Search Card -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Search constituencies..." 
                  [(ngModel)]="searchTerm" 
                  (keyup.enter)="onSearch()">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Constituencies Table -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">
            <i class="bi bi-flag me-2"></i>
            All Constituencies
          </h5>
          <div class="d-flex align-items-center gap-2">
            <a routerLink="/constituencies/create" class="btn btn-primary btn-sm">
              <i class="bi bi-plus me-1"></i>
              New Constituency
            </a>
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
            <p class="mt-2">Loading constituencies...</p>
          </div>

          <div *ngIf="!isLoading && constituencies.length === 0" class="text-center py-5">
            <i class="bi bi-flag text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No constituencies found</h4>
            <p class="text-muted">Start by creating your first constituency.</p>
            <a routerLink="/constituencies/create" class="btn btn-primary">
              <i class="bi bi-plus-circle me-1"></i>
              Add Constituency
            </a>
          </div>

          <div *ngIf="!isLoading && constituencies.length > 0" class="table-responsive">
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
                <tr *ngFor="let constituency of constituencies">
                  <td>
                    <span class="badge bg-primary">{{ constituency.code }}</span>
                  </td>
                  <td>
                    <div>
                      <strong>{{ constituency.name }}</strong>
                      <br>
                      <small class="text-muted">{{ constituency.description || 'No description' }}</small>
                    </div>
                  </td>
                  <td>{{ constituency.headquarters }}</td>
                  <td>
                    <span class="badge bg-warning text-dark">{{ constituency.districtName }}</span>
                  </td>
                  <td>
                    <span class="badge bg-success">{{ constituency.regionName }}</span>
                  </td>
                  <td>{{ constituency.population | number }}</td>
                  <td>{{ constituency.areaSqKm | number:'1.1-1' }}</td>
                  <td>
                    <span class="badge" [class.bg-success]="constituency.isActive" [class.bg-danger]="!constituency.isActive">
                      {{ constituency.isActive ? 'Active' : 'Inactive' }}
                    </span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <button 
                        type="button" 
                        class="btn btn-outline-primary" 
                        [routerLink]="['/constituencies/edit', constituency.uid]"
                        title="Edit constituency">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button 
                        type="button" 
                        class="btn btn-outline-danger" 
                        (click)="deleteConstituency(constituency)"
                        title="Delete constituency">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div *ngIf="!isLoading && constituencies.length > 0" class="d-flex justify-content-between align-items-center mt-3">
            <div class="text-muted">
              Showing {{ (currentPage * pageSize) + 1 }} to {{ Math.min((currentPage + 1) * pageSize, totalElements) }} of {{ totalElements }} constituencies
            </div>
            <nav>
              <ul class="pagination pagination-sm mb-0">
                <li class="page-item" [class.disabled]="currentPage === 0">
                  <button class="page-link" (click)="goToPage(currentPage - 1)" [disabled]="currentPage === 0">
                    <i class="bi bi-chevron-left"></i>
                  </button>
                </li>
                <li class="page-item" *ngFor="let page of getPageNumbers()" [class.active]="page === currentPage">
                  <button class="page-link" (click)="goToPage(page)">{{ page + 1 }}</button>
                </li>
                <li class="page-item" [class.disabled]="currentPage === totalPages - 1">
                  <button class="page-link" (click)="goToPage(currentPage + 1)" [disabled]="currentPage === totalPages - 1">
                    <i class="bi bi-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .constituency-list-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
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
export class ConstituencyListComponent implements OnInit {
  constituencies: Constituency[] = [];
  
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
    private constituencyService: ConstituencyService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {
    // Check authentication
    if (!this.authService.isAuthenticated()) {
      this.toastService.error('Authentication Required', 'Please log in to access this page.');
      this.router.navigate(['/login']);
      return;
    }

    this.loadConstituencies();
  }

  loadConstituencies() {
    this.isLoading = true;
    const observable = this.searchTerm 
      ? this.constituencyService.searchConstituencies(this.searchTerm, this.currentPage, this.pageSize, this.sortBy, this.sortDir)
      : this.constituencyService.getAllConstituencies(this.currentPage, this.pageSize, this.sortBy, this.sortDir);

    observable.subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status) {
          this.constituencies = response.data;
          this.totalElements = response.totalElements;
          this.totalPages = response.totalPages;
        } else {
          this.toastService.error('Error', 'Failed to load constituencies');
          this.constituencies = [];
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading constituencies:', error);
        
        if (error.status === 401 || error.status === 403) {
          this.toastService.error('Authentication Error', 'Your session has expired. Please log in again.');
          this.router.navigate(['/login']);
        } else {
          this.toastService.error('Error', 'Failed to load constituencies. Please try again.');
        }
        this.constituencies = [];
      }
    });
  }

  onSearch() {
    this.currentPage = 0;
    this.loadConstituencies();
  }

  onPageSizeChange() {
    this.currentPage = 0;
    this.loadConstituencies();
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
    this.loadConstituencies();
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadConstituencies();
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(0, this.currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1);
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  deleteConstituency(constituency: Constituency) {
    if (confirm(`Are you sure you want to delete the constituency "${constituency.name}"?`)) {
      this.constituencyService.deleteConstituency(constituency.uid).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Success', 'Constituency deleted successfully');
            this.loadConstituencies();
          } else {
            this.toastService.error('Error', 'Failed to delete constituency');
          }
        },
        error: (error) => {
          console.error('Error deleting constituency:', error);
          this.toastService.error('Error', 'Failed to delete constituency. Please try again.');
        }
      });
    }
  }

  // Expose Math to template
  Math = Math;
}
