import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ward, CreateWardRequest, UpdateWardRequest, WardStats, WardSearchParams } from '../models/ward.model';
import { ApiResponse, PageResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class WardService {
  private readonly API_URL = 'http://localhost:8080/api/admin/v1';

  constructor(private http: HttpClient) {}

  // Get all wards with pagination
  getAllWards(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Ward>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Ward>>(`${this.API_URL}/wards`, { params });
  }

  // Search wards
  searchWards(query: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Ward>> {
    const params = new HttpParams()
      .set('q', query)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Ward>>(`${this.API_URL}/wards/search`, { params });
  }

  // Get ward by UID
  getWardByUid(uid: string): Observable<ApiResponse<Ward>> {
    return this.http.get<ApiResponse<Ward>>(`${this.API_URL}/wards/uid/${uid}`);
  }

  // Create new ward
  createWard(ward: CreateWardRequest): Observable<ApiResponse<Ward>> {
    return this.http.post<ApiResponse<Ward>>(`${this.API_URL}/wards`, ward);
  }

  // Update ward by UID
  updateWard(uid: string, ward: UpdateWardRequest): Observable<ApiResponse<Ward>> {
    return this.http.put<ApiResponse<Ward>>(`${this.API_URL}/wards/uid/${uid}`, ward);
  }

  // Delete ward by UID
  deleteWard(uid: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/wards/uid/${uid}`);
  }

  // Get ward statistics
  getWardStats(): Observable<ApiResponse<WardStats>> {
    return this.http.get<ApiResponse<WardStats>>(`${this.API_URL}/wards/stats`);
  }

  // Get wards by district UID
  getWardsByDistrictUid(districtUid: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Ward>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Ward>>(`${this.API_URL}/wards/district/uid/${districtUid}`, { params });
  }

  // Get active wards
  getActiveWards(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Ward>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Ward>>(`${this.API_URL}/wards/active`, { params });
  }

  // Get wards by status
  getWardsByStatus(isActive: boolean, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Ward>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Ward>>(`${this.API_URL}/wards/status/${isActive}`, { params });
  }

  // Toggle ward status
  toggleWardStatus(uid: string): Observable<ApiResponse<Ward>> {
    return this.http.patch<ApiResponse<Ward>>(`${this.API_URL}/wards/uid/${uid}/toggle-status`, {});
  }
}
