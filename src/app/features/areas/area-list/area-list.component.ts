import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AreaService } from '../../../core/services/area.service';
import { ToastService } from '../../../core/services/toast.service';
import { AuthService } from '../../../core/services/auth.service';
import { Area, AreaType, AreaTypeHelper } from '../../../core/models/area.model';
import { PageResponse } from '../../../core/models/auth.model';

@Component({
  selector: 'app-area-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container-fluid">
      <!-- Search Card -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-4">
              <label for="searchTerm" class="form-label">Search Areas</label>
              <input 
                type="text" 
                class="form-control" 
                id="searchTerm"
                [(ngModel)]="searchTerm"
                placeholder="Search by name, code or area type..."
                (keyup.enter)="onSearch()">
            </div>
            <div class="col-md-3">
              <label for="areaTypeFilter" class="form-label">Filter by Type</label>
              <select 
                class="form-select" 
                id="areaTypeFilter"
                [(ngModel)]="selectedAreaType"
                (change)="onAreaTypeChange()">
                <option value="">All Types</option>
                <option *ngFor="let type of areaTypes" [value]="type">{{ AreaTypeHelper.getDisplayName(type) }}</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="sortBy" class="form-label">Sort By</label>
              <select 
                class="form-select" 
                id="sortBy"
                [(ngModel)]="sortBy"
                (change)="onSortChange()">
                <option value="code">Code</option>
                <option value="areaType">Type</option>
                <option value="areaId">Area ID</option>
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

      <!-- Areas Table -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">
            <i class="bi bi-geo-alt me-2"></i>
            All Areas
          </h5>
          <div class="d-flex align-items-center gap-2">
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
            <p class="mt-2">Loading areas...</p>
          </div>

          <div *ngIf="!isLoading && areas.length === 0" class="text-center py-4">
            <i class="bi bi-inbox display-1 text-muted"></i>
            <h5 class="mt-3">No Areas Found</h5>
            <p class="text-muted">No areas match your search criteria.</p>
          </div>

          <div *ngIf="!isLoading && areas.length > 0" class="table-responsive">
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
                  <th (click)="onSort('areaType', $event)" class="sortable">
                    Type
                    <i class="bi" [class.bi-arrow-up]="sortBy === 'areaType' && sortDir === 'asc'" [class.bi-arrow-down]="sortBy === 'areaType' && sortDir === 'desc'"></i>
                  </th>
                  <th>Level</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let area of areas">
                  <td>
                    <span class="badge bg-primary">{{ area.code }}</span>
                  </td>
                  <td>
                    <strong>{{ area.name }}</strong>
                  </td>
                  <td>
                    <span 
                      class="badge" 
                      [style.background-color]="AreaTypeHelper.getColorCode(area.areaType)"
                      [style.color]="'white'">
                      <i class="bi" [ngClass]="getAreaTypeIcon(area.areaType)" style="margin-right: 4px;"></i>
                      {{ AreaTypeHelper.getDisplayName(area.areaType) }}
                    </span>
                  </td>
                  <td>
                    <span class="badge bg-info">{{ AreaTypeHelper.getLevel(area.areaType) }}</span>
                  </td>
                  <td>
                    <span 
                      class="badge" 
                      [class.bg-success]="AreaTypeHelper.isAdministrative(area.areaType)"
                      [class.bg-warning]="AreaTypeHelper.isPolitical(area.areaType)">
                      {{ AreaTypeHelper.isAdministrative(area.areaType) ? 'Administrative' : 'Political' }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div *ngIf="!isLoading && totalPages > 1" class="d-flex justify-content-between align-items-center mt-4">
            <div class="text-muted">
              Showing {{ (currentPage * pageSize) + 1 }} to {{ Math.min((currentPage + 1) * pageSize, totalElements) }} of {{ totalElements }} areas
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
    code {
      font-size: 0.8rem;
    }
  `]
})
export class AreaListComponent implements OnInit {
  areas: Area[] = [];
  areaTypes = AreaTypeHelper.getAllTypes();
  isLoading = false;
  currentPage = 0;
  pageSize = 20;
  totalPages = 0;
  totalElements = 0;
  searchTerm = '';
  selectedAreaType: AreaType | '' = '';
  sortBy = 'code';
  sortDir: 'asc' | 'desc' = 'asc';

  // Expose helper class to template
  AreaTypeHelper = AreaTypeHelper;
  Math = Math;

  constructor(
    private areaService: AreaService,
    private toastService: ToastService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadAreas();
  }

  private loadAreas() {
    this.isLoading = true;
    
    let request: Observable<PageResponse<Area>>;
    
    console.log('Loading areas with searchTerm:', this.searchTerm, 'selectedAreaType:', this.selectedAreaType);
    
    if (this.searchTerm && this.searchTerm.trim()) {
      if (this.selectedAreaType) {
        console.log('Using searchAreasByType with type:', this.selectedAreaType, 'term:', this.searchTerm.trim());
        request = this.areaService.searchAreasByType(
          this.selectedAreaType as AreaType,
          this.searchTerm.trim(),
          this.currentPage,
          this.pageSize,
          this.sortBy,
          this.sortDir
        );
      } else {
        console.log('Using searchAreas with term:', this.searchTerm.trim());
        request = this.areaService.searchAreas(
          this.searchTerm.trim(),
          this.currentPage,
          this.pageSize,
          this.sortBy,
          this.sortDir
        );
      }
    } else if (this.selectedAreaType) {
      console.log('Using getAreasByType with type:', this.selectedAreaType);
      request = this.areaService.getAreasByType(
        this.selectedAreaType as AreaType,
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortDir
      );
    } else {
      console.log('Using getAllAreas');
      request = this.areaService.getAllAreas(
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortDir
      );
    }

    request.subscribe({
      next: (response: PageResponse<Area>) => {
        this.isLoading = false;
        if (response.status) {
          this.areas = response.data;
          this.totalPages = response.totalPages;
          this.totalElements = response.totalElements;
        } else {
          this.toastService.error('Error', 'Failed to load areas');
        }
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('Error loading areas:', error);
        this.toastService.error('Error', 'Failed to load areas. Please try again.');
      }
    });
  }

  onSearch() {
    console.log('Search triggered with term:', this.searchTerm);
    this.currentPage = 0;
    this.loadAreas();
  }

  onClearSearch() {
    this.searchTerm = '';
    this.selectedAreaType = '';
    this.currentPage = 0;
    this.loadAreas();
  }

  onAreaTypeChange() {
    this.currentPage = 0;
    this.loadAreas();
  }

  onSortChange() {
    this.currentPage = 0;
    this.loadAreas();
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
    this.loadAreas();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadAreas();
  }

  onPageSizeChange() {
    this.currentPage = 0;
    this.loadAreas();
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

  getAreaTypeIcon(areaType: AreaType): string {
    switch (areaType) {
      case AreaType.REGION:
        return 'bi-geo-alt-fill';
      case AreaType.DISTRICT:
        return 'bi-building';
      case AreaType.WARD:
        return 'bi-house';
      case AreaType.VILLAGE:
        return 'bi-house-door';
      case AreaType.HAMLET:
        return 'bi-house-door-fill';
      case AreaType.CONSTITUENCY:
        return 'bi-flag-fill';
      default:
        return 'bi-question-circle';
    }
  }
}
