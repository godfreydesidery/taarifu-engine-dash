import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { RegionService } from '../../core/services/region.service';
import { DistrictService } from '../../core/services/district.service';
import { WardService } from '../../core/services/ward.service';
import { VillageService } from '../../core/services/village.service';
import { HamletService } from '../../core/services/hamlet.service';
import { ConstituencyService } from '../../core/services/constituency.service';
import { AreaService } from '../../core/services/area.service';
import { ParliamentService } from '../../core/services/parliament.service';
import { PoliticalPartyService } from '../../core/services/political-party.service';
import { RegionStats } from '../../core/models/region.model';
import { DistrictStats } from '../../core/models/district.model';
import { WardStats } from '../../core/models/ward.model';
import { VillageStats } from '../../core/models/village.model';
import { HamletStats } from '../../core/models/hamlet.model';
import { ConstituencyStats } from '../../core/models/constituency.model';
import { AreaStats } from '../../core/models/area.model';
import { ParliamentStats } from '../../core/models/parliament.model';
import { PoliticalPartyStats } from '../../core/models/political-party.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <div class="dashboard-container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">Dashboard</h1>
          <p class="text-muted">Welcome back, {{ currentUser?.username }}!</p>
        </div>
      </div>
      
      <div class="row g-4 mb-4">
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-geo-alt-fill text-primary" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Total Regions</h5>
              <div class="stat-value mb-2">
                <div *ngIf="loadingRegions" class="spinner-border spinner-border-sm text-primary" role="status"></div>
                <span *ngIf="!loadingRegions" class="display-4 text-primary fw-bold">{{ regionStats?.totalRegions || 0 }}</span>
              </div>
              <p class="text-muted">{{ regionStats?.activeRegions || 0 }} active regions</p>
              <a routerLink="/regions" class="btn btn-primary">
                <i class="bi bi-arrow-right me-1"></i>
                View Regions
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-building text-success" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Total Districts</h5>
              <div class="stat-value mb-2">
                <div *ngIf="loadingDistricts" class="spinner-border spinner-border-sm text-success" role="status"></div>
                <span *ngIf="!loadingDistricts" class="display-4 text-success fw-bold">{{ districtStats?.totalDistricts || 0 }}</span>
              </div>
              <p class="text-muted">{{ districtStats?.activeDistricts || 0 }} active districts</p>
              <a routerLink="/districts" class="btn btn-success">
                <i class="bi bi-arrow-right me-1"></i>
                View Districts
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-house text-warning" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Total Wards</h5>
              <div class="stat-value mb-2">
                <div *ngIf="loadingWards" class="spinner-border spinner-border-sm text-warning" role="status"></div>
                <span *ngIf="!loadingWards" class="display-4 text-warning fw-bold">{{ wardStats?.totalWards || 0 }}</span>
              </div>
              <p class="text-muted">{{ wardStats?.activeWards || 0 }} active wards</p>
              <a routerLink="/wards" class="btn btn-warning">
                <i class="bi bi-arrow-right me-1"></i>
                View Wards
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-house-door text-danger" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Total Villages</h5>
              <div class="stat-value mb-2">
                <div *ngIf="loadingVillages" class="spinner-border spinner-border-sm text-danger" role="status"></div>
                <span *ngIf="!loadingVillages" class="display-4 text-danger fw-bold">{{ villageStats?.totalVillages || 0 }}</span>
              </div>
              <p class="text-muted">{{ villageStats?.activeVillages || 0 }} active villages</p>
              <a routerLink="/villages" class="btn btn-danger">
                <i class="bi bi-arrow-right me-1"></i>
                View Villages
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-house-door-fill text-dark" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Total Hamlets</h5>
              <div class="stat-value mb-2">
                <div *ngIf="loadingHamlets" class="spinner-border spinner-border-sm text-dark" role="status"></div>
                <span *ngIf="!loadingHamlets" class="display-4 text-dark fw-bold">{{ hamletStats?.totalHamlets || 0 }}</span>
              </div>
              <p class="text-muted">{{ hamletStats?.activeHamlets || 0 }} active hamlets</p>
              <a routerLink="/hamlets" class="btn btn-dark">
                <i class="bi bi-arrow-right me-1"></i>
                View Hamlets
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-flag text-info" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Total Constituencies</h5>
              <div class="stat-value mb-2">
                <div *ngIf="loadingConstituencies" class="spinner-border spinner-border-sm text-info" role="status"></div>
                <span *ngIf="!loadingConstituencies" class="display-4 text-info fw-bold">{{ constituencyStats?.totalConstituencies || 0 }}</span>
              </div>
              <p class="text-muted">{{ constituencyStats?.activeConstituencies || 0 }} active constituencies</p>
              <a routerLink="/constituencies" class="btn btn-info">
                <i class="bi bi-arrow-right me-1"></i>
                View Constituencies
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-layers text-secondary" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Total Areas</h5>
              <div class="stat-value mb-2">
                <div *ngIf="loadingAreas" class="spinner-border spinner-border-sm text-secondary" role="status"></div>
                <span *ngIf="!loadingAreas" class="display-4 text-secondary fw-bold">{{ areaStats?.totalAreas || 0 }}</span>
              </div>
              <p class="text-muted">All area types combined</p>
              <a routerLink="/areas" class="btn btn-secondary">
                <i class="bi bi-arrow-right me-1"></i>
                View Areas
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-building text-dark" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Total Parliaments</h5>
              <div class="stat-value mb-2">
                <div *ngIf="loadingParliaments" class="spinner-border spinner-border-sm text-dark" role="status"></div>
                <span *ngIf="!loadingParliaments" class="display-4 text-dark fw-bold">{{ parliamentStats?.totalParliaments || 0 }}</span>
              </div>
              <p class="text-muted">{{ parliamentStats?.activeParliaments || 0 }} active parliaments</p>
              <a routerLink="/parliaments" class="btn btn-dark">
                <i class="bi bi-arrow-right me-1"></i>
                View Parliaments
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-flag text-danger" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Political Parties</h5>
              <div class="stat-value mb-2">
                <div *ngIf="loadingPoliticalParties" class="spinner-border spinner-border-sm text-danger" role="status"></div>
                <span *ngIf="!loadingPoliticalParties" class="display-4 text-danger fw-bold">{{ politicalPartyStats?.totalParties || 0 }}</span>
              </div>
              <p class="text-muted">{{ politicalPartyStats?.activeParties || 0 }} active parties</p>
              <a routerLink="/political-parties" class="btn btn-danger">
                <i class="bi bi-arrow-right me-1"></i>
                View Parties
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-plus-circle text-secondary" style="font-size: 2.5rem;"></i>
              </div>
              <h5 class="card-title">Quick Actions</h5>
              <p class="text-muted">Create new entities quickly</p>
              <div class="d-grid gap-2">
                <a routerLink="/regions/create" class="btn btn-secondary btn-sm">
                  <i class="bi bi-plus me-1"></i>
                  New Region
                </a>
                <a routerLink="/districts/create" class="btn btn-outline-secondary btn-sm">
                  <i class="bi bi-plus me-1"></i>
                  New District
                </a>
                <a routerLink="/wards/create" class="btn btn-outline-secondary btn-sm">
                  <i class="bi bi-plus me-1"></i>
                  New Ward
                </a>
                <a routerLink="/villages/create" class="btn btn-outline-secondary btn-sm">
                  <i class="bi bi-plus me-1"></i>
                  New Village
                </a>
                <a routerLink="/hamlets/create" class="btn btn-outline-secondary btn-sm">
                  <i class="bi bi-plus me-1"></i>
                  New Hamlet
                </a>
                <a routerLink="/constituencies/create" class="btn btn-outline-secondary btn-sm">
                  <i class="bi bi-plus me-1"></i>
                  New Constituency
                </a>
                <a routerLink="/parliaments/create" class="btn btn-outline-secondary btn-sm">
                  <i class="bi bi-plus me-1"></i>
                  New Parliament
                </a>
                <a routerLink="/political-parties/create" class="btn btn-outline-secondary btn-sm">
                  <i class="bi bi-plus me-1"></i>
                  New Political Party
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">
                <i class="bi bi-activity me-2"></i>
                Recent Activity
              </h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Activity tracking will be implemented soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .card {
      border: none;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
      transition: box-shadow 0.15s ease-in-out;
    }

    .card:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }

    .stat-value {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  `]
})
export class DashboardComponent implements OnInit {
  currentUser = this.authService.getCurrentUser();
  regionStats: RegionStats | null = null;
  districtStats: DistrictStats | null = null;
  wardStats: WardStats | null = null;
  villageStats: VillageStats | null = null;
  hamletStats: HamletStats | null = null;
  constituencyStats: ConstituencyStats | null = null;
  areaStats: AreaStats | null = null;
  parliamentStats: ParliamentStats | null = null;
  politicalPartyStats: PoliticalPartyStats | null = null;
  loadingRegions = false;
  loadingDistricts = false;
  loadingWards = false;
  loadingVillages = false;
  loadingHamlets = false;
  loadingConstituencies = false;
  loadingAreas = false;
  loadingParliaments = false;
  loadingPoliticalParties = false;

  constructor(
    private authService: AuthService,
    private regionService: RegionService,
    private districtService: DistrictService,
    private wardService: WardService,
    private villageService: VillageService,
    private hamletService: HamletService,
    private constituencyService: ConstituencyService,
    private areaService: AreaService,
    private parliamentService: ParliamentService,
    private politicalPartyService: PoliticalPartyService
  ) {}

  ngOnInit() {
    this.loadRegionStats();
    this.loadDistrictStats();
    this.loadWardStats();
    this.loadVillageStats();
    this.loadHamletStats();
    this.loadConstituencyStats();
    this.loadAreaStats();
    this.loadParliamentStats();
    this.loadPoliticalPartyStats();
  }

  private loadRegionStats() {
    this.loadingRegions = true;
    this.regionService.getRegionStats().subscribe({
      next: (response) => {
        this.loadingRegions = false;
        if (response.status) {
          this.regionStats = response.data;
        }
      },
      error: (error) => {
        this.loadingRegions = false;
        console.error('Error loading region stats:', error);
        // Set default values if API fails
        this.regionStats = { totalRegions: 0, activeRegions: 0, inactiveRegions: 0 };
      }
    });
  }

  private loadDistrictStats() {
    this.loadingDistricts = true;
    this.districtService.getDistrictStats().subscribe({
      next: (response) => {
        this.loadingDistricts = false;
        if (response.status) {
          this.districtStats = response.data;
        }
      },
      error: (error) => {
        this.loadingDistricts = false;
        console.error('Error loading district stats:', error);
        // Set default values if API fails
        this.districtStats = { totalDistricts: 0, activeDistricts: 0, inactiveDistricts: 0 };
      }
    });
  }

  private loadWardStats() {
    this.loadingWards = true;
    this.wardService.getWardStats().subscribe({
      next: (response) => {
        this.loadingWards = false;
        if (response.status) {
          this.wardStats = response.data;
        }
      },
      error: (error) => {
        this.loadingWards = false;
        console.error('Error loading ward stats:', error);
        // Set default values if API fails
        this.wardStats = { totalWards: 0, activeWards: 0, inactiveWards: 0 };
      }
    });
  }

  private loadVillageStats() {
    this.loadingVillages = true;
    this.villageService.getVillageStats().subscribe({
      next: (response) => {
        this.loadingVillages = false;
        if (response.status) {
          this.villageStats = response.data;
        }
      },
      error: (error) => {
        this.loadingVillages = false;
        console.error('Error loading village stats:', error);
        // Set default values if API fails
        this.villageStats = { totalVillages: 0, activeVillages: 0, inactiveVillages: 0 };
      }
    });
  }

  private loadHamletStats() {
    this.loadingHamlets = true;
    this.hamletService.getHamletStats().subscribe({
      next: (response) => {
        this.loadingHamlets = false;
        if (response.status) {
          this.hamletStats = response.data;
        }
      },
      error: (error) => {
        this.loadingHamlets = false;
        console.error('Error loading hamlet stats:', error);
        // Set default values if API fails
        this.hamletStats = { totalHamlets: 0, activeHamlets: 0, inactiveHamlets: 0 };
      }
    });
  }

  private loadConstituencyStats() {
    this.loadingConstituencies = true;
    this.constituencyService.getConstituencyStats().subscribe({
      next: (response) => {
        this.loadingConstituencies = false;
        if (response.status) {
          this.constituencyStats = response.data;
        } else {
          // Set default values if API fails
          this.constituencyStats = { totalConstituencies: 0, activeConstituencies: 0, inactiveConstituencies: 0 };
        }
      },
      error: (error) => {
        this.loadingConstituencies = false;
        console.error('Error loading constituency stats:', error);
        // Set default values if API fails
        this.constituencyStats = { totalConstituencies: 0, activeConstituencies: 0, inactiveConstituencies: 0 };
      }
    });
  }

  private loadAreaStats() {
    this.loadingAreas = true;
    this.areaService.getAreaStats().subscribe({
      next: (response) => {
        this.loadingAreas = false;
        if (response.status) {
          this.areaStats = response.data;
        } else {
          // Set default values if API fails
          this.areaStats = { 
            totalAreas: 0, 
            regionCount: 0, 
            districtCount: 0, 
            wardCount: 0, 
            villageCount: 0, 
            hamletCount: 0, 
            constituencyCount: 0 
          };
        }
      },
      error: (error) => {
        this.loadingAreas = false;
        console.error('Error loading area stats:', error);
        // Set default values if API fails
        this.areaStats = { 
          totalAreas: 0, 
          regionCount: 0, 
          districtCount: 0, 
          wardCount: 0, 
          villageCount: 0, 
          hamletCount: 0, 
          constituencyCount: 0 
        };
      }
    });
  }

  private loadParliamentStats() {
    this.loadingParliaments = true;
    this.parliamentService.getParliamentStats().subscribe({
      next: (response) => {
        this.loadingParliaments = false;
        if (response.status) {
          this.parliamentStats = response.data;
        } else {
          // Set default values if API fails
          this.parliamentStats = { 
            totalParliaments: 0, 
            activeParliaments: 0, 
            inactiveParliaments: 0, 
            currentParliaments: 0, 
            endedParliaments: 0, 
            inSessionParliaments: 0 
          };
        }
      },
      error: (error) => {
        this.loadingParliaments = false;
        console.error('Error loading parliament stats:', error);
        // Set default values if API fails
        this.parliamentStats = { 
          totalParliaments: 0, 
          activeParliaments: 0, 
          inactiveParliaments: 0, 
          currentParliaments: 0, 
          endedParliaments: 0, 
          inSessionParliaments: 0 
        };
      }
    });
  }

  private loadPoliticalPartyStats() {
    this.loadingPoliticalParties = true;
    this.politicalPartyService.getPoliticalPartyStats().subscribe({
      next: (response) => {
        this.loadingPoliticalParties = false;
        if (response.status) {
          this.politicalPartyStats = response.data;
        } else {
          // Set default values if API fails
          this.politicalPartyStats = { 
            totalParties: 0, 
            activeParties: 0, 
            inactiveParties: 0, 
            registeredParties: 0, 
            unregisteredParties: 0, 
            operationalParties: 0, 
            partiesWithWebsite: 0, 
            partiesFoundedThisYear: 0, 
            averageMemberCount: 0 
          };
        }
      },
      error: (error) => {
        this.loadingPoliticalParties = false;
        console.error('Error loading political party stats:', error);
        // Set default values if API fails
        this.politicalPartyStats = { 
          totalParties: 0, 
          activeParties: 0, 
          inactiveParties: 0, 
          registeredParties: 0, 
          unregisteredParties: 0, 
          operationalParties: 0, 
          partiesWithWebsite: 0, 
          partiesFoundedThisYear: 0, 
          averageMemberCount: 0 
        };
      }
    });
  }
}
