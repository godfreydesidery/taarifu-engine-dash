import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  Hamlet, 
  CreateHamletRequest, 
  UpdateHamletRequest, 
  HamletStats 
} from '../models/hamlet.model';
import { ApiResponse, PageResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class HamletService {
  private readonly API_URL = 'http://localhost:8080/api/admin/v1';

  constructor(private http: HttpClient) {}

  getAllHamlets(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Hamlet>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Hamlet>>(`${this.API_URL}/hamlets`, { params });
  }

  searchHamlets(query: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Hamlet>> {
    const params = new HttpParams()
      .set('q', query)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Hamlet>>(`${this.API_URL}/hamlets/search`, { params });
  }

  getHamletByUid(uid: string): Observable<ApiResponse<Hamlet>> {
    return this.http.get<ApiResponse<Hamlet>>(`${this.API_URL}/hamlets/uid/${uid}`);
  }

  createHamlet(request: CreateHamletRequest): Observable<ApiResponse<Hamlet>> {
    return this.http.post<ApiResponse<Hamlet>>(`${this.API_URL}/hamlets`, request);
  }

  updateHamlet(uid: string, request: UpdateHamletRequest): Observable<ApiResponse<Hamlet>> {
    return this.http.put<ApiResponse<Hamlet>>(`${this.API_URL}/hamlets/uid/${uid}`, request);
  }

  deleteHamlet(uid: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/hamlets/uid/${uid}`);
  }

  getHamletStats(): Observable<ApiResponse<HamletStats>> {
    return this.http.get<ApiResponse<HamletStats>>(`${this.API_URL}/hamlets/stats`);
  }

  getHamletsByVillageUid(villageUid: string, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Hamlet>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Hamlet>>(`${this.API_URL}/hamlets/village/uid/${villageUid}`, { params });
  }

  getActiveHamlets(page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Hamlet>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Hamlet>>(`${this.API_URL}/hamlets/active`, { params });
  }

  getHamletsByStatus(isActive: boolean, page: number = 0, size: number = 10, sortBy: string = 'name', sortDir: string = 'asc'): Observable<PageResponse<Hamlet>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Hamlet>>(`${this.API_URL}/hamlets/status/${isActive}`, { params });
  }

  toggleHamletStatus(uid: string): Observable<ApiResponse<Hamlet>> {
    return this.http.patch<ApiResponse<Hamlet>>(`${this.API_URL}/hamlets/uid/${uid}/toggle-status`, {});
  }
}
