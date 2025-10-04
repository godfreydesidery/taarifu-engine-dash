import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'regions',
        loadComponent: () => import('./features/regions/region-list/region-list.component').then(m => m.RegionListComponent)
      },
      {
        path: 'regions/create',
        loadComponent: () => import('./features/regions/region-form/region-form.component').then(m => m.RegionFormComponent)
      },
      {
        path: 'regions/edit/:uid',
        loadComponent: () => import('./features/regions/region-form/region-form.component').then(m => m.RegionFormComponent)
      },
      {
        path: 'districts',
        loadComponent: () => import('./features/districts/district-list/district-list.component').then(m => m.DistrictListComponent)
      },
      {
        path: 'districts/create',
        loadComponent: () => import('./features/districts/district-form/district-form.component').then(m => m.DistrictFormComponent)
      },
      {
        path: 'districts/edit/:uid',
        loadComponent: () => import('./features/districts/district-form/district-form.component').then(m => m.DistrictFormComponent)
      },
      {
        path: 'wards',
        loadComponent: () => import('./features/wards/ward-list/ward-list.component').then(m => m.WardListComponent)
      },
      {
        path: 'wards/create',
        loadComponent: () => import('./features/wards/ward-form/ward-form.component').then(m => m.WardFormComponent)
      },
      {
        path: 'wards/edit/:uid',
        loadComponent: () => import('./features/wards/ward-form/ward-form.component').then(m => m.WardFormComponent)
      },
      {
        path: 'villages',
        loadComponent: () => import('./features/villages/village-list/village-list.component').then(m => m.VillageListComponent)
      },
      {
        path: 'villages/create',
        loadComponent: () => import('./features/villages/village-form/village-form.component').then(m => m.VillageFormComponent)
      },
      {
        path: 'villages/edit/:uid',
        loadComponent: () => import('./features/villages/village-form/village-form.component').then(m => m.VillageFormComponent)
      },
      {
        path: 'hamlets',
        loadComponent: () => import('./features/hamlets/hamlet-list/hamlet-list.component').then(m => m.HamletListComponent)
      },
      {
        path: 'hamlets/create',
        loadComponent: () => import('./features/hamlets/hamlet-form/hamlet-form.component').then(m => m.HamletFormComponent)
      },
      {
        path: 'hamlets/edit/:uid',
        loadComponent: () => import('./features/hamlets/hamlet-form/hamlet-form.component').then(m => m.HamletFormComponent)
      },
      {
        path: 'constituencies',
        loadComponent: () => import('./features/constituencies/constituency-list/constituency-list.component').then(m => m.ConstituencyListComponent)
      },
      {
        path: 'constituencies/create',
        loadComponent: () => import('./features/constituencies/constituency-form/constituency-form.component').then(m => m.ConstituencyFormComponent)
      },
      {
        path: 'constituencies/edit/:uid',
        loadComponent: () => import('./features/constituencies/constituency-form/constituency-form.component').then(m => m.ConstituencyFormComponent)
      },
      {
        path: 'areas',
        loadComponent: () => import('./features/areas/area-list/area-list.component').then(m => m.AreaListComponent)
      },
      {
        path: 'parliaments',
        loadComponent: () => import('./features/parliaments/parliament-list/parliament-list.component').then(m => m.ParliamentListComponent)
      },
      {
        path: 'parliaments/create',
        loadComponent: () => import('./features/parliaments/parliament-form/parliament-form.component').then(m => m.ParliamentFormComponent)
      },
      {
        path: 'parliaments/edit/:uid',
        loadComponent: () => import('./features/parliaments/parliament-form/parliament-form.component').then(m => m.ParliamentFormComponent)
      },
      {
        path: 'political-parties',
        loadComponent: () => import('./features/political-parties/political-party-list/political-party-list.component').then(m => m.PoliticalPartyListComponent)
      },
      {
        path: 'political-parties/create',
        loadComponent: () => import('./features/political-parties/political-party-form/political-party-form.component').then(m => m.PoliticalPartyFormComponent)
      },
      {
        path: 'political-parties/edit/:uid',
        loadComponent: () => import('./features/political-parties/political-party-form/political-party-form.component').then(m => m.PoliticalPartyFormComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
