export interface Village {
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
  wardId: number;
  wardName: string;
  wardCode: string;
  districtId: number;
  districtName: string;
  districtCode: string;
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

export interface CreateVillageRequest {
  name: string;
  headquarters: string;
  wardId: number;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  executiveOfficer: string;
  description: string;
  isActive: boolean;
}

export interface UpdateVillageRequest {
  name: string;
  headquarters: string;
  wardId: number;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  executiveOfficer: string;
  description: string;
  isActive: boolean;
}

export interface VillageStats {
  totalVillages: number;
  activeVillages: number;
  inactiveVillages: number;
}

export interface VillageSearchParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
  search?: string;
  wardId?: number;
  districtId?: number;
  regionId?: number;
  isActive?: boolean;
}
