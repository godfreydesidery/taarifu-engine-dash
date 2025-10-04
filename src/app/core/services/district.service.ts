import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  District, 
  CreateDistrictRequest, 
  UpdateDistrictRequest, 
  DistrictStats 
} from '../models/district.model';
import { ApiResponse, PageResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  createDistrict(request: CreateDistrictRequest): Observable<ApiResponse<District>> {
    return this.http.post<ApiResponse<District>>(`${this.API_URL}/admin/v1/districts`, request);
  }

  updateDistrict(uid: string, request: UpdateDistrictRequest): Observable<ApiResponse<District>> {
    return this.http.put<ApiResponse<District>>(`${this.API_URL}/admin/v1/districts/uid/${uid}`, request);
  }

  getDistrictByUid(uid: string): Observable<ApiResponse<District>> {
    return this.http.get<ApiResponse<District>>(`${this.API_URL}/admin/v1/districts/uid/${uid}`);
  }

  getDistrictByCode(code: string): Observable<ApiResponse<District>> {
    return this.http.get<ApiResponse<District>>(`${this.API_URL}/admin/v1/districts/code/${code}`);
  }

  getAllDistricts(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<District>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<District>>(`${this.API_URL}/admin/v1/districts`, { params });
  }

  getActiveDistricts(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<District>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<District>>(`${this.API_URL}/admin/v1/districts/active`, { params });
  }

  searchDistricts(query: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<District>> {
    const params = new HttpParams()
      .set('q', query)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<District>>(`${this.API_URL}/admin/v1/districts/search`, { params });
  }

  getDistrictsByStatus(isActive: boolean, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<District>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<District>>(`${this.API_URL}/admin/v1/districts/status/${isActive}`, { params });
  }

  getDistrictsByRegionUid(regionUid: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<District>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    return this.http.get<PageResponse<District>>(`${this.API_URL}/admin/v1/districts/region/uid/${regionUid}`, { params });
  }

  toggleDistrictStatus(uid: string): Observable<ApiResponse<District>> {
    return this.http.patch<ApiResponse<District>>(`${this.API_URL}/admin/v1/districts/uid/${uid}/toggle-status`, {});
  }

  deleteDistrict(uid: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/admin/v1/districts/uid/${uid}`);
  }

  getDistrictStats(): Observable<ApiResponse<DistrictStats>> {
    return this.http.get<ApiResponse<DistrictStats>>(`${this.API_URL}/admin/v1/districts/stats`);
  }
}
