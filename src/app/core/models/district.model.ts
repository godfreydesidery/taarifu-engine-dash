export interface District {
  id: number;
  uid: string;
  code: string;
  name: string;
  regionId: number;
  regionName: string;
  regionCode: string;
  headquarters: string;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  description: string;
  isActive: boolean;
  createdById: number;
  createdByUsername: string;
  updatedById: number;
  updatedByUsername: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDistrictRequest {
  name: string;
  regionId: number;
  headquarters: string;
  population: number;
  areaSqKm: number;
  latitude: number;
  longitude: number;
  description: string;
  isActive: boolean;
}

export interface UpdateDistrictRequest {
  name?: string;
  headquarters?: string;
  population?: number;
  areaSqKm?: number;
  latitude?: number;
  longitude?: number;
  description?: string;
  isActive?: boolean;
}

export interface DistrictStats {
  totalDistricts: number;
  activeDistricts: number;
  inactiveDistricts: number;
}
