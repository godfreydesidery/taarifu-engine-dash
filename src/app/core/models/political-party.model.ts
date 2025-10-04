import { PageResponse } from './auth.model';

export interface PoliticalParty {
  id: number;
  uid: string;
  code: string;
  name: string;
  abbreviation: string;
  description: string;
  foundingDate: string;
  foundingLocation: string;
  ideology: string;
  colors: string;
  symbol: string;
  motto: string;
  websiteUrl: string;
  email: string;
  phone: string;
  headquartersAddress: string;
  isRegistered: boolean;
  isActive: boolean;
  registrationNumber: string;
  registrationDate: string;
  memberCount: number;
  ageInYears: number;
  operational: boolean;
  displayName: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePoliticalPartyRequest {
  name: string;
  abbreviation: string;
  description?: string;
  foundingDate?: string;
  foundingLocation?: string;
  ideology?: string;
  colors?: string;
  symbol?: string;
  motto?: string;
  websiteUrl?: string;
  email?: string;
  phone?: string;
  headquartersAddress?: string;
  isRegistered?: boolean;
  isActive?: boolean;
  registrationNumber?: string;
  registrationDate?: string;
  memberCount?: number;
}

export interface UpdatePoliticalPartyRequest {
  name?: string;
  abbreviation?: string;
  description?: string;
  foundingDate?: string;
  foundingLocation?: string;
  ideology?: string;
  colors?: string;
  symbol?: string;
  motto?: string;
  websiteUrl?: string;
  email?: string;
  phone?: string;
  headquartersAddress?: string;
  isRegistered?: boolean;
  isActive?: boolean;
  registrationNumber?: string;
  registrationDate?: string;
  memberCount?: number;
}

export interface PoliticalPartyStats {
  totalParties: number;
  activeParties: number;
  inactiveParties: number;
  registeredParties: number;
  unregisteredParties: number;
  operationalParties: number;
  partiesWithWebsite: number;
  partiesFoundedThisYear: number;
  averageMemberCount: number;
}

export interface PoliticalPartySearchParams {
  searchTerm?: string;
  isActive?: boolean;
  isRegistered?: boolean;
  operational?: boolean;
  ideology?: string;
  foundingYear?: number;
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

// Helper functions for Political Party
export class PoliticalPartyHelper {
  static getStatusBadgeClass(party: PoliticalParty): string {
    if (!party.isActive) {
      return 'bg-secondary';
    } else if (party.isRegistered && party.operational) {
      return 'bg-success';
    } else if (party.isRegistered) {
      return 'bg-primary';
    } else {
      return 'bg-warning';
    }
  }

  static getStatusText(party: PoliticalParty): string {
    if (!party.isActive) {
      return 'Inactive';
    } else if (party.isRegistered && party.operational) {
      return 'Operational';
    } else if (party.isRegistered) {
      return 'Registered';
    } else {
      return 'Unregistered';
    }
  }

  static getRegistrationStatusBadgeClass(party: PoliticalParty): string {
    return party.isRegistered ? 'bg-success' : 'bg-warning';
  }

  static getRegistrationStatusText(party: PoliticalParty): string {
    return party.isRegistered ? 'Registered' : 'Unregistered';
  }

  static getOperationalStatusBadgeClass(party: PoliticalParty): string {
    return party.operational ? 'bg-success' : 'bg-secondary';
  }

  static getOperationalStatusText(party: PoliticalParty): string {
    return party.operational ? 'Operational' : 'Non-operational';
  }

  static formatDate(dateString: string): string {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  static getAgeText(party: PoliticalParty): string {
    if (party.ageInYears) {
      return `${party.ageInYears} year${party.ageInYears > 1 ? 's' : ''}`;
    }
    return 'N/A';
  }

  static getMemberCountText(party: PoliticalParty): string {
    if (party.memberCount) {
      return party.memberCount.toLocaleString();
    }
    return 'N/A';
  }

  static getColorsArray(colors: string): string[] {
    if (!colors) return [];
    return colors.split(',').map(color => color.trim());
  }

  static isValidUrl(url: string): boolean {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  static isValidEmail(email: string): boolean {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static getDisplayName(party: PoliticalParty): string {
    return party.displayName || `${party.name} (${party.abbreviation})`;
  }
}
