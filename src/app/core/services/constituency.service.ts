import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  Constituency, 
  CreateConstituencyRequest, 
  UpdateConstituencyRequest, 
  ConstituencyStats 
} from '../models/constituency.model';
import { ApiResponse, PageResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class ConstituencyService {
  private readonly API_URL = 'http://localhost:8080/api/admin/v1';

  constructor(private http: HttpClient) {}

  getAllConstituencies(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Constituency>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Constituency>>(`${this.API_URL}/constituencies`, { params });
  }

  searchConstituencies(query: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Constituency>> {
    const params = new HttpParams()
      .set('q', query)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Constituency>>(`${this.API_URL}/constituencies/search`, { params });
  }

  getConstituencyByUid(uid: string): Observable<ApiResponse<Constituency>> {
    return this.http.get<ApiResponse<Constituency>>(`${this.API_URL}/constituencies/uid/${uid}`);
  }

  createConstituency(request: CreateConstituencyRequest): Observable<ApiResponse<Constituency>> {
    return this.http.post<ApiResponse<Constituency>>(`${this.API_URL}/constituencies`, request);
  }

  updateConstituency(uid: string, request: UpdateConstituencyRequest): Observable<ApiResponse<Constituency>> {
    return this.http.put<ApiResponse<Constituency>>(`${this.API_URL}/constituencies/uid/${uid}`, request);
  }

  deleteConstituency(uid: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/constituencies/uid/${uid}`);
  }

  getConstituencyStats(): Observable<ApiResponse<ConstituencyStats>> {
    return this.http.get<ApiResponse<ConstituencyStats>>(`${this.API_URL}/constituencies/stats`);
  }

  getConstituenciesByRegionUid(regionUid: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Constituency>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Constituency>>(`${this.API_URL}/constituencies/region/uid/${regionUid}`, { params });
  }

  getConstituenciesByDistrictUid(districtUid: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Constituency>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Constituency>>(`${this.API_URL}/constituencies/district/uid/${districtUid}`, { params });
  }

  getActiveConstituencies(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Constituency>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Constituency>>(`${this.API_URL}/constituencies/active`, { params });
  }

  getConstituenciesByStatus(isActive: boolean, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Constituency>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Constituency>>(`${this.API_URL}/constituencies/status/${isActive}`, { params });
  }

  toggleConstituencyStatus(uid: string): Observable<ApiResponse<Constituency>> {
    return this.http.patch<ApiResponse<Constituency>>(`${this.API_URL}/constituencies/uid/${uid}/toggle-status`, {});
  }
}
