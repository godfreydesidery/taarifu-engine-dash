import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse, User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/api';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'current_user';

  private readonly currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private readonly http: HttpClient) {
    this.loadStoredUser();
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/admin/v1/auth/login`, credentials)
      .pipe(
        tap(response => {
          if (response.status && response.data.accessToken) {
            this.setToken(response.data.accessToken);
            this.setCurrentUser(response.data);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const user = this.getCurrentUser();
    // Also check localStorage directly as fallback in case BehaviorSubject hasn't loaded yet
    const storedUser = localStorage.getItem(this.USER_KEY);
    
    // If we have both token and user (either from BehaviorSubject or localStorage), consider authenticated
    // Let the server validate the token - it will return 401 if invalid
    // This prevents unnecessary redirects during development reloads
    if (token && (user || storedUser)) {
      return true;
    }
    
    // No token or user means not authenticated
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  private setCurrentUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private loadStoredUser(): void {
    const storedUser = localStorage.getItem(this.USER_KEY);
    
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        // Don't logout on parse error - just clear the invalid user data
        // Keep the token in case it's still valid
        localStorage.removeItem(this.USER_KEY);
        this.currentUserSubject.next(null);
      }
    }
  }

  // Forgot Password - Send reset link to email
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}/admin/v1/auth/forgot-password`, { email });
  }

  // Reset Password - Reset password with token
  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.API_URL}/admin/v1/auth/reset-password`, { 
      token, 
      newPassword 
    });
  }

  // Update current user data (e.g., after password change)
  updateCurrentUser(user: User): void {
    this.setCurrentUser(user);
  }
}
