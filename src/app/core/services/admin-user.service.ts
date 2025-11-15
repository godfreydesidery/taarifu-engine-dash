import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  AdminUser,
  CreateAdminUserRequest,
  UpdateAdminUserRequest,
  ResetAdminUserPasswordRequest,
  ChangeAdminUserPasswordRequest,
  AdminUserResponse,
  AdminUserStats,
  UsernameAvailabilityResponse,
  EmailAvailabilityResponse,
  CreateAdminUserResponse,
  UpdateAdminUserResponse,
  GetAdminUserResponse,
  AdminUserListResponse,
  AdminUserStatsResponse,
  AdminUserCountResponse,
  UsernameAvailabilityApiResponse,
  EmailAvailabilityApiResponse,
  ResetAdminUserPasswordResponse,
  ChangeAdminUserPasswordResponse,
  ValidatePasswordRequest,
  ValidatePasswordResponse,
  AdminUserSummary,
  AdminUserSummaryListResponse
} from '../models/admin-user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // Create Admin User
  createAdminUser(request: CreateAdminUserRequest): Observable<CreateAdminUserResponse> {
    return this.http.post<CreateAdminUserResponse>(`${this.API_URL}/admin/v1/users/admin-users`, request);
  }

  // Update Admin User by UID
  updateAdminUser(uid: string, request: UpdateAdminUserRequest): Observable<UpdateAdminUserResponse> {
    return this.http.put<UpdateAdminUserResponse>(`${this.API_URL}/admin/v1/users/admin-users/uid/${uid}`, request);
  }

  // Get Admin User by UID
  getAdminUserByUid(uid: string): Observable<GetAdminUserResponse> {
    return this.http.get<GetAdminUserResponse>(`${this.API_URL}/admin/v1/users/admin-users/uid/${uid}`);
  }

  // Get Admin User by Username
  getAdminUserByUsername(username: string): Observable<GetAdminUserResponse> {
    return this.http.get<GetAdminUserResponse>(`${this.API_URL}/admin/v1/users/admin-users/username/${username}`);
  }

  // Get Admin User by Email
  getAdminUserByEmail(email: string): Observable<GetAdminUserResponse> {
    return this.http.get<GetAdminUserResponse>(`${this.API_URL}/admin/v1/users/admin-users/email/${email}`);
  }

  // Get All Admin Users with Pagination
  getAllAdminUsers(
    page: number = 0, 
    size: number = 10, 
    sortBy: string = 'createdAt', 
    sortDir: string = 'desc'
  ): Observable<AdminUserListResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<AdminUserListResponse>(`${this.API_URL}/admin/v1/users/admin-users`, { params });
  }

  // Activate Admin User
  activateAdminUser(uid: string): Observable<UpdateAdminUserResponse> {
    return this.http.put<UpdateAdminUserResponse>(`${this.API_URL}/admin/v1/users/admin-users/uid/${uid}/activate`, {});
  }

  // Deactivate Admin User
  deactivateAdminUser(uid: string): Observable<UpdateAdminUserResponse> {
    return this.http.put<UpdateAdminUserResponse>(`${this.API_URL}/admin/v1/users/admin-users/uid/${uid}/deactivate`, {});
  }

  // Suspend Admin User
  suspendAdminUser(uid: string): Observable<UpdateAdminUserResponse> {
    return this.http.put<UpdateAdminUserResponse>(`${this.API_URL}/admin/v1/users/admin-users/uid/${uid}/suspend`, {});
  }

  // Get Admin User Count
  getAdminUserCount(): Observable<AdminUserCountResponse> {
    return this.http.get<AdminUserCountResponse>(`${this.API_URL}/admin/v1/users/admin-users/count`);
  }

  // Check Username Availability
  isUsernameAvailable(username: string): Observable<UsernameAvailabilityApiResponse> {
    return this.http.get<UsernameAvailabilityApiResponse>(`${this.API_URL}/admin/v1/users/admin-users/check-username/${username}`);
  }

  // Check Email Availability
  isEmailAvailable(email: string): Observable<EmailAvailabilityApiResponse> {
    return this.http.get<EmailAvailabilityApiResponse>(`${this.API_URL}/admin/v1/users/admin-users/check-email/${email}`);
  }

  // Get Admin User Stats (if available)
  getAdminUserStats(): Observable<AdminUserStatsResponse> {
    return this.http.get<AdminUserStatsResponse>(`${this.API_URL}/admin/v1/users/admin-users/stats`);
  }

  // Search Admin Users
  // Searches by username, email, and phone number (case-insensitive, partial matching)
  searchAdminUsers(
    query: string,
    page: number = 0, 
    size: number = 10, 
    sortBy: string = 'createdAt', 
    sortDir: string = 'desc'
  ): Observable<AdminUserListResponse> {
    const params = new HttpParams()
      .set('q', query)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    const url = `${this.API_URL}/admin/v1/users/admin-users/search`;
    console.log('Search API call:', {
      url: url,
      query: query,
      params: {
        q: query,
        page: page,
        size: size,
        sortBy: sortBy,
        sortDir: sortDir
      }
    });
    
    return this.http.get<AdminUserListResponse>(url, { params });
  }

  // Get Admin Users by Status
  getAdminUsersByStatus(
    status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'PENDING_VERIFICATION',
    page: number = 0, 
    size: number = 20, 
    sort?: string
  ): Observable<AdminUserListResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    // Add sort parameter if provided (format: "field,direction")
    if (sort) {
      params = params.set('sort', sort);
    }
    
    return this.http.get<AdminUserListResponse>(`${this.API_URL}/admin/v1/users/admin-users/status/${status}`, { params });
  }

  // Get Admin User Summaries by Status
  getAdminUserSummariesByStatus(
    status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'PENDING_VERIFICATION',
    page: number = 0, 
    size: number = 10, 
    sortBy: string = 'createdAt', 
    sortDir: string = 'desc'
  ): Observable<AdminUserSummaryListResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<AdminUserSummaryListResponse>(`${this.API_URL}/admin/v1/users/admin-users/status/${status}/summaries`, { params });
  }

  // Reset Admin User Password (generates new password and sends via email)
  resetAdminUserPassword(uid: string, request: Partial<ResetAdminUserPasswordRequest> = {}): Observable<ResetAdminUserPasswordResponse> {
    // Generate a secure password if not provided
    const newPassword = request.newPassword || this.generateSecurePassword();
    
    const resetRequest: ResetAdminUserPasswordRequest = {
      newPassword,
      requirePasswordChange: request.requirePasswordChange ?? true,
      sendEmailNotification: request.sendEmailNotification ?? true,
      reason: request.reason
    };
    
    return this.http.put<ResetAdminUserPasswordResponse>(`${this.API_URL}/admin/v1/users/admin-users/uid/${uid}/reset-password`, resetRequest);
  }

  // Change Admin User Password (requires current password verification)
  changeAdminUserPassword(uid: string, request: ChangeAdminUserPasswordRequest): Observable<ChangeAdminUserPasswordResponse> {
    return this.http.put<ChangeAdminUserPasswordResponse>(`${this.API_URL}/admin/v1/users/admin-users/uid/${uid}/change-password`, request);
  }

  // Force Password Reset (admin can force a user to reset their password)
  forcePasswordReset(uid: string, request: Partial<ResetAdminUserPasswordRequest> = {}): Observable<ResetAdminUserPasswordResponse> {
    // Generate a secure password if not provided
    const newPassword = request.newPassword || this.generateSecurePassword();
    
    const resetRequest: ResetAdminUserPasswordRequest = {
      newPassword,
      requirePasswordChange: request.requirePasswordChange ?? true,
      sendEmailNotification: request.sendEmailNotification ?? true,
      reason: request.reason
    };
    
    return this.http.put<ResetAdminUserPasswordResponse>(`${this.API_URL}/admin/v1/users/admin-users/uid/${uid}/force-password-reset`, resetRequest);
  }

  /**
   * Validate password using API endpoint
   */
  validatePassword(request: ValidatePasswordRequest): Observable<ValidatePasswordResponse> {
    return this.http.post<ValidatePasswordResponse>(
      `${this.API_URL}/admin/v1/users/admin-users/validate-password`, 
      request
    );
  }

  /**
   * Generate a secure password with required complexity
   */
  private generateSecurePassword(): string {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Ensure at least one character from each category
    let password = '';
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Fill remaining length (minimum 12 characters)
    const allChars = lowercase + uppercase + numbers + symbols;
    for (let i = 4; i < 12; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('');
  }
}
