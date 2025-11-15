import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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

interface StatCard {
  label: string;
  value: string;
  icon: string;
  color: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  route?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <div class="dashboard-container">
      <!-- Dashboard Header -->
      <header class="obus-dashboard-header">
        <div class="obus-header-content">
          <h1 class="obus-dashboard-title">
            <span class="obus-title-icon" [innerHTML]="getIconSvg('rocket')"></span>
            Taarifu Engine
            <span class="obus-title-subtitle">Dashboard</span>
          </h1>
          <div class="obus-header-right">
            <div class="obus-date-time">
              <div class="obus-date-item">
                <span class="obus-date-icon" [innerHTML]="getIconSvg('calendar')"></span>
                <span class="obus-date-text">{{ currentDate }}</span>
              </div>
              <div class="obus-time-item">
                <span class="obus-time-icon" [innerHTML]="getIconSvg('clock')"></span>
                <span class="obus-time-text">{{ currentTime }}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="stats-grid">
          <div 
            *ngFor="let stat of stats" 
            class="stat-card stat-{{ stat.color }}"
            [routerLink]="stat.route"
          >
            <div class="stat-icon-wrapper">
              <div class="stat-icon" [innerHTML]="getIconSvg(stat.icon)"></div>
            </div>
            <div class="stat-content">
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-change" [class]="'trend-' + stat.trend">
                <span class="change-icon" [innerHTML]="getIconSvg('trendUp')"></span>
                {{ stat.change }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Actions -->
      <section class="actions-section">
        <h2 class="section-title">Quick Actions</h2>
        <div class="actions-grid">
          <a routerLink="/regions" class="action-card action-blue">
            <div class="action-icon" [innerHTML]="getIconSvg('geo')"></div>
            <div class="action-label">Manage Regions</div>
          </a>
          <a routerLink="/districts" class="action-card action-green">
            <div class="action-icon" [innerHTML]="getIconSvg('building')"></div>
            <div class="action-label">Manage Districts</div>
          </a>
          <a routerLink="/wards" class="action-card action-purple">
            <div class="action-icon" [innerHTML]="getIconSvg('house')"></div>
            <div class="action-label">Manage Wards</div>
          </a>
          <a routerLink="/admin-users" class="action-card action-blue">
            <div class="action-icon" [innerHTML]="getIconSvg('users')"></div>
            <div class="action-label">Admin Users</div>
          </a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    /* ===================================
       OBUS PROFESSIONAL DASHBOARD STYLES
       =================================== */

    .dashboard-container {
      width: 100%;
      min-height: fit-content;
      background: var(--obus-off-white);
      font-family: var(--obus-font-primary);
      padding-bottom: 2rem;
      display: flex;
      flex-direction: column;
    }

    .obus-dashboard-header {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--obus-light-gray);
      padding: 1.2rem 1.6rem;
      margin: 1rem 1rem 1.2rem 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
      border-radius: 12.8px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
    }

    .obus-dashboard-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3.2px;
      background: var(--obus-gradient-primary);
      box-shadow: 0 0.8px 3.2px rgba(32, 82, 149, 0.3);
    }

    .obus-header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.2rem;
    }

    .obus-dashboard-title {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: var(--obus-deep-blue);
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: -0.01em;
    }

    .obus-title-icon {
      width: 38.4px;
      height: 38.4px;
      min-width: 38.4px;
      background: var(--obus-gradient-accent);
      border-radius: 9.6px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: float 3s ease-in-out infinite;
      box-shadow: 0 3.2px 12.8px rgba(32, 82, 149, 0.25);
      padding: 8px;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-4.8px); }
    }

    .obus-title-icon svg {
      width: 100%;
      height: 100%;
      color: white;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
    }

    .obus-title-subtitle {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--obus-medium-gray);
      margin-left: 0.2rem;
    }

    .obus-header-right {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .obus-date-time {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      padding: 0.5rem 0.8rem;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
      border-radius: 9.6px;
      border: 1px solid rgba(32, 82, 149, 0.12);
      box-shadow: 0 1.6px 9.6px rgba(0, 0, 0, 0.05);
    }

    .obus-date-item,
    .obus-time-item {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .obus-date-icon,
    .obus-time-icon {
      width: 12.8px;
      height: 12.8px;
      color: var(--obus-ocean-blue);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .obus-date-icon svg,
    .obus-time-icon svg {
      width: 100%;
      height: 100%;
    }

    .obus-date-text,
    .obus-time-text {
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--obus-deep-blue);
    }

    .stats-section {
      margin-bottom: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    .stat-card {
      background: white;
      border-radius: 9.6px;
      padding: 1.2rem;
      box-shadow: 0 0.8px 2.4px rgba(0, 0, 0, 0.05);
      transition: all 0.2s ease;
      cursor: pointer;
      border: 1px solid #f1f5f9;
    }

    .stat-card:hover {
      transform: translateY(-1.6px);
      box-shadow: 0 3.2px 9.6px rgba(0, 0, 0, 0.08);
      border-color: #e2e8f0;
    }

    .stat-card.stat-blue:hover {
      border-color: #93c5fd;
    }

    .stat-card.stat-green:hover {
      border-color: #86efac;
    }

    .stat-card.stat-purple:hover {
      border-color: #c4b5fd;
    }

    .stat-icon-wrapper {
      margin-bottom: 0.8rem;
    }

    .stat-icon {
      width: 35.2px;
      height: 35.2px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
    }

    .stat-blue .stat-icon {
      background: linear-gradient(135deg, #dbeafe, #bfdbfe);
      color: #1e40af;
    }

    .stat-green .stat-icon {
      background: linear-gradient(135deg, #d1fae5, #a7f3d0);
      color: #047857;
    }

    .stat-purple .stat-icon {
      background: linear-gradient(135deg, #ede9fe, #ddd6fe);
      color: #6d28d9;
    }

    .stat-icon svg {
      width: 100%;
      height: 100%;
    }

    .stat-content {
      flex: 1;
    }

    .stat-label {
      font-size: 0.65rem;
      color: #64748b;
      font-weight: 500;
      margin-bottom: 0.32rem;
      display: block;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 0.32rem;
      line-height: 1;
      display: block;
    }

    .stat-change {
      display: inline-flex;
      align-items: center;
      gap: 0.24rem;
      font-size: 0.6rem;
      font-weight: 500;
    }

    .stat-change.trend-up {
      color: #059669;
    }

    .stat-change.trend-down {
      color: #dc2626;
    }

    .stat-change.trend-stable {
      color: #64748b;
    }

    .change-icon {
      width: 8px;
      height: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .change-icon svg {
      width: 100%;
      height: 100%;
    }

    .actions-section {
      margin-bottom: 0;
      margin-left: 1rem;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .section-title {
      font-size: 0.8rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.8rem;
      letter-spacing: -0.01em;
    }

    .actions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    .action-card {
      background: white;
      border-radius: 9.6px;
      padding: 1.2rem;
      box-shadow: 0 0.8px 2.4px rgba(0, 0, 0, 0.05);
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.64rem;
      text-decoration: none;
      cursor: pointer;
      border: 1px solid #f1f5f9;
      min-height: 96px;
    }

    .action-card:hover {
      transform: translateY(-1.6px);
      box-shadow: 0 3.2px 9.6px rgba(0, 0, 0, 0.08);
    }

    .action-card.action-blue:hover {
      border-color: #93c5fd;
    }

    .action-card.action-green:hover {
      border-color: #86efac;
    }

    .action-card.action-purple:hover {
      border-color: #c4b5fd;
    }

    .action-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7.2px;
    }

    .action-blue .action-icon {
      background: linear-gradient(135deg, #dbeafe, #bfdbfe);
      color: #1e40af;
    }

    .action-green .action-icon {
      background: linear-gradient(135deg, #d1fae5, #a7f3d0);
      color: #047857;
    }

    .action-purple .action-icon {
      background: linear-gradient(135deg, #ede9fe, #ddd6fe);
      color: #6d28d9;
    }

    .action-icon svg {
      width: 100%;
      height: 100%;
    }

    .action-label {
      font-size: 0.7rem;
      font-weight: 500;
      color: #334155;
      text-align: center;
    }

    @media (max-width: 1024px) {
      .stats-grid,
      .actions-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .obus-dashboard-header {
        padding: 0.8rem;
      }

      .obus-header-content {
        flex-direction: column;
        gap: 0.8rem;
      }

      .obus-dashboard-title {
        font-size: 1.2rem;
        flex-direction: column;
        text-align: center;
      }

      .obus-title-icon {
        width: 32px;
        height: 32px;
      }

      .stats-grid,
      .actions-grid {
        grid-template-columns: 1fr;
        gap: 0.8rem;
      }
    }

    @media (max-width: 480px) {
      .obus-dashboard-title {
        font-size: 1rem;
      }

      .stat-value {
        font-size: 1.2rem;
      }

      .section-title {
        font-size: 0.75rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    .action-card:focus-visible,
    .stat-card:focus-visible {
      outline: 2px solid #205295;
      outline-offset: 2px;
    }
  `]
})
export class DashboardComponent implements OnInit {
  title = 'Taarifu Engine';
  currentDate = new Date().toLocaleDateString();
  currentTime = new Date().toLocaleTimeString();
  currentUser = this.authService.getCurrentUser();
  
  stats: StatCard[] = [
    {
      label: 'Total Regions',
      value: '...',
      icon: 'geo',
      color: 'blue',
      change: '+0%',
      trend: 'stable',
      route: '/regions',
    },
    {
      label: 'Total Districts',
      value: '...',
      icon: 'building',
      color: 'green',
      change: '+0%',
      trend: 'stable',
      route: '/districts',
    },
    {
      label: 'Total Wards',
      value: '...',
      icon: 'house',
      color: 'purple',
      change: '+0%',
      trend: 'stable',
      route: '/wards',
    },
    {
      label: 'Total Villages',
      value: '...',
      icon: 'houseDoor',
      color: 'blue',
      change: '+0%',
      trend: 'stable',
      route: '/villages',
    },
  ];

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
    private readonly authService: AuthService,
    private readonly regionService: RegionService,
    private readonly districtService: DistrictService,
    private readonly wardService: WardService,
    private readonly villageService: VillageService,
    private readonly hamletService: HamletService,
    private readonly constituencyService: ConstituencyService,
    private readonly areaService: AreaService,
    private readonly parliamentService: ParliamentService,
    private readonly politicalPartyService: PoliticalPartyService,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
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

  updateTime() {
    this.currentTime = new Date().toLocaleTimeString();
  }

  calculateTrend(
    current: number,
    previous: number
  ): { change: string; trend: 'up' | 'down' | 'stable' } {
    if (previous === 0) {
      return { change: '+0%', trend: 'stable' };
    }

    const percentageChange = ((current - previous) / previous) * 100;
    const roundedChange = Math.round(percentageChange);

    if (roundedChange > 0) {
      return { change: `+${roundedChange}%`, trend: 'up' };
    } else if (roundedChange < 0) {
      return { change: `${roundedChange}%`, trend: 'down' };
    } else {
      return { change: '+0%', trend: 'stable' };
    }
  }

  getIconSvg(iconName: string): SafeHtml {
    const icons: { [key: string]: string } = {
      rocket: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/></svg>',
      calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>',
      clock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>',
      geo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>',
      building: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/></svg>',
      house: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>',
      houseDoor: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>',
      users: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>',
      trendUp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/></svg>',
    };
    const iconSvg = icons[iconName] || icons['users'];
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
  }

  private loadRegionStats() {
    this.loadingRegions = true;
    this.regionService.getRegionStats().subscribe({
      next: (response) => {
        this.loadingRegions = false;
        if (response.status) {
          this.regionStats = response.data;
          this.updateStats();
        }
      },
      error: (error) => {
        this.loadingRegions = false;
        console.error('Error loading region stats:', error);
        this.regionStats = { totalRegions: 0, activeRegions: 0, inactiveRegions: 0 };
        this.updateStats();
      }
    });
  }

  private updateStats() {
    const regionTrend = this.calculateTrend(this.regionStats?.totalRegions || 0, 0);
    const districtTrend = this.calculateTrend(this.districtStats?.totalDistricts || 0, 0);
    const wardTrend = this.calculateTrend(this.wardStats?.totalWards || 0, 0);
    const villageTrend = this.calculateTrend(this.villageStats?.totalVillages || 0, 0);

    this.stats = [
      {
        label: 'Total Regions',
        value: (this.regionStats?.totalRegions || 0).toString(),
        icon: 'geo',
        color: 'blue',
        change: regionTrend.change,
        trend: regionTrend.trend,
        route: '/regions',
      },
      {
        label: 'Total Districts',
        value: (this.districtStats?.totalDistricts || 0).toString(),
        icon: 'building',
        color: 'green',
        change: districtTrend.change,
        trend: districtTrend.trend,
        route: '/districts',
      },
      {
        label: 'Total Wards',
        value: (this.wardStats?.totalWards || 0).toString(),
        icon: 'house',
        color: 'purple',
        change: wardTrend.change,
        trend: wardTrend.trend,
        route: '/wards',
      },
      {
        label: 'Total Villages',
        value: (this.villageStats?.totalVillages || 0).toString(),
        icon: 'houseDoor',
        color: 'blue',
        change: villageTrend.change,
        trend: villageTrend.trend,
        route: '/villages',
      },
    ];
  }

  private loadDistrictStats() {
    this.loadingDistricts = true;
    this.districtService.getDistrictStats().subscribe({
      next: (response) => {
        this.loadingDistricts = false;
        if (response.status) {
          this.districtStats = response.data;
          this.updateStats();
        }
      },
      error: (error) => {
        this.loadingDistricts = false;
        console.error('Error loading district stats:', error);
        this.districtStats = { totalDistricts: 0, activeDistricts: 0, inactiveDistricts: 0 };
        this.updateStats();
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
          this.updateStats();
        }
      },
      error: (error) => {
        this.loadingWards = false;
        console.error('Error loading ward stats:', error);
        this.wardStats = { totalWards: 0, activeWards: 0, inactiveWards: 0 };
        this.updateStats();
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
          this.updateStats();
        }
      },
      error: (error) => {
        this.loadingVillages = false;
        console.error('Error loading village stats:', error);
        this.villageStats = { totalVillages: 0, activeVillages: 0, inactiveVillages: 0 };
        this.updateStats();
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
