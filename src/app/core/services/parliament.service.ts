import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  Parliament, 
  CreateParliamentRequest, 
  UpdateParliamentRequest, 
  ParliamentStats 
} from '../models/parliament.model';
import { ApiResponse, PageResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class ParliamentService {
  private readonly API_URL = 'http://localhost:8080/api/admin/v1';

  constructor(private http: HttpClient) {}

  getAllParliaments(page: number = 0, size: number = 20, sortBy: string = 'startDate', sortDir: string = 'desc'): Observable<PageResponse<Parliament>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Parliament>>(`${this.API_URL}/parliaments`, { params });
  }

  getParliamentById(id: number): Observable<ApiResponse<Parliament>> {
    return this.http.get<ApiResponse<Parliament>>(`${this.API_URL}/parliaments/${id}`);
  }

  getParliamentByUid(uid: string): Observable<ApiResponse<Parliament>> {
    return this.http.get<ApiResponse<Parliament>>(`${this.API_URL}/parliaments/uid/${uid}`);
  }

  getParliamentByCode(code: string): Observable<ApiResponse<Parliament>> {
    return this.http.get<ApiResponse<Parliament>>(`${this.API_URL}/parliaments/code/${code}`);
  }

  getCurrentParliament(): Observable<ApiResponse<Parliament>> {
    return this.http.get<ApiResponse<Parliament>>(`${this.API_URL}/parliaments/current`);
  }

  getActiveParliaments(page: number = 0, size: number = 20, sortBy: string = 'startDate', sortDir: string = 'desc'): Observable<PageResponse<Parliament>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Parliament>>(`${this.API_URL}/parliaments/active`, { params });
  }

  searchParliaments(searchTerm: string, page: number = 0, size: number = 20, sortBy: string = 'startDate', sortDir: string = 'desc'): Observable<PageResponse<Parliament>> {
    const params = new HttpParams()
      .set('searchTerm', searchTerm)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    return this.http.get<PageResponse<Parliament>>(`${this.API_URL}/parliaments/search`, { params });
  }

  createParliament(request: CreateParliamentRequest): Observable<ApiResponse<Parliament>> {
    return this.http.post<ApiResponse<Parliament>>(`${this.API_URL}/parliaments`, request);
  }

  updateParliament(id: number, request: UpdateParliamentRequest): Observable<ApiResponse<Parliament>> {
    return this.http.put<ApiResponse<Parliament>>(`${this.API_URL}/parliaments/${id}`, request);
  }

  updateParliamentByUid(uid: string, request: UpdateParliamentRequest): Observable<ApiResponse<Parliament>> {
    return this.http.put<ApiResponse<Parliament>>(`${this.API_URL}/parliaments/uid/${uid}`, request);
  }

  setCurrentParliament(id: number): Observable<ApiResponse<Parliament>> {
    return this.http.put<ApiResponse<Parliament>>(`${this.API_URL}/parliaments/${id}/set-current`, {});
  }

  setCurrentParliamentByUid(uid: string): Observable<ApiResponse<Parliament>> {
    return this.http.put<ApiResponse<Parliament>>(`${this.API_URL}/parliaments/uid/${uid}/set-current`, {});
  }

  deleteParliament(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/parliaments/${id}`);
  }

  deleteParliamentByUid(uid: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/parliaments/uid/${uid}`);
  }

  getParliamentStats(): Observable<ApiResponse<ParliamentStats>> {
    return this.http.get<ApiResponse<ParliamentStats>>(`${this.API_URL}/parliaments/stats`);
  }
}
