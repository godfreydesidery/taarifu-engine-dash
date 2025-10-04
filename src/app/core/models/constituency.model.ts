import { PageResponse } from './auth.model';

export interface Constituency {
  id: number;
  uid: string;
  code: string;
  name: string;
  headquarters: string;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  description: string;
  isActive: boolean;
  
  // District information
  districtId: number;
  districtName: string;
  districtCode: string;
  
  // Region information (through district)
  regionId: number;
  regionName: string;
  regionCode: string;

  createdById: number;
  createdByUsername: string;
  updatedById: number;
  updatedByUsername: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateConstituencyRequest {
  name: string;
  districtId: number;
  headquarters: string;
  population?: number;
  areaSqKm?: number;
  latitude?: number;
  longitude?: number;
  description?: string;
  isActive?: boolean;
}

export interface UpdateConstituencyRequest {
  name: string;
  districtId: number;
  headquarters: string;
  population?: number;
  areaSqKm?: number;
  latitude?: number;
  longitude?: number;
  description?: string;
  isActive?: boolean;
}

export interface ConstituencyStats {
  totalConstituencies: number;
  activeConstituencies: number;
  inactiveConstituencies: number;
}

export interface ConstituencySearchParams {
  q?: string;
  regionUid?: string;
  districtUid?: string;
  isActive?: boolean;
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}
