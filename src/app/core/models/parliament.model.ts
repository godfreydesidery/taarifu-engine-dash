import { PageResponse } from './auth.model';

export interface Parliament {
  id: number;
  uid: string;
  code: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  isCurrent: boolean;
  durationInYears: number;
  inSession: boolean;
  hasEnded: boolean;
  hasStarted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateParliamentRequest {
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  isCurrent?: boolean;
}

export interface UpdateParliamentRequest {
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
  isCurrent?: boolean;
}

export interface ParliamentStats {
  totalParliaments: number;
  activeParliaments: number;
  inactiveParliaments: number;
  currentParliaments: number;
  endedParliaments: number;
  inSessionParliaments: number;
}

export interface ParliamentSearchParams {
  searchTerm?: string;
  isActive?: boolean;
  isCurrent?: boolean;
  inSession?: boolean;
  hasEnded?: boolean;
  hasStarted?: boolean;
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}

// Helper functions for Parliament
export class ParliamentHelper {
  static getStatusBadgeClass(parliament: Parliament): string {
    if (parliament.isCurrent) {
      return 'bg-primary';
    } else if (parliament.inSession) {
      return 'bg-success';
    } else if (parliament.hasEnded) {
      return 'bg-secondary';
    } else if (parliament.hasStarted) {
      return 'bg-warning';
    } else {
      return 'bg-info';
    }
  }

  static getStatusText(parliament: Parliament): string {
    if (parliament.isCurrent) {
      return 'Current';
    } else if (parliament.inSession) {
      return 'In Session';
    } else if (parliament.hasEnded) {
      return 'Ended';
    } else if (parliament.hasStarted) {
      return 'Active';
    } else {
      return 'Upcoming';
    }
  }

  static getDurationText(parliament: Parliament): string {
    if (parliament.durationInYears) {
      return `${parliament.durationInYears} year${parliament.durationInYears > 1 ? 's' : ''}`;
    }
    return 'N/A';
  }

  static isDateInPast(dateString: string): boolean {
    return new Date(dateString) < new Date();
  }

  static isDateInFuture(dateString: string): boolean {
    return new Date(dateString) > new Date();
  }

  static formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  static getDateRangeText(parliament: Parliament): string {
    const startDate = this.formatDate(parliament.startDate);
    const endDate = this.formatDate(parliament.endDate);
    return `${startDate} - ${endDate}`;
  }
}
