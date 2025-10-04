import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ParliamentService } from '../../../core/services/parliament.service';
import { ToastService } from '../../../core/services/toast.service';
import { AuthService } from '../../../core/services/auth.service';
import { Parliament, ParliamentHelper } from '../../../core/models/parliament.model';
import { PageResponse } from '../../../core/models/auth.model';

@Component({
  selector: 'app-parliament-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container-fluid">
      <!-- Search Card -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-4">
              <label for="searchTerm" class="form-label">Search Parliaments</label>
              <input 
                type="text" 
                class="form-control" 
                id="searchTerm"
                [(ngModel)]="searchTerm"
                placeholder="Search by name, code or description..."
                (keyup.enter)="onSearch()">
            </div>
            <div class="col-md-3">
              <label for="statusFilter" class="form-label">Filter by Status</label>
              <select 
                class="form-select" 
                id="statusFilter"
                [(ngModel)]="statusFilter"
                (change)="onStatusChange()">
                <option value="">All Status</option>
                <option value="current">Current</option>
                <option value="active">Active</option>
                <option value="inSession">In Session</option>
                <option value="ended">Ended</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="sortBy" class="form-label">Sort By</label>
              <select 
                class="form-select" 
                id="sortBy"
                [(ngModel)]="sortBy"
                (change)="onSortChange()">
                <option value="startDate">Start Date</option>
                <option value="endDate">End Date</option>
                <option value="name">Name</option>
                <option value="code">Code</option>
                <option value="createdAt">Created Date</option>
              </select>
            </div>
            <div class="col-md-2 d-flex align-items-end">
              <button 
                type="button" 
                class="btn btn-primary me-2"
                (click)="onSearch()"
                [disabled]="isLoading">
                <i class="bi bi-search me-1"></i>
                Search
              </button>
              <button 
                type="button" 
                class="btn btn-outline-secondary"
                (click)="onClearSearch()"
                [disabled]="isLoading">
                <i class="bi bi-x-circle me-1"></i>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Parliaments Table -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">
            <i class="bi bi-building me-2"></i>
            All Parliaments
          </h5>
          <div class="d-flex align-items-center gap-2">
            <a routerLink="/parliaments/create" class="btn btn-primary btn-sm">
              <i class="bi bi-plus me-1"></i>
              New Parliament
            </a>
            <span class="text-muted me-2">Page Size:</span>
            <select class="form-select form-select-sm w-auto" [(ngModel)]="pageSize" (change)="onPageSizeChange()">
              <option [value]="10">10</option>
              <option [value]="20">20</option>
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
            <p class="mt-2">Loading parliaments...</p>
          </div>

          <div *ngIf="!isLoading && parliaments.length === 0" class="text-center py-4">
            <i class="bi bi-building display-1 text-muted"></i>
            <h5 class="mt-3">No Parliaments Found</h5>
            <p class="text-muted">No parliaments match your search criteria.</p>
          </div>

          <div *ngIf="!isLoading && parliaments.length > 0" class="table-responsive">
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
                  <th>Date Range</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Session</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let parliament of parliaments">
                  <td>
                    <span class="badge bg-primary">{{ parliament.code }}</span>
                  </td>
                  <td>
                    <div>
                      <strong>{{ parliament.name }}</strong>
                      <br>
                      <small class="text-muted">{{ parliament.description || 'No description' }}</small>
                    </div>
                  </td>
                  <td>
                    <div>
                      <strong>{{ ParliamentHelper.formatDate(parliament.startDate) }}</strong>
                      <br>
                      <small class="text-muted">to {{ ParliamentHelper.formatDate(parliament.endDate) }}</small>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-info">{{ ParliamentHelper.getDurationText(parliament) }}</span>
                  </td>
                  <td>
                    <span class="badge" [ngClass]="ParliamentHelper.getStatusBadgeClass(parliament)">
                      {{ ParliamentHelper.getStatusText(parliament) }}
                    </span>
                  </td>
                  <td>
                    <span class="badge" [class.bg-success]="parliament.inSession" [class.bg-secondary]="!parliament.inSession">
                      {{ parliament.inSession ? 'In Session' : 'Not in Session' }}
                    </span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <button 
                        type="button" 
                        class="btn btn-outline-primary" 
                        [routerLink]="['/parliaments/edit', parliament.uid]"
                        title="Edit parliament">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button 
                        *ngIf="!parliament.isCurrent"
                        type="button" 
                        class="btn btn-outline-success" 
                        (click)="setCurrentParliament(parliament)"
                        title="Set as current">
                        <i class="bi bi-star"></i>
                      </button>
                      <button 
                        type="button" 
                        class="btn btn-outline-danger" 
                        (click)="deleteParliament(parliament)"
                        title="Delete parliament">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div *ngIf="!isLoading && totalPages > 1" class="d-flex justify-content-between align-items-center mt-4">
            <div class="text-muted">
              Showing {{ (currentPage * pageSize) + 1 }} to {{ Math.min((currentPage + 1) * pageSize, totalElements) }} of {{ totalElements }} parliaments
            </div>
            <nav>
              <ul class="pagination pagination-sm mb-0">
                <li class="page-item" [class.disabled]="currentPage === 0">
                  <button class="page-link" (click)="onPageChange(currentPage - 1)" [disabled]="currentPage === 0">
                    <i class="bi bi-chevron-left"></i>
                  </button>
                </li>
                <li 
                  *ngFor="let page of getPageNumbers()" 
                  class="page-item" 
                  [class.active]="page === currentPage">
                  <button class="page-link" (click)="onPageChange(page)">{{ page + 1 }}</button>
                </li>
                <li class="page-item" [class.disabled]="currentPage === totalPages - 1">
                  <button class="page-link" (click)="onPageChange(currentPage + 1)" [disabled]="currentPage === totalPages - 1">
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
    .sortable {
      cursor: pointer;
      user-select: none;
    }
    .sortable:hover {
      background-color: #f8f9fa;
    }
    .table th.sortable {
      position: relative;
    }
    .table th.sortable i {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.8rem;
    }
    .badge {
      font-size: 0.75rem;
    }
  `]
})
export class ParliamentListComponent implements OnInit {
  parliaments: Parliament[] = [];
  isLoading = false;
  currentPage = 0;
  pageSize = 20;
  totalPages = 0;
  totalElements = 0;
  searchTerm = '';
  statusFilter = '';
  sortBy = 'startDate';
  sortDir: 'asc' | 'desc' = 'desc';

  // Expose helper class to template
  ParliamentHelper = ParliamentHelper;
  Math = Math;

  constructor(
    private parliamentService: ParliamentService,
    private toastService: ToastService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadParliaments();
  }

  private loadParliaments() {
    this.isLoading = true;
    
    let request: Observable<PageResponse<Parliament>>;
    
    console.log('Loading parliaments with searchTerm:', this.searchTerm, 'statusFilter:', this.statusFilter);
    
    if (this.searchTerm && this.searchTerm.trim()) {
      console.log('Using searchParliaments with term:', this.searchTerm.trim());
      request = this.parliamentService.searchParliaments(
        this.searchTerm.trim(),
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortDir
      );
    } else if (this.statusFilter) {
      console.log('Using getActiveParliaments');
      request = this.parliamentService.getActiveParliaments(
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortDir
      );
    } else {
      console.log('Using getAllParliaments');
      request = this.parliamentService.getAllParliaments(
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortDir
      );
    }

    request.subscribe({
      next: (response: PageResponse<Parliament>) => {
        this.isLoading = false;
        if (response.status) {
          this.parliaments = response.data;
          this.totalPages = response.totalPages;
          this.totalElements = response.totalElements;
        } else {
          this.toastService.error('Error', 'Failed to load parliaments');
        }
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('Error loading parliaments:', error);
        this.toastService.error('Error', 'Failed to load parliaments. Please try again.');
      }
    });
  }

  onSearch() {
    console.log('Search triggered with term:', this.searchTerm);
    this.currentPage = 0;
    this.loadParliaments();
  }

  onClearSearch() {
    this.searchTerm = '';
    this.statusFilter = '';
    this.currentPage = 0;
    this.loadParliaments();
  }

  onStatusChange() {
    this.currentPage = 0;
    this.loadParliaments();
  }

  onSortChange() {
    this.currentPage = 0;
    this.loadParliaments();
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
    this.loadParliaments();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadParliaments();
  }

  onPageSizeChange() {
    this.currentPage = 0;
    this.loadParliaments();
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

  setCurrentParliament(parliament: Parliament) {
    if (confirm(`Are you sure you want to set "${parliament.name}" as the current parliament?`)) {
      this.parliamentService.setCurrentParliamentByUid(parliament.uid).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Success', 'Parliament set as current successfully');
            this.loadParliaments();
          } else {
            this.toastService.error('Error', 'Failed to set parliament as current');
          }
        },
        error: (error) => {
          console.error('Error setting current parliament:', error);
          this.toastService.error('Error', 'Failed to set parliament as current. Please try again.');
        }
      });
    }
  }

  deleteParliament(parliament: Parliament) {
    if (confirm(`Are you sure you want to delete "${parliament.name}"? This action cannot be undone.`)) {
      this.parliamentService.deleteParliamentByUid(parliament.uid).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Success', 'Parliament deleted successfully');
            this.loadParliaments();
          } else {
            this.toastService.error('Error', 'Failed to delete parliament');
          }
        },
        error: (error) => {
          console.error('Error deleting parliament:', error);
          this.toastService.error('Error', 'Failed to delete parliament. Please try again.');
        }
      });
    }
  }
}
