import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Village, CreateVillageRequest, UpdateVillageRequest, VillageStats, VillageSearchParams } from '../models/village.model';
import { ApiResponse, PageResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class VillageService {
  private readonly API_URL = 'http://localhost:8080/api/admin/v1';

  constructor(private http: HttpClient) {}

  // Get all villages with pagination
  getAllVillages(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Village>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Village>>(`${this.API_URL}/villages`, { params });
  }

  // Search villages
  searchVillages(query: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Village>> {
    const params = new HttpParams()
      .set('q', query)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Village>>(`${this.API_URL}/villages/search`, { params });
  }

  // Get village by UID
  getVillageByUid(uid: string): Observable<ApiResponse<Village>> {
    return this.http.get<ApiResponse<Village>>(`${this.API_URL}/villages/uid/${uid}`);
  }

  // Create new village
  createVillage(village: CreateVillageRequest): Observable<ApiResponse<Village>> {
    return this.http.post<ApiResponse<Village>>(`${this.API_URL}/villages`, village);
  }

  // Update village by UID
  updateVillage(uid: string, village: UpdateVillageRequest): Observable<ApiResponse<Village>> {
    return this.http.put<ApiResponse<Village>>(`${this.API_URL}/villages/uid/${uid}`, village);
  }

  // Delete village by UID
  deleteVillage(uid: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/villages/uid/${uid}`);
  }

  // Get village statistics
  getVillageStats(): Observable<ApiResponse<VillageStats>> {
    return this.http.get<ApiResponse<VillageStats>>(`${this.API_URL}/villages/stats`);
  }

  // Get villages by ward UID
  getVillagesByWardUid(wardUid: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Village>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Village>>(`${this.API_URL}/villages/ward/uid/${wardUid}`, { params });
  }

  // Get active villages
  getActiveVillages(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Village>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Village>>(`${this.API_URL}/villages/active`, { params });
  }

  // Get villages by status
  getVillagesByStatus(isActive: boolean, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Village>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Village>>(`${this.API_URL}/villages/status/${isActive}`, { params });
  }

  // Toggle village status
  toggleVillageStatus(uid: string): Observable<ApiResponse<Village>> {
    return this.http.patch<ApiResponse<Village>>(`${this.API_URL}/villages/uid/${uid}/toggle-status`, {});
  }
}
