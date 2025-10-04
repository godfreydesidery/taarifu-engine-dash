import { PageResponse } from './auth.model';

export interface Hamlet {
  id: number;
  uid: string;
  code: string;
  name: string;
  headquarters: string;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  executiveOfficer: string;
  description: string;
  isActive: boolean;
  
  // Village information
  villageId: number;
  villageName: string;
  villageCode: string;
  
  // Ward information (through village)
  wardId: number;
  wardName: string;
  wardCode: string;
  
  // District information (through ward)
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

export interface CreateHamletRequest {
  name: string;
  villageId: number;
  headquarters: string;
  population?: number;
  areaSqKm?: number;
  latitude?: number;
  longitude?: number;
  executiveOfficer?: string;
  description?: string;
  isActive?: boolean;
}

export interface UpdateHamletRequest {
  name: string;
  villageId: number;
  headquarters: string;
  population?: number;
  areaSqKm?: number;
  latitude?: number;
  longitude?: number;
  executiveOfficer?: string;
  description?: string;
  isActive?: boolean;
}

export interface HamletStats {
  totalHamlets: number;
  activeHamlets: number;
  inactiveHamlets: number;
}

export interface HamletSearchParams {
  q?: string;
  villageUid?: string;
  isActive?: boolean;
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}
