import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { PoliticalPartyService } from '../../../core/services/political-party.service';
import { ToastService } from '../../../core/services/toast.service';
import { AuthService } from '../../../core/services/auth.service';
import { PoliticalParty, PoliticalPartyHelper } from '../../../core/models/political-party.model';
import { PageResponse } from '../../../core/models/auth.model';

@Component({
  selector: 'app-political-party-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container-fluid">
      <!-- Search Card -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-3">
              <label for="searchTerm" class="form-label">Search Political Parties</label>
              <input 
                type="text" 
                class="form-control" 
                id="searchTerm"
                [(ngModel)]="searchTerm"
                placeholder="Search by name, abbreviation, ideology..."
                (keyup.enter)="onSearch()">
            </div>
            <div class="col-md-2">
              <label for="statusFilter" class="form-label">Filter by Status</label>
              <select 
                class="form-select" 
                id="statusFilter"
                [(ngModel)]="statusFilter"
                (change)="onStatusChange()">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="registered">Registered</option>
                <option value="operational">Operational</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="ideologyFilter" class="form-label">Filter by Ideology</label>
              <input 
                type="text" 
                class="form-control" 
                id="ideologyFilter"
                [(ngModel)]="ideologyFilter"
                placeholder="Enter ideology"
                (keyup.enter)="onSearch()">
            </div>
            <div class="col-md-2">
              <label for="foundingYearFilter" class="form-label">Founding Year</label>
              <input 
                type="number" 
                class="form-control" 
                id="foundingYearFilter"
                [(ngModel)]="foundingYearFilter"
                placeholder="Year"
                min="1800"
                max="2024"
                (keyup.enter)="onSearch()">
            </div>
            <div class="col-md-2">
              <label for="sortBy" class="form-label">Sort By</label>
              <select 
                class="form-select" 
                id="sortBy"
                [(ngModel)]="sortBy"
                (change)="onSortChange()">
                <option value="name">Name</option>
                <option value="abbreviation">Abbreviation</option>
                <option value="foundingDate">Founding Date</option>
                <option value="memberCount">Member Count</option>
                <option value="createdAt">Created Date</option>
              </select>
            </div>
            <div class="col-md-1 d-flex align-items-end">
              <button 
                type="button" 
                class="btn btn-primary me-2"
                (click)="onSearch()"
                [disabled]="isLoading">
                <i class="bi bi-search me-1"></i>
                Search
              </button>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12">
              <button 
                type="button" 
                class="btn btn-outline-secondary btn-sm"
                (click)="onClearSearch()"
                [disabled]="isLoading">
                <i class="bi bi-x-circle me-1"></i>
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Political Parties Table -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">
            <i class="bi bi-flag me-2"></i>
            All Political Parties
          </h5>
          <div class="d-flex align-items-center gap-2">
            <a routerLink="/political-parties/create" class="btn btn-primary btn-sm">
              <i class="bi bi-plus me-1"></i>
              New Political Party
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
            <p class="mt-2">Loading political parties...</p>
          </div>

          <div *ngIf="!isLoading && politicalParties.length === 0" class="text-center py-4">
            <i class="bi bi-flag display-1 text-muted"></i>
            <h5 class="mt-3">No Political Parties Found</h5>
            <p class="text-muted">No political parties match your search criteria.</p>
          </div>

          <div *ngIf="!isLoading && politicalParties.length > 0" class="table-responsive">
            <table class="table table-hover">
              <thead class="table-light">
                <tr>
                  <th (click)="onSort('name', $event)" class="sortable">
                    Name
                    <i class="bi" [class.bi-arrow-up]="sortBy === 'name' && sortDir === 'asc'" [class.bi-arrow-down]="sortBy === 'name' && sortDir === 'desc'"></i>
                  </th>
                  <th (click)="onSort('abbreviation', $event)" class="sortable">
                    Abbreviation
                    <i class="bi" [class.bi-arrow-up]="sortBy === 'abbreviation' && sortDir === 'asc'" [class.bi-arrow-down]="sortBy === 'abbreviation' && sortDir === 'desc'"></i>
                  </th>
                  <th>Ideology</th>
                  <th>Founded</th>
                  <th>Members</th>
                  <th>Status</th>
                  <th>Registration</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let party of politicalParties">
                  <td>
                    <div>
                      <strong>{{ party.name }}</strong>
                      <br>
                      <small class="text-muted">{{ party.description || 'No description' }}</small>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-primary">{{ party.abbreviation }}</span>
                  </td>
                  <td>
                    <span class="badge bg-info">{{ party.ideology || 'Not specified' }}</span>
                  </td>
                  <td>
                    <div>
                      <strong>{{ PoliticalPartyHelper.formatDate(party.foundingDate) }}</strong>
                      <br>
                      <small class="text-muted">{{ PoliticalPartyHelper.getAgeText(party) }}</small>
                    </div>
                  </td>
                  <td>
                    <span class="badge bg-secondary">{{ PoliticalPartyHelper.getMemberCountText(party) }}</span>
                  </td>
                  <td>
                    <span class="badge" [ngClass]="PoliticalPartyHelper.getStatusBadgeClass(party)">
                      {{ PoliticalPartyHelper.getStatusText(party) }}
                    </span>
                  </td>
                  <td>
                    <span class="badge" [ngClass]="PoliticalPartyHelper.getRegistrationStatusBadgeClass(party)">
                      {{ PoliticalPartyHelper.getRegistrationStatusText(party) }}
                    </span>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm" role="group">
                      <button 
                        type="button" 
                        class="btn btn-outline-primary" 
                        [routerLink]="['/political-parties/edit', party.uid]"
                        title="Edit political party">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button 
                        *ngIf="!party.isActive"
                        type="button" 
                        class="btn btn-outline-success" 
                        (click)="activateParty(party)"
                        title="Activate party">
                        <i class="bi bi-check-circle"></i>
                      </button>
                      <button 
                        *ngIf="party.isActive"
                        type="button" 
                        class="btn btn-outline-warning" 
                        (click)="deactivateParty(party)"
                        title="Deactivate party">
                        <i class="bi bi-x-circle"></i>
                      </button>
                      <button 
                        *ngIf="!party.isRegistered"
                        type="button" 
                        class="btn btn-outline-info" 
                        (click)="registerParty(party)"
                        title="Register party">
                        <i class="bi bi-person-check"></i>
                      </button>
                      <button 
                        type="button" 
                        class="btn btn-outline-danger" 
                        (click)="deleteParty(party)"
                        title="Delete party">
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
              Showing {{ (currentPage * pageSize) + 1 }} to {{ Math.min((currentPage + 1) * pageSize, totalElements) }} of {{ totalElements }} political parties
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
export class PoliticalPartyListComponent implements OnInit {
  politicalParties: PoliticalParty[] = [];
  isLoading = false;
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;
  totalElements = 0;
  searchTerm = '';
  statusFilter = '';
  ideologyFilter = '';
  foundingYearFilter: number | null = null;
  sortBy = 'name';
  sortDir: 'asc' | 'desc' = 'asc';

  // Expose helper class to template
  PoliticalPartyHelper = PoliticalPartyHelper;
  Math = Math;

  constructor(
    private politicalPartyService: PoliticalPartyService,
    private toastService: ToastService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadPoliticalParties();
  }

  private loadPoliticalParties() {
    this.isLoading = true;
    
    let request: Observable<PageResponse<PoliticalParty>>;
    
    console.log('Loading political parties with searchTerm:', this.searchTerm, 'statusFilter:', this.statusFilter);
    
    if (this.searchTerm && this.searchTerm.trim()) {
      console.log('Using searchPoliticalParties with term:', this.searchTerm.trim());
      request = this.politicalPartyService.searchPoliticalParties(
        this.searchTerm.trim(),
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortDir
      );
    } else if (this.statusFilter) {
      console.log('Using status filter:', this.statusFilter);
      switch (this.statusFilter) {
        case 'active':
          request = this.politicalPartyService.getActivePoliticalParties(
            this.currentPage,
            this.pageSize,
            this.sortBy,
            this.sortDir
          );
          break;
        case 'registered':
          request = this.politicalPartyService.getRegisteredPoliticalParties(
            this.currentPage,
            this.pageSize,
            this.sortBy,
            this.sortDir
          );
          break;
        case 'operational':
          request = this.politicalPartyService.getOperationalPoliticalParties(
            this.currentPage,
            this.pageSize,
            this.sortBy,
            this.sortDir
          );
          break;
        default:
          request = this.politicalPartyService.getAllPoliticalParties(
            this.currentPage,
            this.pageSize,
            this.sortBy,
            this.sortDir
          );
      }
    } else if (this.ideologyFilter && this.ideologyFilter.trim()) {
      console.log('Using getPoliticalPartiesByIdeology with ideology:', this.ideologyFilter.trim());
      request = this.politicalPartyService.getPoliticalPartiesByIdeology(
        this.ideologyFilter.trim(),
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortDir
      );
    } else if (this.foundingYearFilter) {
      console.log('Using getPoliticalPartiesByFoundingYear with year:', this.foundingYearFilter);
      request = this.politicalPartyService.getPoliticalPartiesByFoundingYear(
        this.foundingYearFilter,
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortDir
      );
    } else {
      console.log('Using getAllPoliticalParties');
      request = this.politicalPartyService.getAllPoliticalParties(
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortDir
      );
    }

    request.subscribe({
      next: (response: PageResponse<PoliticalParty>) => {
        this.isLoading = false;
        if (response.status) {
          this.politicalParties = response.data;
          this.totalPages = response.totalPages;
          this.totalElements = response.totalElements;
        } else {
          this.toastService.error('Error', 'Failed to load political parties');
        }
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('Error loading political parties:', error);
        this.toastService.error('Error', 'Failed to load political parties. Please try again.');
      }
    });
  }

  onSearch() {
    console.log('Search triggered with term:', this.searchTerm);
    this.currentPage = 0;
    this.loadPoliticalParties();
  }

  onClearSearch() {
    this.searchTerm = '';
    this.statusFilter = '';
    this.ideologyFilter = '';
    this.foundingYearFilter = null;
    this.currentPage = 0;
    this.loadPoliticalParties();
  }

  onStatusChange() {
    this.currentPage = 0;
    this.loadPoliticalParties();
  }

  onSortChange() {
    this.currentPage = 0;
    this.loadPoliticalParties();
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
    this.loadPoliticalParties();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadPoliticalParties();
  }

  onPageSizeChange() {
    this.currentPage = 0;
    this.loadPoliticalParties();
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

  activateParty(party: PoliticalParty) {
    if (confirm(`Are you sure you want to activate "${party.name}"?`)) {
      this.politicalPartyService.activatePoliticalParty(party.id).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Success', 'Political party activated successfully');
            this.loadPoliticalParties();
          } else {
            this.toastService.error('Error', 'Failed to activate political party');
          }
        },
        error: (error) => {
          console.error('Error activating political party:', error);
          this.toastService.error('Error', 'Failed to activate political party. Please try again.');
        }
      });
    }
  }

  deactivateParty(party: PoliticalParty) {
    if (confirm(`Are you sure you want to deactivate "${party.name}"?`)) {
      this.politicalPartyService.deactivatePoliticalParty(party.id).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Success', 'Political party deactivated successfully');
            this.loadPoliticalParties();
          } else {
            this.toastService.error('Error', 'Failed to deactivate political party');
          }
        },
        error: (error) => {
          console.error('Error deactivating political party:', error);
          this.toastService.error('Error', 'Failed to deactivate political party. Please try again.');
        }
      });
    }
  }

  registerParty(party: PoliticalParty) {
    if (confirm(`Are you sure you want to register "${party.name}"?`)) {
      this.politicalPartyService.registerPoliticalParty(party.id).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Success', 'Political party registered successfully');
            this.loadPoliticalParties();
          } else {
            this.toastService.error('Error', 'Failed to register political party');
          }
        },
        error: (error) => {
          console.error('Error registering political party:', error);
          this.toastService.error('Error', 'Failed to register political party. Please try again.');
        }
      });
    }
  }

  deleteParty(party: PoliticalParty) {
    if (confirm(`Are you sure you want to delete "${party.name}"? This action cannot be undone.`)) {
      this.politicalPartyService.deletePoliticalPartyByUid(party.uid).subscribe({
        next: (response) => {
          if (response.status) {
            this.toastService.success('Success', 'Political party deleted successfully');
            this.loadPoliticalParties();
          } else {
            this.toastService.error('Error', 'Failed to delete political party');
          }
        },
        error: (error) => {
          console.error('Error deleting political party:', error);
          this.toastService.error('Error', 'Failed to delete political party. Please try again.');
        }
      });
    }
  }
}
