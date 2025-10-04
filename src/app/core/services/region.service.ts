import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  Region, 
  CreateRegionRequest, 
  UpdateRegionRequest, 
  RegionStats 
} from '../models/region.model';
import { ApiResponse, PageResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  createRegion(request: CreateRegionRequest): Observable<ApiResponse<Region>> {
    return this.http.post<ApiResponse<Region>>(`${this.API_URL}/admin/v1/regions`, request);
  }

  updateRegion(uid: string, request: UpdateRegionRequest): Observable<ApiResponse<Region>> {
    return this.http.put<ApiResponse<Region>>(`${this.API_URL}/admin/v1/regions/uid/${uid}`, request);
  }

  getRegionByUid(uid: string): Observable<ApiResponse<Region>> {
    return this.http.get<ApiResponse<Region>>(`${this.API_URL}/admin/v1/regions/uid/${uid}`);
  }

  getRegionByCode(code: string): Observable<ApiResponse<Region>> {
    return this.http.get<ApiResponse<Region>>(`${this.API_URL}/admin/v1/regions/code/${code}`);
  }

  getAllRegions(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Region>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Region>>(`${this.API_URL}/admin/v1/regions`, { params });
  }

  getActiveRegions(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Region>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Region>>(`${this.API_URL}/admin/v1/regions/active`, { params });
  }

  searchRegions(query: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Region>> {
    const params = new HttpParams()
      .set('q', query)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Region>>(`${this.API_URL}/admin/v1/regions/search`, { params });
  }

  getRegionsByStatus(isActive: boolean, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Region>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<Region>>(`${this.API_URL}/admin/v1/regions/status/${isActive}`, { params });
  }

  toggleRegionStatus(uid: string): Observable<ApiResponse<Region>> {
    return this.http.patch<ApiResponse<Region>>(`${this.API_URL}/admin/v1/regions/uid/${uid}/toggle-status`, {});
  }

  deleteRegion(uid: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/admin/v1/regions/uid/${uid}`);
  }

  getRegionStats(): Observable<ApiResponse<RegionStats>> {
    return this.http.get<ApiResponse<RegionStats>>(`${this.API_URL}/admin/v1/regions/stats`);
  }
}
