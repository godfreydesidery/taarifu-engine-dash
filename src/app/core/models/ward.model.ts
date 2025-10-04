export interface Ward {
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

export interface CreateWardRequest {
  name: string;
  headquarters: string;
  districtId: number;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  executiveOfficer: string;
  description: string;
  isActive: boolean;
}

export interface UpdateWardRequest {
  name: string;
  headquarters: string;
  districtId: number;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  executiveOfficer: string;
  description: string;
  isActive: boolean;
}

export interface WardStats {
  totalWards: number;
  activeWards: number;
  inactiveWards: number;
}

export interface WardSearchParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
  search?: string;
  districtId?: number;
  regionId?: number;
  isActive?: boolean;
}
