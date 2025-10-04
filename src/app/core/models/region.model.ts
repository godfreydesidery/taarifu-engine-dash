export interface Region {
  id: number;
  uid: string;
  code: string;
  name: string;
  capital: string;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  commissioner: string;
  description: string;
  isActive: boolean;
  createdById: number;
  createdByUsername: string;
  updatedById: number;
  updatedByUsername: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRegionRequest {
  name: string;
  capital: string;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  commissioner: string;
  description: string;
  isActive: boolean;
}

export interface UpdateRegionRequest {
  name?: string;
  capital?: string;
  population?: number;
  areaSqKm?: number;
  latitude?: number;
  longitude?: number;
  commissioner?: string;
  description?: string;
  isActive?: boolean;
}

export interface RegionStats {
  totalRegions: number;
  activeRegions: number;
  inactiveRegions: number;
}
