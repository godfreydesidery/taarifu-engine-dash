import { PageResponse } from './auth.model';

export interface Area {
  id: number;
  uid: string;
  code: string;
  areaType: AreaType;
  areaId: number;
  name: string;
  displayName: string;
  colorCode: string;
  createdAt: string;
  updatedAt: string;
}

export enum AreaType {
  REGION = 'REGION',
  DISTRICT = 'DISTRICT',
  WARD = 'WARD',
  VILLAGE = 'VILLAGE',
  HAMLET = 'HAMLET',
  CONSTITUENCY = 'CONSTITUENCY'
}

export interface AreaStats {
  totalAreas: number;
  regionCount: number;
  districtCount: number;
  wardCount: number;
  villageCount: number;
  hamletCount: number;
  constituencyCount: number;
}

export interface AreaSearchParams {
  searchTerm?: string;
  areaType?: AreaType;
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

// Helper functions for AreaType
export class AreaTypeHelper {
  static getDisplayName(areaType: AreaType): string {
    switch (areaType) {
      case AreaType.REGION:
        return 'Region';
      case AreaType.DISTRICT:
        return 'District';
      case AreaType.WARD:
        return 'Ward';
      case AreaType.VILLAGE:
        return 'Village';
      case AreaType.HAMLET:
        return 'Hamlet';
      case AreaType.CONSTITUENCY:
        return 'Constituency';
      default:
        return 'Unknown';
    }
  }

  static getDescription(areaType: AreaType): string {
    switch (areaType) {
      case AreaType.REGION:
        return 'Top level administrative division in Tanzania';
      case AreaType.DISTRICT:
        return 'Second level administrative division under region';
      case AreaType.WARD:
        return 'Third level administrative division under district';
      case AreaType.VILLAGE:
        return 'Fourth level administrative division under ward';
      case AreaType.HAMLET:
        return 'Fifth level administrative division under village';
      case AreaType.CONSTITUENCY:
        return 'Political/parliamentary division for elections';
      default:
        return 'Unknown area type';
    }
  }

  static getColorCode(areaType: AreaType): string {
    switch (areaType) {
      case AreaType.REGION:
        return '#1E40AF';
      case AreaType.DISTRICT:
        return '#059669';
      case AreaType.WARD:
        return '#DC2626';
      case AreaType.VILLAGE:
        return '#7C3AED';
      case AreaType.HAMLET:
        return '#EA580C';
      case AreaType.CONSTITUENCY:
        return '#0891B2';
      default:
        return '#6B7280';
    }
  }

  static getLevel(areaType: AreaType): number {
    switch (areaType) {
      case AreaType.REGION:
        return 1;
      case AreaType.DISTRICT:
      case AreaType.CONSTITUENCY:
        return 2;
      case AreaType.WARD:
        return 3;
      case AreaType.VILLAGE:
        return 4;
      case AreaType.HAMLET:
        return 5;
      default:
        return 0;
    }
  }

  static isAdministrative(areaType: AreaType): boolean {
    return areaType !== AreaType.CONSTITUENCY;
  }

  static isPolitical(areaType: AreaType): boolean {
    return areaType === AreaType.CONSTITUENCY;
  }

  static getParentType(areaType: AreaType): AreaType | null {
    switch (areaType) {
      case AreaType.REGION:
        return null;
      case AreaType.DISTRICT:
      case AreaType.CONSTITUENCY:
        return AreaType.REGION;
      case AreaType.WARD:
        return AreaType.DISTRICT;
      case AreaType.VILLAGE:
        return AreaType.WARD;
      case AreaType.HAMLET:
        return AreaType.VILLAGE;
      default:
        return null;
    }
  }

  static getChildTypes(areaType: AreaType): AreaType[] {
    switch (areaType) {
      case AreaType.REGION:
        return [AreaType.DISTRICT, AreaType.CONSTITUENCY];
      case AreaType.DISTRICT:
        return [AreaType.WARD];
      case AreaType.WARD:
        return [AreaType.VILLAGE];
      case AreaType.VILLAGE:
        return [AreaType.HAMLET];
      case AreaType.HAMLET:
      case AreaType.CONSTITUENCY:
        return [];
      default:
        return [];
    }
  }

  static getAllTypes(): AreaType[] {
    return [
      AreaType.REGION,
      AreaType.DISTRICT,
      AreaType.WARD,
      AreaType.VILLAGE,
      AreaType.HAMLET,
      AreaType.CONSTITUENCY
    ];
  }
}
